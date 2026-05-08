# HC and the Blood Monster Requirements

## Product goal
Build a kid-friendly, browser-based retro text adventure inspired by 1980s illustrated text adventures such as *The Hobbit* and *The Hitchhiker's Guide to the Galaxy*: white text on a black screen, simple pictures, typed commands, and scene choices.

## Audience and tone
- Primary audience: children around 10 years old.
- Rating: PG. The story may be spooky, but not gory or cruel.
- Reading level: short sentences, clear vocabulary, and scene text that can be read aloud.
- Tone: playful Goosebumps-style mystery with a safe ending.

## Setting research
Hutt Central School details currently used in the game:
- School address: 6 Railway Avenue, Lower Hutt 5010.
- Values from the school site: respect, responsibility, resilience, and creativity.
- Staff referenced from the school staff page (source data): Michael Gendall, Chrissy Laiman, Andrea Rogers, Penny Holotau, Jo Nash, Craig Webb, Andrea Sinclair, Kate Shirley, Julia Dal Vesco, and Zoe Thompson-Edgeler.
- In-game presentation: only Mr Gendall and Mr Webb keep a surname (and the title is the only form used in dialogue). All other staff appear by first name only — Chrissy, Andrea, Jo, Penny, Kate, Julia, and Zoe — matching how kids actually address them at school. Roles (principal, deputy, etc.) are not stated in dialogue; the audience already knows the cast.
- School areas used as scenes: gate, toilets, school office, office corridor, senior courts, library, quiet garden, Room 10, hall, cloak bay, playground, tuck shop, music room, and prop room.

## Required characters
- Henry Gilmore and Casper Gilmore as the main heroes.
- Friends and family: Guaranjot, Benji, Sam, Wilfred, Jessie, Nina, Ben, Zoe, and Baxter the dog.

## Story requirements
- Premise: rumours say the Blood Monster lives in the toilets.
- Clues: red spatters near the toilets, strange noises, evasive teachers, and missing children.
- Resolution: the danger is not real. The red spatters are washable paint and beetroot colour, the noises are loose pipes, the missing children are safe, and the monster is a friendly school assembly puppet.
- Teachers must be portrayed respectfully and safely. Their evasiveness is about protecting a surprise, not hiding harm.

## Game requirements
- Playable in about 20 minutes.
- Browser-based and mobile web friendly.
- Deployable on Vercel.
- Supports branching choices for repeat play.
- Supports saving and loading progress in the browser.
- Offers touch choices and typed parser shortcuts such as `go hall`, `talk jo`, and `follow prints`.

## Current command vocabulary
- Numbered choices, for example `1`.
- A typed answer to a puzzle, for example `17`, `eight`, `2:45`. The parser prefers an exact verb match over the positional choice index, so puzzle answers always win over button position.
- `SAVE`
- `LOAD`
- `BAG`, `INVENTORY`, or `NOTEBOOK`
- `LOOK` (re-describes the current scene)
- `HELP` or `?`
- `MAP`
- `HINT` (each scene has its own kid-friendly nudge)
- `JOKE` or `RIDDLE` (random kid-friendly joke)
- `PAT BAXTER` / `PET BAXTER` / `GOOD BOY` (friendly Easter egg)
- Parser shortcuts matching visible choices, such as `GO HALL`, `TALK JO`, `FOLLOW PRINTS`, `USE TORCH`, `GO TUCK SHOP`, `HOPSCOTCH`, `MUSIC ROOM`, `PROP ROOM`, and `CHECK COATS`.
- `RESTART`

## Hidden curriculum (puzzle scenes)
Five optional side scenes quietly drill primary-school maths skills while staying in-character. Players never see the words "maths" or "puzzle" — each one is framed as a detective decision.

| Scene | Skill | Puzzle |
| --- | --- | --- |
| Cloak Bay | Multiplication and subtraction | 3 rows × 7 hooks − 4 missing = 17 jumpers |
| Playground | Number patterns / skip-counting | 2, 4, 6, ?, 10, 12 → 8 |
| Tuck Shop | Division and money | 8 kids ÷ 2 share each = 4 cookies × $3 = $12 |
| Music Room | Common multiples (LCM lite) | drum every 3, cymbal every 4 → meet on 12 |
| Prop Room | Clock reading and fractions of an hour | big hand on 9 = 45 past; small hand 2 → 3 = 2:45 |

Wrong answers never end the game: each puzzle scene has a no-clue exit and feedback lines that nudge thinking ("we are counting in twos, not ones") rather than scolding. The main winning path bypasses the puzzles entirely so a younger or stuck player can still finish.
