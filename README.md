# micro:bit lessons

MakeCode learning materials for children aged 8–12. Weekly lessons and cumulative homework are separate. Repository and agent documentation is in English. All four existing weeks and the cumulative homework pack include their README and instructor guide in both English and Turkish. New weekly lessons and review packs must provide the same bilingual documents. Task cards inside MakeCode source files remain in Turkish.

## Weekly lessons

| Week | Topic | Material | Turkish guide |
|---|---|---|---|
| [1 — Getting started](haftalar/hafta-01-tanisma/README.md) | LED icons and A/B button events | A reconstructed introductory lesson note; no original standalone source files were found. | [Türkçe](haftalar/hafta-01-tanisma/README.tr.md) |
| [2 — Introduction to conditions](haftalar/hafta-02-kosullara-giris/README.md) | One `if`, then `if/else` | Two introductory tasks, an optional two-button challenge, and three clearly labelled additional exercises. | [Türkçe](haftalar/hafta-02-kosullara-giris/README.tr.md) |
| [3 — IF/ELSE puzzles](haftalar/hafta-03-if-else-bulmacalari/README.md) | Combining and nesting decisions | Five core tasks and task 6 as homework. | [Türkçe](haftalar/hafta-03-if-else-bulmacalari/README.tr.md) |
| [4 — Repetition workshop](haftalar/hafta-04-tekrar-atolyesi/README.md) | Fixed-count `for`, then `for` with `if/else` | Five core tasks and task 6 as homework. | [Türkçe](haftalar/hafta-04-tekrar-atolyesi/README.tr.md) |

New weekly lessons follow the **five core tasks + one homework task** format. The smaller introductory weeks have not been expanded or presented as newly completed six-task lessons.

## Review homework every four weeks

After completing the preparation for weeks **4, 8, 12, and each later multiple of four**, prepare a separate **ten-task review pack**, progressing from easy to hard. Each pack covers the four-week block ending there: weeks 1–4, then 5–8, then 9–12. It is additional to the week's five core tasks and task 06 homework and does not consume a new week number. No separate request for the review pack is needed when preparing a checkpoint week.

The [ten-level review pack](odevler/ilk-04-hafta-10-seviye/README.md) ([Türkçe](odevler/ilk-04-hafta-10-seviye/README.tr.md)) combines skills from the first four weeks. **It is not week 5.** The first nine levels provide the required pieces; level 10 is built independently.

Keep that existing pack in place. Later packs use `odevler/hafta-AA-BB-10-seviye/`, for example `odevler/hafta-05-08-10-seviye/`, with the same bilingual documents and student/solution/package split. Reuse a pack already present for a block instead of creating duplicates.

## Directory layout

All existing weeks and cumulative homework use the following bilingual document layout, which is also required for new weeks. Both languages share the same student sources, solutions, and packages.

```text
README.md              # English overview
README.tr.md           # Turkish overview
INSTRUCTOR.md          # English teaching instructions
INSTRUCTOR.tr.md       # Turkish teaching instructions
etkinlikler/           # unfinished sources for children
cozumler/              # completed solutions for adults
paketler/              # current student and solution ZIPs
verify_logic.cjs       # useful logic checks, where available
```

Open a child's source file, paste its complete contents into MakeCode's JavaScript view, and switch to Blocks. The source files are not files to copy directly to the micro:bit drive. Keep solutions with the adult until the children have attempted the task.

Preserve the blank line between a leading `/* ... */` task comment and executable code. The comment can appear as an open workspace card; its size and position may need adjustment. Additional week-2 exercises use their original fill-in format rather than the ready-block rule; see that week's guide.

## Repository rules

- [Agent instructions](AGENTS.md), [workflow](agent/README.md), and [weekly template](agent/LESSON_TEMPLATE.md) define how to prepare future material.
- Each new week and four-week review pack requires `README.md` and `INSTRUCTOR.md` in English, plus `README.tr.md` and `INSTRUCTOR.tr.md` in Turkish, with complete equivalent content and working links between languages.
- Student files, solutions, and ZIP packages are kept separate.
- There are no retained archives, backups, legacy delivery copies, or `kontrol/` report folders.
- Useful checks remain as runnable scripts at lesson roots. They print results without creating report directories.
- `graphify-out/` is generated tooling output and is excluded by `.gitignore`.

## Validation and review

The source programs were preserved while their locations changed. The retained logic checks use mocked MakeCode APIs; they do not establish physical-device behavior. Run a lesson's verifier with `node path/to/verify_logic.cjs` when checking a relevant change.

During the earlier directory reorganization, all four retained verifier scripts passed. The eight ZIP packages were checked for integrity and exact equality with their 56 source files. Relative Markdown links and the student/solution folder split were also checked. The subsequent Turkish documentation update checked document completeness and relative links, and confirmed that all source files, verifier scripts, and ZIP packages remained unchanged. No new browser or physical-device test was performed for these directory and documentation changes.

**Publishing policy: commit or push only when explicitly authorized by the user.**
