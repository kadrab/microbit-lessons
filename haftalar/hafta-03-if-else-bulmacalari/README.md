# Week 3 — IF/ELSE puzzles

[Türkçe](README.tr.md)

Build on the single decisions introduced in Week 2 by combining independent and nested conditions. The program targets are unchanged; the child instructions appear as open MakeCode comment cards.

## Five core tasks and one homework task

| Task | Activity | Focus | Format |
|---|---|---|---|
| 1 | Day and night robot | Compare a sensor reading with a fixed threshold | Classwork; supplied blocks |
| 2 | PİKO's two separate jobs | Two independent decisions | Classwork; supplied blocks |
| 3 | Two-stage gate | One decision inside another | Classwork; supplied blocks |
| 4 | PİKO's four moods | A decision in each branch | Classwork; supplied blocks |
| 5 | Night base | Combine light and two buttons | Classwork; supplied blocks |
| 6 | Space gate shifts | Build a complete decision tree | Homework; instructions only |

All required blocks are supplied in tasks 1–5. Children solve them by moving blocks; they do not add, delete, duplicate or change values. Task 6 contains only its instructions: children select the blocks themselves. Take a break before task 4 and spread the classwork over more than one session when needed.

## Files

- [Instructor guide, teaching prompts and test cases](INSTRUCTOR.md)
- [Child activity sources](etkinlikler/)
- [Complete solutions](cozumler/)
- [Child ZIP](paketler/hafta-03-cocuklar.zip)
- [Solution ZIP](paketler/hafta-03-cozumler.zip)

Paste the full contents of one child JavaScript file into a new MakeCode project's JavaScript tab, replacing its default code, then switch to Blocks. Preserve the blank line between the opening `/* ... */` task comment and the code so that the task card appears open. Move or resize it if needed. Keep the solutions with the adult.

## Validation scope

The retained [logic verifier](verify_logic.cjs) checks solution behavior with mocked inputs, the supplied block inventories and the instruction-only homework source. Run it with `node verify_logic.cjs` from this week folder; it prints its results. These local checks do not establish physical micro:bit behavior, sound or timing. No new hardware tests are claimed by this documentation update.
