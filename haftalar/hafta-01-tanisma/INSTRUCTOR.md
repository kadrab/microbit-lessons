# Week 1 — Instructor guide

[Türkçe](INSTRUCTOR.tr.md) · [Week overview](README.md)

This guide expands the existing introductory outline into teaching instructions. No original standalone source program was found. It is not a historical record of a delivered session or a claim that a new program has been tested.

## Goal and preparation

Help both children connect an A/B button event with an icon on the LED display. Variables, conditions, and repeat counts are outside this lesson. Allow 20–30 minutes, with an optional extra five minutes.

Open a MakeCode project and have the children find the LED display and the A/B buttons. Ask them to choose two faces. One child builds while the other predicts and tests; swap roles when moving from A to B.

## Teaching flow

| Time | Activity | Prompt |
|---|---|---|
| 0–5 min | Find the display and buttons; choose the first and second faces. | “Which face should each button show?” |
| 5–12 min | Put the first icon inside the A button event. | “Which block says when this job starts? Which block says what it does?” |
| 12–20 min | Swap roles and put the second icon inside the B button event. | “Where does B's job belong?” |
| 20–25 min | Predict and test A, B, B, A. | “Say the expected face before pressing the button.” |
| Optional extra 5 min | Exchange the two icons and repeat the same sequence. | “The buttons are the same. Which instruction changed?” |

There is no fixed icon choice or downloadable answer program. The children may choose their own faces as long as each event produces its intended output.

## Expected results

Once both events have been built, use the following sequence:

| Action | Expected display |
|---|---|
| Press A | The first chosen face |
| Press B | The second chosen face |
| Press B again | The second chosen face again |
| Press A again | The first chosen face again |

After exchanging the icons, A should show the second face and B the first. Ask both children to predict the change before trying it.

## Hints and completion criteria

If a face appears for the wrong button, ask the child to point to the event containing that icon. Then ask where it should go. Let the child move it and test the prediction.

Each child should explain which block runs for A, where to change B's face, and what happens when an icon moves to the other event. A working display alone is not enough; both children should predict and explain independently.

When those distinctions are understood, continue with [Week 2](../hafta-02-kosullara-giris/README.md). Do not introduce variables or conditions merely to make this introductory session longer.

## Material and validation status

The available material is this teaching guide and the week overview. There are no original student source files, completed source files, or ZIP packages for this week. No new source program was created as part of adding this guide, and this reconstructed session has not been tested on a physical micro:bit.
