# Week 5 — Teaching the robot's memory

[Türkçe](INSTRUCTOR.tr.md) · [Lesson overview and files](README.md)

For children aged **8–12** using micro:bit and MakeCode. The latest progress report says the children can explain both fixed repetition and the difference between IF inside and outside a loop. That supports moving to **one stored number**, without assuming that earlier difficulty with variables has disappeared.

**Tasks 01–05 are classwork; task 06 is homework.** All tasks use one visible state variable named `sayac`. No extra hardware is needed. Familiar button events, icons, pauses, fixed-count loops and IF/ELSE are reused; the only new concept is keeping and changing a value.

## Session plan and teaching decisions

Allow approximately **75–90 minutes** for the introduction, five core tasks, discussion and a short break. Treat this as a planning estimate. If the explanation is still unclear after task 03, revisit it with tokens rather than rushing into loops. Task 06 is separate homework, approximately **15–20 minutes**, after task 05 can be explained.

Use approximately 8–10 minutes for the opening, 6–8 for task 01, 8–10 for task 02, 10–12 for task 03, a short break, 10–12 for task 04, 12–15 for task 05 and 5–8 for the closing discussion. The windows allow different working speeds; completing all five in one sitting is not a pass condition.

One child builds while the other predicts and checks. Swap roles for the next task. Ask the checker for a prediction **before** running the code. After testing, both children should explain which block changed the value and what number remains stored.

The working rhythm is **predict → move → test → explain**. Offer the question-level hint first, a physical demonstration second, and a small block-location hint only if needed. Keep complete solutions out of the child project.

## Explain a variable with tokens

Put three tokens in a tray labelled `sayac`. Say: “The robot has one place where it remembers a number. We named it `sayac`. Right now it remembers three.” Ask a child to draw a heart on a separate paper: “Did drawing the heart change how many tokens are in the tray?”

Then show the distinction:

- **Set to 3:** Replace the tray's contents so that exactly three tokens remain.
- **Increase by 1:** Keep what is already there and add one token.
- **Show the value:** Read the number without changing it.
- **Set to 0:** Remove all tokens; the next increase starts from zero.

Say: “The display is a window onto the number; it is not the place that remembers it.” Showing a heart, clearing the screen or showing a different icon does not itself change `sayac`. Avoid introducing another variable or a score-and-lives game at the same time.

The variable keeps its value between button events **during the same run**. Restarting the simulator or resetting the board runs startup again: task 01 returns to 3; tasks 02–06 return to 0. This lesson does not teach permanent storage.

Children work in Blocks. The JavaScript `for` still becomes the familiar **repeat N times** block. Its technical `index` counter is not a second state variable to teach; children do not use it inside the loop or turn it into the stored count.

## File setup, task cards and shared rules

1. Open a separate MakeCode project for each task.
2. Replace the code in the JavaScript tab with the full appropriate child file from [etkinlikler/](etkinlikler/).
3. Switch to Blocks. The JavaScript is a delivery format, not a typing exercise.
4. Read the separate task-comment card together. Move or resize it if it covers the blocks.
5. Keep the matching [solution](cozumler/) in a separate adult project.

Each child file and matching solution has the same leading starred `/* ... */` card. It contains the complete Turkish task first and English equivalent second, including story, goal, rule and test. Preserve the blank line after `*/` before executable code so the description can appear as an open workspace comment. Source text does not fix the comment's size or position.

For tasks 01–05, say: “All the pieces you need are here. Reach the target by moving them. Do not add, delete or copy blocks, and do not change their values.” The toolbox is not technically locked; this is the task rule.

Keep the supplied start and button-event containers. In task 01, also leave the initial `sayac = 3` assignment in place. Other permitted pieces are deliberately misplaced. A block may drag the connected blocks underneath it too; separate the lowest needed piece first.

Task 06 contains **only the task card**, with no ready-made variable, events, loop or IF. Children choose the blocks themselves, using only learned concepts and one state variable. MakeCode may add an empty `on start` container when converting a comment-only file; that is not a supplied answer.

## Button handling and observation

Use **brief press and release** events, not held-button conditions. One press starts one attempt. Press only one button at a time and wait for **every output and pause** to finish before the next A or B press. In the longer tasks, B is a reset **between completed attempts**, not an interruption during an animation.

This rule avoids overlapping button-event runs while the children learn memory. It is a teaching constraint, not a programmed lock. Do not add another variable or an “is busy” mode to handle it this week. The sources do not promise predictable results for overlapping presses.

