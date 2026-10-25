# microbit-lessons instructions

This repository is the source of truth for the micro:bit / MakeCode lessons. Before preparing a lesson, read `README.md`, `agent/README.md`, the latest instructor guide, and the user's latest report of the children's progress.

## Language and teaching format

- Describe the intended audience as **children aged 8–12** (Turkish: **8–12 yaş aralığındaki çocuklar**). Do not use a single exact age or personal age details. Adjust teaching difficulty to demonstrated progress within that range.
- Keep repository-level documentation, templates, and agent instructions in English. Every **new weekly lesson must include four complete documents**: `README.md` and `INSTRUCTOR.md` in English, plus `README.tr.md` and `INSTRUCTOR.tr.md` in Turkish. This weekly bilingual requirement supersedes the previous blanket English-only rule.
- Keep both language versions equivalent and update them together. Each README must link to its counterpart and the instructor guide in the same language; each instructor guide must link to its counterpart. The Turkish versions must be complete documents, not summaries or placeholders. Existing weekly documents do not need retroactive translation unless the user requests it.
- Write every `.js` and `.ts` task card in both Turkish and English, Turkish first. This applies to new weekly lessons, four-week review packs, and revisions of existing material, including additional exercises. Keep repository and agent prose in English; bilingual task-card examples are allowed.
- At the current learning stage, every **new weekly lesson contains exactly five core tasks and one homework task**: tasks 01–05 are classwork; task 06 is homework. This means six tasks in total, not six additional homework questions.
- Increase difficulty gradually. Start with a familiar skill, introduce at most one new concept, and combine it with established concepts later. Do not add variables, custom functions, scoring systems, or hardware without a teaching reason agreed with the user.
- Provide the required, deliberately misplaced blocks for tasks 01–05. The sixth task is an independent homework challenge using learned concepts; provide only the task comment unless the user requests starter materials.
- Existing introductory weeks retain their original smaller exercise sets. Do not claim missing activities have been created. Apply the five-plus-one format when generating or explicitly revising a weekly lesson.

## Review homework after every four weeks

- When preparing week **4, 8, 12, and each later multiple of four**, first finish that week's lesson preparation, including its sources, solutions, packages, bilingual documents, and relevant checks. Then prepare a separate **ten-task review homework pack** before delivering that week's work. This is part of the authorized lesson-preparation workflow; do not wait for another request for the review pack.
- Each pack covers the **four-week block ending with that week**: weeks 1–4 after week 4, weeks 5–8 after week 8, weeks 9–12 after week 12, and so on. Review the actual content of all four weeks. Cover their main concepts without introducing an unexplained concept; earlier prerequisites may be reused.
- Number the review tasks **01–10** and progress from easy recall and single-skill practice to combining the block's learned skills. At the current learning stage, supply all required but deliberately misplaced blocks for tasks 01–09; task 10 is an independent challenge with only a task comment unless the user requests starter materials.
- Store each pack under `odevler/`, with direct `etkinlikler/`, `cozumler/`, and `paketler/` children and the same four complete English/Turkish README and instructor documents as a weekly lesson. Provide ten child sources, ten matching solutions, and separate child and solution ZIPs. Apply the same comment, link, and verification rules.
- Keep the existing weeks 1–4 pack at `odevler/ilk-04-hafta-10-seviye/`. For later blocks use `odevler/hafta-AA-BB-10-seviye/`, with zero-padded start/end weeks, for example `odevler/hafta-05-08-10-seviye/`. Update an existing pack for that block instead of creating a duplicate. Add the pack and its covered weeks to the root index and link it from both language versions of the ending week's README.
- A review pack is **additional to that week's five core tasks and task 06 homework**. It does not consume a new week number and is not subject to the six-task weekly limit. Preparing a week does not establish that the children have completed it.

## Directory layout

Use `haftalar/hafta-NN-short-topic/` for a weekly lesson and the following direct children:

```text
README.md                     # English lesson overview
README.tr.md                  # Turkish lesson overview
INSTRUCTOR.md                 # English teaching instructions
INSTRUCTOR.tr.md              # Turkish teaching instructions
etkinlikler/                  # children: unfinished sources only
cozumler/                     # adults: completed solutions only
paketler/                     # current child and solution ZIPs
verify_logic.cjs              # retain/add only when useful
```

- Never mix completed solutions into `etkinlikler/` or into the child ZIP.
- Do not nest another topic/project folder between a week and its student/solution files.
- Do not create archive, backup, legacy, deferred-work, or `kontrol/` report directories. Remove obsolete outputs instead of retaining successive deliveries.
- Keep useful runnable checks at the lesson root. Print their results; do not recreate deleted report directories.
- Keep `graphify-out/` in `.gitignore`. It is generated tooling output, not a lesson deliverable.
- Use `agent/LESSON_TEMPLATE.md` for new weeks and update the root lesson index. Determine the next week number from actual weekly folders; cumulative homework does not consume a week number.

## Sources and verification

- Start every child source and its matching solution with the same starred `/* ... */` task card. Include Turkish task number/title, `HİKÂYE:`, `HEDEF:`, `KURAL:`, and `DENEME:`, followed by the complete English equivalent using `TASK`, `STORY:`, `GOAL:`, `RULE:`, and `TEST:`. Use `DENEME:`, not `DENE:`, as the Turkish test heading. See the concrete example in `agent/LESSON_TEMPLATE.md`.
- Translate the whole task rather than summarizing it. Keep inputs, outputs, counts, thresholds, timing, permitted edits, hints, and test cases equivalent. Update both languages together, including instructional inline comments. Do not put solution steps in the child card.
- Preserve one blank line between the closing `*/` and executable code so the card can become an open MakeCode workspace comment. Keep independent tasks comment-only. Give concise wording in each language; source files cannot fix card size or position.
- Check that ready-block tasks can be solved using exactly the supplied materials. Preserve the distinct fill-in rules of the additional week-2 exercises even though they now use the same bilingual card format.
- Keep child and solution packages separate. Rebuild both packages after source-comment changes, verify their contents against current source files, and check ZIP integrity before delivery. Confirm that each child/solution pair has matching bilingual cards and all required headings.
- After relevant source changes, check logic and MakeCode block conversion as appropriate. Distinguish mocked local checks, browser conversion, simulator behavior, and physical-device tests. Never claim an unperformed hardware test.
- Use relative documentation links and portable, file-relative paths in scripts.
- Before delivering a new week or review pack, verify that all four documents exist, their language links resolve, and their goals, task order, rules, examples, homework, and validation claims agree across languages. On weeks divisible by four, also verify the completed review pack has ten progressively harder tasks and covers the correct four-week block.

## Git boundary

**Do not commit or push until the user explicitly authorizes it.** Preparing files, checking them, and updating this documentation does not grant publishing permission.
