#!/usr/bin/env node
'use strict';

// Dependency-free, deterministic checks of sequential MakeCode button events.
// Queued draws test program behavior; they do not test RNG quality or hardware.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const stems = [
    '01-hafizayi-hatirla',
    '02-pikonun-zari',
    '03-sonucu-unutma',
    '04-sansli-sayi',
    '05-uc-atis',
    '06-hazineci-piko'
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

// Parse the lesson's small language. Commands retain their arguments as one
// inventory item, so changing a predicate, literal or assignment cannot pass as
// rearranging the supplied blocks. Only event callbacks may use `function`;
// only the canonical, unused repeat counter may declare `index`.
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
    const startup = [];
    const next = () => tokens[cursor++];
    const peek = () => tokens[cursor];
    function take(expected) {
        assert.equal(next(), expected, `expected ${expected} at token ${cursor}`);
    }
    function sequence(...expected) { expected.forEach(take); }
    function number() {
        const value = next();
        assert.match(value || '', /^\d+$/, 'expected an integer literal');
        return Number(value);
    }
    function record(entry, topLevel) {
        entries.push(entry);
        if (topLevel) startup.push(entry);
    }
    function block() {
        take('{');
        while (peek() !== '}') {
            assert.notEqual(peek(), undefined, 'unterminated block');
            statement(false);
        }
        take('}');
    }
    function statement(topLevel) {
        switch (next()) {
        case ';': break;
        case 'let':
            assert.equal(topLevel, true, 'the state variable must be global');
            sequence('sayi', '=');
            record(`declare:sayi=${number()}`, topLevel);
            break;
        case 'sayi': {
            const operator = next();
            assert.ok(operator === '=' || operator === '+=', 'only assignment and increment are permitted');
            if (peek() === 'randint') {
                assert.equal(operator, '=', 'a draw replaces the stored value');
                sequence('randint', '(');
                const low = number();
                take(',');
                const high = number();
                take(')');
                record(`sayi=randint(${low},${high})`, topLevel);
            } else {
                record(`sayi${operator}${number()}`, topLevel);
            }
            break;
        }
        case 'input': {
            assert.equal(topLevel, true, 'button events must be top-level containers');
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
                take('sayi');
                record('showNumber:sayi', topLevel);
            } else if (method === 'showIcon') {
                sequence('IconNames', '.');
                const icon = next();
                assert.ok(['Heart', 'Sad', 'Happy', 'No', 'Yes'].includes(icon), `unexpected icon ${icon}`);
                record(`showIcon:${icon}`, topLevel);
            } else if (method === 'pause') {
                record(`pause:${number()}`, topLevel);
            } else {
                assert.equal(method, 'clearScreen', `unsupported basic API ${method}`);
                record('clearScreen', topLevel);
            }
            take(')');
            break;
        }
        case 'for': {
            assert.equal(topLevel, false, 'repetition belongs in a button event');
            sequence('(', 'let', 'index', '=', '0', ';', 'index', '<');
            const count = number();
            sequence(';', 'index', '++', ')');
            entries.push(`repeat:${count}`);
            block();
            break;
        }
        case 'if': {
            assert.equal(topLevel, false, 'the decision belongs in a button event');
            sequence('(', 'sayi', '<');
            const threshold = number();
            take(')');
            entries.push(`if:sayi<${threshold}`);
            block();
            take('else');
            entries.push('else');
            block();
            break;
        }
        default: assert.fail(`unsupported statement at token ${cursor}: ${tokens[cursor - 1]}`);
        }
    }
    while (cursor < tokens.length) statement(true);
    assert.deepEqual(startup, ['declare:sayi=0', 'sayi=0', 'showNumber:sayi'],
        'startup must declare one state variable, explicitly set it to zero, then display it');
    return entries.sort();
}

const baseInventory = ['declare:sayi=0', 'sayi=0', 'showNumber:sayi', 'event:A'];
const drawBlock = 'sayi=randint(1,6)';
const expectedInventories = [
    ['event:B', 'sayi+=1', 'showNumber:sayi'],
    [drawBlock, 'showNumber:sayi'],
    ['event:B', drawBlock, 'showNumber:sayi', 'showNumber:sayi', 'showIcon:Heart'],
    [drawBlock, 'showNumber:sayi', 'if:sayi<4', 'else', 'showIcon:Sad', 'showIcon:Happy'],
    [drawBlock, 'repeat:3', 'showNumber:sayi', 'showNumber:sayi', 'clearScreen', 'pause:400'],
    ['event:B', drawBlock, 'repeat:3', 'showNumber:sayi', 'showNumber:sayi', 'showNumber:sayi',
        'if:sayi<4', 'else', 'showIcon:No', 'showIcon:Yes', 'pause:400']
].map(extra => [...baseInventory, ...extra].sort());

