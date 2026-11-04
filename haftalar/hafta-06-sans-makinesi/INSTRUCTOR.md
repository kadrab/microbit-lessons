# Week 6 — Teaching the chance machine

[Türkçe](INSTRUCTOR.tr.md) · [Lesson overview and files](README.md)

For children aged **8–12** using micro:bit and MakeCode. The latest report says the children completed and enjoyed week 5. This is evidence of completion and engagement, not proof that every child can independently explain variables. Use the opening and task 01 to check that distinction before adding randomness.

**Tasks 01–05 are classwork; task 06 is homework.** The only new concept is generating a random integer. Every task uses one visible numeric state variable, `sayi`. Familiar button events, displays, fixed-count loops and IF/ELSE are reused. No additional state, score, custom function, `while`, sensor or extra hardware is needed.

## Session plan and roles

Allow approximately **75–90 minutes** for the warm-up, five core tasks, discussion and a short break. This is an estimate, not a deadline. If the child cannot yet distinguish reading a stored number from assigning it, spend longer on task 01 and continue the remaining tasks later. Task 06 is separate homework, approximately **15–20 minutes**, after task 05 can be explained.

Plan **5–8 minutes** for the opening, **8–10** for task 01, **10–12** for task 02, **12–15** for task 03, a short break, **12–15** for task 04, **15–18** for task 05 and **5–7** for closing. Adjust these windows to the children's explanations.

Use **predict → move → test → explain**. One child builds; the other predicts and checks. Swap roles between tasks, and ask both children to explain the result. Offer hints in stages: a question, a paper demonstration, then a small location hint. Keep the complete solution in an adult project.

## Opening: memory before chance — 5–8 minutes

Draw a box labelled `sayi` and a separate screen. Write 0 in the box. Explain that this is the same kind of numeric memory used last week; the name now describes the latest number rather than a running count.

Ask the children to predict these steps before writing the answers:

1. Increase the number in the box twice. What is stored? **2.**
2. Leave the screen untouched. Does it have to show 2? **No. Memory and display can differ.**
3. Read the box and show its value. What is stored afterwards? **Still 2.**
4. Draw a heart on the screen. What is stored now? **Still 2.**

Accept explanations in their own words. If they treat the screen as the memory, use tokens in a labelled tray and a separate paper screen before continuing. Do not infer understanding from a correct number alone.

After task 01, introduce the new block: “PİKO can choose one whole number from 1 to 6. We do not know which one comes next. It writes that result in the same memory box.” Both endpoints are included in MakeCode's `randint(1, 6)`. [Official random integer reference](https://makecode.microbit.org/reference/math/randint)

The new result can equal the previous result. A new draw means another selection, not a promise of a different number. Three draws may all match, and six draws need not show every face. Do not require all faces to appear or use a short run to judge the generator's distribution.

## File setup and shared rules

1. Open a separate MakeCode project for each task.
2. Paste the complete child source from [etkinlikler/](etkinlikler/) into the JavaScript tab, replacing existing code.
3. Switch to Blocks; JavaScript is the delivery format, not a typing exercise.
4. Read the task card together, moving or resizing it if it hides blocks.
5. Keep the matching [solution](cozumler/) in a separate adult project.

Every child/solution pair has the same leading starred `/* ... */` card: complete Turkish first and complete English second, including story, goal, rule and test. Preserve the blank line between `*/` and executable code so the card can appear as an open workspace comment. Source text cannot set its size or position.

For tasks **01–05**, all required pieces are supplied in deliberately wrong positions. Say: “Only move the pieces. Do not add, delete or copy blocks, and do not change names, numbers, conditions or repeat counts.” Preserve the **whole startup stack** and the supplied A/B event headers. Move the permitted blocks in or between event bodies, loops and branches. The toolbox is not technically locked; this is the task rule. When dragging connected blocks, separate the lowest needed piece first.

The whole startup stack sets `sayi` to **0** and displays it. Zero means the initial state, not a die result. Do not move startup into A. In tasks 03 and 06, B before the first A shows 0. Resetting the simulator or board runs startup again; the value persists between events during one run, not across resets.

