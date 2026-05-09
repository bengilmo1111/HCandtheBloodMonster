export const SAVE_KEY = 'hc-blood-monster-save-v2';
export const LEGACY_SAVE_KEY = 'hc-blood-monster-save-v1';
export const PREF_KEY = 'hc-blood-monster-pref-v1';

export const STAFF = {
  michael: 'Mr Gendall',
  chrissy: 'Chrissy',
  andrea: 'Andrea',
  jo: 'Jo',
  penny: 'Penny',
  craig: 'Mr Webb',
  kate: 'Kate',
  julia: 'Julia',
  zoeTeacher: 'Zoe',
  andreaSinclair: 'Andrea'
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
        BEET
        \  |  /
      -- [O.O] --
          /|||
          / \
   ...what is deeper in?`,
  cloakbay: String.raw`
       CLOAK BAY
   ___________________
  | u u u u u u u    |
  | u . . u u u u    |
  | u u u . u u u    |
  |__hooks_&_coats___|
       drip... drip...`,
  playground: String.raw`
        PLAYGROUND
   _______________________
  | 2 | 4 | 6 | ? | 10|12 |
  |___|___|___|___|___|___|
        chalk hopscotch
   wet rain washed one off`,
  musicroom: String.raw`
        MUSIC ROOM
   ___________________
  |  drum   ///3     |
  |  cymbal ////4    |
  |   boom... CLINK  |
  |__beat: 1 2 3 4...|`,
  propRoom: String.raw`
        PROP ROOM
   ___________________
  |    .--12--.      |
  |   9    |    3    |
  |    '--6--'       |
  |  felt fangs box  |
  |__locked combo____|`,
  vegegarden: String.raw`
       VEGE GARDEN
   ___________________
  |  *  *  *  *  *   |
  |  beetroot rows   |
  |  rake  spade     |
  |__chicken wire____|
       3 watching gnomes`,
  bikeshed: String.raw`
        BIKE SHED
   ___________________
  | O-O  O-O  O-O   |
  |  bike bike bike  |
  |  bike bike       |
  | OoO        OoO   |
  |__trike    trike__|
       red flicker?`,
  oldwing: String.raw`
        OLD WING
   ___________________
  |  ///   ///   //  |
  |  HIGH scratches  |
  |   flicker buzz   |
  |__empty floor_____|
       echo... echo`,
  backstage: String.raw`
        BACKSTAGE
   ___________________
  |  ropes paint pots |
  |   crack [..][..]  |
  |   bowl  blanket   |
  |  warm pipes hum   |
  |__shhh............|`,
  boiler: String.raw`
       BOILER ROOM
   ___________________
  |  |||  |||  |||   |
  |  pipes hum warm   |
  |   jumper saucer   |
  |   beetroot leaves |
  |__pebble arc::::::_|`
};

export const SCENE_IMAGES = {
  start: 'src/assets/scenes/start.png',
  toilets: 'src/assets/scenes/toilets.png',
  office: 'src/assets/scenes/office.png',
  courts: 'src/assets/scenes/courts.png',
  corridor: 'src/assets/scenes/corridor.png',
  library: 'src/assets/scenes/library.png',
  room10: 'src/assets/scenes/room10.png',
  pipe: 'src/assets/scenes/pipe.png',
  garden: 'src/assets/scenes/garden.png',
  hall: 'src/assets/scenes/hall.png',
  ending: 'src/assets/scenes/ending.png',
  cloakbay: 'src/assets/scenes/cloakbay.png',
  playground: 'src/assets/scenes/playground.png',
  musicroom: 'src/assets/scenes/musicroom.png',
  propRoom: 'src/assets/scenes/propRoom.png',
  vegegarden: 'src/assets/scenes/vegegarden.png',
  bikeshed: 'src/assets/scenes/bikeshed.png',
  oldwing: 'src/assets/scenes/oldwing.png',
  backstage: 'src/assets/scenes/backstage.png',
  boiler: 'src/assets/scenes/boiler.png'
};

export const scenes = {
  start: {
    art: 'gate',
    caption: 'Railway Avenue. The bell has just gone quiet.',
    title: 'The Rumour at the Gate',
    hint: 'A good detective starts where the rumour started. The toilets are choice 1.',
    text: [
      'Henry Gilmore and Casper Gilmore stop at the Hutt Central School gate. Guaranjot, Benji, Sam, Wilfred, Jessie, and Nina crowd close.',
      'Everyone has heard the same whisper: the Blood Monster lives near the toilets. There are red spatters on the concrete, deep rhythmic noises from inside the school walls at lunchtime, and two kids who went to play in the garden and have not been seen since.',
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
      'The spatter is bright red, and it smells sweetly of beetroot — but underneath that, something older and earthier. Jessie writes it down. From inside the wall, Sam hears a slow, rhythmic tap: three beats, a pause, three beats again.',
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
      { label: 'Ask Room 10 about Dragon Red paint', to: 'room10', verbs: ['go room 10', 'ask room 10', 'talk zoe'] },
      { label: 'Visit Mr Webb\'s vegetable garden', to: 'vegegarden', verbs: ['go vege', 'vege garden', 'vegetable garden', 'talk webb'] },
      { label: 'Slip down to the boiler room', to: 'boiler', verbs: ['go boiler', 'boiler room', 'boiler', 'down stairs'] }
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
      { label: 'Return to the toilets', to: 'toilets', verbs: ['go toilets'] },
      { label: 'Peek at the playground hopscotch', to: 'playground', verbs: ['go playground', 'hopscotch', 'check hopscotch'] },
      { label: 'Walk past the bike shed', to: 'bikeshed', verbs: ['go bikeshed', 'go bike', 'bike shed', 'check bikes'] }
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
      { label: 'Go back to the office', to: 'office', verbs: ['go office'] },
      { label: 'Duck into the cloak bay', to: 'cloakbay', verbs: ['go cloak', 'cloak bay', 'cloakbay', 'check coats'] }
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
      { label: 'Search outside in the quiet garden', to: 'garden', verbs: ['go garden'] },
      { label: 'Slip into the music room next door', to: 'musicroom', verbs: ['go music', 'music room', 'musicroom'] }
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
      'Henry presses his ear to the wall. It is warm — warmer than a pipe should be. A voice says, “Is the surprise ready?” Another voice says, “Baxter stole the head!” Then a third sound, deeper still: not a voice, but a low rolling vibration that moves through the brickwork and into his teeth.',
      'Casper gulps. A warm wall, a stolen head, and something that is not talking are three clues he would rather not have.',
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
      'Baxter pops out with a giant papier-mâché monster head in his mouth. It is red, sparkly, and only a little chewed. Then the flax gives a violent shudder. Something dark red and low — bigger than any cat — shifts in the shadows behind the logs and vanishes before anyone can be certain they saw it.',
      'The children who had been missing are crouched behind the logs with clipboards, calm and perfectly serious. "We are keeping him settled," one of them says quietly. "The grown-ups know. Please do not shout or make sudden movements."',
      `${STAFF.craig} arrives carrying a covered crate carefully in both hands. "Nearly time," he says to no one in particular, moving slowly.`
    ],
    choices: [
      { label: 'Carry the monster head — Mr Webb points you through the old wing', to: 'oldwing', add: 'monster head', verbs: ['take head', 'go hall', 'return head', 'go oldwing', 'old wing'] },
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
      'The whole Mystery Club gathers: Henry, Casper, Guaranjot, Benji, Sam, Wilfred, Jessie, and Nina. They spread every clue on the floor. The hall is dim. The stage curtains hang very still.',
      `${STAFF.michael}, ${STAFF.chrissy}, and ${STAFF.andrea} step from behind the curtain. They are not quite smiling. "We were preparing an introduction," ${STAFF.michael} says carefully. "Someone has been living beneath this school for a long time. Longer than any of us have worked here. We wanted everyone to meet him on his terms."`,
      'A thump from backstage shakes the floor. Then, slowly, a low hum that is almost a growl builds until the whole curtain trembles.'
    ],
    choices: [
      { label: 'Step backstage with the staff', to: 'backstage', requires: ['monster head'], verbs: ['go backstage', 'step backstage', 'follow staff'] },
      { label: 'Gather more proof from the garden', to: 'garden', verbs: ['go garden'] },
      { label: 'Look for written proof in the library', to: 'library', verbs: ['go library'] },
      { label: 'Sneak into the prop room', to: 'propRoom', verbs: ['go prop', 'prop room', 'check props', 'open props'] }
    ]
  },
  ending: {
    art: 'end',
    caption: 'A real monster, a brave club — and something still waiting in the dark.',
    title: 'The Blood Monster Revealed',
    hint: 'You solved it! Try PLAY AGAIN, or peek in the BAG for your case file.',
    text: [
      'Henry says, “Hello?” in a voice much smaller than he intended. Casper holds the torch steady. The curtain opens.',
      'Two amber eyes, low in the darkness, unblinking. A sound rises from inside the wall: not a hum, but a slow grinding growl that makes the stage floor shiver. Nobody moves.',
      'Baxter walks into the torchlight, sits down, and wags his tail once. The growl stops. He steps out.',
      'He is bigger than anyone expected — roughly Baxter\'s size — with dark red fur patterned in deeper shadow, small flat ears, and teeth like white needles that catch the light. He is not friendly, exactly. He is cautious. He sniffs the air. He looks at Baxter. Then he crosses to Henry and presses a cold dry nose to Henry\'s knuckles, and blinks slowly.',
      'The red spatters are beetroot juice — his snacks from the garden. The pipe sounds are his humming. The washable paint is from the puppet workshop, where the staff built his stage-double so he would not have to face the whole school at once. The children who seemed missing had found him first and spent a week keeping him calm. The club names him Beet. CASE SOLVED.',
      'Then Beet stops. He turns his head toward the gap at the back of the stage — the crack he came in through — and makes a short, flat sound that raises the hair on every arm in the hall. One of the children from the garden steps forward and holds out a folded sheet of paper. In pencil: scratch marks found on the pipe wall three nights ago. Too high to be Beet\'s. Too wide. “He has been watching that gap since Tuesday,” she says quietly. “Whatever made those marks came from deeper in.”'
    ],
    choices: [
      { label: 'Play again with different choices', to: 'start', reset: true, verbs: ['restart', 'play again'] },
      { label: 'Review the notebook', command: 'bag', verbs: ['bag', 'notebook'] },
      { label: 'Look into the gap at the back of the stage', feedback: 'The gap is too dark and too narrow. Beet watches it with amber eyes, still and patient. This mystery has a name now — but the next one is already beginning.', verbs: ['look gap', 'check gap', 'go deeper', 'look deeper'] }
    ]
  },
  cloakbay: {
    art: 'cloakbay',
    caption: 'Hooks, raincoats, and one rogue gumboot.',
    title: 'The Mystery of the Missing Jumpers',
    hint: 'Three rows of seven hooks, four jumpers gone. Count what is left.',
    text: [
      'The cloak bay has three tidy rows of seven hooks. Most are dripping with raincoats and woollen jumpers.',
      'Wilfred says four jumpers are missing — probably in the lost-property pile. Sam needs the right count for the lost-property log; Penny will not issue more keys until the numbers match.',
      '"How many jumpers are still on the hooks?" Sam asks, pencil hovering.'
    ],
    choices: [
      { label: 'Write 17 in the log', to: 'corridor', add: 'jumper count', verbs: ['17', 'seventeen', 'write 17'] },
      { label: 'Write 14 in the log', feedback: 'Sam frowns. "Three rows of seven is bigger than fourteen. Try again."', verbs: ['14', 'fourteen', 'write 14'] },
      { label: 'Write 21 in the log', feedback: 'Sam taps the pencil. "Twenty-one is every hook full. Four jumpers are missing — try again."', verbs: ['21', 'twenty one', 'twenty-one', 'write 21'] },
      { label: 'Slip back to the corridor', to: 'corridor', verbs: ['go corridor', 'back', 'leave'] }
    ]
  },
  playground: {
    art: 'playground',
    caption: 'Wet chalk, painted hopscotch, and a missing square.',
    title: 'The Washed-Out Hopscotch',
    hint: 'Each square jumps up by 2. Only one number washed away. Fill the gap.',
    text: [
      'Yesterday\'s rain has soaked the hopscotch. The numbers along the squares read: 2, 4, 6, ?, 10, 12.',
      'Jessie thinks the missing number could be a clue. Nina says detectives notice patterns first.',
      'Beneath the squares, someone has scratched: SHOUT THE MISSING NUMBER TO OPEN THE FORT.'
    ],
    choices: [
      { label: 'Shout 8', to: 'courts', add: 'hopscotch pattern', verbs: ['8', 'eight', 'shout 8'] },
      { label: 'Shout 7', feedback: 'The fort hatch stays shut. Nina whispers: "We are counting in twos, not ones."', verbs: ['7', 'seven', 'shout 7'] },
      { label: 'Shout 9', feedback: 'No click. Casper shrugs: "Nine is odd — the pattern only uses even numbers."', verbs: ['9', 'nine', 'shout 9'] },
      { label: 'Walk back to the courts', to: 'courts', verbs: ['go courts', 'back', 'leave'] }
    ]
  },
  musicroom: {
    art: 'musicroom',
    caption: 'Drumsticks, triangles, and one curtain that should not be there.',
    title: 'Sound Check',
    hint: 'The drum hits every 3 beats. The cymbal hits every 4. Find the first beat where they crash together.',
    text: [
      'Behind a half-pulled curtain, two stage cues thump in time. The drum thuds every 3 beats. The cymbal CLINKS every 4.',
      '"Knock on the beat they both hit, and the prop-room door pops open," Guaranjot whispers, reading a sticky note.',
      'Henry counts under his breath. Casper holds the pencil ready.'
    ],
    choices: [
      { label: 'Knock on beat 12', to: 'library', add: 'rhythm key', verbs: ['12', 'twelve', 'knock 12'] },
      { label: 'Knock on beat 7', feedback: 'Only the drum hits on 7. Look for a beat that is in BOTH the three-times table and the four-times table.', verbs: ['7', 'seven', 'knock 7'] },
      { label: 'Knock on beat 10', feedback: 'Ten is in neither table. Try a number that is a multiple of 3 AND a multiple of 4.', verbs: ['10', 'ten', 'knock 10'] },
      { label: 'Tip-toe back to the library', to: 'library', verbs: ['go library', 'back', 'leave'] }
    ]
  },
  propRoom: {
    art: 'propRoom',
    caption: 'Felt fangs, glitter, and a wall clock with both hands frozen.',
    title: 'The Backstage Clock',
    hint: 'Big hand on 9 means 45 minutes past. Small hand between 2 and 3 means it is in the 2 o\'clock hour.',
    text: [
      'The prop-room clock has stopped. A note in Andrea\'s handwriting reads: REHEARSAL STARTS WHEN THE BIG HAND IS ON 9 AND THE SMALL HAND IS BETWEEN 2 AND 3.',
      'A combination lock under the puppet box waits for the time as four digits, no colon.',
      'Casper says, "Big hand on nine? That\'s forty-something past." Henry nods.'
    ],
    choices: [
      { label: 'Dial 0245 (2:45)', to: 'hall', add: 'rehearsal time', verbs: ['245', '2:45', '0245', 'dial 245', 'two forty five'] },
      { label: 'Dial 0900 (9:00)', feedback: 'That would be nine o\'clock. The big hand on 9 means 45 minutes PAST, not the hour.', verbs: ['900', '9:00', '0900', 'dial 900'] },
      { label: 'Dial 0215 (2:15)', feedback: 'Quarter past two would put the big hand on 3. Look at the bottom of the clock face — beyond the 6 is the 9.', verbs: ['215', '2:15', '0215', 'dial 215'] },
      { label: 'Slip back to the hall', to: 'hall', verbs: ['go hall', 'back', 'leave'] }
    ]
  },
  vegegarden: {
    art: 'vegegarden',
    caption: 'Tidy rows of beetroot and silverbeet. Three confused gnomes.',
    title: 'The Vegetable Patch Mystery',
    hint: 'Twelve beetroots, four nibbled by something with a sweet tooth. Share what is left between four classes.',
    text: [
      `${STAFF.craig} leans on his fork. "Twelve beetroots came up this week. Four already have neat little nibbles taken out of one side."`,
      '"Whatever it is, it likes the sweet ones." He winks. "Four classes are sharing the un-nibbled beetroots for soup-making. How many does each class get?"',
      'Three garden gnomes watch silently. Sam crouches at the chicken-wire fence and finds a clump of dark red fur snagged on the wire — far more than a tuft, and coarser than any animal she can name.'
    ],
    choices: [
      { label: 'Tell Mr Webb each class gets 2', to: 'office', add: 'clump of dark red fur', verbs: ['2', 'two', 'each gets two', 'tell two'] },
      { label: 'Tell Mr Webb each class gets 3', feedback: 'Mr Webb shakes his head. "Twelve minus four leaves eight. Eight does not split into four threes — try again."', verbs: ['3', 'three', 'tell three'] },
      { label: 'Tell Mr Webb each class gets 4', feedback: 'Mr Webb chuckles. "Four for each class is sixteen — more than we even grew. Try again."', verbs: ['4', 'four', 'tell four'] },
      { label: 'Slip back to the office', to: 'office', verbs: ['go office', 'back', 'leave'] }
    ]
  },
  bikeshed: {
    art: 'bikeshed',
    caption: 'Helmets, scooters, and one mysterious red flicker.',
    title: 'Wheels Behind the Courts',
    hint: 'Five bikes have two wheels each. Two trikes have three wheels each. Add them up.',
    text: [
      'The bike shed smells of rubber and dust. Five bikes lean in a tidy row, plus two trikes for the juniors.',
      'Wilfred wants the wheel count for the safety check. Behind the back trike, something low and dark red — much bigger than a cat — moves fast and is gone between the wall and the spokes before anyone is sure they saw it.',
      '"How many wheels in total?" Wilfred asks, pencil ready.'
    ],
    choices: [
      { label: 'Tell Wilfred 16 wheels', to: 'courts', add: 'dark shape sighting', verbs: ['16', 'sixteen', 'tell sixteen'] },
      { label: 'Tell Wilfred 14 wheels', feedback: 'Wilfred re-counts. "Five bikes is ten wheels, not eight. Try again."', verbs: ['14', 'fourteen', 'tell fourteen'] },
      { label: 'Tell Wilfred 13 wheels', feedback: 'Wilfred shakes his head. "Two trikes have three wheels each — that is six, not three. Try again."', verbs: ['13', 'thirteen', 'tell thirteen'] },
      { label: 'Walk back to the courts', to: 'courts', verbs: ['go courts', 'back', 'leave'] }
    ]
  },
  oldwing: {
    art: 'oldwing',
    caption: 'A long, closed corridor. The lights buzz. Plaster smells damp.',
    title: 'The Old Wing',
    hint: 'The hall is past the broken double doors. Walk fast. Do not look up too long.',
    text: [
      'The shortcut to the hall runs through the school\'s old wing — fenced off for repairs since before any of the club started here. The strip lights buzz and flicker. The carpet is gone. Cold concrete underfoot.',
      'Casper holds the torch. The beam catches a row of long scratch marks gouged deep into the plaster of the back wall. They are far higher than a child could reach. They are far higher than a kitten or a cat. Plaster dust still on the floor below them — fresh.',
      'Henry takes a step back without meaning to. Whatever made those marks was a lot bigger than Beet. And it came through here this week.',
      'From somewhere ahead, where the corridor turns toward the hall, the warm hum of the pipes goes briefly silent.'
    ],
    choices: [
      { label: 'Hurry on to the hall', to: 'hall', add: 'wrong-size scratches', verbs: ['go hall', 'hurry', 'keep going', 'run'] },
      { label: 'Take a careful look at the highest scratch', feedback: 'The scratch is the length of Henry\'s forearm and the depth of his thumbnail. Whatever did this had claws and weight. Jessie writes it down. Nobody jokes.', verbs: ['inspect scratches', 'look scratches', 'check marks', 'study marks'] },
      { label: 'Turn back to the garden', to: 'garden', verbs: ['go garden', 'back', 'leave'] }
    ]
  },
  backstage: {
    art: 'backstage',
    caption: 'Dust, ropes, painted flats. Something hums softly through the wall.',
    title: 'Behind the Hall',
    hint: 'Walk slow. Beet is right there. CALL his name when you are ready.',
    text: [
      `${STAFF.michael} holds a finger to his lips and leads the club into the narrow space behind the stage. ${STAFF.chrissy} steadies the curtain so it does not snap. ${STAFF.andrea} brings up the rear with the puppet head balanced carefully in both hands.`,
      'It is dim and cluttered: paint pots, ropes coiled like sleeping snakes, a stack of carved heads from a play three years ago. The air smells of wood and beetroot. A low warm hum vibrates through the back wall, very close.',
      'In the corner is a cracked panel where two pipes meet. Through the crack, two amber points of light blink slowly, then disappear. Casper does not breathe. The hum goes lower.',
      'On the floor in front of the panel sits a chipped saucer of beetroot leaves, half-eaten. A folded red wool blanket is tucked neatly beside it. The children who had been "missing" stand quietly along the wall, watching the crack like people watching a baby sleep.'
    ],
    choices: [
      { label: 'Quietly call his name', to: 'ending', requires: ['monster head'], verbs: ['call name', 'call beet', 'say beet', 'whisper', 'hello'] },
      { label: 'Step softly back into the hall', to: 'hall', verbs: ['go hall', 'back', 'leave'] }
    ]
  },
  boiler: {
    art: 'boiler',
    caption: 'Hot copper pipes, a bare bulb, and the smell of beetroot.',
    title: 'The Boiler Room',
    hint: 'There\'s no answer to find here — only a clue. Take the nest to your notebook and go.',
    text: [
      `${STAFF.craig} unlocks the boiler-room door and props it with a brick. He does not come inside. "Two minutes," he says quietly. "He is not down here right now. But this is where he sleeps."`,
      'The boiler room is hot. Pipes of every size run up the walls and disappear into the ceiling. Some hum. One pulses, slowly, in time with something Henry cannot quite hear.',
      'In the corner where two of the warmest pipes meet, someone has set up a small home: a folded woollen jumper as a bed, a chipped saucer of water, a careful pile of beetroot leaves, and a short row of polished pebbles arranged in a curve.',
      'Sam crouches and touches the jumper. It is warm. Whoever sleeps here just left.',
      `On the wall above the nest, in pencil, in ${STAFF.craig}'s neat handwriting: "Beet — settled — three weeks." Underneath, more recent, a date from two days ago and the words: "Something else? Check ceiling."`
    ],
    choices: [
      { label: 'Add the nest to the notebook and head to the hall', to: 'hall', add: 'beet\'s nest', verbs: ['add nest', 'go hall', 'note nest'] },
      { label: 'Look up at the ceiling', feedback: 'The ceiling is dark with old paint and older dust. Nothing moves. But one ceiling tile near the far corner is slightly out of place — pushed up from above. Sam taps it. Plaster dust falls.', verbs: ['look up', 'check ceiling', 'inspect ceiling'] },
      { label: 'Slip back to the office', to: 'office', verbs: ['go office', 'back', 'leave'] }
    ]
  }
};

