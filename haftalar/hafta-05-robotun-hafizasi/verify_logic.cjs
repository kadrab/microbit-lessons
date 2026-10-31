#!/usr/bin/env node
'use strict';

// Portable, dependency-free checks for sequential button events with mocked APIs.
// These checks do not model concurrent events, display duration or real hardware.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const stems = [
    '01-hatirlanan-sayi',
    '02-her-basisi-hatirla',
    '03-yeni-tur',
    '04-uclu-paket',
    '05-besinci-sinyal',
    '06-sayim-istasyonu'
];
let checks = 0;
function check(label, run) {
    try {
        run();
        checks++;
    } catch (error) {
        error.message = `${label}: ${error.message}`;
        throw error;
    }
}
function read(folder, stem, suffix) {
    return fs.readFileSync(path.join(__dirname, folder, `${stem}-${suffix}.js`), 'utf8');
}
function splitSource(source, label) {
    const match = source.match(/^(\/\*[\s\S]*?\*\/)([\s\S]*)$/);
    assert.ok(match, `${label} must start with a task card`);
    const code = match[2].trim();
    if (code) assert.match(match[2], /^\r?\n[\t ]*\r?\n/, `${label}: missing blank line after card`);
    return { card: match[1], code };
}

// Parse this lesson's intentionally small language instead of comparing raw token
// counts. An assignment, its value, a predicate and its threshold, or a repeat
// count each form one inventory entry; their positions and nesting may change.
function inventory(code) {
    const tokenPattern = /\s+|[A-Za-z_][A-Za-z_0-9]*|\d+|\+=|\+\+|[{}();,.=<]/gy;
    const tokens = [];
    let offset = 0;
    while (offset < code.length) {
        tokenPattern.lastIndex = offset;
        const match = tokenPattern.exec(code);
        assert.ok(match, `unsupported source near ${JSON.stringify(code.slice(offset, offset + 40))}`);
        if (!/^\s+$/.test(match[0])) tokens.push(match[0]);
        offset = tokenPattern.lastIndex;
    }
    let cursor = 0;
    const entries = [];
    const next = () => tokens[cursor++];
    const peek = () => tokens[cursor];
    function take(expected) {
        const actual = next();
        assert.equal(actual, expected, `expected ${expected} at token ${cursor}, got ${actual}`);
    }
    function sequence(...expected) { expected.forEach(take); }
    function number() {
        const result = next();
        assert.match(result || '', /^\d+$/, 'expected an integer literal');
        return Number(result);
    }
    function block() {
        take('{');
        while (peek() !== '}') {
            assert.notEqual(peek(), undefined, 'unterminated block');
            statement();
        }
        take('}');
    }
    function statement() {
        switch (next()) {
        case ';': break;
        case 'let': {
            sequence('sayac', '=');
            entries.push(`declare:sayac=${number()}`);
            break;
        }
        case 'sayac': {
            const operator = next();
            assert.ok(operator === '=' || operator === '+=', 'only assignment or increment is permitted');
            entries.push(`sayac${operator}${number()}`);
            break;
        }
        case 'input': {
            sequence('.', 'onButtonPressed', '(', 'Button', '.');
            const button = next();
            assert.ok(button === 'A' || button === 'B', 'only A and B events are permitted');
            entries.push(`event:${button}`);
            sequence(',', 'function', '(', ')');
            block();
            take(')');
            break;
        }
        case 'basic': {
            take('.');
            const method = next();
            take('(');
            if (method === 'showNumber') {
                take('sayac');
                entries.push('showNumber:sayac');
            } else if (method === 'showIcon') {
                sequence('IconNames', '.');
                const icon = next();
                assert.ok(['Heart', 'Asleep', 'No', 'Yes'].includes(icon), `unexpected icon ${icon}`);
                entries.push(`showIcon:${icon}`);
            } else if (method === 'pause') {
                entries.push(`pause:${number()}`);
            } else {
                assert.equal(method, 'clearScreen', `unsupported basic API ${method}`);
                entries.push('clearScreen');
            }
            take(')');
            break;
        }
        case 'for': {
            sequence('(', 'let', 'index', '=', '0', ';', 'index', '<');
            const count = number();
            sequence(';', 'index', '++', ')');
            entries.push(`repeat:${count}`);
            block();
            break;
        }
        case 'if': {
            sequence('(', 'sayac', '<');
            const threshold = number();
            take(')');
            entries.push(`if:sayac<${threshold}`);
            block();
            take('else');
            entries.push('else');
            block();
            break;
        }
        default: assert.fail(`unsupported statement at token ${cursor}: ${tokens[cursor - 1]}`);
        }
    }
    while (cursor < tokens.length) statement();
    assert.equal(entries.filter(entry => entry.startsWith('declare:')).length, 1,
        'each executable source must declare exactly one state variable');
    return entries.sort();
}

