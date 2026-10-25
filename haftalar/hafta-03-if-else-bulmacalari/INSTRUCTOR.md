# Week 3 — Six decision puzzles, from easier to harder

[Türkçe](INSTRUCTOR.tr.md)

For two children using a micro:bit V2 and MakeCode. There are no variables, counters or user-defined functions. **Tasks 1–5 are the core classwork; task 6 is homework.** Every required block is supplied in the first five tasks. The homework source contains instructions only, with no starter code. Take a break before task 4. If the children cannot explain the decision paths, revisit those paths before assigning the independent homework.

## Setup and shared rules

Paste the **entire contents** of a task's `-cocuklar.js` file from [etkinlikler/](etkinlikler/) into the **JavaScript** tab of a new MakeCode project, replacing its default code, then switch to **Blocks**. These JavaScript sources use MakeCode APIs; they are not standalone desktop programs. Keep the [solutions](cozumler/) separate.

**Say this for tasks 1–5:** “The robot has been assembled incorrectly. Every block you need is here. Do not add, delete or duplicate blocks, or change the supplied values. Move the blocks until the robot does its job correctly.”

All conditions, comparisons, numbers, faces, sounds and pauses are supplied. The blocks start connected in the wrong places. The toolbox is not technically locked; avoiding it is an activity rule. Zoom out to find all the pieces in longer tasks. Dragging a block can bring the blocks beneath it too; separating pieces from the bottom often helps.

Stop the simulator after opening a starter file. Explain the target first and let the children rearrange the pieces. Then run the program and test every case. The faces shown by the deliberately incorrect starter are not the target behavior.

All six child files include the story, target, rules and test cases in an opening `/* ... */` comment. Preserve the blank line between the comment and code so that it appears as an open workspace card. Move or resize the card if needed. Children do not have to write JavaScript; the source file is the way to load the blocks.

**Task 6, homework:** [06-vardiyali-uzay-kapisi-cocuklar.js](etkinlikler/06-vardiyali-uzay-kapisi-cocuklar.js) contains only its task comment. It supplies no executable code, conditions, outputs or `forever` block. Replace all default JavaScript with this file and switch to Blocks. This time the children may choose every block from the toolbox. Ask them to draw a decision tree on paper before building. Do not introduce variables or counters.

MakeCode may add an empty `on start` block when opening a comment-only source. It is not a supplied solution component and need not be used. The children must choose how to keep checking inputs that can change.

The [child ZIP](paketler/hafta-03-cocuklar.zip) contains only six child files. The [solution ZIP](paketler/hafta-03-cozumler.zip) contains only six complete solutions. Neither the answers nor this guide belong in the child package.

In each task, one child builds and the other checks. Swap roles for the next task. Each child should predict at least one result before running it.

## 1. Day and night robot — classwork, 8–10 minutes

**Say:** “PİKO should sleep in the dark and smile in the light. Right now it shows the two faces in turn. Move the faces into the right places.”

**New idea:** Compare a sensor reading directly. In this game, **a light level below 80 means dark**, and **80 or above means light**. The supplied number `80` is a fixed game rule, not a variable.

**Supplied pieces:** `forever`, one if/else, light level, the `< 80` comparison, and the sleeping and happy faces.

**Ask:** “Which path does the robot take at exactly 80?”

**Test:** 20 → sleeping; 160 → happy; 79 → sleeping; 80 → happy.

## 2. PİKO's two separate jobs — classwork, 10–15 minutes

**Say:** “PİKO chooses its face from the light level. It also makes short sounds while B is held. The bell must work in both the dark and the light.”

**New idea:** Two independent if/else decisions. Each pass asks the first question, then the second; the second decision does not go inside the first. The screen and sound are different outputs, so one does not overwrite the other.

**Supplied pieces:** `forever`, two if/else blocks, the light comparison, a B-held check, two faces, a 200 ms tone and a 200 ms pause.

**Ask:** “If the bell decision goes inside the dark branch, what happens in the light?”

| Light level | B | Face | Sound |
|---|---|---|---|
| 20 | Released | Sleeping | None; short pause |
| 20 | Held | Sleeping | Short tones |
| 160 | Released | Happy | None; short pause |
| 160 | Held | Happy | Short tones |

`Pause` provides a silent interval; it is not a stop-sound command. The short tone stops when its duration ends. A tone that has already started may finish after B is released.

## 3. Two-stage gate — classwork, 12–15 minutes

**Say:** “A means the gatekeeper is ready; B means entry is allowed. Without the gatekeeper, the gate sleeps. If the gatekeeper is ready, check permission: show a tick for permission and a cross otherwise.”

**New idea:** Put one if/else inside another. The starter has two decisions in sequence; the children need to move the B decision into A's yes branch.

**Supplied pieces:** `forever`, two if/else blocks with A and B conditions, a sleeping face, a tick and a cross.

**Ask:** “Why does holding only B fail to open the gate when A is released?”

| A | B | Result |
|---|---|---|
| Released | Released | Sleeping |
| Released | Held | Sleeping |
| Held | Released | Cross |
| Held | Held | Tick |

An LED icon represents the gate. There is no physical gate or motor.

## 4. PİKO's four moods — classwork, 15–20 minutes

**Say:** “PİKO feels sad when disturbed at night and surprised when called during the day. Without A, it sleeps at night and smiles in daylight. Show the right face for all four situations.”

