# Week 5 — The robot's memory

[Türkçe](README.tr.md) · [Instructor guide](INSTRUCTOR.md)

**Audience:** Children aged 8–12 using micro:bit and MakeCode. The learners can explain fixed repetition and the difference between an IF inside and outside a loop. This week introduces **one variable: a number the robot remembers and can change**. Earlier difficulty with variables is addressed through a single visible state variable, `sayac`, and small observable steps.

Start by reading a stored value, then distinguish setting a value from increasing it, and finally combine that memory with familiar repetition and conditions. Children work in Blocks; the JavaScript files load the task cards and supplied pieces.

## Five core tasks and one homework task

| Task | Role | Story and observable target | Files |
|---|---|---|---|
| 01 — The remembered number | Classwork | Start at 3. A shows a heart, then the remembered 3; showing an icon does not change the number. | [Child](etkinlikler/01-hatirlanan-sayi-cocuklar.js) · [Solution](cozumler/01-hatirlanan-sayi-cozum.js) |
| 02 — Remember every press | Classwork | Start at 0. Each A press adds one and displays the new value: 1, 2, 3. Repair the reset that makes every press show 1. | [Child](etkinlikler/02-her-basisi-hatirla-cocuklar.js) · [Solution](cozumler/02-her-basisi-hatirla-cozum.js) |
| 03 — A new round | Classwork | A adds one and displays it; B resets to 0 and displays 0. After a reset, A starts counting from 1 again. | [Child](etkinlikler/03-yeni-tur-cocuklar.js) · [Solution](cozumler/03-yeni-tur-cozum.js) |
| 04 — A pack of three | Classwork | A repeats [add one → display the value → pause 400 ms] three times. Successive A presses reach 3, then 6. B resets. | [Child](etkinlikler/04-uclu-paket-cocuklar.js) · [Solution](cozumler/04-uclu-paket-cozum.js) |
| 05 — The fifth signal | Classwork | A adds one. Below 5, show a sleeping face; at 5 or above, blink three hearts, with a 200 ms blank gap after each. Finish by displaying the value. B resets. | [Child](etkinlikler/05-besinci-sinyal-cocuklar.js) · [Solution](cozumler/05-besinci-sinyal-cozum.js) |
| 06 — Counting station | Homework | A performs three rounds: add one, display it, show a cross below 5 or a tick at 5 or above, then pause 400 ms. Finish by displaying the value. B resets. | [Child](etkinlikler/06-sayim-istasyonu-cocuklar.js) · [Solution](cozumler/06-sayim-istasyonu-cozum.js) |

Tasks 01–05 supply every required block in deliberately wrong positions. **Move only:** no additions, deletions, duplication or value changes. Preserve the supplied start and button-event containers; task 01's initial assignment of 3 is fixed. Task 06 supplies only a bilingual task card; children select the required blocks themselves.

The only new teaching concept is `sayac`: set, read, increase and reset one number. Fixed-count loops still use the familiar “repeat N times” block. Their JavaScript `index` is a technical loop counter, not a second state variable to teach. There are no new sensors, extra hardware, custom functions, random values or `while` loops.

## Session and completion

Allow approximately **75–90 minutes** for the introduction, the five core tasks, discussion and a short break. This is an estimate, not a requirement to finish all five in one sitting. Task 06 is separate homework, approximately **15–20 minutes**, after the child can explain task 05. Swap builder and checker roles between tasks.

Use **predict → move → test → explain**. Begin with physical tokens: putting exactly three tokens in a tray is different from adding one to those already there. A correct display is not enough; ask what value the robot remembers and which block changes it.

**Input rule for every task:** Briefly press and release one button at a time. Wait for the whole output sequence to finish before pressing A or B again. B resets between completed attempts; it is not an emergency stop during an animation. Button-event overlap is outside this week's scope.

`sayac` remains available between button events while the program runs. Restarting the simulator or resetting the board runs the startup code again; this is not permanent storage. Counts are not capped at 5: task 05 celebrates again at 6, and task 06 continues to 7, 8 and 9. Multi-digit numbers scroll; use the small test values in the guide first.

## Files and opening in MakeCode

- [Full instructor guide, prompts and expected tests](INSTRUCTOR.md)
- [Child sources](etkinlikler/) and [completed solutions](cozumler/)
- [Child ZIP — six unfinished sources](paketler/hafta-05-cocuklar.zip)
- [Solution ZIP — six completed sources](paketler/hafta-05-cozumler.zip)

Open a separate project for each task. Paste one complete child file into MakeCode's JavaScript tab, replacing existing code, then switch to Blocks. Keep the solution in a separate adult project. These source files are not files to copy directly onto the micro:bit drive.

Every source begins with the same task card as its matching solution: Turkish first, followed by the complete English translation. Preserve the blank line between the closing `*/` and executable code so the task can appear as an open workspace comment. Move or resize the card if needed; source text cannot fix its size or position. The homework file has no executable starter; MakeCode may add an empty `on start` container when converting it.

## Validation scope

The [week verifier](verify_logic.cjs) passed **63 local checks using mocked MakeCode APIs**. The [repository task-card checker](../../verify_task_comments.cjs) passed for **34 matching child/solution pairs, 68 source cards**. All **12 week-5 sources** converted into normal MakeCode blocks, each with one open workspace comment and no attached or closed task comment; the first five child/solution pairs had matching visible piece inventories. The comment-only homework converted with MakeCode's own empty `on start` container.

In the browser simulator, task 03's solution showed startup **0**, followed by **1, 2, 0, 1** for A, A, B, A. This is one observed simulator sequence, separate from the broader mocked checks. **No physical-device test or real-time timing test was performed.**

Both ZIPs passed integrity checks, contain exactly six files in their respective student or solution folder, and match all 12 current source files byte for byte. The child ZIP contains no solutions.

Week 5 is not a four-week review checkpoint. The existing [weeks 1–4 review pack](../../odevler/ilk-04-hafta-10-seviye/README.md) remains separate from this week's homework.
