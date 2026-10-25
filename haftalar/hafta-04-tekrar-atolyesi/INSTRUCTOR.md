# Week 4 — PİKO's repeat workshop

[Türkçe](INSTRUCTOR.tr.md) · [Lesson overview](README.md)

For two children aged 8–12 using micro:bit and MakeCode. This week's new concept is **repeating a fixed number of times**. The first three tasks focus on repetition and sequence; the next three combine repetition with familiar IF/ELSE decisions. No extra hardware is needed. **Tasks 1–5 are the core classwork; task 6 is homework.**

## Opening the session

Allow 10–15 minutes for the previous week's homework, **Space gate shifts**. If the children get stuck, return to the supplied-block **Night base** task and trace one decision path together. Keep this opening short enough to leave time for the new concept.

Use the five core tasks as a pool for approximately 75–90 minutes of classwork, including discussion and a break after task 3. If task 5 needs another supervised session, allow that time. Assign task 6 separately as homework; completing all six on the same day is unnecessary.

One child builds and the other checks each task; swap roles on the next one. The checker predicts the result before running it. Both children should explain at least once which pieces repeat.

## Explain the new concept in two minutes

“Clap three times, then put your hands on your head.” Do it together. “We clapped three times. We put our hands on our heads only once. The robot also needs to separate the work it repeats from the work it does afterwards.”

**Forever:** Keep doing the work inside. **Repeat 3 times:** Do the work inside for three rounds, then move to the next block below. Every show in this lesson ends, and its final icon stays on screen.

Children work with the **repeat N times** block in Blocks view. Its JavaScript form is `for (let index = 0; index < 3; index++)`. The source's `index` is the technical counter for repetition; this lesson does not separately teach variables, counters or `index++`. Do not say “there are no variables in the files”; say **the children do not create a separate variable**.

