#!/usr/bin/env node
// Yerel kontrol: MakeCode API'leri taklit edilir; gerçek kart ve zamanlama testi değildir.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const stripComments = source => source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
const sorted = values => [...values].sort();
const call = (name, argument = '') => `${name}(${argument})`;
const icon = name => call('basic.showIcon', `IconNames.${name}`);
const pause = ms => call('basic.pause', ms);
const clear = call('basic.clearScreen');
const legalIcons = ['Heart', 'SmallHeart', 'Happy', 'Surprised', 'Asleep', 'Sad', 'Yes', 'No'];
let assertions = 0;
function equal(actual, expected, label) {
    assert.deepEqual(actual, expected, label);
    assertions++;
}

// Restricted grammar: one A event or forever, constant-count loops, if/else and
// the specified APIs. It cannot accept extra state variables or hidden helpers.
function parse(source, label) {
    const tokens = stripComments(source).match(/[A-Za-z_$][\w$]*|\d+|\+\+|[^\s]/g) || [];
    const inventory = [];
    let position = 0;
    function take(expected) {
        equal(tokens[position], expected, `${label}: token ${position}`);
        position++;
    }
    function identifier() {
        const result = tokens[position++];
        equal(/^[A-Za-z_$][\w$]*$/.test(result || ''), true, `${label}: identifier`);
        return result;
    }
    function number() {
        const result = tokens[position++];
        equal(/^\d+$/.test(result || ''), true, `${label}: integer literal`);
        return Number(result);
    }
    function block(inFor = false) {
        take('{');
        while (tokens[position] !== '}') {
            assert(position < tokens.length, `${label}: unterminated block`);
            if (tokens[position] === ';') { position++; continue; }
            if (tokens[position] === 'for') {
                equal(inFor, false, `${label}: no for nested inside another for`);
                take('for'); take('('); take('let');
                const index = identifier();
                take('='); take('0'); take(';'); take(index); take('<');
                const count = number();
                equal(count > 0 && count <= 4, true, `${label}: bounded constant repeat count`);
                take(';'); take(index); take('++'); take(')');
                inventory.push(`for:${count}`);
                block(true);
            } else if (tokens[position] === 'if') {
                take('if'); take('('); take('input'); take('.');
                const method = identifier();
                take('(');
                if (method === 'buttonIsPressed') {
                    take('Button'); take('.'); take('B'); take(')');
                    inventory.push('if:B');
                } else {
                    equal(method, 'lightLevel', `${label}: known input condition`);
                    take(')'); take('<');
                    const threshold = number();
                    equal(threshold, 80, `${label}: shared light threshold`);
                    inventory.push('if:light<80');
                }
                take(')'); block(inFor); take('else'); block(inFor);
            } else {
                take('basic'); take('.');
                const method = identifier();
                take('(');
                let argument = '';
                if (method === 'showIcon') {
                    take('IconNames'); take('.');
                    const name = identifier();
                    equal(legalIcons.includes(name), true, `${label}: known icon`);
                    argument = `IconNames.${name}`;
                } else if (method === 'pause') {
                    argument = number();
                } else {
                    equal(method, 'clearScreen', `${label}: known basic API`);
                }
                take(')');
                inventory.push(call(`basic.${method}`, argument));
            }
        }
        take('}');
    }
    let start;
    if (tokens[position] === 'input') {
        take('input'); take('.'); take('onButtonPressed'); take('(');
        take('Button'); take('.'); take('A'); take(',');
        start = 'event:A';
    } else {
        take('basic'); take('.'); take('forever'); take('(');
        start = 'forever';
    }
    take('function'); take('('); take(')');
    inventory.push(start);
    block();
    take(')');
    if (tokens[position] === ';') position++;
    equal(position, tokens.length, `${label}: exactly one top-level handler`);
    return { start, inventory: sorted(inventory) };
}

function strictEnum(values, label) {
    return new Proxy(Object.freeze(values), {
        get(target, property) {
            assert(Object.hasOwn(target, property), `${label}: unknown member ${String(property)}`);
            return target[property];
        },
    });
}