Use the stated small test values first. Multi-digit numbers scroll; `show number` duration is not the same as an explicit pause. In task 05, the 200 ms pause describes the **blank gap after clearing**, not the entire heart's display time. In tasks 04 and 06, the 400 ms pause is additional to preceding display calls. Do not grade exact wall-clock timing.

## 01. The remembered number — 6–8 minutes

**Say:** “PİKO remembers three. When you greet it with A, it sends a heart and then tells you the number it still remembers.”

**Target:** Startup sets `sayac` to 3 and displays it. A shows a heart and then displays `sayac`. Each new A press does the same thing; A does not increase or reset the value.

**Prediction:** “If the screen shows a heart, what number is still in the robot's memory?”

**Progressive hint:** Read the order aloud: “First the greeting, then the remembered number.” Point to the two display blocks in A only if needed. The initial assignment is fixed.

**Test:** Startup shows 3. A gives heart → 3; another A gives heart → 3 again. The final 3 stays visible. Ask the child to identify the block that reads `sayac` and explain why there is no increase.

**Completion:** The child separates showing a value from changing it. This is a deliberately small entry task, not a counting challenge.

## 02. Remember every press — 8–10 minutes

**Say:** “PİKO must remember all your A greetings. Right now it keeps saying one. Help it remember the earlier greetings too.”

**Target:** Start at 0 and display 0. Each A increases the current value by one, then displays it. There is no B reset in this task.

**Prediction:** Run the starter first. “Why does the second A still end at one? Is the old number being read, or replaced?” Trace three tokens on paper before moving blocks.

**Progressive hint:** “Which operation should happen only when the program starts?” If needed, compare setting to 0 with adding 1. The solution moves the explicit reset out of A and into startup, before the startup display.

**Test:** Restart → 0; first A → 1; second A → 2; third A → 3. Press and release separately, waiting for each display. Restart once more: expect 0, then A → 1.

**Completion:** The child explains why `set to 1` would not mean `increase by 1`, and why resetting on every A would forget earlier presses. Do not introduce B until this distinction is clear.

## 03. A new round — 10–12 minutes

**Say:** “PİKO can count a round and then start a new one. A adds one greeting. B ends the old count and prepares an empty round.”

**Target:** Start at 0 and display it. A increases by one and displays the new value. B sets the value to 0 and displays it. Both events read the same `sayac`; neither has a separate memory.

**Prediction:** “After A, A, B, A, what four numbers should appear? Does showing 0 alone erase the remembered number?”

**Progressive hint:** Use tokens for the sequence. Then ask, “Which button needs to change what is stored before showing it?” The reset belongs in B; the increase belongs in A; each display follows its change.

**Test:** From startup 0, A → 1, A → 2, B → 0, A → 1. Then B → 0 and B → 0 again. Repeated resets must not become negative or increase the count.

**Completion:** The child distinguishes setting from increasing, and the stored number from the number currently displayed. If they only move pieces by trial and error, return to this task before adding a loop.

## 04. A pack of three — 10–12 minutes

**Say:** “One A press delivers three packages together. PİKO must count each one and remember the total when the delivery ends.”

**Target:** Start at 0 and display it. A runs three rounds of [increase by one → display `sayac` → pause 400 ms]. B resets to 0 and displays it after an attempt finishes.

**Prediction:** “The loop finishes after three rounds. Does the remembered number have to return to zero? What will the next pack show?”

**Progressive hint:** Put one token down for each round. “Which three actions belong in every round? Where would a reset make us lose earlier packs?” Keep the repeat count at 3.

**Test:** First A shows 1 → 2 → 3, with a 400 ms pause after each display. After completion, the next A shows 4 → 5 → 6. B shows 0; the next A shows 1 → 2 → 3 again. Final 3 or 6 remains visible after the pause finishes.

**Completion:** The child distinguishes three rounds **in this event** from the total remembered **across events**. A loop ending does not erase `sayac`.

## 05. The fifth signal — 12–15 minutes

**Say:** “PİKO gathers signals. Before five, it waits sleepily. From the fifth signal onwards, each new signal earns a three-heart celebration. It still remembers the total.”

**Target:** Start at 0 and display it. A increases by one, then checks the new value. Below 5, show a sleeping face. At 5 or above, repeat [heart → clear screen → pause 200 ms] three times. After either branch, display `sayac`. B resets to 0 and displays it.

