# Week 6 — The chance machine: random numbers

[Türkçe](README.tr.md) · [Instructor guide](INSTRUCTOR.md)

**Audience:** Children aged **8–12** using micro:bit and MakeCode. The latest report says the children completed and enjoyed week 5. That supports this next step, but does not by itself establish independent mastery of variables. Begin with a short prediction and explanation check.

**Learning goal:** Generate a random integer once, keep it in one numeric variable named `sayi`, and use that same value when displaying, recalling or checking it. Random integers are the only new concept. Familiar button events, variables, icons, fixed-count `for` loops and IF/ELSE are reused. Children work in Blocks; JavaScript files deliver the task cards and supplied pieces.

## Five core tasks and one homework task

Every completed task starts by setting `sayi` to **0** and showing it. Zero is the initial state before an action, not a die result. Tasks 02–06 generate results from **1 through 6, including both endpoints**. [MakeCode random integer reference](https://makecode.microbit.org/reference/math/randint)

| Task | Role | Story and observable target | Files |
|---|---|---|---|
| 01 — Remember the memory | Classwork | A increases the stored number by one without displaying it. B displays the stored number without changing it. | [Child](etkinlikler/01-hafizayi-hatirla-cocuklar.js) · [Solution](cozumler/01-hafizayi-hatirla-cozum.js) |
| 02 — PİKO's die | Classwork | A generates one result from 1–6, stores it and then displays that new result. | [Child](etkinlikler/02-pikonun-zari-cocuklar.js) · [Solution](cozumler/02-pikonun-zari-cozum.js) |
| 03 — Remember the result | Classwork | A generates and displays a new result, then shows a heart. B recalls the stored result and leaves the number visible. | [Child](etkinlikler/03-sonucu-unutma-cocuklar.js) · [Solution](cozumler/03-sonucu-unutma-cozum.js) |
| 04 — The lucky number | Classwork | A generates and displays one result. Show a sad face for 1–3 and a happy face for 4–6, checking the same stored value. | [Child](etkinlikler/04-sansli-sayi-cocuklar.js) · [Solution](cozumler/04-sansli-sayi-cozum.js) |
| 05 — Three rolls | Classwork | A repeats [generate → store → display → clear → pause 400 ms] three times. After the loop, display the last stored result once more. | [Child](etkinlikler/05-uc-atis-cocuklar.js) · [Solution](cozumler/05-uc-atis-cozum.js) |
| 06 — PİKO the treasure hunter | Homework | A performs three rounds: generate and store a result, display it, show a cross below 4 or a tick otherwise, then pause 400 ms. After the loop, display the last result. B recalls it. | [Child](etkinlikler/06-hazineci-piko-cocuklar.js) · [Solution](cozumler/06-hazineci-piko-cozum.js) |

Tasks **01–05** supply all required blocks in deliberately incorrect positions. **Move only:** do not add, delete or duplicate blocks, and do not change names, values, conditions or repeat counts. Keep the supplied startup initialization and initial display, and preserve the button-event containers. Task **06** supplies only the bilingual task card; children choose the learned blocks themselves.

Use only one visible state variable, `sayi`. In task 01 it recalls last week's counting idea; in the remaining tasks it stores the latest random result. The familiar repeat block's JavaScript `index` is an unused technical loop counter, not a second state variable to teach. There are no custom functions, `while` loops, sensors, extra hardware, scores or additional state.

## What randomness means here

The child cannot predict the next exact die result. A new draw **may equal the previous draw**. Three draws need not be three different numbers, and six draws need not include every face. A result repeating is not evidence that a program is wrong.

Assigning a generated result writes into `sayi`, even when it equals the old value; reading it, showing a heart or clearing the display does not write into it. B in tasks 03 and 06 only reads the stored number. B before the first A shows **0**. Seeing the same number after B is useful but cannot prove that B did not draw again: a mistaken extra draw could coincidentally match. Inspect the blocks as well.

Examples of random traces in the instructor guide are labelled **examples or conditional cases**, not promised simulator sequences. Use paper traces for the boundary values 3 and 4 without changing fixed blocks. In task 05, a blank gap separates the three draw displays, making repeated numbers observable. The final fourth number display recalls the third result; it is not a fourth draw.

## Session and completion

Allow approximately **75–90 minutes** for the warm-up, five core tasks, discussion and a short break. This is a planning estimate; do not rush an explanation to finish all five in one sitting. Task 06 is separate homework, approximately **15–20 minutes**, after task 05 can be explained.

Use **predict → move → test → explain**, swapping builder and checker roles between tasks. Start with a **5–8 minute** memory warm-up. Ask what is stored even when it is not displayed, which block changes it, and whether showing an icon changes the remembered number. If that distinction is unclear, spend more time on task 01 before introducing a random draw.

**Input rule for every task:** Briefly press and release one button at a time. Wait for the complete output and all pauses to finish before pressing A or B again. This is a teaching rule, not a programmed lock; overlapping events are outside this week's scope. B recalls a result between completed attempts, not during an unfinished animation.

`sayi` persists between events during the same program run. Restarting the simulator or resetting the board runs startup again and returns it to 0. This is not permanent storage. The 400 ms pauses are additional to display calls; do not grade exact elapsed wall-clock time.

## Files and opening in MakeCode

- [Full instructor guide, prompts, hints and test cases](INSTRUCTOR.md)
- [Child sources](etkinlikler/) and [completed solutions](cozumler/)
- [Child ZIP — six unfinished sources](paketler/hafta-06-cocuklar.zip)
- [Solution ZIP — six completed sources](paketler/hafta-06-cozumler.zip)

Open a separate project for each task. Paste the complete child file into MakeCode's JavaScript tab, replacing existing code, then switch to Blocks. Keep the solution in a separate adult project. These sources are not files to copy directly onto the micro:bit drive.

Each child/solution pair starts with the same task card: Turkish first, then the complete English equivalent. Preserve the blank line after `*/` and before executable code so the task can appear as an open workspace comment. Move or resize the card if needed; source text does not fix its size or position. Task 06 has no executable starter; MakeCode may supply an empty `on start` container when converting it.

## Validation scope

The [week verifier](verify_logic.cjs) passed **3,182 local checks using mocked MakeCode APIs**. The [repository task-card checker](../../verify_task_comments.cjs) passed for **40 matching child/solution pairs and 80 source cards**. The latter is a structural check, not a translation-quality or device test.

All **12 week-6 sources** converted into native MakeCode blocks, each with one open workspace task comment. The first five child/solution pairs had matching visible block inventories. The homework child source remained comment-only; the editor supplied an empty `on start` container.

One actual browser-simulator spot check of **solution 03** showed startup **0**, B-before-A **0**, A showing **3 → heart**, then B **3** and a second B **3**. This is one observed sequence, not functional simulator coverage of all six tasks or a promised random result.

Both ZIPs passed CRC integrity checks, contain exactly six intended JS files under their respective `etkinlikler/` or `cozumler/` prefix, and match all current source files byte for byte. The child ZIP contains no solutions. **No physical-device, real-time timing or statistical randomness test was performed.**

Week 6 is not a four-week review checkpoint. The existing [weeks 1–4 review pack](../../odevler/ilk-04-hafta-10-seviye/README.md) remains separate. The next review pack covers weeks 5–8 when week 8 is prepared.
