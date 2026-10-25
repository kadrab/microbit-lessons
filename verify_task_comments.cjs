#!/usr/bin/env node
// Structural checks only: translation meaning and MakeCode rendering need review.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
let pairs = 0;
let cards = 0;

function readCard(file) {
    const source = fs.readFileSync(file, 'utf8');
    const label = path.relative(root, file);
    const match = source.match(/^\/\*\r?\n([\s\S]*?)\r?\n \*\//);
    assert(match, `${label}: must start with a starred multiline task card`);
    const lines = match[1].split(/\r?\n/);
    assert(lines.every(line => /^ \*(?: |$)/.test(line)), `${label}: every card line must be starred`);
    const text = lines.map(line => line.replace(/^ \* ?/, '')).join('\n');
    const tr = [...text.matchAll(/^GÖREV (?:EK )?(\d+) — (.+)$/gm)];
    const en = [...text.matchAll(/^TASK (?:EXTRA )?(\d+) — (.+)$/gm)];
    assert.equal(tr.length, 1, `${label}: one Turkish task title required`);
    assert.equal(en.length, 1, `${label}: one English task title required`);
    assert.equal(tr[0].index, 0, `${label}: Turkish title must come first`);
    assert(en[0].index > tr[0].index, `${label}: English card must follow Turkish`);
    const expectedNumber = Number(path.basename(file).match(/^(?:ek-)?(\d+)-/)[1]);
    assert.equal(Number(tr[0][1]), expectedNumber, `${label}: Turkish task number`);
    assert.equal(Number(en[0][1]), expectedNumber, `${label}: English task number`);

    const sections = [
        [text.slice(0, en[0].index), ['HİKÂYE', 'HEDEF', 'KURAL', 'DENEME']],
        [text.slice(en[0].index), ['STORY', 'GOAL', 'RULE', 'TEST']],
    ];
    for (const [languageText, headings] of sections) {
        let previous = -1;
        for (const heading of headings) {
            const matches = [...languageText.matchAll(new RegExp(`^${heading}:`, 'gm'))];
            assert.equal(matches.length, 1, `${label}: exactly one ${heading}: required`);
            const position = matches[0].index;
            assert(position > previous, `${label}: ${heading} section order`);
            const rest = languageText.slice(position + heading.length + 1);
            const next = rest.search(new RegExp(`^(?:${headings.join('|')}):`, 'm'));
            const body = next < 0 ? rest : rest.slice(0, next);
            assert(body.trim(), `${label}: ${heading} section must have content`);
            previous = position;
        }
    }
    assert(!/^DENE\s*:/m.test(text), `${label}: use DENEME, not DENE`);
    const remainder = source.slice(match[0].length);
    if (remainder.trim()) {
        assert(/^\r?\n\r?\n\S/.test(remainder), `${label}: keep one blank line after the card`);
    }
    cards++;
    return match[0];
}

for (const collection of ['haftalar', 'odevler']) {
    const collectionPath = path.join(root, collection);
    for (const entry of fs.readdirSync(collectionPath, { withFileTypes: true })) {
        if (!entry.isDirectory()) continue;
        const lesson = path.join(collectionPath, entry.name);
        const students = path.join(lesson, 'etkinlikler');
        const solutions = path.join(lesson, 'cozumler');
        if (!fs.existsSync(students)) continue;
        const names = fs.readdirSync(students).filter(name => /\.(js|ts)$/.test(name)).sort();
        const pairedSolutions = new Set();
        for (const name of names) {
            assert(/-cocuklar\.(js|ts)$/.test(name), `${name}: expected child-source suffix`);
            const solutionName = name.replace(/-cocuklar\.(js|ts)$/, '-cozum.$1');
            const solution = path.join(solutions, solutionName);
            assert(fs.existsSync(solution), `${name}: missing matching solution`);
            assert.equal(readCard(path.join(students, name)), readCard(solution),
                `${name}: child and solution task cards must match`);
            pairedSolutions.add(solutionName);
            pairs++;
        }
        if (fs.existsSync(solutions)) {
            for (const name of fs.readdirSync(solutions).filter(name => /\.(js|ts)$/.test(name))) {
                assert(pairedSolutions.has(name), `${name}: solution has no matching child source`);
            }
        }
    }
}
assert(pairs > 0, 'No task pairs found');
console.log(`PASS: ${pairs} task pairs, ${cards} complete bilingual task cards.`);
console.log('Checks headings, task numbers, paired card equality and blank lines; not translation meaning, Blocks rendering or hardware.');
