export const SAVE_KEY = 'hc-blood-monster-save-v2';
export const LEGACY_SAVE_KEY = 'hc-blood-monster-save-v1';

export const STAFF = {
  michael: 'Mr Michael Gendall, the principal',
  chrissy: 'Ms Chrissy Laiman, the deputy principal',
  andrea: 'Ms Andrea Rogers, the assistant principal',
  jo: 'Jo Nash in the office',
  penny: 'Penny Holotau in the office',
  craig: 'Craig Webb, the caretaker',
  kate: 'Kate Shirley from Room 13',
  julia: 'Julia Dal Vesco from Room 14',
  zoeTeacher: 'Zoe Thompson-Edgeler from Room 10',
  andreaSinclair: 'Andrea Sinclair from Room 12'
};

export const ART = {
  gate: String.raw`
      HUTT CENTRAL SCHOOL
   _______________________
  |  6 RAILWAY AVENUE    |
  |_______________________|
       ||  ||       ||
   ____||__||_______||____
  /  Mystery Club enters  \
 /_________________________\\`,
  toilets: String.raw`
       TOILET BLOCK
   __________________
  |  _   _   _   _  |
  | |_| |_| |_| |_| |
  |      drip...    |
  |_____.______.____|
        :  :  :
       red speckles`,
  office: String.raw`
       SCHOOL OFFICE
   ____________________
  | sign-in | notices  |
  |  desk   | phone    |
  |_________|__________|
       Jo has the keys`,
  courts: String.raw`
       SENIOR COURTS
   ____________________
  |  |  |  |  |  |  |  |
  |__|__|__|__|__|__|__|
     squeak squeak squeak`,
  library: String.raw`
          LIBRARY
   ____________________
  | books  books books |
  |  goosebumps shelf  |
  |____secret_note_____|
        shhh...`,
  garden: String.raw`
       QUIET GARDEN
      /\   /\   /\
    _/  \_/  \_/  \_
   | flax | logs | fern |
   |______|______|______|
      something rustles`,
  room: String.raw`
          ROOM 10
   ____________________
  | dragon red paint   |
  |  brushes  charts   |
  |___values poster____|
       drip drip drip`,
  corridor: String.raw`
       OFFICE CORRIDOR
   ____________________
  | lost prop box  ??? |
  |___map___signs______|
       footsteps fade`,
  hall: String.raw`
          SCHOOL HALL
   ______________________
  |  stage curtains      |
  |      (  red  )       |
  |______________________|
       thump... thump...`,
  end: String.raw`
        CASE SOLVED!
        \  |  /
      --  \o/  --
          /|\
          / \
   The monster waves hello.`
};

