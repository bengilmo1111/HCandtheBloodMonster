# Deployment and Merge Notes

## Current hosting target
- Production URL: https://h-candthe-blood-monster.vercel.app/
- Vercel is expected to deploy the `main` branch after a PR is merged.
- Static build output is generated in `dist/` by `npm run build`.

## Pre-merge checklist
Run these checks before merging into `main`:

```sh
npm test
npm run build
git diff --check
```

## Manual playtest checklist
Because the game is a story experience, automated checks should be paired with a short playtest:

1. Start a new game and confirm the black-and-white retro layout loads on mobile width.
2. Type `MAP`, `HINT`, and `BAG` to confirm helper commands work.
3. Play the short winning route: toilets → garden → hall → say hello.
4. Confirm the hall ending remains locked until the notebook includes `monster head`.
5. Refresh the browser mid-game and confirm saved progress reloads.
6. Confirm the story remains PG: the red clue resolves to washable paint and beetroot colour, not real blood.

## Merge/deploy handoff
- Merge the feature branch into `main` only after the checks pass.
- After merge, Vercel should build with the project `buildCommand` and publish the configured `outputDirectory` from `vercel.json`.
- If Vercel does not deploy, confirm the project is connected to this repository and that the production branch is set to `main`.
