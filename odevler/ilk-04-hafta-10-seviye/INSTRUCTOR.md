# Weeks 1–4 review homework — instructor guide

Language: English | [Türkçe](INSTRUCTOR.tr.md)

This cumulative pack introduces no new topic. It combines **sequencing, fixed-count repetition, `if/else`, and `forever`** from the first four weeks. Children should explain how many times each action happens and when a decision is checked again, as well as produce a working program. This is not a fifth lesson or Week 5. It keeps ten review levels independently of the regular weekly format of five core activities and a sixth homework task.

The activities are designed for two children aged 8–12 using micro:bit and MakeCode. No additional hardware is needed. They do not teach separate state variables, scores, user-defined functions, or nested fixed-count loops. The JavaScript `for` index is the technical representation of the Blocks editor's “repeat N times” block; children do not need to create or reason about a separate counter.

## Suggested schedule

Start with about 20–30 minutes and two levels per session: **1–2, 3–4, 5–6, 7–8, 9–10**. This is not a time limit. A harder task can fill a whole session, and levels 9 and 10 can wait until later. Do not make all ten levels compulsory on top of unfinished work from earlier lessons; levels 5, 6, and 8 already revisit those skills.

For each task, one child builds and the other checks; swap roles for the next task. The checker predicts the output before running the program. Both children should explain part of the program in their own words. Sharing a computer should not mean that one child makes every decision.

**Use four steps for every level:** Read the goal → predict the result → arrange and test the blocks → explain why it works. Children can sketch a sequence or decision tree on paper before moving blocks.

## Opening files and shared rules

Create a separate MakeCode project for each task. Paste the entire `-cocuklar.js` file from `etkinlikler/` over the existing code in the JavaScript tab, then switch to Blocks. Children do not have to write JavaScript; the file loads the prepared pieces. Complete answers are separate files in `cozumler/`.

The task description is in the opening `/* ... */` comment. **Preserve the blank line between the comment and the code** so that the description becomes a separate, open workspace comment. If the card covers the blocks, move it by its top bar and resize it from a corner. A JavaScript file does not fix the card's screen position or size. Each task card contains the same instructions in Turkish first and then English: task number/title and story, `HEDEF:` / `GOAL:`, `KURAL:` / `RULE:`, and `DENEME:` / `TEST:`. Student and solution files share the same card.

**For levels 1–9, say:** “All the pieces are here. Do not add, delete, duplicate, or change the numbers in the blocks. Reach the goal only by moving the pieces.” Keep the event or `forever` wrapper. In levels 5, 6, and 8, the initial surprised face and 1000 ms pause are also a fixed preparation sequence. The toolbox is not technically locked; this is a puzzle rule.

The first four task comments include a hint. Levels 5–9 include the goal and tests without placement hints. Use the instructor prompts below only if the children are stuck. Incorrect starting arrangements are deliberate; the initial output is not the answer. Stop the simulator after opening a starter file and read the goal first.

**Level 10 contains only the task comment.** Children choose all required blocks from the toolbox. MakeCode may create an empty “on start” block; it is not a supplied solution piece. Accept other arrangements that satisfy the behavioral requirements instead of insisting on one exact layout.

## Before testing

**Tasks started by A: 1, 3, 4, 5, 6, and 8.** Briefly press and release A to start the sequence. Wait for the ending; do not press A again while the sequence is running. The final icon remains on the display. Press and release A again to run the sequence again.

**For levels 5, 6, and 8:** First release both buttons. Press and release A, then choose whether to hold or release B while the surprised preparation face is visible. Do not hold B before starting with A, because that can become an A+B interaction. The B condition asks **“Is it being held now?”**, not “Was it pressed earlier?”

**Continuous tasks: 2, 7, 9, and 10.** These do not wait for A. They return to the beginning when they reach the end. The check mark in levels 7 and 10 marks the end of a packet; it does not mean the entire program stops. Level 9 has no additional check mark.

**Light rule:** In these puzzles, a value below 80 means dark; 80 or higher means bright. Start with simulator values 20 and 160, then test the boundary values 79 and 80. A threshold of 80 does not represent the same room brightness everywhere. Treat the first startup reading or packet as preparation because the initial light reading can be 0. Evaluate subsequent packets. If those packets also take the wrong route, inspect the block placement rather than dismissing the problem as startup behavior.

**Responses may not be immediate.** “Show icon” normally takes about 600 ms, followed by any explicit pause. Changing B or the light does not retrospectively change an icon already being displayed. The program reads the new input when it reaches the relevant condition again. Make changes during blank-screen intervals and assess the decision sequence rather than millisecond accuracy.

## 1. Four-light greeting

**Say to the children:** “PIKO wants to send four separate smiles. Turn the screen off after each smile and leave a short gap. When all four are finished, show one check mark.”

**Goal:** A → four times [happy face → clear screen → pause 400 ms] → one check mark. The check mark belongs outside the repeat block. The sequence must not restart by itself.

