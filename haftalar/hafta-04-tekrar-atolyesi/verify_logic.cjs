#!/usr/bin/env node
// Yerel mantık kontrolü: MakeCode API'leri Node VM içinde taklit edilir.
// Bu kontrol MakeCode derlemesi, gerçek donanım veya gerçek zamanlama kanıtı değildir.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

let assertions = 0;
let scenarios = 0;
function equal(actual, expected, message) {
    assert.deepEqual(actual, expected, message);
    assertions++;
}
const stripComments = text => text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
const sorted = items => [...items].sort();
const call = (name, argument = '') => `${name}(${argument})`;
const icon = name => call('basic.showIcon', `IconNames.${name}`);
const pause = ms => call('basic.pause', ms);
const clear = call('basic.clearScreen');

// A deliberately small parser accepts only the lesson's permitted grammar.
// It rejects state variables, extra events, named functions and unknown APIs.
function parse(text, label) {
    const code = stripComments(text);
    const tokens = code.match(/[A-Za-z_$][\w$]*|\d+|\+\+|[^\s]/g) || [];
    let position = 0;
    const inventory = [];
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
        equal(/^\d+$/.test(result || ''), true, `${label}: nonnegative integer literal`);
        return Number(result);
    }
    function block(inLoop = false) {
        take('{');
        const statements = [];
        while (tokens[position] !== '}') {
            assert(position < tokens.length, `${label}: unterminated block`);
            if (tokens[position] === ';') { position++; continue; }
            if (tokens[position] === 'for') {
                equal(inLoop, false, `${label}: no nested loops`);
                take('for'); take('('); take('let');
                const index = identifier();
                take('='); take('0'); take(';'); take(index); take('<');
                const count = number();
                take(';'); take(index); take('++'); take(')');
                inventory.push(`for:${count}`);
                statements.push({ type: 'for', count, body: block(true) });
            } else if (tokens[position] === 'if') {
                take('if'); take('('); take('input'); take('.'); take('buttonIsPressed');
                take('('); take('Button'); take('.'); take('B'); take(')'); take(')');
                inventory.push('if:B');
                const yes = block(inLoop);
                take('else');
                statements.push({ type: 'if', yes, no: block(inLoop) });
            } else {
                take('basic'); take('.');
                const method = identifier();
                take('(');
                let argument = '';
                if (method === 'showIcon') {
                    take('IconNames'); take('.');
                    argument = `IconNames.${identifier()}`;
                } else if (method === 'pause') {
                    argument = number();
                } else {
                    equal(method, 'clearScreen', `${label}: only permitted basic APIs`);
                }
                take(')');
                inventory.push(call(`basic.${method}`, argument));
                statements.push({ type: 'call', method, argument });
            }
        }
        take('}');
        return statements;
    }
    take('input'); take('.'); take('onButtonPressed'); take('(');
    take('Button'); take('.'); take('A'); take(',');
    take('function'); take('('); take(')');
    inventory.push('event:A');
    const body = block();
    take(')');
    if (tokens[position] === ';') position++;
    equal(position, tokens.length, `${label}: no code outside A handler`);
    return { body, inventory: sorted(inventory) };
}

function strictEnum(values, label) {
    return new Proxy(Object.freeze(values), {
        get(target, property) {
            assert(Object.hasOwn(target, property), `${label}: unknown member ${String(property)}`);
            return target[property];
        },
    });
}

function simulator(text, label) {
    let registered;
    let active = false;
    let time = 0;
    let output = [];
    let queries = [];
    let getButton;
    function emit(type, value, duration) {
        assert(active, `${label}: output outside A event`);
        output.push(value === undefined ? { at: time, type } : { at: time, type, value });
        time += duration;
    }
    const context = vm.createContext({
        Button: strictEnum({ A: 'A', B: 'B' }, 'Button'),
        IconNames: strictEnum(Object.fromEntries(
            ['Heart', 'SmallHeart', 'Happy', 'Surprised', 'Asleep', 'Sad', 'Yes', 'No']
                .map(name => [name, name])), 'IconNames'),
        input: {
            onButtonPressed(button, callback) {
                equal(button, 'A', `${label}: starts with A`);
                equal(registered, undefined, `${label}: one event only`);
                registered = callback;
            },
            buttonIsPressed(button) {
                assert(active, `${label}: button query outside A event`);
                equal(button, 'B', `${label}: only B is tested`);
                const pressed = Boolean(getButton(time, queries.length));
                queries.push({ at: time, button, pressed });
                return pressed;
            },
        },
        basic: {
            showIcon(value) { emit('icon', value, 600); },
            clearScreen() { emit('clear', undefined, 0); },
            pause(value) { emit('pause', value, value); },
        },
    });
    vm.runInContext(text, context, { filename: label, timeout: 1000 });
    equal(typeof registered, 'function', `${label}: event handler registered`);
    equal(output, [], `${label}: no output before A`);
    context.__run = registered;
    return {
        trigger(buttonSource) {
            time = 0; output = []; queries = []; active = true;
            getButton = typeof buttonSource === 'function' ? buttonSource : () => buttonSource;
            try {
                vm.runInContext('__run()', context, { filename: `${label}:A`, timeout: 1000 });
            } finally {
                active = false;
            }
            scenarios++;
            return { output, queries, elapsed: time };
        },
    };
}