**New idea:** Put another decision in each branch of the outer decision. Three if/else blocks and four faces are supplied, but initially all of them run in sequence. The light decision should run first, followed by the A decision in the selected branch. Both supplied A checks must be used.

**Ask:** “There are two A questions. Why does only one run on each pass?”

| Light level | A | Result |
|---|---|---|
| 20 | Released | Sleeping |
| 20 | Held | Sad |
| 160 | Released | Happy |
| 160 | Held | Surprised |

B must not affect the result in this task. Each input combination should leave a single face on screen, rather than cycling through faces.

## 5. Night base — classwork, 20–25 minutes

**Say:** “Our base sleeps during the day. At night, A and B are approvals from two crew members. All the robot's pieces are here, but they are mixed up. Without taking new pieces, build the system that shows who is ready.”

**Rule:** In daylight, show the sleeping face regardless of the buttons. In the dark, show a cross when neither crew member approves; happy for A only; sad for B only; and a tick for both. Update the result when the light or buttons change. Do not use variables.

**Supplied pieces:** One `forever`, four if/else blocks, one light comparison, one A check, two B checks and five icons. The conditions and icons are mixed together in the wrong order. Use every supplied piece by moving it; do not delete either B check or duplicate pieces.

**Ask:** “Which question could come first so that we can skip the other questions during the day?” First write every case on paper, then build a decision tree with the supplied blocks.

| Light level | A | B | Result |
|---|---|---|---|
| 20 | Released | Released | Cross |
| 20 | Held | Released | Happy |
| 20 | Released | Held | Sad |
| 20 | Held | Held | Tick |
| 160 | Released | Released | Sleeping |
| 160 | Held | Released | Sleeping |
| 160 | Released | Held | Sleeping |
| 160 | Held | Held | Sleeping |

The example solution has four if/else blocks and five outcomes. The children do not have to copy its exact arrangement: another decision tree is acceptable if it meets the behavior and supplied-piece rules. Finally, hold both buttons and change the light from 79 to 80; the tick should change to the sleeping face.

## 6. Space gate shifts — homework, 20–30 minutes

**Say:** “The space gate has different rules for day and night. Crew member A is on duty during the day; crew member B is on duty at night. This time, build the whole system yourselves so that it shows the right icon for each situation below. There are no ready-made pieces or code.”

**Day — light level 80 or above:** If A is not held, show a cross regardless of B. Show a happy face for A only, and a tick when both A and B are held.

**Night — light level below 80:** If B is not held, show the sleeping face regardless of A. Show a sad face for B only, and a tick when both A and B are held.

| Light level | A | B | Result |
|---|---|---|---|
| 20 | Released | Released | Sleeping |
| 20 | Held | Released | Sleeping |
| 20 | Released | Held | Sad |
| 20 | Held | Held | Tick |
| 160 | Released | Released | Cross |
| 160 | Held | Released | Happy |
| 160 | Released | Held | Cross |
| 160 | Held | Held | Tick |

Re-evaluate the decision when the light or buttons change; show one icon in every case. Do not use variables or counters. Sound and extra hardware are unnecessary. Ask for a decision tree before suggesting particular blocks.

**If they get stuck, ask:** “Whose absence stops everything during the day? Is it the same crew member at night?”

The example solution for the adult contains five if/else blocks. There is no single correct code arrangement: accept solutions that handle all eight cases and changing inputs. In particular, with only A held, changing the light from 79 to 80 should change sleeping to happy. With only B held, the same transition should change sad to a cross.

## Practical notes

- Light readings range from 0 to 255. The first reading can be 0; do not grade that initial moment. `80` is our chosen threshold and does not describe the same physical brightness in every room. Start with 20 and 160 in the simulator. On a real board, try covering and uncovering the LED surface. [MakeCode light-level reference](https://makecode.microbit.org/reference/input/light-level)
- Showing an icon takes 600 ms by default. Hold buttons for 2–3 seconds instead of clicking briefly, and wait for the output; the robot may not respond immediately. [MakeCode show-icon reference](https://makecode.microbit.org/reference/basic/show-icon)
- For tests with both buttons held on a physical board, one child can hold A and the other B. Use the A+B control in the simulator if it is available.
- Check sound before task 2. Short tones may not be audible in every browser simulator; verify them using the V2 speaker when a board is available. [MakeCode play-tone reference](https://makecode.microbit.org/reference/music/play-tone)
- `if` asks the question; `then` is the yes branch and `else` is the no branch. `forever` repeats these decisions. [MakeCode if/else reference](https://makecode.microbit.org/blocks/logic/if)

Correct output alone is not enough to complete a task. Each child should explain which question comes first, what happens when the answer is no, and which input change would alter the result.

## Packages and validation scope

Use the [child package](paketler/hafta-03-cocuklar.zip) for the children and keep the [solution package](paketler/hafta-03-cozumler.zip) with the adult. Each contains six JavaScript files; this guide stays outside both packages.

The retained [verify_logic.cjs](verify_logic.cjs) checks all six solutions against light/button combinations, the 79/80 boundary and changing inputs. It also compares the supplied-piece inventories in the first five child/solution pairs and checks that task 6 contains only its comment. Run `node verify_logic.cjs` from this week folder to print the current results.

Local tests use mocked inputs and outputs. MakeCode block conversion is a separate check; neither establishes physical sound, timing or successful loading onto a micro:bit. This documentation update does not claim new browser or hardware tests.
