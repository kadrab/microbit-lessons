#!/usr/bin/env node
// Decisions are checked in a Node VM with mocked MakeCode inputs and outputs.
// This does not validate MakeCode conversion, hardware, or display/audio timing.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

let assertions = 0;
function equal(actual, expected, label) {
    assert.deepEqual(actual, expected, label);
    assertions++;
}
function source(stem, kind) {
    return fs.readFileSync(path.join(__dirname, kind === 'cocuklar' ? 'etkinlikler' : 'cozumler', `${stem}-${kind}.js`), 'utf8');
}
function executable(text) {
    return text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
}
function tokens(text) {
    return executable(text).match(/[A-Za-z_$][\w$]*|\d+|&&|\|\||[^\s]/g) || [];
}
function apiInventory(text) {
    return [...executable(text).matchAll(/\b([A-Za-z]+\.[A-Za-z]+)\s*\(/g)]
        .map(match => match[1]).sort();
}
function strictEnum(values, label) {
    return new Proxy(Object.freeze(values), {
        get(target, property) {
            assert(Object.hasOwn(target, property), `${label}: unknown value ${String(property)}`);
            return target[property];
        },
    });
}
function simulate(text, filename) {
    let handler;
    let current;
    let log = [];
    const context = vm.createContext({
        IconNames: strictEnum({
            Happy: 'Happy', Asleep: 'Asleep', Yes: 'Yes', No: 'No',
            Sad: 'Sad', Surprised: 'Surprised',
        }, 'IconNames'),
        Button: strictEnum({ A: 'A', B: 'B' }, 'Button'),
        input: {
            lightLevel() {
                assert(current, `${filename}: light queried outside a forever tick`);
                log.push(['query', 'light']);
                return current.light;
            },
            buttonIsPressed(button) {
                assert(current, `${filename}: button queried outside a forever tick`);
                assert(['A', 'B'].includes(button));
                log.push(['query', button]);
                return current[button];
            },
        },
        basic: {
            forever(callback) {
                assert.equal(handler, undefined, `${filename}: more than one forever`);
                handler = callback;
            },
            showIcon(icon) { log.push(['icon', icon]); },
            pause(ms) { log.push(['pause', ms]); },
        },
        music: {
            playTone(frequency, duration) { log.push(['tone', frequency, duration]); },
        },
    });
    vm.runInContext(text, context, { filename, timeout: 1000 });
    equal(log, [], `${filename}: no work before forever`);
    return {
        hasHandler: typeof handler === 'function',
        tick(light, A, B) {
            assert.equal(typeof handler, 'function', `${filename}: missing forever handler`);
            current = { light, A, B };
            log = [];
            handler();
            return {
                trace: log,
                queries: log.filter(item => item[0] === 'query').map(item => item[1]),
                outputs: log.filter(item => item[0] !== 'query'),
            };
        },
    };
}

const exercises = [
    {
        stem: '01-gece-gunduz',
        inputs: ['input.lightLevel'],
        buttons: [],
        controls: 1,
        outputs: ['basic.showIcon', 'basic.showIcon'],
        wrongOutputs: [['icon', 'Happy'], ['icon', 'Asleep']],
        studentQueries: ['light'],
    },
    {
        stem: '02-iki-ayri-is',
        inputs: ['input.lightLevel', 'input.buttonIsPressed'],
        buttons: ['B'],
        controls: 2,
        outputs: ['basic.showIcon', 'basic.showIcon', 'basic.pause', 'music.playTone'],
        wrongOutputs: [['tone', 523, 200], ['icon', 'Happy'], ['pause', 200], ['icon', 'Asleep']],
        studentQueries: ['light', 'B'],
    },
    {
        stem: '03-iki-asamali-kapi',
        inputs: ['input.buttonIsPressed', 'input.buttonIsPressed'],
        buttons: ['A', 'B'],
        controls: 2,
        outputs: ['basic.showIcon', 'basic.showIcon', 'basic.showIcon'],
        wrongOutputs: [['icon', 'No'], ['icon', 'Asleep'], ['icon', 'Yes']],
        studentQueries: ['A', 'B'],
    },
    {
        stem: '04-dort-ruh-hali',
        inputs: ['input.lightLevel', 'input.buttonIsPressed', 'input.buttonIsPressed'],
        buttons: ['A', 'A'],
        controls: 3,
        outputs: ['basic.showIcon', 'basic.showIcon', 'basic.showIcon', 'basic.showIcon'],
        wrongOutputs: [['icon', 'Happy'], ['icon', 'Surprised'], ['icon', 'Asleep'], ['icon', 'Sad']],
        studentQueries: ['light', 'A', 'A'],
    },
    {
        stem: '05-gece-ussu',
        inputs: ['input.lightLevel', 'input.buttonIsPressed', 'input.buttonIsPressed', 'input.buttonIsPressed'],
        buttons: ['A', 'B', 'B'],
        controls: 4,
        outputs: ['basic.showIcon', 'basic.showIcon', 'basic.showIcon', 'basic.showIcon', 'basic.showIcon'],
        wrongOutputs: [['icon', 'Sad'], ['icon', 'Yes'], ['icon', 'Asleep'], ['icon', 'No'], ['icon', 'Happy']],
        studentQueries: ['B', 'light', 'A', 'B'],
    },
    {
        stem: '06-vardiyali-uzay-kapisi',
        inputs: ['input.lightLevel', 'input.buttonIsPressed', 'input.buttonIsPressed',
            'input.buttonIsPressed', 'input.buttonIsPressed'],
        buttons: ['A', 'A', 'B', 'B'],
        controls: 5,
        outputs: ['basic.showIcon', 'basic.showIcon', 'basic.showIcon',
            'basic.showIcon', 'basic.showIcon', 'basic.showIcon'],
    },
];

// Independently encoded requirement tables, not extracted from solution code.
// The exact boundary 80 belongs to the bright category in every light task.
const lightCategory = new Map([[0, 'dark'], [20, 'dark'], [79, 'dark'],
    [80, 'bright'], [160, 'bright'], [255, 'bright']]);
const buttonCases = [
    { A: false, B: false, key: '00' },
    { A: true, B: false, key: '10' },
    { A: false, B: true, key: '01' },
    { A: true, B: true, key: '11' },
];
const sleepTable = { dark: 'Asleep', bright: 'Happy' };
const gateTable = { '00': 'Asleep', '10': 'No', '01': 'Asleep', '11': 'Yes' };
const moodTable = {
    dark: { false: 'Asleep', true: 'Sad' },
    bright: { false: 'Happy', true: 'Surprised' },
};
const baseTable = {
    dark: { '00': 'No', '10': 'Happy', '01': 'Sad', '11': 'Yes' },
    bright: { '00': 'Asleep', '10': 'Asleep', '01': 'Asleep', '11': 'Asleep' },
};
const shiftGateTable = {
    dark: { '00': 'Asleep', '10': 'Asleep', '01': 'Sad', '11': 'Yes' },
    bright: { '00': 'No', '10': 'Happy', '01': 'No', '11': 'Yes' },
};
const shiftQueryTable = {
    dark: {
        '00': ['light', 'B'], '10': ['light', 'B'],
        '01': ['light', 'B', 'A'], '11': ['light', 'B', 'A'],
    },
    bright: {
        '00': ['light', 'A'], '10': ['light', 'A', 'B'],
        '01': ['light', 'A'], '11': ['light', 'A', 'B'],
    },
};

function expected(number, light, buttons) {
    const category = lightCategory.get(light);
    const { A, B, key } = buttons;
    switch (number) {
        case 1:
            return { outputs: [['icon', sleepTable[category]]], queries: ['light'] };
        case 2:
            return {
                outputs: [['icon', sleepTable[category]], B ? ['tone', 523, 200] : ['pause', 200]],
                queries: ['light', 'B'],
            };
        case 3:
            return { outputs: [['icon', gateTable[key]]], queries: A ? ['A', 'B'] : ['A'] };
        case 4:
            return { outputs: [['icon', moodTable[category][A]]], queries: ['light', 'A'] };
        case 5:
            return {
                outputs: [['icon', baseTable[category][key]]],
                queries: category === 'dark' ? ['light', 'A', 'B'] : ['light'],
            };
        case 6:
            return {
                outputs: [['icon', shiftGateTable[category][key]]],
                queries: shiftQueryTable[category][key],
            };
    }
    throw new Error(`Unknown exercise ${number}`);
}

for (const [index, exercise] of exercises.entries()) {
    const number = index + 1;
    const student = source(exercise.stem, 'cocuklar');
    const solution = source(exercise.stem, 'cozum');
    for (const [kind, text] of [['cocuklar', student], ['cozum', solution]]) {
        const code = executable(text);
        const name = `${exercise.stem}-${kind}`;
        equal(/\b(?:var|let|const)\b/.test(code), false, `${name}: no variable declarations`);
        equal(/\bfunction\s+[A-Za-z_$]|=>/.test(code), false, `${name}: no custom named functions`);
        if (number === 6 && kind === 'cocuklar') {
            equal(/\/\*[\s\S]*?\S[\s\S]*?\*\/|\/\/\s*\S/.test(text), true,
                `${name}: includes a nonempty task explanation comment`);
            equal(code.trim(), '', `${name}: no executable code outside task comments`);
            equal(tokens(text), [], `${name}: no prepared blocks including forever`);
            equal(simulate(text, name).hasHandler, false, `${name}: no executable handler`);
            continue;
        }
        equal((code.match(/\bfunction\s*\(/g) || []).length, 1, `${name}: only forever callback`);
        equal((code.match(/\bif\s*\(/g) || []).length, exercise.controls, `${name}: expected decision count`);
        equal((code.match(/\belse\b/g) || []).length, exercise.controls, `${name}: each decision has else`);
        equal(apiInventory(text), ['basic.forever', ...exercise.inputs, ...exercise.outputs].sort(),
            `${name}: exact APIs, no additional sensor or event inputs`);
        equal([...code.matchAll(/Button\.([A-Za-z]+)/g)].map(match => match[1]).sort(),
            [...exercise.buttons].sort(), `${name}: exact permitted button checks`);
    }
    if (number < 6) {
        equal(tokens(student).sort(), tokens(solution).sort(),
            `${exercise.stem}: exact component, constant, condition, and punctuation inventory`);
    }

    const completed = simulate(solution, `${exercise.stem}-cozum`);
    equal(completed.hasHandler, true, `${exercise.stem}: one working forever handler`);
    const starter = number < 6 ? simulate(student, `${exercise.stem}-cocuklar`) : null;
    if (starter) equal(starter.hasHandler, true, `${exercise.stem}: runnable unfinished starter`);

    // Reuse each VM instance across all cases: button/light transitions are
    // observed anew each tick, without reset or stored-state dependence.
    for (const light of lightCategory.keys()) {
        for (const buttons of buttonCases) {
            const label = `${exercise.stem}, light=${light}, A/B=${buttons.key}`;
            const wanted = expected(number, light, buttons);
            const got = completed.tick(light, buttons.A, buttons.B);
            equal(got.outputs, wanted.outputs, `${label}: task-required output`);
            equal(got.queries, wanted.queries, `${label}: independent/nested query behavior`);
            equal(got.outputs.filter(item => item[0] === 'icon').length, 1,
                `${label}: exactly one displayed icon per tick`);
            if (number === 2) {
                equal(got.trace, [
                    ['query', 'light'], wanted.outputs[0], ['query', 'B'], wanted.outputs[1],
                ], `${label}: second decision runs after either first branch`);
            }
            if (starter) {
                const unfinished = starter.tick(light, buttons.A, buttons.B);
                equal(unfinished.outputs, exercise.wrongOutputs,
                    `${label}: deliberately wrong starter matches its description`);
                equal(unfinished.queries, exercise.studentQueries,
                    `${label}: supplied decisions initially remain independent`);
                equal(unfinished.outputs.filter(item => item[0] === 'icon').length > 1, true,
                    `${label}: starter visibly differs from one-icon target`);
            }
        }
    }
    // Explicitly cross the boundary in both directions with the same VM,
    // including button release and re-press while the light changes.
    for (const [light, key] of [[80, '10'], [79, '10'], [80, '01'], [79, '01'],
        [255, '11'], [0, '11'], [80, '00'], [20, '00']]) {
        const buttons = buttonCases.find(item => item.key === key);
        const got = completed.tick(light, buttons.A, buttons.B);
        const wanted = expected(number, light, buttons);
        equal(got.outputs, wanted.outputs, `${exercise.stem}: day/night transition ${light}/${key}`);
        equal(got.queries, wanted.queries, `${exercise.stem}: correct query priority after transition`);
    }
    console.log(`PASS ${exercise.stem}: 6 light levels x 4 button combinations; boundary, transitions, and input-query paths.`);
}

console.log(`PASS: ${assertions} assertions across twelve delivered JS files.`);
console.log('First five pairs have identical complete token/API inventories; sixth starter has task comments only and no executable code.');
console.log('Limit: mocked Node VM logic only, not MakeCode compilation, scheduler/audio/display timing, or physical micro:bit validation.');