The JavaScript `for` becomes the familiar fixed-count repeat block. Its unused `index` is a technical loop counter. Do not use it in the body or teach it as a second stored result.

Task **06** has **only the task card**. There are no supplied events, variable, loop, condition or fixed startup stack. Children build the required startup and behavior themselves using the learned blocks. MakeCode may add its own empty `on start` container when converting the comment; that is not a supplied answer.

## Button handling and honest observation

Use a **brief press and release**, one button at a time. Wait for the whole output and every pause to finish before any next A or B press. B recalls a value between completed attempts; do not use it during an unfinished animation. This is a teaching constraint, not a programmed lock, and the sources do not promise behavior for overlapping event runs.

The explicit 400 ms pauses are additional to the display calls. In task 05 the pause is a **blank interval after clearing the screen**; in task 06 it follows the cross or tick. Do not grade exact elapsed wall-clock time or assume the whole round lasts 400 ms.

For random tasks, predict the allowed range, operation order and decision rule, not the exact next random number. Any trace introduced with **“example”** or **“if drawn”** is conditional; it is not a promised simulator output. Paper traces can test 3 and 4 without changing the fixed blocks.

Two identical displays alone cannot prove that memory was reread: a faulty second draw could return the same value. Inspect the locations of the random blocks as well as watching output. The same issue applies to three equal values in task 05; they may be three valid draws.

## 01. Remember the memory — 8–10 minutes

**Say:** “PİKO can remember a change without announcing it. A adds one silently; B tells us the number it remembers.”

**Target:** Startup sets `sayi` to 0 and shows it. A increases `sayi` by one with no display. B displays `sayi` without changing it. This task contains no randomness.

**Starter fault:** A displays the value; B increases it. The required pieces are present, but the jobs belong to the other button. Startup stays fixed.

**Predict:** “After A, A, what is in memory? What is still on the screen? What will B show?” Expected: memory 2, screen still startup 0, then B shows 2.

**Hints:** First ask which action changes memory and which only reads it. Next trace the two A presses in the paper box without touching the paper screen. Only then point to the increase and show blocks.

**Test:** Restart → 0; B → 0. Restart again; A, A leave the screen at 0; B → 2; B → 2 again; A leaves the screen at 2; B → 3. Use separate completed presses.

**Completion:** The child can explain why an A press can change memory while the screen stays unchanged, and why repeated B presses do not increase the number. If the child only tries moves until a display looks right, repeat the paper trace before task 02.

## 02. PİKO's die — 10–12 minutes

**Say:** “PİKO rolls a die with A. It must tell us the number it just chose, not the one it remembered before.”

**Target:** Start at 0 and show it. Each A generates one integer from 1–6, assigns it to `sayi`, then displays `sayi`. There is no B action in this task.

**Starter fault:** A shows the stored value before generating and assigning the next result. On the first A it shows the initial 0, even though the draw itself is in 1–6.

**Predict:** “If we read the box before putting the new number into it, which result do we announce?” Ask for the range of the next correct A output; do not ask for an exact number.

**Hints:** Use the phrase “choose → remember → tell.” Demonstrate replacing the number in the paper box before copying it to the paper screen. If still needed, point to the order of the assignment and display in A.

**Test:** Restart shows 0. The first A and every later completed A must display a value from 1–6. Inspect that one random block executes before the display per press. Repeated values are valid. **Example only:** if the draws are 4, 4 and 1, three A presses display 4, 4 and 1.

**Completion:** The child explains why startup 0 is allowed but a completed A must not display 0, and why a second 4 can be a new valid draw. There is one stored result, not a separate random value for the screen.

## 03. Remember the result — 12–15 minutes

**Say:** “PİKO shows a die result, then sends a heart. The heart covers the screen, but it must not erase the result. B asks PİKO to remember it.”

**Target:** Start at 0 and show it. A generates a result, stores it, shows it and then shows `Heart`. B only displays the stored result and leaves the number visible. A ends with the heart; B ends with the number.

**Starter fault:** A shows the old value and a heart; B generates a result and shows it. Move the random assignment to the event that starts a new draw, before its display. Keep both displays and the heart.

