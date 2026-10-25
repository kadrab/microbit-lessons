# Week 4 — Repeat workshop

[Türkçe](README.tr.md) · [Instructor guide](INSTRUCTOR.md)

Introduce fixed-count `for` loops on their own, then combine them with the familiar `if/else` blocks. Children use MakeCode's “repeat N times” block; they do not create a separate counter variable.

## Five core tasks and one homework task

| Task | Activity | Focus | Format |
|---|---|---|---|
| 1 | Three hearts, one greeting | Repeated work and a single ending | Classwork; supplied blocks |
| 2 | PİKO's dance rehearsal | Opening, repeated sequence and finale | Classwork; supplied blocks |
| 3 | Two-part space message | Two loops in sequence | Classwork; supplied blocks |
| 4 | The robot that asks three times | Check B at the start of every round | Classwork; supplied blocks |
| 5 | Choose the route once | Check B once, then finish the selected loop | Classwork; supplied blocks |
| 6 | Space patrol checkpoints | Independently combine two loops and decisions | Homework; instructions only |

Tasks 1–5 provide all the blocks, deliberately misplaced. Children move them without adding, deleting, duplicating or changing values. Task 6 provides only its instructions. Tasks 4 and 5 make the difference between checking B every round and choosing a route once observable.

## Review homework covering weeks 1–4

The separate [ten-task review pack](../../odevler/ilk-04-hafta-10-seviye/README.md) covers the first four weeks, progressing from easy to hard. It is additional to this week's task 6 homework and does not count as week 5. Tasks 1–9 supply the required pieces; task 10 is an independent challenge.

## Files

- [Instructor guide and teaching prompts](INSTRUCTOR.md)
- [Child activity sources](etkinlikler/)
- [Complete solutions](cozumler/)
- [Child ZIP](paketler/hafta-04-cocuklar.zip)
- [Solution ZIP](paketler/hafta-04-cozumler.zip)

Paste the full contents of one child JavaScript file into a new MakeCode project's JavaScript tab, replacing its default code, then switch to Blocks. Preserve the blank line after the opening task comment so that its card appears open. The source does not preserve the card's size or position; move or resize it if needed.

Each task card contains the same instructions in Turkish first and then English: task number/title and story, `HEDEF:` / `GOAL:`, `KURAL:` / `RULE:`, and `DENEME:` / `TEST:`. Student and solution files share the same card.

## Validation scope

The retained [logic verifier](verify_logic.cjs) checks fixed repetition counts, output order, changing B inputs, supplied block inventories and the instruction-only homework source. Run it with `node verify_logic.cjs` from this week folder; it prints its results. Mocked API tests and MakeCode block conversion are separate from physical device or timing tests. No new hardware tests are claimed by this documentation update.