export const scenes = {
  start: {
    art: 'gate',
    caption: 'Railway Avenue. The bell has just gone quiet.',
    title: 'The Rumour at the Gate',
    hint: 'A good detective starts where the rumour started. The toilets are choice 1.',
    text: [
      'Henry Gilmore and Casper Gilmore stop at the Hutt Central School gate. Guaranjot, Benji, Sam, Wilfred, Jessie, and Nina crowd close.',
      'Everyone has heard the same whisper: the Blood Monster lives near the toilets. There are red spatters on the concrete, strange noises at lunchtime, and two kids have not come back from their game.',
      'Ben and Zoe have packed snacks. Baxter the dog is waiting outside the fence with a wagging tail. This is a Mystery Club job.'
    ],
    choices: [
      { label: 'Inspect the red spatters by the toilets', to: 'toilets', add: 'red spatter clue', verbs: ['go toilets', 'inspect spatters', 'check toilets'] },
      { label: 'Ask at the school office', to: 'office', verbs: ['go office', 'ask office', 'talk jo'] },
      { label: 'Search the senior courts first', to: 'courts', verbs: ['go courts', 'search courts'] }
    ]
  },
  toilets: {
    art: 'toilets',
    caption: 'The toilets are empty, but something taps inside the wall.',
    title: 'The Red Spatters',
    hint: 'Paw prints lead somewhere quiet and green. Try FOLLOW PRINTS.',
    text: [
      'The spatter is bright red, but it smells sweet, like beetroot and poster paint. Jessie writes that down. Sam hears a tiny clank behind a locked cleaning cupboard.',
      `${STAFF.chrissy} appears with a folder. She says, “Please keep clear of wet paint, team.” Then she hurries away before anyone can ask about monsters. Very suspicious.`,
      'Casper spots three muddy paw prints. They are too small for a monster and exactly the right size for Baxter.'
    ],
    choices: [
      { label: 'Follow the paw prints to the quiet garden', to: 'garden', add: 'paw prints', verbs: ['follow prints', 'go garden', 'track baxter'] },
      { label: 'Find a cupboard key at the office', to: 'office', add: 'paint clue', verbs: ['get key', 'go office'] },
      { label: 'Listen at the wall', to: 'pipe', verbs: ['listen wall', 'listen pipe', 'use torch'] }
    ]
  },
  office: {
    art: 'office',
    caption: 'The office smells like paper, raincoats, and warm photocopying.',
    title: 'Keys and Kind Warnings',
    hint: 'Borrow a torch, then read the corridor map. Notes mean something.',
    text: [
      `${STAFF.jo} smiles at the Mystery Club. ${STAFF.penny} checks the sign-in sheet and says the missing children are safe, but she cannot spoil a “special surprise”.`,
      `${STAFF.michael} walks past with a red-stained mop. He says, “Good investigators check facts, not rumours.” Henry decides that is either a clue or principal wisdom. Maybe both.`,
      'On the counter is a lost-property torch and a note: HALL PROPS AFTER LUNCH.'
    ],
    choices: [
      { label: 'Borrow the torch and go to the toilets', to: 'toilets', add: 'torch', verbs: ['take torch', 'borrow torch', 'go toilets'] },
      { label: 'Check the office corridor map', to: 'corridor', add: 'hall note', verbs: ['go corridor', 'check map', 'read note'] },
      { label: 'Ask Room 10 about Dragon Red paint', to: 'room10', verbs: ['go room 10', 'ask room 10', 'talk zoe'] }
    ]
  },
  courts: {
    art: 'courts',
    caption: 'The new turf glows green under a grey sky.',
    title: 'Squeaks on the Courts',
    hint: 'A glittery curtain cord must lead somewhere. Try FOLLOW CORD.',
    text: [
      'Benji finds a red rubber ball with tooth marks. Wilfred finds a trail of glitter. Guaranjot says glitter is not normally part of monster behaviour.',
      `${STAFF.andrea} is helping juniors line up. She gently redirects the club away from the hall doors and says, “Not yet.”`,
      'Behind the courts, a curtain cord snakes toward the school hall.'
    ],
    choices: [
      { label: 'Follow the curtain cord to the hall', to: 'hall', add: 'glitter trail', verbs: ['follow cord', 'go hall'] },
      { label: 'Cut across to the quiet garden', to: 'garden', verbs: ['go garden'] },
      { label: 'Return to the toilets', to: 'toilets', verbs: ['go toilets'] }
    ]
  },
  corridor: {
    art: 'corridor',
    caption: 'The corridor has a map, raincoat pegs, and one mysterious prop box.',
    title: 'The Corridor Map',
    hint: 'Glitter splits two ways. The library hides a clue, but the hall hides the show.',
    text: [
      'The school map marks the hall, library, senior courts, Room 10, and the quiet garden. Henry copies it into the notebook.',
      `${STAFF.andreaSinclair} carries a box of felt fangs past the club. She gives a tiny smile and says, “No peeking until assembly.”`,
      'A trail of red glitter leads both ways: toward the library and toward the hall.'
    ],
    choices: [
      { label: 'Follow glitter to the library', to: 'library', add: 'school map', verbs: ['go library', 'follow glitter'] },
      { label: 'Follow glitter to the hall', to: 'hall', add: 'school map', verbs: ['go hall'] },
      { label: 'Go back to the office', to: 'office', verbs: ['go office'] }
    ]
  },
  library: {
    art: 'library',
    caption: 'A book display says: Brave readers ask brave questions.',
    title: 'The Goosebumps Shelf',
    hint: 'The bookmark says “say hello”. That sounds like the hall.',
    text: [
      'Nina finds a bookmark shaped like a fang. On the back it says: IF YOU HEAR THUMPING, DO NOT RUN. SAY HELLO.',
      `${STAFF.kate} and ${STAFF.julia} whisper about costumes for a resilience assembly. They stop when they see the club, then laugh in the way adults laugh when they know a secret.`,
      'Casper thinks the Blood Monster might be part of a school show. Henry thinks shows do not usually leave paw prints.'
    ],
    choices: [
      { label: 'Take the fang bookmark to the hall', to: 'hall', add: 'fang bookmark', verbs: ['take bookmark', 'go hall'] },
      { label: 'Compare clues at the toilets', to: 'toilets', verbs: ['go toilets'] },
      { label: 'Search outside in the quiet garden', to: 'garden', verbs: ['go garden'] }
    ]
  },
  room10: {
    art: 'room',
    caption: 'Room 10 has charts, pencils, and one very red paintbrush.',
    title: 'Room 10 Paint Mystery',
    hint: 'Dragon Red paint explains the spatters. Try the library or the hall next.',
    text: [
      `${STAFF.zoeTeacher} says Room 10 painted scenery this morning. The paint was called Dragon Red, which seems like a clue trying too hard.`,
      'She also says no one is in danger. Then she asks the club to practise the school values: respect, responsibility, resilience, and creativity.',
      'Jessie says creativity is useful when hunting a toilet monster.'
    ],
    choices: [
      { label: 'Use creativity in the library', to: 'library', add: 'dragon red paint', verbs: ['go library'] },
      { label: 'Be responsible and report to the office', to: 'office', verbs: ['go office'] },
      { label: 'Be resilient and check the hall', to: 'hall', verbs: ['go hall'] }
    ]
  },
  pipe: {
    art: 'toilets',
    caption: 'The tapping becomes words through the pipe.',
    title: 'Voices in the Wall',
    hint: 'A happy bark just came from the garden. Race there.',
    text: [
      'Henry presses his ear to the cool wall. A tiny voice says, “Is the surprise ready?” Another voice says, “Baxter stole the head!”',
      'Casper gulps. A monster with a stolen head is not a calming thought.',
      'Then everyone hears a happy bark from the quiet garden.'
    ],
    choices: [
      { label: 'Race to the quiet garden', to: 'garden', add: 'pipe voices', verbs: ['go garden', 'race garden'] },
      { label: 'Tell the office what you heard', to: 'office', verbs: ['go office', 'tell office'] }
    ]
  },
  garden: {
    art: 'garden',
    caption: 'Flax leaves shiver. A red shape hides near the logs.',
    title: 'Baxter and the Red Head',
    hint: 'Baxter has the monster head. Take it to the hall to finish the case.',
    text: [
      'Baxter pops out with a giant papier-mâché monster head in his mouth. It is red, sparkly, and only a little chewed. Zoe and Ben call softly from the gate so he does not run through the school.',
      'The missing children are crouched behind the logs with clipboards. They were helping with a secret assembly about solving rumours kindly.',
      `${STAFF.craig} arrives with a bucket. He says the toilet noises were loose pipes, not a monster tummy.`
    ],
    choices: [
      { label: 'Return the monster head to the hall', to: 'hall', add: 'monster head', verbs: ['take head', 'go hall', 'return head'] },
      { label: 'Double-check the library clue first', to: 'library', verbs: ['go library'] },
      { label: 'Clean up the red paint spatters', to: 'toilets', add: 'bucket', verbs: ['clean paint', 'go toilets'] }
    ]
  },
  hall: {
    art: 'hall',
    caption: 'The curtain breathes in and out. Or maybe that is a fan.',
    title: 'Behind the Curtain',
    hint: 'You need the monster head before you can SAY HELLO. Find Baxter in the garden.',
    text: [
      'The whole Mystery Club gathers: Henry, Casper, Guaranjot, Benji, Sam, Wilfred, Jessie, and Nina. They put every clue on the floor like detectives on TV.',
      `${STAFF.michael}, ${STAFF.chrissy}, and ${STAFF.andrea} step from behind the curtain. They were not hiding a danger. They were preparing a surprise assembly about checking rumours before they grow teeth.`,
      'But there is still one thump from backstage.'
    ],
    choices: [
      { label: 'Say hello to whatever is backstage', to: 'ending', requires: ['monster head'], verbs: ['say hello', 'hello monster', 'go backstage'] },
      { label: 'Gather more proof from the garden', to: 'garden', verbs: ['go garden'] },
      { label: 'Look for written proof in the library', to: 'library', verbs: ['go library'] }
    ]
  },
  ending: {
    art: 'end',
    caption: 'A friendly monster, a brave club, and one proud dog.',
    title: 'The Blood Monster Revealed',
    hint: 'You solved it! Try PLAY AGAIN, or peek in the BAG for your case file.',
    text: [
      'Henry says, “Hello?” Casper holds the torch steady. The curtain opens.',
      'The Blood Monster is a wobbly red puppet for the school assembly. Baxter stole its head, the pipes made the groans, and the “blood” was washable paint mixed with beetroot juice for colour.',
      'The club helps fix the puppet. At assembly, everyone learns the best monster-hunting tools: kindness, facts, and a snack in your pocket. CASE SOLVED.'
    ],
    choices: [
      { label: 'Play again with different choices', to: 'start', reset: true, verbs: ['restart', 'play again'] },
      { label: 'Review the notebook', command: 'bag', verbs: ['bag', 'notebook'] }
    ]
  }
};