**If they are stuck, ask:** “If you put the check mark inside the repeat block, will it appear four times or once? Why is there a blank screen between smiles?”

**Test:** Count four happy faces, four gaps, and one check mark. Wait a few seconds; another face must not appear. Restarting with A should produce the same sequence again.

## 2. The robot that wakes in the dark

**Say to the children:** “PIKO is keeping watch in the dark and shows a surprised face. When it becomes bright, PIKO shows a sleeping face. Keep checking as the light changes.”

**Goal:** Forever → if light is below 80, show a surprised face; otherwise, show a sleeping face. A and B are not required. These faces differ from earlier night/day activities; follow this story's rule rather than recalling a previous answer.

**If they are stuck, ask:** “Is one decision enough? What should happen if the room becomes bright later?”

**Test:** 20 → surprised, 160 → sleeping, 79 → surprised, 80 → sleeping. Change the light and check that the correct face appears without restarting the program. Ignore the first startup reading.

## 3. Growing heart machine

**Say to the children:** “PIKO will give one surprised greeting. Then it will perform a small-heart-to-big-heart dance three times. When the dance ends, it will go to sleep.”

**Goal:** A → one surprised face → three times [small heart → large heart] → one sleeping face. Do not add clear-screen or pause blocks to this dance.

**If they are stuck, ask:** “How many hearts are there in one round? Are the greeting and sleep part of the repeated dance?”

**Test:** Expect one surprised face, three small hearts, three large hearts, and one sleeping face. Small and large hearts must alternate; all the small hearts must not appear first.

## 4. Two-part coded message

**Say to the children:** “The receiver expects two check marks followed by three crosses. The gaps in the second part are longer. Send one heart when the whole code is finished.”

**Goal:** A → two times [check mark → clear → pause 400 ms] → three times [cross → clear → pause 800 ms] → heart. The two fixed-count repeat blocks run in sequence, not inside one another.

**If they are stuck, ask:** “Should the second part begin before the first part has finished? Which repeat block should contain the final heart?” The answer to the second question is neither.

**Test:** Count check, check, cross, cross, cross, heart in that order. The gaps between crosses should be longer. The final heart appears only once and remains on the display.

## 5. Four check-ins

**Say to the children:** “PIKO will ask you again at the start of each of four rounds. If B is held at that moment, show a happy face; otherwise, show a sad face. You can change your answer between rounds.”

**Goal:** After the fixed A preparation sequence, run four rounds. Each round checks B → shows a happy or sad face → clears the screen → leaves a 1000 ms blank gap. Show one check mark after all four rounds.

**If they are stuck, ask:** “Where must the B question go if we want a new answer in the second round?”

**Test:** Keep B released for four sad faces; hold it from the preparation sequence onward for four happy faces. Then arrange **released → held → released → held** at the starts of the rounds: expect sad → happy → sad → happy. Change B during blank-screen gaps. Constant-B tests alone are not sufficient.

## 6. Choose the message packet once

**Say to the children:** “After preparation, PIKO will choose its display once. If B is held, it will send three hearts; otherwise, it will send two crosses. Even if you change your mind later, it will finish the display it started.”

**Goal:** Fixed A preparation → one B decision → either three hearts or two crosses in the selected branch. Clear the screen and leave a 500 ms blank gap after each icon. Show one shared check mark after the selected display finishes.

**If they are stuck, ask:** “In level 5, we asked four times. How many times should we read B here? Should the display we did not choose run too?”

**Test:** Hold B during preparation, then release it after the first heart. All three hearts must still finish. In a new run, release B during preparation, then hold it after the first cross. Both crosses must still finish. Each run must take only one route and show one ending.

## 7. A beacon that keeps sending packets

**Say to the children:** “PIKO checks the light at the start of each message packet. In the dark, it sends three large hearts; in the light, it sends two small hearts. At the end, it gives a check mark, waits a little, and chooses the next packet.”

**Goal:** Run continuously. At the start of a packet, light < 80 selects three large hearts; otherwise, select two small hearts. Clear the screen and leave a 400 ms blank gap after each heart. Both routes share one final check mark and a 1000 ms pause, then light is checked again.

**If they are stuck, ask:** “Should a packet stop halfway through if the light changes? When do we reach the light question again?”

**Test:** After the startup preparation packet, count three large hearts at 20 and two small hearts at 160. After the first heart of a dark packet, change the light to 160: that packet must complete its three large hearts, and the next packet must contain two small hearts. A value of 79 selects the night route; 80 selects the day route. A new packet must start after the check mark and pause.

## 8. Door and passenger stations

**Say to the children:** “PIKO will check two doors, then three passengers. At a door, holding B means a heart and releasing it means a cross. For a passenger, holding B means happy and releasing it means sad. There is one sleeping break between the stations.”

**Goal:** Fixed A preparation → two door rounds → one sleeping face and a 1000 ms intermission → three passenger rounds → one check mark. Read B at the start of every check. After each check's icon, clear the screen and leave a 1000 ms blank gap. The repeat blocks run in sequence.

