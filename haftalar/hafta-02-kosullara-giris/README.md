# Week 2 — A gentle introduction to conditions

[Türkçe](README.tr.md) · [Instructor guide](INSTRUCTOR.md)

The main lesson contains **two short activities and one optional bonus**. Begin with a single question, then introduce two possible outcomes. The three additional exercises are available afterward; they are not prerequisites for completing the main lesson.

The main activities use no variables, counters, custom functions, or `for` loops. All required blocks are already present. Children solve the puzzles by moving misplaced blocks. The prepared `forever` block simply keeps asking the same question.

## Start here

- [Student activities — ZIP](paketler/hafta-02-cocuklar.zip): three main/bonus files and three additional exercises.
- [Complete solutions — ZIP](paketler/hafta-02-cozumler.zip): the six matching solutions.
- [Instructor guide](INSTRUCTOR.md): detailed instructions and test cases for the three main/bonus activities.
- [Student sources](etkinlikler/).
- [Solution sources](cozumler/).

Paste each `-cocuklar.ts` file into the JavaScript tab of a separate MakeCode project, then switch to Blocks. Children do not need to write source code. The three main/bonus starter files use an opening `/* ... */` comment followed by a blank line, so the task appears as an open workspace comment. Resize or move the card if needed. The additional exercises retain their existing source comments and placeholder format; they do not follow the same open-card format.

For the main activities, say: **“All the pieces you need are here. Do not add, delete, duplicate, or change them. Only move them.”** The toolbox is not technically locked; this is the activity rule. Keep the solutions separate from the children's starting files.

## Main lesson: easy to harder

| Order | Activity | Main distinction | Suggested time |
|---|---|---|---|
| 1 | [Conditional bell](etkinlikler/01-sartli-zil-cocuklar.ts) | Play a tone while A is held; otherwise skip that action. A single `if`. | 10–15 min |
| 2 | [The robot's face](etkinlikler/02-robotun-yuzu-cocuklar.ts) | Show a happy face while A is held and a sleeping face otherwise. `if/else` selects one of two paths. | 15–20 min |
| Bonus | [Two-person lock](etkinlikler/03-iki-kisilik-kilit-cocuklar.ts) | Show approval only when A and B are both held. Explain the prepared `AND` condition. | 10–15 min |

If the bell cannot be heard, continue with the robot's face. An audio problem does not show that a child misunderstood the condition. The lock activity displays a check mark or a cross; it does not operate a physical door.

Before each attempt, one child predicts and the other moves the blocks. Swap roles between activities. Hold a button for a few seconds, then release it, to compare the two states clearly.

**Suggested explanation:** “IF asks the question. If the answer is yes, we do the job inside it. ELSE tells us what to do when the answer is no. THEN means ‘in that case’; it is not another block to find.”

The main lesson is complete when each child can answer:

- What question is the robot asking?
- What happens when the answer is no?
- What changes if I move the output block outside the condition?

Do not introduce the bonus if the first two activities are still unclear. Predicting and correcting another arrangement of the same pieces is enough.

## Additional exercises

These three exercises are included in the same ZIPs, with filenames starting `ek-`. **Their rules differ from the main activities:** children replace placeholders such as `0`, `false`, and `Confused`, and may need to select new values or blocks from the toolbox. Explain this difference before starting them. They are optional, and the most difficult one can wait until a later lesson.

| Suggested order | Student source | When to introduce it |
|---|---|---|
| 1 | [Sleepy robot](etkinlikler/ek-01-uykucu-robot-cocuklar.ts) | Once a single `if/else` is understood. Replace the button question with “Is the light level below 100?” |
| 2 | [Secret greeting](etkinlikler/ek-02-gizli-selam-cocuklar.ts) | When the children are ready to distinguish continuous checks from checking once when an event occurs. Test whether A is held at the moment the device is shaken. |
| 3 | [The robot's bedroom](etkinlikler/ek-03-robotun-uyku-odasi-cocuklar.ts) | When they can explain a light condition followed by an orientation condition. This introduces nested decisions and is not part of the required introductory sequence. |

For Sleepy Robot, compare light levels 99 and 100. For Secret Greeting, compare shaking while A is held with shaking after A has been released. For The Robot's Bedroom, predict all four combinations of light and screen orientation; compare 79 and 80 while keeping the orientation unchanged.

This is an existing lesson with two core activities, one optional bonus, and three additional exercises. It has not been expanded or relabeled as the five-core-plus-one-homework structure used for future weeks.

## Validation scope

[The local verifier](verify_logic.cjs) covers the three main/bonus activities only. Its mocked inputs and outputs do not measure physical sound or timing and do not validate the three additional exercises. MakeCode block conversion and physical-device behavior are different checks. No physical micro:bit validation is claimed for this reorganization.