const number = value => `number:${value}`;
const draw = value => `draw:${value}`;
const icon = name => `icon:${name}`;

function program(code) {
    const events = new Map();
    const output = [];
    let pending = [];
    let drawCount = 0;
    const context = vm.createContext({
        Button: Object.freeze({ A: 'A', B: 'B' }),
        IconNames: Object.freeze({ Heart: 'Heart', Sad: 'Sad', Happy: 'Happy', No: 'No', Yes: 'Yes' }),
        input: {
            onButtonPressed(button, handler) {
                assert.equal(events.has(button), false, `duplicate ${button} event`);
                events.set(button, handler);
            }
        },
        randint(low, high) {
            assert.equal(low, 1, 'every draw must have inclusive lower bound 1');
            assert.equal(high, 6, 'every draw must have inclusive upper bound 6');
            assert.ok(pending.length, 'unexpected random draw: no queued result');
            const result = pending.shift();
            drawCount++;
            output.push(draw(result));
            return result;
        },
        basic: {
            showNumber(value) {
                assert.equal(typeof value, 'number', 'number output must be a number');
                output.push(number(value));
            },
            showIcon(name) { output.push(icon(name)); },
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
        state: () => vm.runInContext('sayi', context, { timeout: 1000 }),
        buttons: () => [...events.keys()].sort(),
        drawCount: () => drawCount,
        press(button, draws = []) {
            assert.equal(pending.length, 0, 'a previous event left queued results');
            draws.forEach(value => assert.ok(Number.isInteger(value) && value >= 1 && value <= 6));
            pending = [...draws];
            const beforeOutput = output.length;
            const beforeDraws = drawCount;
            vm.runInContext(`dispatch(${JSON.stringify(button)})`, context, { timeout: 1000 });
            assert.equal(pending.length, 0, 'event did not consume every expected draw');
            assert.equal(drawCount - beforeDraws, draws.length, 'wrong number of random draws');
            return output.slice(beforeOutput);
        }
    };
}

// Expected traces are specified independently of source parsing and execution.
// A queue entry is one draw, even if it equals the preceding result.
function singleTrace(task, value) {
    const trace = [draw(value), number(value)];
    if (task === 3) trace.push(icon('Heart'));
    if (task === 4) trace.push(icon(value <= 3 ? 'Sad' : 'Happy'));
    return trace;
}
function tripleTrace(task, values) {
    const trace = [];
    for (const value of values) {
        trace.push(draw(value), number(value));
        if (task === 5) trace.push('clear');
        else trace.push(icon(value <= 3 ? 'No' : 'Yes'));
        trace.push('pause:400');
    }
    trace.push(number(values[2]));
    return trace;
}
function startup(label, loaded, buttons) {
    check(label, () => {
        assert.deepEqual(loaded.initial, [number(0)], 'startup display');
        assert.equal(loaded.state(), 0, 'startup state');
        assert.equal(loaded.drawCount(), 0, 'startup must not draw a number');
        assert.deepEqual(loaded.buttons(), buttons, 'button containers');
    });
}
function step(label, loaded, button, draws, state, trace) {
    check(label, () => {
        const before = loaded.drawCount();
        assert.deepEqual(loaded.press(button, draws), trace, 'ordered random draws and outputs');
        assert.equal(loaded.state(), state, 'stored value after the event');
        assert.equal(loaded.drawCount(), before + draws.length, 'cumulative draw count');
    });
}
function reread(label, loaded, state) {
    step(`${label} B`, loaded, 'B', [], state, [number(state)]);
    step(`${label} repeated B`, loaded, 'B', [], state, [number(state)]);
}

for (let index = 0; index < stems.length; index++) {
    const task = index + 1;
    const stem = stems[index];
    const child = splitSource(read('etkinlikler', stem, 'cocuklar'), `${stem} child`);
    const solution = splitSource(read('cozumler', stem, 'cozum'), `${stem} solution`);
    check(`${stem} matching bilingual cards`, () => {
        assert.equal(child.card, solution.card);
        const headings = ['GÖREV', 'HİKÂYE:', 'HEDEF:', 'KURAL:', 'DENEME:',
            'TASK', 'STORY:', 'GOAL:', 'RULE:', 'TEST:'];
        let previous = -1;
        for (const heading of headings) {
            const position = child.card.indexOf(heading);
            assert.ok(position > previous, `missing or misplaced ${heading}`);
            previous = position;
        }
        assert.match(child.card, new RegExp(`GÖREV\\s+0?${task}\\b`));
        assert.match(child.card, new RegExp(`TASK\\s+0?${task}\\b`));
        for (const line of child.card.split(/\r?\n/).slice(1, -1)) {
            assert.match(line, /^\s*\*/, 'task card must use starred lines');
        }
    });
    check(`${stem} source language and supplied inventory`, () => {
        new vm.Script(solution.code);
        const actual = inventory(solution.code);
        assert.deepEqual(actual, expectedInventories[index], 'solution command/predicate/constant inventory');
        if (task <= 5) {
            new vm.Script(child.code);
            assert.deepEqual(inventory(child.code), actual, 'starter must supply exactly the solution materials');
        } else {
            assert.equal(child.code, '', 'independent homework must contain only the task card');
        }
    });
    const buttons = [1, 3, 6].includes(task) ? ['A', 'B'] : ['A'];
    const loaded = program(solution.code);
    startup(`${stem} startup`, loaded, buttons);

    if (task === 1) {
        reread(stem + ' before A', loaded, 0);
        step(stem + ' first A', loaded, 'A', [], 1, []);
        reread(stem + ' after one A', loaded, 1);
        step(stem + ' second A', loaded, 'A', [], 2, []);
        step(stem + ' third A', loaded, 'A', [], 3, []);
        reread(stem + ' after three A presses', loaded, 3);
    } else if (task <= 4) {
        for (let value = 1; value <= 6; value++) {
            const trial = program(solution.code);
            const label = `${stem} starting draw ${value}`;
            startup(label + ' startup', trial, buttons);
            if (task === 3) reread(label + ' before A', trial, 0);
            // Repeat the same draw, then change it: repeats are valid, while the
            // changed result catches displaying or testing a stale stored value.
            for (const [attempt, result] of [value, value, 7 - value].entries()) {
                step(`${label} A ${attempt + 1}`, trial, 'A', [result], result, singleTrace(task, result));
                if (task === 3) reread(`${label} after A ${attempt + 1}`, trial, result);
            }
        }
    } else {
        // Exhaust all 6^3 outcomes, including equal triples and mixed 3/4
        // boundaries. A second A in the same VM verifies a new complete round.
        for (let first = 1; first <= 6; first++) {
            for (let second = 1; second <= 6; second++) {
                for (let third = 1; third <= 6; third++) {
                    const values = [first, second, third];
                    const again = [third, second, first];
                    const trial = program(solution.code);
                    const label = `${stem} draws ${values.join(',')}`;
                    startup(label + ' startup', trial, buttons);
                    if (task === 6) reread(label + ' before A', trial, 0);
                    step(label + ' first A', trial, 'A', values, third, tripleTrace(task, values));
                    if (task === 6) reread(label + ' after first A', trial, third);
                    step(label + ' second A', trial, 'A', again, first, tripleTrace(task, again));
                    if (task === 6) reread(label + ' after second A', trial, first);
                    check(label + ' exactly six draws across two A presses', () => {
                        assert.equal(trial.drawCount(), 6);
                    });
                }
            }
        }
    }
    startup(`${stem} restart`, program(solution.code), buttons);

    if (task <= 5) {
        check(`${stem} starter requires rearrangement`, () => {
            const starter = program(child.code);
            assert.deepEqual(starter.initial, [number(0)]);
            assert.equal(starter.drawCount(), 0);
            // Run each supplied arrangement with its actual number of draws.
            // This is a concrete failing example, not merely a text difference.
            const draws = task === 1 || task === 3 ? [] : [6];
            const observed = { trace: starter.press('A', draws), state: starter.state() };
            const target = task === 1
                ? { trace: [], state: 1 }
                : { trace: task === 5 ? tripleTrace(5, [6, 6, 6]) : singleTrace(task, 6), state: 6 };
            assert.notDeepEqual(observed, target, 'starter already satisfies this event example');
        });
    }
    console.log(`PASS ${stem}: bilingual card structure, block inventory, ordered traces, stored values and restart`);
}
console.log(`\nPASS: ${checks} local checks; six solutions, five supplied-block inventories, one comment-only homework source.`);
console.log('Covered: every single draw 1–6 for tasks 02–04; all 216 triples for each of tasks 05–06, plus second A presses and repeated B reads.');
console.log('Scope: synchronous mocked MakeCode APIs and sequential button events with deterministic queued draws.');
console.log('Not checked: translation meaning, RNG statistical quality, MakeCode rendering, wall-clock timing, overlapping events or physical hardware.');
