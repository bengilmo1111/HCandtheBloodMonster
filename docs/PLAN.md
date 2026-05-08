# Development Plan

## Current milestone: playable vertical slice
Status: complete.

Delivered:
- Static mobile-friendly web app.
- Scene engine with branching choices.
- Local save/load.
- Complete short mystery path from start to solved ending.
- Retro black-and-white terminal styling with simple ASCII pictures.
- Smoke test and static build script.
- Expanded parser commands, map/hint support, turn counter, and graph validation checks.

## Next recommended milestones

### 1. Expand the world map
- Status: in progress. Five new optional scenes have been added: cloak bay, playground, tuck shop, music room, and prop room. Each is reached as a 4th choice from corridor / courts / office / library / hall respectively, and each adds a unique clue badge to the notebook on success. The main winning route (start -> toilets -> garden -> hall -> ending) is unchanged, so a younger player can still finish without visiting the side scenes.
- Map screen: done. `MAP` now renders a multi-line ASCII tree of the school via the exported `buildMap(currentSceneId, visited)` function. The current location is highlighted with `[*]` and visited rooms with `[.]`. Below the tree the game prints "You are at: ...  Visited: N of M places." and a one-line legend. Rendered as a `<pre class="story-pre">` block in the story log.
- Hidden curriculum (do NOT surface this to players): each puzzle scene quietly drills a primary-school maths skill while staying in-world.
  - `cloakbay` — multiplication + subtraction (3 rows × 7 hooks − 4 missing = 17).
  - `playground` — number patterns / skip-counting (2, 4, 6, ?, 10, 12 → 8).
  - `tuckshop` — division and budget (8 detectives ÷ 2 each = 4 cookies × $3 = $12).
  - `musicroom` — common multiples (LCM of 3 and 4 = 12).
  - `propRoom` — clock reading (big hand on 9 = 45 min past, small hand 2 → 3 = 2:45).
- Wrong-answer choices use a `feedback` field on the choice (no `to`) so the player stays in the puzzle scene and gets a gentle nudge from a club member rather than a "wrong" buzzer. Every puzzle scene also has a no-clue exit so kids can never get stuck.

### 2. Improve the parser feel
- Status: started. The game now accepts scene synonyms such as `go hall`, `talk jo`, `follow prints`, and `use torch`.
- `LOOK` now re-describes the current scene instead of falling through to HELP.
- `PAT BAXTER` / `PET BAXTER` / `GOOD BOY` give a friendly response in any scene.
- `JOKE` / `RIDDLE` plays a random kid-friendly joke from the `JOKES` array.
- Every scene now defines a per-scene `hint` so HINT is genuinely useful (especially when the hall ending is locked).
- A first-time welcome line greets new players and points them at HINT, MAP, JOKE, and PAT BAXTER, and namechecks the optional puzzle locations.
- Reaching the ending shows a small "case file" summary with clue count, turns, and a star rating.
- `getChoiceByCommand` now prefers EXACT verb matches over numeric choice indexes, so a kid solving the tuck-shop puzzle can type `4` and it routes to "Buy 4 cookies" rather than the 4th choice button. Numeric typing still works as a positional shortcut when no exact verb matches.
- Keep tap choices as the main mobile path.
- Next: add more object-specific verbs such as `inspect paint`, `open cupboard`, and `talk Baxter`.

### 3. Add code-native illustrations
- Replace or augment ASCII art with small SVG illustrations in the same white-on-black style.
- Keep images lightweight for mobile.
- Use generated raster art only if the team decides the game needs richer bitmap pictures.

### 4. Add accessibility and reading support
- Add dyslexia-friendly font toggle.
- Add reduced flicker/high contrast controls.
- Optional read-aloud support using browser speech synthesis: DONE.
  - Toggle button (`#read-toggle`) in the top-panel status area, with `aria-pressed` for screen-reader correctness. Persists across sessions in `localStorage` under `PREF_KEY` (`hc-blood-monster-pref-v1`).
  - When ON: `renderScene` speaks the scene title, each body paragraph, and each choice label as `Choice N: ...` via `SpeechSynthesisUtterance` (rate 0.95). Speech is cancelled before every render so utterances don't pile up if a kid taps fast.
  - `writeMessage(text, { silent })` auto-speaks system text (hints, feedback, jokes). Long technical messages (HELP text, MAP "you are at" line, MAP_TEXT legend) pass `silent: true` so they appear visually but stay quiet.
  - Commands: `READ` / `SPEAK` re-reads the current scene once even if the toggle is off; `STOP` / `SHUSH` / `QUIET` cancels speech immediately; `READ ALOUD ON|OFF`, `VOICE ON|OFF`, `SPEECH ON|OFF` flip the persistent toggle from the parser.
  - The button is auto-disabled with a tooltip if the browser has no `speechSynthesis` (e.g. very old browsers).

### 5. Playtest with children and caregivers
- Check that the mystery is clear, not too scary, and solvable in 20 minutes.
- Check that all real staff references feel respectful and appropriate.
- Revise names or scenes if the school requests changes.

## Handoff notes for future agents
- `src/game.js` contains all story data and scene logic.
- `src/styles.css` contains the retro presentation and mobile layout.
- `scripts/smoke-test.mjs` is intentionally dependency-free so checks can run in a fresh environment. It now also asserts every scene has a `hint` and that the welcome line and Baxter pat command exist.
- `docs/DEPLOYMENT.md` contains the merge, Vercel, and manual playtest checklist for releases.
- Production frontend: https://h-candthe-blood-monster.vercel.app/
- Keep future changes small and commit frequently.
- If adding real school details, verify them against the live school website because staff and policies may change.

## Recent playtest notes (2026-05-08)
- Winning route start → toilets → garden → hall → ending solves cleanly in 4 turns.
- Hall ending correctly stays locked until the `monster head` clue is in the notebook.
- Before this pass, HINT only ever printed a generic fallback because no scene defined `scene.hint`. Each scene now has a dedicated, gentle hint a 10-year-old can act on.
- Five optional puzzle scenes added (cloakbay, playground, tuckshop, musicroom, propRoom), each disguising primary-school maths as detective work. Automated play-test confirms all puzzle answers route correctly via both numeric (`12`) and word (`twelve`) input, all wrong answers loop with feedback, all 16 scenes are reachable.
- Staff-name convention updated: only Mr Gendall and Mr Webb keep a surname. All other staff appear by first name only and roles (principal, deputy, etc.) are dropped from dialogue. The smoke test's `requiredNames` list reflects this.