export const MAP_TEXT = '[*] = you are here.  [.] = visited.  (P) = thinking puzzle.  HALL is also reachable from library, garden, and Room 10.  ENDING is locked until you have the monster head.';

export function buildMap(currentSceneId, visited = []) {
  const at = (id) => currentSceneId === id ? '*' : (visited.includes(id) ? '.' : ' ');
  return [
    'HUTT CENTRAL SCHOOL MAP',
    '',
    `[${at('start')}] GATE`,
    ' |',
    ` +-- [${at('toilets')}] toilets --- [${at('garden')}] garden --- [${at('oldwing')}] old wing`,
    ` |     +-- [${at('pipe')}] pipe`,
    ' |',
    ` +-- [${at('office')}] office`,
    ` |     +-- [${at('room10')}] Room 10`,
    ` |     +-- [${at('vegegarden')}] vege garden (P)`,
    ` |     +-- [${at('boiler')}] boiler room`,
    ` |     +-- [${at('corridor')}] corridor`,
    ` |           +-- [${at('library')}] library --- [${at('musicroom')}] music (P)`,
    ` |           +-- [${at('cloakbay')}] cloak bay (P)`,
    ' |',
    ` +-- [${at('courts')}] courts`,
    `       +-- [${at('playground')}] playground (P)`,
    `       +-- [${at('bikeshed')}] bike shed (P)`,
    `       +-- [${at('hall')}] HALL --- [${at('backstage')}] backstage --- [${at('ending')}] ending`,
    `              +-- [${at('propRoom')}] prop room (P)`
  ].join('\n');
}

