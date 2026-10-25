#!/usr/bin/env node
// Runs these small, JavaScript-compatible MakeCode programs in a Node VM.
// Checks decisions and block relocation, not MakeCode compilation or timing.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

let assertions = 0;
function equal(actual, expected, description) {
    assert.deepEqual(actual, expected, description);
    assertions++;
}
function codeOnly(source) {
    return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
}
function tokens(source) {
    const code = codeOnly(source);
    // These exercises have no string literals or TypeScript annotations.
    return code.match(/[A-Za-z_$][\w$]*|\d+|&&|\|\||[^\s]/g) || [];
}
function inventory(source) {
    return tokens(source).sort();
}
function calls(source) {
    return [...codeOnly(source).matchAll(/\b([a-zA-Z]+\.[a-zA-Z]+)\s*\(/g)]
        .map(match => match[1]).sort();
}
function simulate(source, filename) {
    let handler;
    let held = { A: false, B: false };
    let outputs = [];
    let queries = [];
    const context = vm.createContext({
        Button: Object.freeze({ A: 'A', B: 'B' }),
        IconNames: new Proxy(Object.freeze({
            Happy: 'Happy', Asleep: 'Asleep', Yes: 'Yes', No: 'No',
        }), {
            get(target, name) {
                assert(Object.hasOwn(target, name), `Unknown icon: ${String(name)}`);
                return target[name];
            },
        }),
        input: {
            buttonIsPressed(button) {
                assert(Object.hasOwn(held, button), `Unknown button: ${button}`);
                queries.push(button);
                return held[button];
            },
        },
        basic: {
            forever(callback) {
                assert.equal(handler, undefined, 'Only one forever handler is allowed');
                handler = callback;
            },
            showIcon(icon) { outputs.push(['icon', icon]); },
        },
        music: {
            playTone(frequency, duration) { outputs.push(['tone', frequency, duration]); },
        },
    });
    vm.runInContext(source, context, { filename, timeout: 1000 });
    equal(typeof handler, 'function', `${filename}: forever is registered`);
    equal(outputs, [], `${filename}: no output outside forever`);
    return {
        tick(A, B) {
            held = { A, B };
            outputs = [];
            queries = [];
            handler();
            return { outputs, queries };
        },
    };
}

const exercises = [
    {
        stem: '01-sartli-zil',
        moves: ['music.playTone(523, 200)'],
        broken: [['tone', 523, 200]],
        expected: A => A ? [['tone', 523, 200]] : [],
        api: ['basic.forever', 'input.buttonIsPressed', 'music.playTone'],
    },
    {
        stem: '02-robotun-yuzu',
        moves: ['basic.showIcon(IconNames.Happy)', 'basic.showIcon(IconNames.Asleep)'],
        broken: [['icon', 'Happy'], ['icon', 'Asleep']],
        expected: A => [['icon', A ? 'Happy' : 'Asleep']],
        api: ['basic.forever', 'basic.showIcon', 'basic.showIcon', 'input.buttonIsPressed'],
    },
    {
        stem: '03-iki-kisilik-kilit',
        moves: ['basic.showIcon(IconNames.Yes)', 'basic.showIcon(IconNames.No)'],
        broken: [['icon', 'Yes'], ['icon', 'No']],
        expected: (A, B) => [['icon', A && B ? 'Yes' : 'No']],
        api: ['basic.forever', 'basic.showIcon', 'basic.showIcon',
            'input.buttonIsPressed', 'input.buttonIsPressed'],
    },
];

for (const exercise of exercises) {
    const studentName = `${exercise.stem}-cocuklar.ts`;
    const solutionName = `${exercise.stem}-cozum.ts`;
    const student = fs.readFileSync(path.join(__dirname, 'etkinlikler', studentName), 'utf8');
    const solution = fs.readFileSync(path.join(__dirname, 'cozumler', solutionName), 'utf8');

    for (const [name, source] of [[studentName, student], [solutionName, solution]]) {
        const code = codeOnly(source);
        equal(/\b(?:let|const|var)\b/.test(code), false, `${name}: no variable declarations`);
        equal(/\bfunction\s+[\w$]+|=>/.test(code), false, `${name}: no custom functions`);
        equal((code.match(/\bfunction\s*\(/g) || []).length, 1,
            `${name}: only the anonymous forever callback`);
        equal(calls(source), [...exercise.api].sort(), `${name}: exact allowed API calls`);
    }
    equal(inventory(student), inventory(solution),
        `${exercise.stem}: no added, deleted, or changed code tokens`);

    // Perform only the exact output-block moves asked of the children.
    let moved = codeOnly(student);
    for (const statement of exercise.moves) {
        equal(moved.split(statement).length - 1, 1,
            `${exercise.stem}: one movable copy of ${statement}`);
        moved = moved.replace(statement, '');
    }
    let nextStatement = 0;
    moved = moved.replace(/\{\s*\}/g, () => `{ ${exercise.moves[nextStatement++]} }`);
    equal(nextStatement, exercise.moves.length, `${exercise.stem}: one move per empty branch`);
    equal(tokens(moved), tokens(solution),
        `${exercise.stem}: moving supplied blocks alone produces the full solution`);

    const starter = simulate(student, studentName);
    const completed = simulate(solution, solutionName);
    const relocated = simulate(moved, `${exercise.stem}: student blocks moved`);
    const cases = [[false, false], [true, false], [false, true], [true, true]];
    for (const [A, B] of cases) {
        const label = `${exercise.stem}: A=${A}, B=${B}`;
        equal(starter.tick(A, B).outputs, exercise.broken,
            `${label}: intentionally wrong outputs match task description`);
        equal(completed.tick(A, B).outputs, exercise.expected(A, B), `${label}: full solution`);
        equal(relocated.tick(A, B).outputs, exercise.expected(A, B), `${label}: child moves`);
    }

    // Reuse one program while buttons change: no remembered tokens or reset required.
    for (const [A, B] of [[false, false], [true, false], [true, true],
        [false, true], [false, false], [true, true], [false, false]]) {
        const result = completed.tick(A, B);
        equal(result.outputs, exercise.expected(A, B),
            `${exercise.stem}: live state changes A=${A}, B=${B}`);
        equal(result.queries,
            exercise.stem.startsWith('03-') && A ? ['A', 'B'] : ['A'],
            `${exercise.stem}: re-reads the current state; AND short-circuits`);
    }
    console.log(`PASS ${exercise.stem}: all four A/B combinations, release transitions, unchanged block inventory.`);
}

console.log(`PASS: ${assertions} assertions across six delivered TS files and three in-memory student completions.`);
console.log('Limit: mocked Node VM logic only; no MakeCode compilation, real scheduler, audio, LEDs, or physical-device validation.');
