# Preparing the next lesson

These instructions guide future work in this repository. They do not create a scheduled task or generate lessons automatically. Follow the root `AGENTS.md` and use [the lesson template](LESSON_TEMPLATE.md).

## Start with actual progress

Read the user's latest update and the previous instructor guide. Distinguish material that was prepared, completed together, and left as homework. File existence is not evidence that the children completed a task.

Describe the audience as **children aged 8–12** (Turkish: **8–12 yaş aralığındaki çocuklar**), without exact personal ages. The current learners previously found variables difficult. Use prediction, arranging supplied blocks, testing, and explanation. Choose the next concept based on what they can explain, not just whether their code happened to run.

## Standard weekly assignment: five plus one

Every newly generated weekly lesson at the current stage has **six numbered tasks**:

| Tasks | Purpose | Starter material |
|---|---|---|
| 01–05 | Five core classwork tasks, increasing in difficulty | All required blocks are supplied in deliberately incorrect positions. |
| 06 | One homework task combining already learned ideas | A task comment only, unless the user asks for supplied materials. |

Homework must not introduce an unexplained concept. Do not interpret this format as five classwork tasks plus six homework tasks. The existing smaller introductory lessons remain as they are until the user requests their expansion.

## Review homework every four weeks

Preparing week **4, 8, 12, or any later multiple of four** includes a separate ten-task review pack. First finish the week's lesson preparation and checks; then prepare the review pack before delivering the work. Do not wait for a separate request. This is a preparation rule, not a scheduled automation or a claim that the children have completed the lessons.

Each pack reviews the four weeks ending at that checkpoint: **1–4, then 5–8, then 9–12**, and so on. Read those four weeks' materials, identify their main concepts, and distribute them across ten progressively harder tasks. Start with familiar single-skill practice, then combine skills and require more independent reasoning. Do not teach a new concept in a review task; earlier prerequisites may be reused.

At the current stage, tasks **01–09** supply all required blocks in deliberately wrong positions; task **10** supplies only a task comment for independent construction unless the user requests starter materials. Provide ten unfinished sources and ten matching solutions. This pack is additional to the ending week's normal five core tasks and task 06 homework, and does not consume a week number.

Keep the first pack at `odevler/ilk-04-hafta-10-seviye/`. Name later packs `odevler/hafta-AA-BB-10-seviye/`, using zero-padded start and end weeks; for example, weeks 5–8 use `odevler/hafta-05-08-10-seviye/`. Reuse and update the existing directory for a block instead of creating duplicate packs. Each pack has direct `etkinlikler/`, `cozumler/`, and `paketler/` folders, separate child and solution ZIPs, and the four complete bilingual documents described below. Link it from the ending week's English and Turkish READMEs and from the root lesson index. Do not create empty directories for future blocks.

## Files and folders

```text
haftalar/hafta-NN-short-topic/
  README.md
  README.tr.md
  INSTRUCTOR.md
  INSTRUCTOR.tr.md
  etkinlikler/
    01-task-cocuklar.js
    ...
    06-homework-cocuklar.js
  cozumler/
    01-task-cozum.js
    ...
    06-homework-cozum.js
  paketler/
    hafta-NN-cocuklar.zip
    hafta-NN-cozumler.zip
  verify_logic.cjs             # only when useful
```

Keep sources directly in the student or solution folder. Existing MakeCode `.ts` sources may retain that extension; new files should match the surrounding lesson convention. Children can work in Blocks rather than writing JavaScript.

Repository-level documentation, agent instructions, and templates remain in English. For every new weekly lesson and four-week review pack, create both language versions of both documents:

| Purpose | English | Turkish |
|---|---|---|
| Lesson overview, goals, task list, and file links | `README.md` | `README.tr.md` |
| Detailed teaching flow, prompts, hints, expected results, and test cases | `INSTRUCTOR.md` | `INSTRUCTOR.tr.md` |

All four are required. Translate the complete content and keep the pairs synchronized whenever either language changes. Do not replace a translation with a short summary. Each README links to its other-language version and its same-language instructor guide; each instructor guide links to its counterpart. Task numbering, targets, allowed changes, homework, examples, timing, and validation claims must match in both languages.

This rule applies when creating new weekly lessons and review packs. Maintain the existing bilingual documents when revising their content. Child-facing task comments inside `.js` and `.ts` remain Turkish unless the user asks otherwise. Preserve the existing Turkish directory names shown above.

## Task design and comments

Make difficulty come from sequence, repeat boundaries, and decision timing, rather than simply adding more blocks. Teach a new concept alone before combining it with known ones. Explain whether a button is an event trigger or a held-state check and whether an input is read once or on each turn.

Put the task card at the top of the child source in a starred multiline comment, followed by a blank line. It needs a short story, a measurable target, allowed edits, and test cases. Do not put the answer in the child comment. JavaScript sources do not preserve a workspace comment's size or position; those may need adjustment in MakeCode.

If the task says “move only,” the completed program must use the same blocks, conditions, constants, and repeat counts. Make any permission to change values, duplicate blocks, or search the toolbox explicit.

## Keep the repository lean

Keep only current lessons, completed solutions, current packages, and useful runnable checks. Do not add archives, backups, old package copies, deferred exercises, screenshots, or persistent control-report folders. Existing additional exercises can live directly in `etkinlikler/` and `cozumler/` with clear labels in the guide.

Keep `graphify-out/` ignored by Git. Useful verifiers should print their result and run with file-relative paths; they must not recreate `kontrol/`.

## Delivery checklist

1. Confirm task descriptions and solutions agree, including timing and input-change behavior.
2. Check that tasks 01–05 contain all and only the permitted materials, and task 06 follows the stated homework format.
3. Run checks that meaningfully cover the change. Verify newly changed block structure and comment behavior in MakeCode when applicable.
4. Build two current ZIPs: children only and solutions only. Check member counts, ZIP integrity, and exact source equality.
5. Check that the four required weekly documents are complete, that English and Turkish content agrees, and that the language-switch and source links work. Use the 8–12 audience range wherever ages are mentioned. Update the root lesson index. Do not invent progress or validation results.
6. If the week number is divisible by four, finish the weekly preparation first, then prepare and check the review pack: exactly ten child/solution pairs, increasing difficulty, coverage of the correct four-week block, tasks 01–09 supplied and task 10 independent, four bilingual documents, separate verified ZIPs, and links from the ending week and root index. Reuse an existing pack for that block.
7. Give the user a concise review summary, including the review pack when due and distinguishing local/browser evidence from physical-device testing.
8. Wait for explicit authorization before committing or pushing.