function program(code) {
    const events = new Map();
    const output = [];
    const context = vm.createContext({
        Button: Object.freeze({ A: 'A', B: 'B' }),
        IconNames: Object.freeze({ Heart: 'Heart', Asleep: 'Asleep', No: 'No', Yes: 'Yes' }),
        input: {
            onButtonPressed(button, handler) {
                assert.equal(events.has(button), false, `duplicate ${button} event`);
                events.set(button, handler);
            }
        },
        basic: {
            showNumber(value) {
                assert.equal(typeof value, 'number', 'number output must be a number');
                output.push(`number:${value}`);
            },
            showIcon(icon) { output.push(`icon:${icon}`); },
            clearScreen() { output.push('clear'); },
            pause(milliseconds) { output.push(`pause:${milliseconds}`); }
        },
        dispatch(button) {
            assert.ok(events.has(button), `missing ${button} event`);
            events.get(button)();
        }
    });
    vm.runInContext(code, context, { timeout: 1000 });
    return {
        initial: output.slice(),
        state: () => vm.runInContext('sayac', context, { timeout: 1000 }),
        buttons: () => [...events.keys()].sort(),
        press(button) {
            const from = output.length;
            vm.runInContext(`dispatch(${JSON.stringify(button)})`, context, { timeout: 1000 });
            return output.slice(from);
        }
    };
}
const number = value => `number:${value}`;
const icon = name => `icon:${name}`;
const pulse = [icon('Heart'), 'clear', 'pause:200'];
const threePulses = [...pulse, ...pulse, ...pulse];
const cases = [
    {
        initial: 3,
        buttons: ['A'],
        events: [
            ['A', 3, [icon('Heart'), number(3)]],
            ['A', 3, [icon('Heart'), number(3)]],
            ['A', 3, [icon('Heart'), number(3)]]
        ]
    },
    {
        initial: 0,
        buttons: ['A'],
        events: [
            ['A', 1, [number(1)]], ['A', 2, [number(2)]],
            ['A', 3, [number(3)]], ['A', 4, [number(4)]]
        ]
    },
    {
        initial: 0,
        buttons: ['A', 'B'],
        events: [
            ['A', 1, [number(1)]], ['A', 2, [number(2)]],
            ['B', 0, [number(0)]], ['A', 1, [number(1)]],
            ['B', 0, [number(0)]], ['B', 0, [number(0)]]
        ]
    },
    {
        initial: 0,
        buttons: ['A', 'B'],
        events: [
            ['A', 3, [number(1), 'pause:400', number(2), 'pause:400', number(3), 'pause:400']],
            ['A', 6, [number(4), 'pause:400', number(5), 'pause:400', number(6), 'pause:400']],
            ['A', 9, [number(7), 'pause:400', number(8), 'pause:400', number(9), 'pause:400']],
            ['A', 12, [number(10), 'pause:400', number(11), 'pause:400', number(12), 'pause:400']],
            ['B', 0, [number(0)]],
            ['A', 3, [number(1), 'pause:400', number(2), 'pause:400', number(3), 'pause:400']]
        ]
    },
    {
        initial: 0,
        buttons: ['A', 'B'],
        events: [
            ['A', 1, [icon('Asleep'), number(1)]],
            ['A', 2, [icon('Asleep'), number(2)]],
            ['A', 3, [icon('Asleep'), number(3)]],
            ['A', 4, [icon('Asleep'), number(4)]],
            ['A', 5, [...threePulses, number(5)]],
            ['A', 6, [...threePulses, number(6)]],
            ['A', 7, [...threePulses, number(7)]],
            ['B', 0, [number(0)]],
            ['A', 1, [icon('Asleep'), number(1)]]
        ]
    },
    {
        initial: 0,
        buttons: ['A', 'B'],
        events: [
            ['A', 3, [number(1), icon('No'), 'pause:400', number(2), icon('No'), 'pause:400', number(3), icon('No'), 'pause:400', number(3)]],
            ['A', 6, [number(4), icon('No'), 'pause:400', number(5), icon('Yes'), 'pause:400', number(6), icon('Yes'), 'pause:400', number(6)]],
            ['A', 9, [number(7), icon('Yes'), 'pause:400', number(8), icon('Yes'), 'pause:400', number(9), icon('Yes'), 'pause:400', number(9)]],
            ['B', 0, [number(0)]],
            ['B', 0, [number(0)]],
            ['A', 3, [number(1), icon('No'), 'pause:400', number(2), icon('No'), 'pause:400', number(3), icon('No'), 'pause:400', number(3)]]
        ]
    }
];