function simulator(source, label, requiredStart) {
    let registered;
    let active = false;
    let time = 0;
    let output = [];
    let queries = [];
    let buttonIndex = 0;
    let lightIndex = 0;
    let buttonSource;
    let lightSource;
    function register(kind, callback) {
        equal(kind, requiredStart, `${label}: expected start mechanism`);
        equal(registered, undefined, `${label}: one handler only`);
        registered = callback;
    }
    function emit(type, value, duration) {
        assert(active, `${label}: output outside handler`);
        output.push(value === undefined ? { at: time, type } : { at: time, type, value });
        time += duration;
    }
    const context = vm.createContext({
        Button: strictEnum({ A: 'A', B: 'B' }, 'Button'),
        IconNames: strictEnum(Object.fromEntries(legalIcons.map(name => [name, name])), 'IconNames'),
        input: {
            onButtonPressed(button, callback) {
                equal(button, 'A', `${label}: A starts the animation`);
                register('event:A', callback);
            },
            buttonIsPressed(button) {
                assert(active, `${label}: query outside handler`);
                equal(button, 'B', `${label}: only B is tested`);
                const value = Boolean(buttonSource(time, buttonIndex++));
                queries.push({ at: time, type: 'button', value });
                return value;
            },
            lightLevel() {
                assert(active, `${label}: light query outside handler`);
                const value = Number(lightSource(time, lightIndex++));
                assert(Number.isInteger(value) && value >= 0 && value <= 255, `${label}: light range`);
                queries.push({ at: time, type: 'light', value });
                return value;
            },
        },
        basic: {
            forever(callback) { register('forever', callback); },
            showIcon(value) { emit('icon', value, 600); },
            clearScreen() { emit('clear', undefined, 0); },
            pause(value) { emit('pause', value, value); },
        },
    });
    vm.runInContext(source, context, { filename: label, timeout: 1000 });
    equal(typeof registered, 'function', `${label}: handler registered`);
    equal(output, [], `${label}: no output before the handler starts`);
    context.__run = registered;
    return {
        run(button = false, light = 160) {
            time = 0; output = []; queries = []; buttonIndex = 0; lightIndex = 0;
            buttonSource = typeof button === 'function' ? button : () => button;
            lightSource = typeof light === 'function' ? light : () => light;
            active = true;
            try {
                vm.runInContext('__run()', context, { filename: `${label}:run`, timeout: 1000 });
            } finally {
                active = false;
            }
            return { output, queries, elapsed: time };
        },
    };
}

// Independent acceptance traces, derived from the child-facing requirements.
const I = name => ['icon', name];
const P = ms => ['pause', ms];
const C = ['clear'];
const B = value => ['button', value];
const L = value => ['light', value];
const repeat = (count, items) => Array.from({ length: count }, () => items).flat();
const pulse = (name, wait) => [I(name), C, P(wait)];
const prep = [I('Surprised'), P(1000)];
const decisions = (samples, yes, no) => samples.flatMap(value => [B(value), ...pulse(value ? yes : no, 1000)]);
function expected(number, samples = [], light = 160) {
    let steps;
    switch (number) {
        case 1: steps = [...repeat(4, pulse('Happy', 400)), I('Yes')]; break;
        case 2: steps = [L(light), I(light < 80 ? 'Surprised' : 'Asleep')]; break;
        case 3: steps = [I('Surprised'), ...repeat(3, [I('SmallHeart'), I('Heart')]), I('Asleep')]; break;
        case 4: steps = [...repeat(2, pulse('Yes', 400)), ...repeat(3, pulse('No', 800)), I('Heart')]; break;
        case 5: steps = [...prep, ...decisions(samples, 'Happy', 'Sad'), I('Yes')]; break;
        case 6:
            steps = [...prep, B(samples[0]), ...repeat(samples[0] ? 3 : 2,
                pulse(samples[0] ? 'Heart' : 'No', 500)), I('Yes')]; break;
        case 7:
            steps = [L(light), ...repeat(light < 80 ? 3 : 2, pulse(light < 80 ? 'Heart' : 'SmallHeart', 400)),
                I('Yes'), P(1000)]; break;
        case 8:
            steps = [...prep, ...decisions(samples.slice(0, 2), 'Heart', 'No'), I('Asleep'), P(1000),
                ...decisions(samples.slice(2), 'Happy', 'Sad'), I('Yes')]; break;
        case 9:
            steps = [L(light), ...(light < 80 ? decisions(samples, 'Happy', 'Sad') : [I('Asleep'), P(1000)])]; break;
        case 10:
            steps = [L(light), ...(light < 80 ? decisions(samples, 'Heart', 'No') : decisions(samples, 'Happy', 'Sad')),
                I('Yes'), P(1000)]; break;
        default: throw new Error(`Unknown task ${number}`);
    }
    let time = 0;
    const output = [];
    const queries = [];
    for (const [type, value] of steps) {
        if (type === 'button' || type === 'light') queries.push({ at: time, type, value });
        else {
            output.push(value === undefined ? { at: time, type } : { at: time, type, value });
            time += type === 'icon' ? 600 : type === 'pause' ? value : 0;
        }
    }
    return { output, queries, elapsed: time };
}