**If they are stuck, ask:** “Both parts ask the same question, but do they use the same pictures for the answers? Between which two jobs should the sleeping break go?”

**Test:** With B always released: two crosses, intermission, three sad faces. With B always held: two hearts, intermission, three happy faces. Then try **released → held** at the doors and **held → released → held** for the passengers: cross → heart; intermission; happy → sad → happy. Do not count preparation, intermission, or ending as one of the five checks.

## 9. New decisions during night watch

**Say to the children:** “The centre sleeps when it is bright. In the dark, it performs three checks. Each check shows a happy face if B is held, or a sad face otherwise. After the three checks, it asks whether it is night or day again.”

**Goal:** Run continuously. If light < 80, perform three rounds [check B → happy or sad face → clear → pause 1000 ms]. Otherwise, show a sleeping face and pause 1000 ms. The bright branch does not need to read B. This task has no shared final check mark.

**If they are stuck, ask:** “During the dark section, how many times do we ask about B and how many times do we ask about light? Would putting both questions inside the repeat block change the rule?”

**Test:** After startup preparation, change B at light level 160: the sleeping face should remain. At 20, use **released → held → released** for three rounds: expect sad → happy → sad. Change light to 160 after the first night face: all three night checks must finish before the robot sleeps. A value of 79 selects the night rule; 80 selects the day rule.

## 10. PIKO's command centre — independent final task

**Say to the children:** “The message centre sends different packets by day and by night. It chooses its shift at the start of each packet, then checks B again on every round inside that packet. This time you choose the pieces yourself. Draw the packets' plan first.”

**Goal:** Run continuously. At the start of a packet, light < 80 selects three night rounds; each round shows a heart if B is held, or a cross otherwise. Light of 80 or higher selects two day rounds; each round shows a happy face if B is held, or a sad face otherwise. After every check's icon, clear the screen and leave a 1000 ms blank gap. Both packets share one final check mark and a 1000 ms pause before a new packet is selected.

**The child's own checklist:** One light decision at the start of a packet; three rounds at night and two by day; a new B check on every round; one check mark at the packet's end; then start again. No scores, separate variables, or nested fixed-count loops are needed.

**If they are stuck, ask in order:** “Which two situations do you choose between first? How many rounds does the chosen part contain? Which question do you ask again in every round? What shared action happens after either part finishes?” Let them build one part correctly instead of placing the complete solution for them.

**Test:** After the startup preparation packet, test the four constant-input cases below. Then vary B as **released → held → released** at night and **held → released** during the day. Finally, change light to 160 after the first icon in a night packet: that packet must finish all three night rounds, and the next packet must contain two day rounds. Also check the 79/80 boundary.

| Light at packet start | B state | Check icons within the packet | Packet ending |
|---|---|---|---|
| 20 | Always released | Three crosses | One check mark and pause |
| 20 | Always held | Three hearts | One check mark and pause |
| 160 | Always released | Two sad faces | One check mark and pause |
| 160 | Always held | Two happy faces | One check mark and pause |

## Completion criteria and the next topic

Do not mark a level complete merely because the child says “It works!” They should explain **what happens in one round, which actions happen once, how often each decision is checked, and what changes with different inputs**. Accept a different arrangement when it produces the required behavior. Finding and explaining an error is also part of learning.

The aim is not to finish every level quickly. If children can explain the difference between levels 5 and 6, and why light and B are read at different times in level 10, a small counting game is a suitable next step toward **variables**. This review pack does not begin variable instruction.

## Packages and validation limits

- [Student package](paketler/ilk-04-hafta-cocuklar.zip): only the ten student JavaScript files.
- [Solution package](paketler/ilk-04-hafta-cozumler.zip): only the ten complete solution JavaScript files.
- This instructor guide is separate from both packages. The student package contains no solutions or instructor-only hints.
- `verify_logic.cjs` is the local checker and prints results to standard output.

Previous validation on 25 October 2026 passed 176 solution scenarios and 36 starter executions in a local environment with mocked micro:bit functions. The first nine starter inventories matched their solutions, and the tenth student file contained only a comment. All twenty files were converted to normal blocks in the live MakeCode editor, and the task comments in all ten student files appeared open. Those checks predate this directory reorganization and are not a claim that it has been revalidated. No physical micro:bit test has been performed.

Local checks and editor conversion do not establish real hardware timing or behavior. Follow the startup light-reading and response-time notes above. Assess count, order, decision timing, and packet boundaries rather than millisecond accuracy.

References: [repeat N times](https://makecode.microbit.org/blocks/loops/repeat), [show icon](https://makecode.microbit.org/reference/basic/show-icon), [light level](https://makecode.microbit.org/reference/input/light-level), [button-pressed event](https://makecode.microbit.org/reference/input/on-button-pressed), [button held-state check](https://makecode.microbit.org/reference/input/button-is-pressed).