export const JOKES = [
  'Why did the school ghost get sent to the office? Bad spell-ing.',
  'What do you call a dog who solves mysteries? Sherlock Bones. (Baxter is offended.)',
  'How do you make a tissue dance? Put a little boogie in it. (Sam laughs anyway.)',
  'What is a monster\'s favourite school subject? Hisss-tory.',
  'Why did the maths book look sad? It had too many problems.'
];

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

  const exactIndex = scene.choices.findIndex((choice) =>
    choice.verbs?.some((verb) => cleaned === verb)
  );
  if (exactIndex !== -1) return { choice: scene.choices[exactIndex], index: exactIndex };

  const number = Number.parseInt(cleaned, 10);
  if (Number.isInteger(number) && String(number) === cleaned) {
    const numericIndex = number - 1;
    if (scene.choices[numericIndex]) {
      return { choice: scene.choices[numericIndex], index: numericIndex };
    }
  }

  const fuzzyIndex = scene.choices.findIndex((choice) =>
    choice.verbs?.some((verb) => cleaned.includes(verb))
  );
  return { choice: scene.choices[fuzzyIndex], index: fuzzyIndex };
}

function initGame() {
  const state = createInitialState();
  const appEl = document.querySelector('#app');
  const storyLog = document.querySelector('#story-log');
  const choicesEl = document.querySelector('#choices');
  const artEl = document.querySelector('#scene-art');
  const captionEl = document.querySelector('#scene-caption');
  const inventoryEl = document.querySelector('#inventory-list');
  const inventoryPanel = document.querySelector('.inventory-panel');
  const notebookToggle = document.querySelector('#notebook-toggle');
  const form = document.querySelector('#command-form');
  const input = document.querySelector('#command-input');
  const saveStatus = document.querySelector('#save-status');
  const readToggle = document.querySelector('#read-toggle');
  const synth = typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null;
  let readAloud = false;

  function loadPreference() {
    try {
      const raw = localStorage.getItem(PREF_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (typeof parsed.readAloud === 'boolean') readAloud = parsed.readAloud;
    } catch {}
  }

  function savePreference() {
    try {
      localStorage.setItem(PREF_KEY, JSON.stringify({ readAloud }));
    } catch {}
  }

  function cancelSpeech() {
    if (synth) synth.cancel();
  }

  function speak(text) {
    if (!readAloud || !synth || !text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    synth.speak(utterance);
  }

  function speakLines(lines) {
    if (!readAloud || !synth) return;
    for (const line of lines) {
      if (line && String(line).trim()) speak(String(line));
    }
  }

  function updateReadToggle() {
    if (!readToggle) return;
    readToggle.setAttribute('aria-pressed', readAloud ? 'true' : 'false');
    readToggle.textContent = `READ ALOUD: ${readAloud ? 'ON' : 'OFF'}`;
  }

  function setReadAloud(on) {
    readAloud = !!on;
    savePreference();
    updateReadToggle();
    if (!readAloud) cancelSpeech();
  }

  function setNotebookOpen(open) {
    inventoryPanel.classList.toggle('is-open', open);
    if (notebookToggle) {
      notebookToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      notebookToggle.textContent = open ? 'MYSTERY CLUB NOTEBOOK ▲' : 'MYSTERY CLUB NOTEBOOK ▼';
    }
  }

  notebookToggle?.addEventListener('click', () => {
    setNotebookOpen(!inventoryPanel.classList.contains('is-open'));
  });

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

  function pulse(el, className) {
    if (!el) return;
    el.classList.remove(className);
    void el.offsetWidth;
    el.classList.add(className);
  }

  function renderScene(newItem = null) {
    const scene = scenes[state.sceneId];
    if (!scene) return;

    if (!state.visited.includes(state.sceneId)) {
      state.visited.push(state.sceneId);
    }

    cancelSpeech();

    appEl.classList.toggle('is-playing', state.turns > 0);
    artEl.src = SCENE_IMAGES[state.sceneId];
    artEl.alt = `${scene.title}. ${scene.caption}`;
    captionEl.textContent = scene.caption;
    saveStatus.textContent = `TURN ${state.turns}`;
    storyLog.innerHTML = '';
    storyLog.scrollTop = 0;

    pulse(artEl, 'art-pulse');

    const title = document.createElement('h2');
    title.textContent = scene.title;
    title.classList.add('fade-in');
    storyLog.append(title);

    scene.text.forEach((line) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = line;
      paragraph.classList.add('fade-in');
      storyLog.append(paragraph);
    });

    renderChoices(scene);
    renderInventory(newItem);
    input.value = '';

    if (state.sceneId === 'ending') {
      const stars = '*'.repeat(Math.min(5, Math.max(1, state.inventory.length)));
      writeMessage(`Case file: ${state.inventory.length} clue${state.inventory.length === 1 ? '' : 's'} collected in ${state.turns} turn${state.turns === 1 ? '' : 's'}. Detective rating: ${stars}`);
    }

    speakLines([scene.title, ...scene.text, ...scene.choices.map((c, i) => `Choice ${i + 1}: ${c.label}`)]);
  }

  function renderChoices(scene) {
    choicesEl.innerHTML = '';
    scene.choices.forEach((choice, index) => {
      const button = document.createElement('button');
      const missingItems = choice.requires?.filter((item) => !state.inventory.includes(item)) ?? [];
      button.type = 'button';
      button.className = 'choice-button fade-in';
      button.disabled = missingItems.length > 0;
      button.textContent = missingItems.length
        ? `${index + 1}. ${choice.label} (need: ${missingItems.join(', ')})`
        : `${index + 1}. ${choice.label}`;
      button.addEventListener('click', () => choose(index));
      choicesEl.append(button);
    });
  }

  function renderInventory(newItem = null) {
    inventoryEl.innerHTML = '';
    const items = state.inventory.length ? state.inventory : ['empty pockets', 'brave questions'];
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      if (item === newItem) li.classList.add('flash-update');
      inventoryEl.append(li);
    });
    if (newItem) {
      setNotebookOpen(true);
      pulse(notebookToggle, 'flash-update');
    }
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

    if (choice.feedback && !choice.to) {
      writeMessage(choice.feedback);
      state.invalidCommands = 0;
      return;
    }

    if (choice.reset) {
      Object.assign(state, createInitialState());
    }

    const newItem = choice.add && !state.inventory.includes(choice.add) ? choice.add : null;
    addItem(choice.add);
    state.sceneId = choice.to;
    state.turns += 1;
    state.invalidCommands = 0;
    autoSave();
    renderScene(newItem);
    if (choice.success) writeMessage(choice.success);
  }

  function writeMessage(message, { silent = false } = {}) {
    const paragraph = document.createElement('p');
    paragraph.className = 'system-message fade-in';
    paragraph.textContent = message;
    storyLog.append(paragraph);
    paragraph.scrollIntoView({ block: 'nearest' });
    if (!silent) speak(message);
  }

  function writePre(text) {
    const block = document.createElement('pre');
    block.className = 'story-pre fade-in';
    block.textContent = text;
    storyLog.append(block);
    block.scrollIntoView({ block: 'nearest' });
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
      setNotebookOpen(true);
      writeMessage(`Notebook: ${state.inventory.join(', ') || 'empty pockets, brave questions'}.`);
      return;
    }

    if (command === 'map') {
      writePre(buildMap(state.sceneId, state.visited));
      const total = Object.keys(scenes).length;
      writeMessage(`You are at: ${scene.title}.  Visited: ${state.visited.length} of ${total} places.`, { silent: true });
      writeMessage(MAP_TEXT, { silent: true });
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
      writeMessage('Commands: type a choice number, SAVE, LOAD, BAG, MAP, HINT, LOOK, JOKE, PAT BAXTER, READ, STOP, or RESTART. You can also try commands like GO HALL, TALK JO, or FOLLOW PRINTS.', { silent: true });
      return;
    }

    if (['pat baxter', 'pet baxter', 'pat dog', 'pet dog', 'good boy'].includes(command)) {
      writeMessage('Baxter wags his tail so hard his whole body wiggles. He licks your hand and waits for the next clue.');
      return;
    }

    if (['joke', 'tell joke', 'tell a joke', 'riddle'].includes(command)) {
      const joke = JOKES[Math.floor(Math.random() * JOKES.length)];
      writeMessage(`(Wilfred whispers a joke.) ${joke}`);
      return;
    }

    if (['read', 'speak', 'read aloud', 'read scene', 'say it'].includes(command)) {
      if (!synth) {
        writeMessage('This browser cannot read aloud. Try a different browser.', { silent: true });
        return;
      }
      const wasOn = readAloud;
      readAloud = true;
      cancelSpeech();
      speakLines([scene.title, ...scene.text, ...scene.choices.map((c, i) => `Choice ${i + 1}: ${c.label}`)]);
      if (!wasOn) writeMessage('(Reading this scene once. Tap READ ALOUD to keep it on.)', { silent: true });
      readAloud = wasOn;
      return;
    }

    if (['stop', 'shush', 'quiet', 'be quiet', 'stop reading'].includes(command)) {
      cancelSpeech();
      writeMessage('Quiet now.', { silent: true });
      return;
    }

    if (['read aloud on', 'voice on', 'speech on'].includes(command)) {
      setReadAloud(true);
      writeMessage('Read aloud is ON. New scenes will be spoken.', { silent: true });
      return;
    }

    if (['read aloud off', 'voice off', 'speech off'].includes(command)) {
      setReadAloud(false);
      writeMessage('Read aloud is OFF.', { silent: true });
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

  loadPreference();
  updateReadToggle();
  if (readToggle) {
    if (!synth) {
      readToggle.disabled = true;
      readToggle.title = 'Read aloud is not supported in this browser.';
    } else {
      readToggle.addEventListener('click', () => {
        setReadAloud(!readAloud);
        if (readAloud) {
          // Re-read the current scene immediately so the user gets feedback.
          handleCommand('read');
        }
      });
    }
  }

  if (loadSave()) {
    renderScene();
    writeMessage('Saved mystery loaded. Type RESTART for a new game.');
  } else {
    renderScene();
    writeMessage('Welcome, detective! Tap a numbered choice or type one. Try MAP, HINT, JOKE, PAT BAXTER, or the READ ALOUD button. The school is bigger than it looks — there are clues in the cloak bay, the playground, the music room, the prop room, the vegetable garden, the bike shed, and the boiler room. The old wing and the backstage area open up later.');
  }
}

if (typeof document !== 'undefined') {
  initGame();
}