const requirements = [
    ['event:A', 'for:4', icon('Happy'), clear, pause(400), icon('Yes')],
    ['forever', 'if:light<80', icon('Surprised'), icon('Asleep')],
    ['event:A', icon('Surprised'), 'for:3', icon('SmallHeart'), icon('Heart'), icon('Asleep')],
    ['event:A', 'for:2', icon('Yes'), clear, pause(400), 'for:3', icon('No'), clear, pause(800), icon('Heart')],
    ['event:A', icon('Surprised'), pause(1000), 'for:4', 'if:B', icon('Happy'), icon('Sad'), clear, pause(1000), icon('Yes')],
    ['event:A', icon('Surprised'), pause(1000), 'if:B', 'for:3', icon('Heart'), clear, pause(500),
        'for:2', icon('No'), clear, pause(500), icon('Yes')],
    ['forever', 'if:light<80', 'for:3', icon('Heart'), clear, pause(400), 'for:2', icon('SmallHeart'), clear, pause(400),
        icon('Yes'), pause(1000)],
    ['event:A', icon('Surprised'), pause(1000), 'for:2', 'if:B', icon('Heart'), icon('No'), clear, pause(1000),
        icon('Asleep'), pause(1000), 'for:3', 'if:B', icon('Happy'), icon('Sad'), clear, pause(1000), icon('Yes')],
    ['forever', 'if:light<80', 'for:3', 'if:B', icon('Happy'), icon('Sad'), clear, pause(1000), icon('Asleep'), pause(1000)],
    ['forever', 'if:light<80', 'for:3', 'if:B', icon('Heart'), icon('No'), clear, pause(1000),
        'for:2', 'if:B', icon('Happy'), icon('Sad'), clear, pause(1000), icon('Yes'), pause(1000)],
];

