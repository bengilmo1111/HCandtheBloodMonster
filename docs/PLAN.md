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
- Add more school locations, such as classrooms, cloak bays, playground, and office corridor.
- Add optional clue loops that change small lines of dialogue without blocking the main ending.
- Add a simple map screen.

### 2. Improve the parser feel
- Status: started. The game now accepts scene synonyms such as `go hall`, `talk jo`, `follow prints`, and `use torch`.
- `LOOK` now re-describes the current scene instead of falling through to HELP.
- `PAT BAXTER` / `PET BAXTER` / `GOOD BOY` give a friendly response in any scene.
- Every scene now defines a per-scene `hint` so HINT is genuinely useful (especially when the hall ending is locked).
- A first-time welcome line greets new players and points them at HINT, MAP, and PAT BAXTER.
- Reaching the ending shows a small "case file" summary with clue count, turns, and a star rating.
- Keep tap choices as the main mobile path.
- Next: add more object-specific verbs such as `inspect paint`, `open cupboard`, and `talk Baxter`.

### 3. Add code-native illustrations
- Replace or augment ASCII art with small SVG illustrations in the same white-on-black style.
- Keep images lightweight for mobile.
- Use generated raster art only if the team decides the game needs richer bitmap pictures.

### 4. Add accessibility and reading support
- Add dyslexia-friendly font toggle.
- Add reduced flicker/high contrast controls.
- Add optional read-aloud support using browser speech synthesis.

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
