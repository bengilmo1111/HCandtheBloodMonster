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
- Staff referenced from the school staff page: Michael Gendall, Chrissy Laiman, Andrea Rogers, Penny Holotau, Jo Nash, Craig Webb, Andrea Sinclair, Kate Shirley, Julia Dal Vesco, and Zoe Thompson-Edgeler.
- School areas used as scenes: gate, toilets, school office, office corridor, senior courts, library, quiet garden, Room 10, and hall.

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
- `SAVE`
- `LOAD`
- `BAG`, `INVENTORY`, or `NOTEBOOK`
- `LOOK`, `HELP`, or `?`
- `MAP`
- `HINT`
- Parser shortcuts matching visible choices, such as `GO HALL`, `TALK JO`, `FOLLOW PRINTS`, and `USE TORCH`
- `RESTART`
