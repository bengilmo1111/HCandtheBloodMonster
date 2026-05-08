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
- `scripts/smoke-test.mjs` is intentionally dependency-free so checks can run in a fresh environment.
- `docs/DEPLOYMENT.md` contains the merge, Vercel, and manual playtest checklist for releases.
- Keep future changes small and commit frequently.
- If adding real school details, verify them against the live school website because staff and policies may change.