**Prediction:** “On the fifth A, should the decision use the old four or the new five? Does the celebration count three new signals?”

**Progressive hint:** Write the stored value before and after one A. “One press means one new signal. Which work repeats only for the celebration?” The increase happens once per A, before the IF; it must not sit inside the three-heart loop.

**Boundary tests:** From 0, each of A presses 1–4 shows sleeping → its new count. The fifth gives three separate hearts → 5; the sixth gives three separate hearts → 6. Clear the screen after every heart and wait 200 ms while it is blank. B → 0, then A → sleeping → 1.

**Completion:** The child explains why 5 belongs to the celebration branch, why 6 also celebrates, and why the count increases by one despite three hearts. **Five is a threshold, not a cap.** No block prevents further counting.

## 06. Counting station — homework, 15–20 minutes

**Say:** “The station receives packages in groups of three. After each package, PİKO shows the total and checks whether it has reached five. Build the whole station yourselves.”

**Target:** Start at 0 and display it. A performs exactly three rounds: increase by one → display `sayac` → if below 5 show a cross, otherwise a tick → pause 400 ms. After all three rounds, display `sayac` again and leave the final total visible. B resets to 0 and displays it between completed attempts.

Only one state variable is needed. The loop repeats three times, regardless of the stored total. The IF is inside the loop so that the decision uses each newly increased value. There is no heart celebration in this task.

**Before building:** Ask the child to draw three boxes for one A press and write the number and icon for each box. Do not give the arrangement of blocks. They may choose blocks from the toolbox; this task is not restricted to supplied materials.

| Completed attempt | Round outputs, in order | Final display |
|---|---|---|
| First A, starting at 0 | 1 then cross; 2 then cross; 3 then cross | 3 |
| Second A, starting at 3 | 4 then cross; 5 then tick; 6 then tick | 6 |
| Third A, starting at 6 | 7 then tick; 8 then tick; 9 then tick | 9 |
| B after an attempt | Reset and display 0 | 0 |
| A after B | 1 then cross; 2 then cross; 3 then cross | 3 |

In each round, the 400 ms pause comes after the icon. The final number display happens once after the loop. The **second A is essential**: its cross → tick → tick result reveals whether the IF is checked for each package rather than only once per group.

**Completion:** Ask why the group has three rounds even when the total is six, why the second group's icons change, and why B changes both the memory and the display. Correct output without an explanation is a reason to revisit a smaller example together, not to add another concept.

## Closing and packages

Ask each child to finish these sentences: “Showing a number does not…”, “Increasing by one means…”, “Setting to zero means…”, “The loop finishes, but the number…”. Accept explanations in their own words; do not require vocabulary recitation.

Continue only if they can predict a short A/B sequence and explain the reset-versus-increase difference. Extra difficulty this week comes from the ordering of familiar blocks, not from a second state variable, nested loops or a bigger game.

- [Child ZIP](paketler/hafta-05-cocuklar.zip): six child sources only; task 06 is comment-only.
- [Solution ZIP](paketler/hafta-05-cozumler.zip): six complete solution sources only.

Instructor documents remain outside both packages. Keep solutions with the adult until the children have attempted the tasks. The existing [weeks 1–4 review pack](../../odevler/ilk-04-hafta-10-seviye/README.md) is separate; week 5 does not trigger another four-week review pack.

## Validation scope

The [week verifier](verify_logic.cjs) passed **63 local checks using mocked MakeCode APIs**. Run `node verify_logic.cjs` from this week folder to repeat those checks. The [repository task-card checker](../../verify_task_comments.cjs) passed for **34 matching child/solution pairs, 68 source cards**; run `node verify_task_comments.cjs` from the repository root for the structural card check.

All **12 week-5 sources** converted into normal MakeCode blocks. Each had one open workspace comment, with no attached or closed task comment. Visible piece inventories matched between the first five child/solution pairs. The independent homework remained comment-only in source; MakeCode supplied its own empty `on start` container in Blocks.

The actual browser simulator showed task 03's solution starting at **0**, then **1, 2, 0, 1** for A, A, B, A. This observed sequence is separate from the larger mocked test set. **No physical-device test or real-time timing test was performed.** Do not treat source conversion or mocked output traces as physical-board evidence.

Both ZIPs passed integrity checks and exact membership checks: six unfinished sources under `etkinlikler/` in the child ZIP and six completed sources under `cozumler/` in the solution ZIP. All 12 packaged files match their current sources byte for byte. The child package contains no solutions.
