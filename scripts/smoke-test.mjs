import { readFile } from 'node:fs/promises';
import { ART, SAVE_KEY, scenes, buildMap } from '../src/game.js';

const [html, game, styles] = await Promise.all([
  readFile('index.html', 'utf8'),
  readFile('src/game.js', 'utf8'),
  readFile('src/styles.css', 'utf8')
]);

const requiredNames = [
  'Henry Gilmore',
  'Casper Gilmore',
  'Guaranjot',
  'Benji',
  'Sam',
  'Wilfred',
  'Jessie',
  'Nina',
  'Ben',
  'Zoe',
  'Baxter',
  'Mr Gendall',
  'Chrissy',
  'Andrea',
  'Penny',
  'Jo',
  'Mr Webb',
  'Kate',
  'Julia'
];

const failures = [];
for (const name of requiredNames) {
  if (!game.includes(name)) failures.push(`Missing required character/staff name: ${name}`);
}

if (!html.includes('viewport')) failures.push('Missing mobile viewport meta tag.');
if (!SAVE_KEY.includes('hc-blood-monster-save')) failures.push('Save key is not game-specific.');
if (!game.includes('localStorage')) failures.push('Save progress must use localStorage.');
if (!game.includes('requires')) failures.push('Branching gate/requirement logic is missing.');
if (!game.includes('getChoiceByCommand')) failures.push('Parser command routing is missing.');
if (!game.includes('MAP_TEXT')) failures.push('Map command text is missing.');
if (!styles.includes('@media (max-width: 760px)')) failures.push('Mobile responsive CSS is missing.');
if (!styles.includes('@media (prefers-reduced-motion: reduce)')) failures.push('Reduced-motion CSS is missing.');
if (!game.includes('beetroot') || !game.includes('washable paint')) {
  failures.push('PG-safe explanation for blood-like clue is missing.');
}

if (!game.includes('pat baxter')) failures.push('Baxter pat command (kid-friendly) is missing.');
if (!game.includes('Welcome, detective')) failures.push('First-time welcome message is missing.');
if (!game.includes("'joke'")) failures.push('JOKE command is missing.');
if (typeof buildMap !== 'function') failures.push('buildMap function is missing.');

if (!game.includes('SpeechSynthesisUtterance')) failures.push('Read-aloud (SpeechSynthesisUtterance) wiring is missing.');
if (!game.includes('PREF_KEY')) failures.push('Read-aloud preference key is missing.');
if (!game.includes("'read'")) failures.push('READ command is missing.');
if (!game.includes("'stop'")) failures.push('STOP command is missing.');
if (!html.includes('id="read-toggle"')) failures.push('Read-aloud toggle button is missing from HTML.');
if (!styles.includes('.read-toggle')) failures.push('Read-aloud toggle CSS is missing.');

const sampleMap = buildMap('garden', ['start', 'toilets', 'garden']);
if (!sampleMap.includes('HUTT CENTRAL SCHOOL MAP')) failures.push('buildMap output is missing the title.');
if (!sampleMap.includes('[*] garden')) failures.push('buildMap should mark the current scene with [*].');
const visitedMatches = sampleMap.match(/\[\.\]/g) ?? [];
if (visitedMatches.length < 2) failures.push('buildMap should mark visited scenes with [.].');
for (const id of Object.keys(scenes)) {
  const mapStr = buildMap(id, []);
  const starCount = (mapStr.match(/\[\*\]/g) ?? []).length;
  if (starCount !== 1) failures.push(`buildMap(${id}) should produce exactly one [*] marker, got ${starCount}.`);
}

const puzzleScenes = ['cloakbay', 'playground', 'musicroom', 'propRoom', 'vegegarden', 'bikeshed'];
for (const id of puzzleScenes) {
  if (!scenes[id]) failures.push(`Puzzle scene ${id} is missing.`);
}

for (const [sceneId, scene] of Object.entries(scenes)) {
  if (!ART[scene.art]) failures.push(`${sceneId} references missing art: ${scene.art}`);
  if (!scene.title || !scene.caption || !scene.text?.length) failures.push(`${sceneId} is missing story text.`);
  if (!scene.choices?.length) failures.push(`${sceneId} has no choices.`);
  if (!scene.hint) failures.push(`${sceneId} is missing a kid-friendly HINT.`);

  for (const choice of scene.choices) {
    if (choice.to && !scenes[choice.to]) failures.push(`${sceneId} points to missing scene: ${choice.to}`);
    if (!choice.to && !choice.command && !choice.feedback) {
      failures.push(`${sceneId} has a choice without a destination, command, or feedback.`);
    }
  }
}

for (const id of puzzleScenes) {
  const s = scenes[id];
  const hasFeedback = s.choices.some((c) => c.feedback);
  const hasReward = s.choices.some((c) => c.add && c.to);
  const hasEscape = s.choices.some((c) => c.to && !c.add);
  if (!hasFeedback) failures.push(`${id} should have at least one feedback (wrong-answer) choice.`);
  if (!hasReward) failures.push(`${id} should have a correct-answer choice that adds a clue.`);
  if (!hasEscape) failures.push(`${id} should have a no-clue exit so kids never get stuck.`);
}

const winningRoute = ['start', 'toilets', 'garden', 'oldwing', 'hall', 'backstage', 'ending'];
for (let index = 0; index < winningRoute.length - 1; index += 1) {
  const current = scenes[winningRoute[index]];
  const next = winningRoute[index + 1];
  if (!current.choices.some((choice) => choice.to === next)) {
    failures.push(`Winning route is broken between ${winningRoute[index]} and ${next}.`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Smoke checks passed.');