**Predict:** “The heart is showing. Has the number in the box changed? Should asking B twice roll the die again?”

**Hints:** Cover the paper screen with a drawn heart while keeping the memory box visible. Ask which button chooses and which button recalls. Only then locate the random assignment in the wrong event.

**Test:** Restart → 0; B → 0 before any A. Press A and remember the number shown before the heart; B must show that number, and another B must show it again. Inspect that B contains only the display and no random draw. **Example only:** if A draws 5, the sequence is 5 → heart; B → 5; B → 5. A later A may also draw 5; this is valid.

**Completion:** The child distinguishes the last displayed icon from the stored number, and explains why matching B outputs alone do not prove the code is right. Recalling a value must not generate another value, even if an accidental extra draw could match.

## 04. The lucky number — 12–15 minutes

**Say:** “PİKO calls 4, 5 and 6 lucky. It shows the result first, then reacts to that same result.”

**Target:** Start at 0 and show it. A assigns one random result from 1–6 to `sayi`, shows it, then checks `sayi < 4`. Show `Sad` for 1–3 and `Happy` for 4–6. The face remains visible at the end. There is no B action.

**Starter fault:** The assignment, display and empty IF/ELSE are already available; the happy and sad icons sit outside their branches. Move the correct icon into each branch. Keep the condition, range and startup unchanged.

**Predict:** “If the stored number is 3, is it below 4? What about exactly 4?” Trace both cases on paper without changing the task's fixed values.

| If this result is drawn | Check | Expected output |
|---|---|---|
| 1, 2 or 3 | `sayi < 4` is true | Number → sad face |
| 4, 5 or 6 | `sayi < 4` is false | Number → happy face |

**Hints:** Sort six numbered paper cards into “below 4” and “otherwise.” Ask where 4 belongs. Then point to the two empty branches. Never generate a separate random number in the condition.

**Test:** Observe several completed A presses and check each visible number against its face. Use the paper cases **3 → sad** and **4 → happy** for the boundary; do not wait for a guaranteed random sequence or alter the fixed blocks to force it. Inspect that the display and IF both read `sayi` after the same single assignment.

**Completion:** The child explains why 4 takes the happy branch and why drawing again inside IF could make the face disagree with the displayed number.

## 05. Three rolls — 15–18 minutes

**Say:** “One A press makes PİKO roll three times. We need a new choice on every turn, then a reminder of the final result.”

**Target:** Start at 0 and show it. A repeats exactly three rounds of [generate and assign `sayi` → show `sayi` → clear the screen → pause 400 ms]. After the loop, show `sayi` once more and leave it visible.

**Starter fault:** The random assignment is before the loop. The loop shows, clears and pauses three times; the final display is already after it. This draws once and presents the same draw repeatedly. Move the assignment inside the loop before its display; do not add another random block.

**Predict:** “Which action must happen on each of the three turns? How many random choices happen if the random block stays before the repeat?”

**Hints:** Draw three round boxes on paper and mark one selection in each. Contrast one selection copied three times with three selections that happen to match. Then ask whether the random assignment belongs inside the repeat boundary.

**Conditional examples:** If the three draws are **1, 6, 2**, see 1 → blank, 6 → blank, 2 → blank, then final 2. If the draws are **4, 4, 2**, see 4 → blank, 4 → blank, 2 → blank, then final 2. Each blank interval has the explicit 400 ms pause. A draw sequence of 4, 4, 4 is valid too.

**Test:** Count three draw displays separated by blank gaps, followed by one final recall display. Inspect that the single random block is inside the three-repeat loop and that the final display is outside it. Run another completed A: it starts three new draws, which may match earlier values. There is no B action.

**Completion:** The child explains **three draws, not necessarily three distinct numbers**, and **four number displays but only three draws**. The fourth display reads the third result. Repeated output alone cannot prove whether the assignment is correctly inside the loop; inspect the blocks.

## 06. PİKO the treasure hunter — homework, 15–20 minutes

**Say:** “PİKO checks three chests with A. Each chest gets one number. Below 4 there is no treasure; from 4 onwards there is treasure. Build the machine yourselves, and let B recall the last chest's number.”