// Requirement traces below are written independently of the submitted code.
const I = name => ['icon', name];
const P = ms => ['pause', ms];
const C = ['clear'];
const Q = pressed => ['query', pressed];
const repeat = (count, items) => Array.from({ length: count }, () => items).flat();
const pulse = (name, wait) => [I(name), C, P(wait)];
function expected(number, samples = []) {
    let steps;
    switch (number) {
        case 1:
            steps = [...repeat(3, pulse('Heart', 400)), I('Yes')];
            break;
        case 2:
            steps = [I('Yes'), ...repeat(3, [I('Happy'), I('Surprised')]), I('Asleep')];
            break;
        case 3:
            steps = [...repeat(2, pulse('Heart', 300)), ...repeat(3, pulse('SmallHeart', 700)), I('Yes')];
            break;
        case 4:
            steps = [I('Surprised'), P(1000), ...samples.flatMap(pressed =>
                [Q(pressed), ...pulse(pressed ? 'Heart' : 'No', 1000)]), I('Yes')];
            break;
        case 5:
            steps = [I('Surprised'), P(1000), Q(samples[0]),
                ...repeat(samples[0] ? 3 : 2, pulse(samples[0] ? 'Heart' : 'Sad', 700)), I('Yes')];
            break;
        case 6:
            steps = [I('Surprised'), P(1000), ...samples.slice(0, 3).flatMap(pressed =>
                [Q(pressed), ...pulse(pressed ? 'Heart' : 'No', 1000)]), I('Asleep'), P(1000),
                ...samples.slice(3).flatMap(pressed =>
                    [Q(pressed), ...pulse(pressed ? 'Happy' : 'Sad', 1000)]), I('Yes')];
            break;
        default: throw new Error(`Unknown exercise ${number}`);
    }
    let time = 0;
    const output = [];
    const queries = [];
    for (const [type, value] of steps) {
        if (type === 'query') queries.push({ at: time, button: 'B', pressed: value });
        else {
            output.push(value === undefined ? { at: time, type } : { at: time, type, value });
            time += type === 'icon' ? 600 : type === 'pause' ? value : 0;
        }
    }
    return { output, queries, elapsed: time };
}

const requirements = [
    ['for:3', icon('Heart'), clear, pause(400), icon('Yes')],
    ['for:3', icon('Yes'), icon('Happy'), icon('Surprised'), icon('Asleep')],
    ['for:2', 'for:3', icon('Heart'), clear, pause(300), icon('SmallHeart'), clear, pause(700), icon('Yes')],
    ['for:3', 'if:B', icon('Surprised'), pause(1000), icon('Heart'), icon('No'), clear, pause(1000), icon('Yes')],
    ['for:3', 'for:2', 'if:B', icon('Surprised'), pause(1000), icon('Heart'), clear, pause(700),
        icon('Sad'), clear, pause(700), icon('Yes')],
    ['for:3', 'for:2', 'if:B', 'if:B', icon('Surprised'), pause(1000), icon('Heart'), icon('No'),
        clear, pause(1000), icon('Asleep'), pause(1000), icon('Happy'), icon('Sad'), clear, pause(1000), icon('Yes')],
];