for (let task = 0; task < stems.length; task++) {
    const stem = stems[task];
    const child = splitSource(read('etkinlikler', stem, 'cocuklar'), `${stem} child`);
    const solution = splitSource(read('cozumler', stem, 'cozum'), `${stem} solution`);
    check(`${stem} matching bilingual cards`, () => {
        assert.equal(child.card, solution.card);
        for (const heading of ['HİKÂYE:', 'HEDEF:', 'KURAL:', 'DENEME:', 'STORY:', 'GOAL:', 'RULE:', 'TEST:']) {
            assert.ok(child.card.includes(heading), `missing ${heading}`);
        }
        assert.ok(child.card.indexOf('GÖREV') < child.card.indexOf('TASK'), 'Turkish card must precede English');
    });
    const solutionInventory = inventory(solution.code);
    check(`${stem} source format and supplied inventory`, () => {
        new vm.Script(solution.code);
        if (task < 5) {
            new vm.Script(child.code);
            assert.deepEqual(inventory(child.code), solutionInventory);
        } else {
            assert.equal(child.code, '', 'homework must contain only its task card');
        }
    });
    const expected = cases[task];
    const loaded = program(solution.code);
    check(`${stem} startup`, () => {
        assert.deepEqual(loaded.initial, [number(expected.initial)]);
        assert.equal(loaded.state(), expected.initial);
        assert.deepEqual(loaded.buttons(), expected.buttons);
    });
    expected.events.forEach(([button, state, trace], eventIndex) => {
        check(`${stem} event ${eventIndex + 1} (${button})`, () => {
            assert.deepEqual(loaded.press(button), trace);
            assert.equal(loaded.state(), state, 'stored count after event');
        });
    });
    check(`${stem} restart`, () => {
        const restarted = program(solution.code);
        assert.deepEqual(restarted.initial, [number(expected.initial)]);
        assert.equal(restarted.state(), expected.initial);
    });
    if (task < 5) {
        check(`${stem} starter needs rearrangement`, () => {
            const starter = program(child.code);
            const observed = expected.events.map(([button]) => ({ trace: starter.press(button), state: starter.state() }));
            const target = expected.events.map(([, state, trace]) => ({ trace, state }));
            assert.notDeepEqual(observed, target, 'starter already satisfies all event examples');
        });
    }
    console.log(`PASS ${stem}: card, structure, ordered outputs, stored values and restart`);
}
console.log(`\nPASS: ${checks} checks; six solutions, five supplied-block inventories, one comment-only homework source.`);
console.log('Scope: synchronous mocked MakeCode APIs and sequential button events only.');
console.log('Not checked here: MakeCode block rendering, simulator timing, overlapping button events or a physical micro:bit.');
