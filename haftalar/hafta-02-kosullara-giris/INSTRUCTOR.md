# Prepared-block IF activities: arrange, test, explain

[Türkçe](INSTRUCTOR.tr.md)

This guide covers the three main/bonus activities. They use no variables, counters, sensor readings, or custom functions. The first two activities form the core lesson; the third is optional. Children only move the blocks already on the workspace.

The three additional `ek-` exercises included in the packages use different rules. Their placeholders must be completed, and they may require toolbox blocks. See the [week overview](README.md#additional-exercises) before introducing them.

## Setup and boundaries

Paste each main `-cocuklar.ts` file in full into the JavaScript tab of a separate MakeCode project, then switch to **Blocks**. Hand the screen to the children afterward. Keep the complete solutions separate.

The story and target appear in an open task card generated from the initial `/* ... */` comment. Preserve the blank line between the comment and the program. Resize the card from its lower-right corner or drag its title bar. Source files do not preserve its size or position.

**“Here is your mission. Every block you need is already here. Do not add, delete, duplicate, or change blocks. Only move them.”**

The starter blocks are connected, but some are in the wrong place. This is a repair puzzle. It is not an empty program or a tray of disconnected pieces. TypeScript does not store the screen positions of separate blocks. The toolbox remains visible, but the children do not need it to solve these activities.

Moving a block may also drag the blocks attached below it. Detach the lowest output block first if that makes rearranging easier. Stop the simulator before reading the story if its initial behavior is distracting.

## 1. Conditional bell — 10–15 minutes

**Story:** PIKO's bell is broken: it rings even when nobody touches it. It should sound only while A is held.

Prepared pieces: `forever`, `if`, the “A is pressed” condition, and one short tone. Keep the prepared tone settings unchanged.

1. Observe what the robot does without pressing a button.
2. Ask: “Which question is the sound block inside right now?”
3. One child moves the sound block; the other predicts the result.
4. Test no buttons, A held, A released, and only B held.

**Solution:** Move the tone inside `if`. When the condition is false, the action inside is skipped. No `else` is needed. A 200 ms tone that has already started may finish after A is released; the next tone should not start.

The V2 speaker can be used. MakeCode documents a simulator limitation for tone playback, so check the audio beforehand. If no sound is available, start with the second activity. A missing sound is not sufficient evidence of a logic error. [MakeCode play tone documentation](https://makecode.microbit.org/reference/music/play-tone).

## 2. The robot's face — 15–20 minutes

**Story:** PIKO's faces are mixed up. It should look happy while A is held and asleep when A is released.

Prepared pieces: `forever`, `if/else`, the “A is pressed” condition, a happy face, and a sleeping face.

Both icons initially sit below the empty `if/else`, so they appear one after another. Ask the children to explain which branch should contain each icon before moving anything. Hold A for a few seconds and then release it, allowing time to see both states.

| Input state | Expected result |
|---|---|
| No button held | Sleeping face |
| A held | Happy face |
| A released | Sleeping face |
| Only B held | Sleeping face |
| A and B held together | Happy face: A is still held |

**Suggested explanation:** “IF asks the question. If the answer is yes, we do this job. Otherwise, we do the other job. The forever block keeps asking the same question.” THEN means “in that case”; it is not a separate block to find.

Swap roles after the first successful attempt. Deliberately reverse the two faces and ask the children to predict the result before running it. Then move one face outside the condition and discuss why it appears regardless of the answer.

## 3. Two-person lock — optional, 10–15 minutes

**Story:** The door can open only when both friends approve. One person's approval is not enough.

Prepared pieces: `forever`, `if/else`, two button checks joined with `AND`, a check mark, and a cross. Ask the children to explain why the condition is different, then put the two icons in their branches.

| A | B | Expected icon |
|---|---|---|
| Released | Released | Cross |
| Held | Released | Cross |
| Released | Held | Cross |
| Held | Held | Check mark |

On a physical board, one child can hold A and the other B. If holding both in the simulator is awkward, leave the bonus for the physical board; the first two activities need only one button. The program displays an icon and does not control a real lock.

## Completion criteria and the next step

A working display alone is not enough. Each child should independently answer:

- What question is the robot asking?
- What happens when the answer is no?
- What changes if this output block moves outside `if`?

Do not open the bonus if the first two activities cannot yet be explained. Predicting a few alternative arrangements of the same blocks is enough. Return to variables in a separate lesson only after this distinction is understood, starting with storing and displaying one number.

## Sources

- [MakeCode if / else](https://makecode.microbit.org/blocks/logic/if)
- [Checking whether a button is held](https://makecode.microbit.org/reference/input/button-is-pressed)
- [Short tones and simulator limitations](https://makecode.microbit.org/reference/music/play-tone)

## Packages and validation

The [student package](paketler/hafta-02-cocuklar.zip) contains the three main/bonus starters and three additional `ek-` exercises. The [solution package](paketler/hafta-02-cozumler.zip) contains their six matching solutions. Only the main/bonus activities follow the move-only rule described in this guide.

The main lesson's six TypeScript files were previously converted to normal MakeCode blocks. The local verifier, [verify_logic.cjs](verify_logic.cjs), checks the three main/bonus pairs: button states, press/release transitions, intentionally incorrect starter behavior, and whether the supplied pieces can form each solution without adding blocks. It uses mocked inputs and outputs; it does not measure physical sound or timing. Its scope does not include the three additional exercises.

The source logic was not changed during this documentation and folder reorganization. No new physical micro:bit validation is claimed.