export const MAP_TEXT = 'Map: gate -> toilets, office, courts. Office -> corridor, Room 10. Corridor -> library or hall. Garden holds Baxter’s clue. Hall needs the monster head.';

export function createInitialState() {
  return {
    sceneId: 'start',
    inventory: [],
    visited: [],
    turns: 0,
    invalidCommands: 0
  };
}

export function getChoiceByCommand(scene, command) {
  const cleaned = command.trim().toLowerCase();
  const number = Number.parseInt(cleaned, 10);

  if (Number.isInteger(number) && String(number) === cleaned) {
    return { choice: scene.choices[number - 1], index: number - 1 };
  }

  const index = scene.choices.findIndex((choice) =>
    choice.verbs?.some((verb) => cleaned === verb || cleaned.includes(verb))
  );

  return { choice: scene.choices[index], index };
}

function initGame() {
  const state = createInitialState();
  const storyLog = document.querySelector('#story-log');
  const choicesEl = document.querySelector('#choices');
  const artEl = document.querySelector('#scene-art');
  const captionEl = document.querySelector('#scene-caption');
  const inventoryEl = document.querySelector('#inventory-list');
  const form = document.querySelector('#command-form');
  const input = document.querySelector('#command-input');
  const saveStatus = document.querySelector('#save-status');

  function addItem(item) {
    if (item && !state.inventory.includes(item)) {
      state.inventory.push(item);
    }
  }

  function setStatus(message) {
    saveStatus.textContent = message;
    setTimeout(() => {
      saveStatus.textContent = `TURN ${state.turns}`;
    }, 900);
  }

  function renderScene() {
    const scene = scenes[state.sceneId];
    if (!scene) return;

    if (!state.visited.includes(state.sceneId)) {
      state.visited.push(state.sceneId);
    }

    artEl.textContent = ART[scene.art];
    captionEl.textContent = scene.caption;
    saveStatus.textContent = `TURN ${state.turns}`;
    storyLog.innerHTML = '';

    const title = document.createElement('h2');
    title.textContent = scene.title;
    storyLog.append(title);

    scene.text.forEach((line) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = line;
      storyLog.append(paragraph);
    });

    renderChoices(scene);
    renderInventory();
    input.value = '';

    if (state.sceneId === 'ending') {
      const stars = '*'.repeat(Math.min(5, Math.max(1, state.inventory.length)));
      writeMessage(`Case file: ${state.inventory.length} clue${state.inventory.length === 1 ? '' : 's'} collected in ${state.turns} turn${state.turns === 1 ? '' : 's'}. Detective rating: ${stars}`);
    }
  }

  function renderChoices(scene) {
    choicesEl.innerHTML = '';
    scene.choices.forEach((choice, index) => {
      const button = document.createElement('button');
      const missingItems = choice.requires?.filter((item) => !state.inventory.includes(item)) ?? [];
      button.type = 'button';
      button.className = 'choice-button';
      button.disabled = missingItems.length > 0;
      button.textContent = missingItems.length
        ? `${index + 1}. ${choice.label} (need: ${missingItems.join(', ')})`
        : `${index + 1}. ${choice.label}`;
      button.addEventListener('click', () => choose(index));
      choicesEl.append(button);
    });
  }

  function renderInventory() {
    inventoryEl.innerHTML = '';
    const items = state.inventory.length ? state.inventory : ['empty pockets', 'brave questions'];
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      inventoryEl.append(li);
    });
  }

  function choose(index) {
    const scene = scenes[state.sceneId];
    const choice = scene.choices[index];
    if (!choice) {
      writeMessage('That choice is not in this scene. Try a listed number.');
      return;
    }

    const missingItems = choice.requires?.filter((item) => !state.inventory.includes(item)) ?? [];
    if (missingItems.length) {
      writeMessage(`You need ${missingItems.join(', ')} first.`);
      return;
    }

    if (choice.command) {
      handleCommand(choice.command);
      return;
    }

    if (choice.reset) {
      Object.assign(state, createInitialState());
    }

    addItem(choice.add);
    state.sceneId = choice.to;
    state.turns += 1;
    state.invalidCommands = 0;
    autoSave();
    renderScene();
  }

  function writeMessage(message) {
    const paragraph = document.createElement('p');
    paragraph.className = 'system-message';
    paragraph.textContent = message;
    storyLog.append(paragraph);
    paragraph.scrollIntoView({ block: 'nearest' });
  }

  function autoSave() {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
      localStorage.removeItem(LEGACY_SAVE_KEY);
      setStatus('SAVED');
    } catch {
      setStatus('NO SAVE');
      writeMessage('The browser blocked saving, but you can keep playing in this tab.');
    }
  }

  function loadSave() {
    const saved = localStorage.getItem(SAVE_KEY) ?? localStorage.getItem(LEGACY_SAVE_KEY);
    if (!saved) return false;
    try {
      const parsed = JSON.parse(saved);
      if (!scenes[parsed.sceneId]) return false;
      state.sceneId = parsed.sceneId;
      state.inventory = Array.isArray(parsed.inventory) ? parsed.inventory : [];
      state.visited = Array.isArray(parsed.visited) ? parsed.visited : [];
      state.turns = Number.isInteger(parsed.turns) ? parsed.turns : 0;
      state.invalidCommands = Number.isInteger(parsed.invalidCommands) ? parsed.invalidCommands : 0;
      return true;
    } catch {
      return false;
    }
  }

  function restartGame() {
    localStorage.removeItem(SAVE_KEY);
    localStorage.removeItem(LEGACY_SAVE_KEY);
    Object.assign(state, createInitialState());
    renderScene();
    writeMessage('New game started.');
  }

  function handleCommand(rawCommand) {
    const command = rawCommand.trim().toLowerCase();
    const scene = scenes[state.sceneId];

    if (!command) {
      writeMessage('Type a choice number, or try HELP.');
      return;
    }

    const { choice, index } = getChoiceByCommand(scene, command);
    if (choice) {
      choose(index);
      return;
    }

    if (command === 'save') {
      autoSave();
      writeMessage('Progress saved. You can close the browser and come back later.');
      return;
    }

    if (command === 'load') {
      if (loadSave()) {
        renderScene();
        writeMessage('Loaded your saved mystery.');
      } else {
        writeMessage('No saved game found yet.');
      }
      return;
    }

    if (command === 'restart' || command === 'new game') {
      restartGame();
      return;
    }

    if (['bag', 'inventory', 'notebook'].includes(command)) {
      writeMessage(`Notebook: ${state.inventory.join(', ') || 'empty pockets, brave questions'}.`);
      return;
    }

    if (command === 'map') {
      writeMessage(MAP_TEXT);
      return;
    }

    if (command === 'hint') {
      writeMessage(scene.hint ?? 'Try a numbered choice. If a choice is locked, search the garden for Baxter’s clue.');
      return;
    }

    if (command === 'look') {
      renderScene();
      return;
    }

    if (['help', '?'].includes(command)) {
      writeMessage('Commands: type a choice number, SAVE, LOAD, BAG, MAP, HINT, LOOK, PAT BAXTER, or RESTART. You can also try commands like GO HALL, TALK JO, or FOLLOW PRINTS.');
      return;
    }

    if (['pat baxter', 'pet baxter', 'pat dog', 'pet dog', 'good boy'].includes(command)) {
      writeMessage('Baxter wags his tail so hard his whole body wiggles. He licks your hand and waits for the next clue.');
      return;
    }

    state.invalidCommands += 1;
    if (state.invalidCommands >= 2) {
      writeMessage('The old computer hums: try HELP, MAP, HINT, or tap a choice button.');
    } else {
      writeMessage('The old computer does not understand that yet. Try LOOK or a choice number.');
    }
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleCommand(input.value);
    input.value = '';
  });

  if (loadSave()) {
    renderScene();
    writeMessage('Saved mystery loaded. Type RESTART for a new game.');
  } else {
    renderScene();
    writeMessage('Welcome, detective! Tap a numbered choice or type one. Stuck? Try HINT, MAP, or PAT BAXTER.');
  }
}

if (typeof document !== 'undefined') {
  initGame();
}