const report = [];
for (let number = 1; number <= 6; number++) {
    const files = [...fs.readdirSync(path.join(__dirname, 'etkinlikler')), ...fs.readdirSync(path.join(__dirname, 'cozumler'))].filter(name => name.startsWith(`${String(number).padStart(2, '0')}-`));
    const studentName = files.find(name => name.endsWith('-cocuklar.js'));
    const solutionName = files.find(name => name.endsWith('-cozum.js'));
    assert(studentName && solutionName, `Exercise ${number}: missing source pair`);
    const student = fs.readFileSync(path.join(__dirname, 'etkinlikler', studentName), 'utf8');
    const solution = fs.readFileSync(path.join(__dirname, 'cozumler', solutionName), 'utf8');
    const taskComment = student.match(/^\/\*([\s\S]*?)\*\//);
    equal(Boolean(taskComment), true, `${studentName}: starts with a multiline task comment`);
    equal(/^\r?\n/.test(taskComment[1]), true, `${studentName}: comment opens on its own line`);
    const commentLines = taskComment[1].split(/\r?\n/).filter(line => line.trim());
    equal(commentLines.length > 1 && commentLines.every(line => /^\s*\*/.test(line)), true,
        `${studentName}: multiline task comment retains its starred line format`);
    if (number < 6) {
        equal(/^\r?\n(?:[ \t]*\r?\n)+input\.onButtonPressed\b/.test(student.slice(taskComment[0].length)), true,
            `${studentName}: blank line separates the task comment from the A event`);
    }
    for (const marker of ['GÖREV', 'HEDEF', 'KURAL', 'DENE']) {
        equal(taskComment[1].includes(marker), true, `${studentName}: initial task comment includes ${marker}`);
    }
    const solutionAst = parse(solution, solutionName);
    equal(solutionAst.inventory, sorted(['event:A', ...requirements[number - 1]]),
        `${solutionName}: exact expected blocks and constants`);
    if (number === 6) {
        equal(stripComments(student).trim(), '', `${studentName}: explanation only, no prepared blocks`);
    } else {
        const studentAst = parse(student, studentName);
        equal(studentAst.inventory, solutionAst.inventory, `${studentName}: exact same block inventory as solution`);
        const unfinished = simulator(student, studentName);
        const falseResult = unfinished.trigger(false);
        const trueResult = unfinished.trigger(true);
        const sampleCount = number === 4 ? 3 : number === 5 ? 1 : 0;
        equal(JSON.stringify(falseResult) !== JSON.stringify(expected(number, Array(sampleCount).fill(false))) ||
            JSON.stringify(trueResult) !== JSON.stringify(expected(number, Array(sampleCount).fill(true))), true,
        `${studentName}: intentionally unfinished behavior`);
    }
    const completed = simulator(solution, solutionName);
    const scenarioStart = scenarios;
    const sampleCount = number === 4 ? 3 : number === 5 ? 1 : number === 6 ? 5 : 0;
    for (let pattern = 0; pattern < 2 ** sampleCount; pattern++) {
        const samples = Array.from({ length: sampleCount }, (_, index) => Boolean(pattern & (1 << index)));
        const result = completed.trigger((time, index) => {
            assert(index < samples.length, `${solutionName}: too many B queries`);
            return samples[index];
        });
        equal(result, expected(number, samples), `${solutionName}: B pattern ${samples.map(Number).join('') || 'none'}`);
    }
    // A second trigger reuses the same VM: no result/state should accumulate.
    const falseSamples = Array(sampleCount).fill(false);
    equal(completed.trigger(false), expected(number, falseSamples), `${solutionName}: repeat A trigger 1`);
    equal(completed.trigger(false), expected(number, falseSamples), `${solutionName}: repeat A trigger 2`);
    if (number === 4) {
        const result = completed.trigger(time => time >= 2500 && time < 4000);
        equal(result, expected(number, [false, true, false]), `${solutionName}: button changes between loop checks`);
        equal(result.queries.map(query => query.at), [1600, 3200, 4800], `${solutionName}: one B check at each round start`);
    }
    if (number === 5) {
        equal(completed.trigger(time => time <= 1600), expected(number, [true]),
            `${solutionName}: releasing B after selection keeps three-heart route`);
        equal(completed.trigger(time => time > 1600), expected(number, [false]),
            `${solutionName}: pressing B after selection keeps two-sad route`);
    }
    if (number === 6) {
        const result = completed.trigger(time => (time >= 2500 && time < 4000) || time >= 7000);
        equal(result, expected(number, [false, true, false, true, true]),
            `${solutionName}: change during rounds and during intermission`);
        equal(result.queries.map(query => query.at), [1600, 3200, 4800, 8000, 9600],
            `${solutionName}: checks resume after the intermission`);
    }
    report.push({ task: number, student: studentName, solution: solutionName,
        solutionScenarios: scenarios - scenarioStart, status: 'passed' });
}

const result = {
    status: 'passed', assertions, scenarios,
    method: 'Node VM with mocked micro:bit APIs and a restrictive source parser',
    timingModel: 'showIcon advances 600 ms; clearScreen 0 ms; pause uses its literal duration',
    limitations: 'Not MakeCode compilation, browser simulation, event scheduling or physical-device timing validation.',
    checks: ['Exact component inventories in the first five unfinished/completed pairs',
        'All child files contain task comments; task six has no executable starter code',
        'All six child sources start with starred multiline task comments; tasks one to five keep a blank line before the A event',
        'Only fixed-count loop indices; no nested loops or other variables',
        'Exact output order and count; all 8 and 32 B patterns in tasks four and six',
        'B read once outside the loops in task five; later B changes do not reroute',
        'Independent A triggers replay the same result without accumulated state'],
    tasks: report,
};
console.log(JSON.stringify({ status: result.status, assertions, scenarios, tasks: report.length }, null, 2));