**Target:** Create startup that sets `sayi` to 0 and displays it. A runs exactly three rounds: generate and assign a result from 1–6 → display `sayi` → if `sayi < 4` show `No` (cross), otherwise `Yes` (tick) → pause 400 ms. After the loop, display the last `sayi` once. B displays that stored value without changing it or drawing again. B before the first A shows 0.

Only the task card is supplied. Children may select blocks from the toolbox; the move-only rule does not apply to this independent task. Use just the one state variable and learned concepts. There is no score to accumulate and no requirement to remember all three results: `sayi` keeps only the latest one.

**Before building:** Ask for three paper boxes, one per round, and a separate final-display box. Have the child describe where the new result is stored and which result the condition must read. Do not give the block arrangement. If needed, ask “Which actions happen three times, and which happen once afterwards?”

| Conditional example, not a promised draw sequence | Round outputs | Final display and later B |
|---|---|---|
| Draws are 3, 4, 6 | 3 → cross; 4 → tick; 6 → tick | 6; B shows 6 again |
| Draws are 3, 3, 4 | 3 → cross; 3 → cross; 4 → tick | 4; B shows 4 again |
| Draws are 5, 5, 5 | 5 → tick; 5 → tick; 5 → tick | 5; B shows 5 again |
| B before the first A | No draw | 0 |

The 400 ms pause follows each icon; unlike task 05, the task does not ask for a blank gap. The final display follows all three rounds and reads the third result. It is not a fourth draw. A later A starts another three draws; their numbers are not predetermined.

**Tests and completion:** Check startup and B-before-A 0; three rounds per A; number and icon agreement on every round; paper boundaries 3 → cross and 4 → tick; one final number after the loop; repeated B calls recalling that same number. Inspect that random generation and IF are both inside the loop, that the IF uses the displayed stored value, and that B has no random assignment. The child should explain why a new draw can repeat, why the condition belongs inside the loop, and why no second variable is needed.

## Closing and packages

Ask each child to complete: “A new draw can…”, “Showing a heart does not…”, “The number and the IF use…”, “Three draws can give…”, “B remembers by…”. Accept clear explanations in their own words. Proceed based on prediction and explanation, not just completed code.

- [Child ZIP](paketler/hafta-06-cocuklar.zip): six child sources only; task 06 is comment-only.
- [Solution ZIP](paketler/hafta-06-cozumler.zip): six completed solutions only.

Keep instructor documents outside both source ZIPs and solutions with the adult until the children have attempted the tasks. Week 6 is not a review-pack checkpoint. The [weeks 1–4 review pack](../../odevler/ilk-04-hafta-10-seviye/README.md) remains separate; the next pack covers weeks 5–8 when week 8 is prepared.

## Validation scope

The [week verifier](verify_logic.cjs) passed **3,182 local checks using mocked MakeCode APIs**. Run `node verify_logic.cjs` from this week folder to repeat them. These checks cover supplied draw streams, including equal consecutive results, boundary decisions and the number of random calls; they do not establish the real generator's distribution, real-time timing or physical-device behavior.

The [repository task-card checker](../../verify_task_comments.cjs) passed for **40 matching child/solution pairs and 80 source cards**. Run `node verify_task_comments.cjs` from the repository root for this structural check. Required headings and matching cards do not by themselves prove translation quality or device behavior.

All **12 week-6 sources** converted into native MakeCode blocks, each with one open workspace task comment. Visible block inventories matched between the first five child/solution pairs. The homework child source remained comment-only; the editor supplied its own empty `on start` container.

One actual browser-simulator spot check of **solution 03** showed startup **0**, B before any A **0**, then A **3 → heart**, B **3**, and a second B **3**. This is one observed sequence, separate from the broader mocked checks and the conversion checks. It is not functional simulator coverage of all six tasks or a promised random result. **No physical-device, real-time timing or statistical randomness test was performed.**

Both ZIPs passed CRC integrity checks and exact membership checks: six intended JS sources under `etkinlikler/` in the child ZIP and six under `cozumler/` in the solution ZIP. Every member matched its current source byte for byte. The child ZIP contains no solutions.