function sampleCount(number, light) {
    return number === 5 ? 4 : number === 6 ? 1 : number === 8 ? 5 :
        number === 9 ? (light < 80 ? 3 : 0) : number === 10 ? (light < 80 ? 3 : 2) : 0;
}
function checkComment(source, label, commentOnly) {
    const match = source.match(/^\/\*([\s\S]*?)\*\//);
    equal(Boolean(match), true, `${label}: starts with task comment`);
    const lines = match[1].split(/\r?\n/).filter(line => line.trim());
    equal(/^\r?\n/.test(match[1]) && lines.length > 1 && lines.every(line => /^\s*\*/.test(line)), true,
        `${label}: standalone starred multiline comment`);
    for (const marker of ['HEDEF', 'KURAL', 'DENE']) {
        equal(match[1].includes(marker), true, `${label}: ${marker} in task comment`);
    }
    if (commentOnly) equal(stripComments(source).trim(), '', `${label}: no executable starter material`);
    else equal(/^\r?\n(?:[ \t]*\r?\n)+(?:input|basic)\./.test(source.slice(match[0].length)), true,
        `${label}: blank line between the standalone comment and code`);
}

const report = [];
let solutionScenarios = 0;
let unfinishedScenarios = 0;
const fileNames = [...fs.readdirSync(path.join(__dirname, 'etkinlikler')), ...fs.readdirSync(path.join(__dirname, 'cozumler'))];
for (let number = 1; number <= 10; number++) {
    const matching = fileNames.filter(name => name.startsWith(`${String(number).padStart(2, '0')}-`));
    const studentNames = matching.filter(name => name.endsWith('-cocuklar.js'));
    const solutionNames = matching.filter(name => name.endsWith('-cozum.js'));
    equal(studentNames.length, 1, `Task ${number}: one child file`);
    equal(solutionNames.length, 1, `Task ${number}: one solution file`);
    const [studentName] = studentNames;
    const [solutionName] = solutionNames;
    const student = fs.readFileSync(path.join(__dirname, 'etkinlikler', studentName), 'utf8');
    const solution = fs.readFileSync(path.join(__dirname, 'cozumler', solutionName), 'utf8');
    checkComment(student, studentName, number === 10);
    const solutionAst = parse(solution, solutionName);
    equal(solutionAst.inventory, sorted(requirements[number - 1]), `${solutionName}: exact permitted inventory`);
    if (number < 10) {
        const studentAst = parse(student, studentName);
        equal(studentAst.inventory, solutionAst.inventory, `${studentName}: exactly the same components as solution`);
        const unfinished = simulator(student, studentName, studentAst.start);
        const cases = [
            { button: false, light: 20 }, { button: true, light: 20 },
            { button: false, light: 160 }, { button: true, light: 160 },
        ];
        const wrongCases = cases.filter(({ button, light }) => {
            const result = unfinished.run(button, light);
            unfinishedScenarios++;
            return JSON.stringify(result) !== JSON.stringify(expected(number, Array(sampleCount(number, light)).fill(button), light));
        });
        equal(wrongCases.length > 0, true, `${studentName}: deliberately unfinished, no complete answer`);
    }
    const completed = simulator(solution, solutionName, solutionAst.start);
    const before = solutionScenarios;
    function check(label, button, light, samples, expectedLight = light) {
        equal(completed.run(button, light), expected(number, samples, expectedLight), `${solutionName}: ${label}`);
        solutionScenarios++;
    }
    const lights = [2, 7, 9, 10].includes(number) ? [0, 20, 79, 80, 160, 255] : [160];
    for (const light of lights) {
        const count = sampleCount(number, light);
        for (let pattern = 0; pattern < 2 ** count; pattern++) {
            const samples = Array.from({ length: count }, (_, index) => Boolean(pattern & (1 << index)));
            check(`light ${light}, B ${samples.map(Number).join('') || 'unused'}`, (time, index) => {
                assert(index < samples.length, `${solutionName}: too many B reads`);
                return samples[index];
            }, light, samples);
        }
    }
    const replayLight = 20;
    const replaySamples = Array(sampleCount(number, replayLight)).fill(false);
    check('repeat handler, first invocation', false, replayLight, replaySamples);
    check('repeat handler, second invocation without persistent state', false, replayLight, replaySamples);
    if (number === 6) {
        check('B released after route selection does not change route', time => time <= 1600, 160, [true]);
        check('B pressed after route selection does not change route', time => time > 1600, 160, [false]);
    }
    if (number === 5) {
        check('B changes between four round starts', time => time >= 2500 && time < 5000,
            160, [false, true, true, false]);
    }
    if (number === 8) {
        check('B changes during rounds and intermission', time => time >= 2500 && time < 6500,
            160, [false, true, true, false, false]);
    }
    if ([2, 7, 9, 10].includes(number)) {
        for (const startLight of [79, 80]) {
            const switched = startLight === 79 ? 80 : 79;
            const samples = Array(sampleCount(number, startLight)).fill(true);
            check(`light changes after decision ${startLight} to ${switched}: current packet retained`, true,
                time => time === 0 ? startLight : switched, samples, startLight);
            check(`next forever cycle sees light ${switched}`, true, switched,
                Array(sampleCount(number, switched)).fill(true));
        }
        // Model a light sensor whose first returned value is 0, then 160.
        // This validates packet selection only; actual hardware startup is not tested.
        check('initial modeled light value 0', false, 0, Array(sampleCount(number, 0)).fill(false));
        check('subsequent modeled light value 160', false, 160, Array(sampleCount(number, 160)).fill(false));
    }
    report.push({ task: number, student: studentName, solution: solutionName,
        solutionScenarios: solutionScenarios - before, status: 'passed' });
}

const result = {
    status: 'passed', solutionScenarios, unfinishedScenarios, assertions,
    method: 'Node VM with mocked micro:bit APIs; independently specified traces and restrictive source parser',
    timingModel: 'showIcon advances 600 ms; clearScreen advances 0 ms; pause uses its literal duration. Each forever run models one cycle.',
    limitations: 'Not MakeCode compilation, visual comment verification, browser simulation, simultaneous event scheduling, real sensor startup or physical-device timing validation.',
    checks: [
        'Levels 1-9 contain exactly the same statements, literals, repeat counts and conditions as their solutions',
        'All child sources begin with standalone starred multiline task comments; level 10 has no executable code',
        'Only fixed-count for indices; no state variables, helper functions or for loops inside another for loop',
        'Exactly one A event or forever handler per executable file',
        'Exact icon, clear and pause order; no early final icon or extra round',
        'Every B input pattern: level 5 has 16, level 8 has 32, light-dependent rounds enumerate all applicable patterns',
        'Light boundaries 0, 20, 79, 80, 160, 255; selected packet stays fixed until next forever cycle',
        'Level 6 reads B once; later B changes do not alter the selected route',
        'Level 9 ignores B during daylight; level 10 samples B on every round of the selected branch',
        'Repeated handler invocations do not accumulate state; unfinished examples remain intentionally wrong',
    ],
    tasks: report,
};
console.log(JSON.stringify({ status: result.status, solutionScenarios, unfinishedScenarios, tasks: report.length }, null, 2));