Before each task, ask three questions: “What happens in one round? How many rounds are there? What happens after the repetition finishes?” There is no IF in the first three tasks. Familiar decision blocks return in task 4. [MakeCode repeat reference](https://makecode.microbit.org/blocks/loops/repeat)

## File setup and shared rules

1. Open a separate MakeCode project for each task.
2. Paste the **entire contents** of the appropriate `-cocuklar.js` file from [etkinlikler/](etkinlikler/) into the JavaScript tab, replacing all existing code.
3. Switch to **Blocks**. Children do not need to write JavaScript; the file loads the prepared pieces.
4. The task description appears as a separate, open comment card. You can collapse it after reading. If it overlaps blocks, drag its top bar into an empty area; resize it from the bottom-right corner if needed.
5. Keep the [solution file](cozumler/) in a separate adult project.

Each child file begins with a `/* ... */` task comment. In the first five files, there is **one blank line** between `*/` and the code: preserve it. This lets MakeCode show the description as an open workspace comment instead of attaching it to a block as a collapsed comment. JavaScript does not fix the card's screen position or size.

**For tasks 1–5, say:** “Every piece is here. Do not add, delete or duplicate blocks, or change the supplied numbers. Reach the target by moving the pieces.” The toolbox is not technically locked; this is an activity rule.

Keep the A-button starter in the first five tasks. **In tasks 4 and 5, the initial surprised face plus 1000 ms pause is also a fixed preparation section.** Other pieces are misplaced. Dragging a block may bring the pieces beneath it too; separating the bottom piece first often helps.

**Task 6 contains only its task comment.** It provides no starter, loop or IF; the children choose every block from the toolbox. MakeCode may add an empty `on start` block when converting a comment-only file to Blocks. That is not a supplied solution component.

## A starts; B chooses

Only A is used in the first three tasks. **Press and release A briefly** to start the show. Wait for the finale before starting the same show again with A.

For every attempt at tasks 4–6:

1. Release both buttons.
2. Press and release A briefly.
3. While the surprised preparation face is showing, choose whether to hold or release B.
4. Do not press A again until the show has ended. Start a new attempt after the final icon.

A is the event that starts the show. The B check asks, “Is B held right now?” Do not hold B in advance and try to start with A+B. [A-button event reference](https://makecode.microbit.org/reference/input/on-button-pressed), [button-held reference](https://makecode.microbit.org/reference/input/button-is-pressed)

In tasks 4 and 6, change B **during the blank-screen pause**; the next round reads the new choice at its start. Changing B while an icon is showing does not immediately change that icon. On a physical board, one child can start the show and the other control B; then swap.

## 1. Three hearts, one greeting — classwork, 6–8 minutes

**Say:** “PİKO will send three hearts. Each heart should go out, with a short gap afterwards. After all three hearts, show a tick and finish the message.”

**Target:** Repeat [heart → clear screen → blank pause of 400 ms] three times, then show a single tick. The supplied tick is mistakenly inside the loop.

**Ask:** “How many ticks would we see if the tick stayed inside the loop? What must happen between hearts so that we can count three separate hearts?”

**Test:** Count three hearts, three gaps and one final tick. The finale must not automatically change back to a heart. Pressing A again should start the same show again.

## 2. PİKO's dance rehearsal — classwork, 7–10 minutes

**Say:** “First, PİKO says it is ready once. Then it performs its happy-and-surprised dance three times. When the dance ends, it goes to sleep.”

**Target:** One tick → three repetitions of [happy → surprised] → one sleeping face. Do not add a pause block in this task.

**Ask:** “Does one round contain one face or two? How many dance faces will we see after three rounds?”

**Test:** One opening tick, three happy faces, three surprised faces and one closing sleeping face. Happy and surprised must alternate. The actions before and after the loop each happen only once.

## 3. Two-part space message — classwork, 8–12 minutes

**Say:** “The space receiver expects two large hearts, then three small hearts. Their order matters just as much as their counts. Show a tick when the message ends.”

**Target:** Twice [large heart → clear → blank pause of 300 ms], followed by three times [small heart → clear → blank pause of 700 ms], then one tick. The two loops run in sequence, not inside one another.

**Ask:** “Is putting one loop inside another the same as putting them one after the other? Can the second part start before the first part finishes?”

**Test:** Large, large, small, small, small: count five hearts in total. The gaps between small hearts should be longer. The tick appears only after both parts have finished.

## 4. The robot that asks three times — classwork, 10–15 minutes

**Say:** “PİKO asks you again in each of three rounds. If B is held at the start of that round, it shows a heart; otherwise, a cross. You may change your answer between rounds.”

**Target:** After the fixed preparation, run three rounds. Each round checks B → shows heart or cross → clears the screen → waits blank for 1000 ms. Show a tick after all three rounds.

**Ask:** “Should the B question go inside the loop? If we change our minds for the second round, when does the robot find out?”

**Test:** Expect three crosses with B released throughout, then three hearts with B held from the preparation onwards. Next, use these changing choices:

| Round | B at the start of the round | Expected icon |
|---|---|---|
| 1 | Released | Cross |
| 2 | Held | Heart |
| 3 | Released | Cross |

Change B while the screen is blank. **The changing-input test is essential:** if B never changes, an incorrect solution with IF outside the loop may appear correct.

## 5. Choose the route once — classwork, 12–15 minutes

**Say:** “This robot does not ask every round. It chooses its route once, after the preparation. If B is held, it sends three hearts; otherwise, it sends two sad faces. Even if you change B later, it finishes the show it chose.”

**Target:** Fixed preparation → one IF/ELSE → three hearts or two sad faces in the selected branch → a shared final tick. After each icon, clear the screen and wait blank for 700 ms. The loops are not nested; **only one loop runs on each attempt**.

**Ask:** “We asked the B question three times in task 4. Why should we ask it only once here? Why does the other route not run?”

**Test:** Hold B during preparation, then release it after the first heart; all three hearts should still appear. In a new attempt, leave B released during preparation, then hold it after the first sad face; both sad faces should still appear. Both attempts end with one tick.

IF sits **outside the loops** here. The loop inside the selected branch completes; B is not read again, so the route does not change. No separate variable is needed to store the choice.

## 6. Space patrol checkpoints — homework, 15–20 minutes

**Say:** “PİKO checks three gates, then two passengers. It makes a fresh decision at every check. This time you build the program yourselves. Draw its two parts on paper first.”

**Target:** Start with A → surprised face and 1000 ms preparation → three gate checks → one sleeping face and 1000 ms intermission → two passenger checks → one final tick.

At the start of each gate round, show a heart if B is held and a cross otherwise. For passengers, show happy if B is held and sad otherwise. After every check icon, clear the screen and wait blank for 1000 ms. Run the two loops in sequence, with an IF/ELSE inside each. Do not create a separate score or counter.

**Ask:** “How many decisions will we make altogether? Which two sections should the sleeping intermission separate? Which loop should contain the final tick?” The answer to the last question is neither; the tick follows both sections.

**Test:** With B released throughout, expect three crosses followed by two sad faces. With B held from preparation onwards, expect three hearts followed by two happy faces. Then try changing the choices:

| Section | B at successive round starts | Check icons |
|---|---|---|
| Three gates | Released → held → released | Cross → heart → cross |
| Two passengers | Held → released | Happy → sad |

There are **five B checks** in total. Do not include the preparation, intermission or final icons in that count. The intermission and finale each appear once. Change B during blank screens; the sleeping intermission also gives time to prepare for the second section.

## Timing and completion criteria

In these files, `show icon` uses its default duration of approximately **600 ms**; the following pause adds to it. For example, in task 1 the heart appears for about 600 ms, then the cleared screen stays blank for 400 ms. Do not say, “The heart lights up for 400 ms.” A check round in tasks 4 and 6 takes about 600 + 1000 = 1600 ms. The preparation face also stays visible during the additional 1000 ms pause. [Show-icon reference](https://makecode.microbit.org/reference/basic/show-icon), [pause reference](https://makecode.microbit.org/reference/basic/pause)

Do not grade millisecond accuracy with a stopwatch. Look for **correct counts, sequence, actions performed only once, how often the decision is asked, and a final icon that stays on screen**. Correct output alone does not complete the task if the child cannot explain it.

## Packages and validation scope

- [Child ZIP](paketler/hafta-04-cocuklar.zip): six child JavaScript files only.
- [Solution ZIP](paketler/hafta-04-cozumler.zip): six complete solution JavaScript files only.

This guide stays outside both ZIPs. The child package contains neither answers nor instructor explanations.

The retained [verify_logic.cjs](verify_logic.cjs) checks repeat counts, output sequence, matching supplied-piece inventories for the first five tasks, the comment-only homework source and the blank line that keeps task cards open. It covers all eight B patterns in task 4, all 32 in task 6, and the fixed route after the single B check in task 5. Run `node verify_logic.cjs` from this week folder to print the current results.

The local tests use mocked MakeCode APIs; they do not establish real device behavior or timing. MakeCode conversion and open-comment checks are separate browser checks. This documentation update does not claim new browser or physical micro:bit tests.
