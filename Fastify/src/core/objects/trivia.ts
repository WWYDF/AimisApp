type TriviaType = 'text' | 'multiple' | 'boolean'

interface TriviaQuestion {
  id: number
  question: string
  type: TriviaType
  correct: string
  choices?: string[] // only present for multiple choice
  image?: string
  hint?: boolean
  tier: 1 | 2 | 3 | 4 | 5;
}

export const qWeights: Record<number, Record<number, number>> = {
  1: { 1: 75, 2: 20, 3: 5 },
  2: { 1: 20, 2: 65, 3: 10, 4: 5 },
  3: { 2: 20, 3: 60, 4: 15, 5: 5 },
  4: { 3: 20, 4: 50, 5: 30 },
  5: { 4: 40, 5: 60 }
};

// Auto-generated trivia questions
export const TriviaTier1: TriviaQuestion[] = [
  {
    id: 8,
    question: "Who is Juliette's idol?",
    type: "multiple",
    choices: ["Dubu", "Octavia", "Estelle", "We don't know"],
    correct: "Estelle",
    image: "/i/character/timeline/Juliette.webp",
    tier: 1
  },

  {
    id: 9,
    question: "Who is Rune trying to avenge?",
    type: "multiple",
    choices: ["His Brother", "His Best Friend", "His Dad", "nobody lol"],
    correct: "His Best Friend",
    image: "/i/character/timeline/Rune.webp",
    tier: 1
  },

  {
    id: 10,
    question: "Who is 'Adrenaline Rush' associated with?",
    type: "multiple",
    choices: ["Kazan", "Zentaro", "Juliette", "X"],
    correct: "Zentaro",
    image: "/i/awakening/AdrenalineRush.webp",
    hint: true,
    tier: 1
  },

  {
    id: 11,
    question: "Who is 'Cast To Last' associated with?",
    type: "multiple",
    choices: ["Juno", "Rasmus", "Era", "Atlas"],
    correct: "Juno",
    image: "/i/awakening/CastToLast.webp",
    hint: true,
    tier: 1
  },

  {
    id: 12,
    question: "Who is 'Heavy Impact' associated with?",
    type: "multiple",
    choices: ["Atlas", "X", "Vyce", "Kazan"],
    correct: "Vyce",
    image: "/i/awakening/ShockAndAwe.webp",
    hint: true,
    tier: 1
  },

  {
    id: 13,
    question: "Who is 'Might of the Colossus' associated with?",
    type: "multiple",
    choices: ["Asher", "X", "Atlas", "Dubu"],
    correct: "Atlas",
    image: "/i/awakening/MightOfTheColossus.webp",
    hint: true,
    tier: 1
  },

  {
    id: 15,
    question: "Who is 'Reptile Remedy' associated with?",
    type: "multiple",
    choices: ["Rasmus", "Nao", "Drek'ar", "Juno"],
    correct: "Drek'ar",
    image: "/i/awakening/ClarionCorpRegenerator.webp",
    hint: true,
    tier: 1
  },

  {
    id: 16,
    question: "Which 'Spark' increases range?",
    type: "multiple",
    choices: ["Strength", "Focus", "Leadership", "There isn't one"],
    correct: "There isn't one",
    tier: 1
  },

  {
    id: 17,
    question: "'Stacks on Stacks' resets in-between sets",
    type: "boolean",
    choices: ["True", "False"],
    correct: "True",
    image: "/i/awakening/StacksOnStacks.webp",
    tier: 1
  },

  {
    id: 18,
    question: "Who is 'Super Surge' associated with?",
    type: "multiple",
    choices: ["Kai", "Octavia", "Luna", "Finii"],
    correct: "Kai",
    image: "/i/awakening/SuperSurge.webp",
    hint: true,
    tier: 1
  },

  {
    id: 20,
    question: "Who is 'Demolitionist' associated with?",
    type: "multiple",
    choices: ["X", "Luna", "Rasmus", "Vyce"],
    correct: "Rasmus",
    image: "/i/awakening/Demolitionist.webp",
    hint: true,
    tier: 1
  },

  {
    id: 23,
    question: "Who is 'Knife's Edge' associated with?",
    type: "multiple",
    choices: ["Rasmus", "Ai.Mi", "Kazan", "Vyce"],
    correct: "Kazan",
    image: "/i/awakening/KnifesEdge.webp",
    hint: true,
    tier: 1
  },

  {
    id: 25,
    question: "Who is 'Reverberation' associated with?",
    type: "multiple",
    choices: ["Octavia", "Estelle", "Finii", "Ai.Mi"],
    correct: "Octavia",
    image: "/i/awakening/Reverberation.webp",
    hint: true,
    tier: 1
  },

  {
    id: 27,
    question: "Who is 'Spark of Resilience' associated with?",
    type: "multiple",
    choices: ["Kazan", "Asher", "Dubu", "Atlas"],
    correct: "Asher",
    image: "/i/awakening/SparkofResilience.webp",
    hint: true,
    tier: 1
  },

  {
    id: 28,
    question: "Who is 'Stagger Swagger' associated with?",
    type: "multiple",
    choices: ["Finii", "Kai", "Estelle", "Octavia"],
    correct: "Finii",
    image: "/i/awakening/StaggerSwagger.webp",
    hint: true,
    tier: 1
  },

  {
    id: 31,
    question: "Who is 'Monumentalist' associated with?",
    type: "multiple",
    choices: ["Rasmus", "Atlas", "Mako", "Juno"],
    correct: "Juno",
    image: "/i/awakening/Monumentalist.webp",
    hint: true,
    tier: 1
  },

  {
    id: 35,
    question: "Who are 'Among Titans' associated with?",
    type: "multiple",
    choices: ["Juliette, Dubu, Juno", "X, Asher, Luna", "X, Dubu, Luna", "Juliette, Asher, Juno"],
    correct: "X, Dubu, Luna",
    image: "/i/awakening/AmongTitans.webp",
    hint: true,
    tier: 1
  },

  {
    id: 37,
    question: "Atlas and Luna are the only siblings in the game",
    type: "boolean",
    choices: ["True", "False"],
    correct: "False",
    image: "/i/character/goalscore/Luna.webp",
    tier: 1
  },

  {
    id: 42,
    question: "How do you unlock the 'Glitchy' title?",
    type: "multiple",
    choices: ["Ai.Mi Tier 3", "Ai.Mi Tier 9", "Ai.Mi Tier 8", "Octavia Tier 7"],
    correct: "Ai.Mi Tier 9",
    tier: 1
  },

  {
    id: 44,
    question: "How do you unlock the 'Space Invader' title?",
    type: "multiple",
    choices: ["Drek'ar Affinity", "Juno Affinity", "Atlas Affinity", "Ai.Mi Affinity"],
    correct: "Drek'ar Affinity",
    tier: 1
  },

  {
    id: 47,
    question: "How do you unlock the 'Fashion Icon' title?",
    type: "multiple",
    choices: ["Equip an emote", "Buy a skin", "Octavia Affinity", "Estelle Affinity"],
    correct: "Estelle Affinity",
    tier: 1
  },

  {
    id: 71,
    question: "Goalie Gear loses its effect when crossing the midfield.",
    type: "boolean",
    choices: ["True", "False"],
    correct: "True",
    image: "/i/awakening/EjectButton.webp",
    tier: 1
  },

  {
    id: 74,
    question: "All maps have an equal probability of getting picked.",
    type: "boolean",
    choices: ["True", "False"],
    correct: "True",
    image: "/i/map/InkysSplashZone.webp",
    tier: 1
  },

  {
    id: 77,
    question: "Which of these characters is NOT represented in a Clarion map variant?",
    type: "multiple",
    choices: ["Atlas", "Drek'ar", "Rune", "Vyce"],
    correct: "Vyce",
    image: "/i/map/ClarionCorp.webp",
    tier: 1
  },

  {
    id: 80,
    question: "The full release of the game introduced locks",
    type: "boolean",
    choices: ["True", "False"],
    correct: "True",
    tier: 1
  },

  {
    id: 81,
    question: "This question only has a 1% chance of getting selected, so hopefully it doesn't :PepeLaugh:",
    type: "multiple",
    choices: ["This is the correct answer (trust)", "or is it?", "This answer is wrong", "use code \"AiMiAppSecret\" for sonii wires"],
    correct: "This is the correct answer (trust)",
    image: "/i/emoticon/MakoOhno.png",
    tier: 1
  },

  {
    id: 83,
    question: "How many credits does the 'Big Spender' Nameplate cost? (Not the title)",
    type: "multiple",
    choices: ["500,000", "1,000,000", "2,000,000", "3,000,000"],
    correct: "2,000,000",
    image: "/i/misc/Striker_Credits.webp",
    tier: 1
  },

  {
    id: 84,
    question: "'Alpharad Rune' was claimable via code for free for a short time",
    type: "boolean",
    choices: ["True", "False"],
    correct: "True",
    image: "/i/character/goalscore/skins/Alpharad_Rune.webp",
    tier: 1
  },

  {
    id: 87,
    question: "When was Kazan added to the game?",
    type: "multiple",
    choices: ["June, 2023", "July, 2023", "August, 2023", "September, 2023"],
    correct: "August, 2023",
    image: "/i/character/goalscore/Kazan.webp",
    tier: 1
  },

  {
    id: 88,
    question: "When was the High Tea Hijinx Event?",
    type: "multiple",
    choices: ["May, 2023", "June, 2023", "July, 2023"],
    correct: "July, 2023",
    image: "/i/character/goalscore/Finii.webp",
    tier: 1
  },

  {
    id: 89,
    question: "Who was added first, Vyce or Octavia?",
    type: "multiple",
    choices: ["Vyce", "Octavia", "They were released at the same time"],
    correct: "They were released at the same time",
    image: "/i/emoticon/DemonDrive.png",
    tier: 1
  },

  {
    id: 91,
    question: "What studio animated the release trailer?",
    type: "multiple",
    choices: ["It was made in-house", "Mappa", "TRIGGER", "GAINAX"],
    correct: "TRIGGER",
    tier: 1
  },

  {
    id: 92,
    question: "Arin Hanson voices X.",
    type: "boolean",
    choices: ["True", "False"],
    correct: "True",
    image: "/i/character/goalscore/X.webp",
    tier: 1
  },

  {
    id: 93,
    question: "Ai.Mi is unlocked for free.",
    type: "boolean",
    choices: ["True", "False"],
    correct: "True",
    image: "/i/character/timeline/AiMi.webp",
    tier: 1
  },

  {
    id: 98,
    question: "What character has an ability called 'Molten Bolt'?",
    type: "multiple",
    choices: ["Kai", "Drek'ar", "Juliette", "Luna"],
    correct: "Drek'ar",
    tier: 1
  },

  {
    id: 101,
    question: "What character has an ability called 'Piercing Shot'?",
    type: "multiple",
    choices: ["Luna", "Kai", "Asher", "Estelle"],
    correct: "Estelle",
    tier: 1
  },

  {
    id: 102,
    question: "What character has an ability called 'Triple Take'?",
    type: "multiple",
    choices: ["Mako", "Finii", "Kazan", "Octavia"],
    correct: "Finii",
    tier: 1
  },

  {
    id: 103,
    question: "What character has an ability called 'Giga Blast'?",
    type: "multiple",
    choices: ["Drek'ar", "Kai", "Juliette", "Luna"],
    correct: "Kai",
    tier: 1
  },

  {
    id: 104,
    question: "What character has an ability called 'Blazing Pace'?",
    type: "multiple",
    choices: ["Kai", "Luna", "Octavia", "Era"],
    correct: "Kai",
    tier: 1
  },

  {
    id: 106,
    question: "What character has an ability called 'Carried Away'?",
    type: "multiple",
    choices: ["Juno", "Vyce", "Kazan", "Dubu"],
    correct: "Kazan",
    tier: 1
  },

  {
    id: 108,
    question: "Trying to evade with full energy activates an ability called \"Coreflip\".",
    type: "boolean",
    choices: ["True", "False"],
    correct: "False", // feel like this is gonna piss a lot of people off lol
    tier: 1
  },

  {
    id: 109,
    question: "What character has an ability called 'Perfect Pitch'?",
    type: "multiple",
    choices: ["Estelle", "Vyce", "Octavia", "Mako"],
    correct: "Mako",
    tier: 1
  },

  {
    id: 110,
    question: "What character has an ability called 'Sentry Drone'?",
    type: "multiple",
    choices: ["Ai.Mi", "Mako", "Nao", "Atlas"],
    correct: "Nao",
    tier: 1
  },

  {
    id: 111,
    question: "What character has an ability called 'Lifeline'?",
    type: "multiple",
    choices: ["Juno", "Atlas", "Nao", "Rune"],
    correct: "Nao",
    tier: 1
  },

  {
    id: 112,
    question: "What character has an ability called 'Sonic Boom'?",
    type: "multiple",
    choices: ["Octavia", "Vyce", "Rasmus", "Zentaro"],
    correct: "Octavia",
    tier: 1
  },

  {
    id: 114,
    question: "What character has an ability called 'Super Nova'?",
    type: "multiple",
    choices: ["Rune", "Era", "Vyce", "Atlas"],
    correct: "Vyce",
    tier: 1
  },

  {
    id: 115,
    question: "What character has an ability called 'Bell Ringer'?",
    type: "multiple",
    choices: ["X", "Juliette", "Kazan", "Zentaro"],
    correct: "X",
    tier: 1
  },

  {
    id: 116,
    question: "What character has an ability called 'X Maximus!'?",
    type: "multiple",
    choices: ["X", "X", "X", "X"],
    correct: "X", // idk lol
    image: "/i/character/body/X.webp",
    tier: 1
  },

  {
    id: 117,
    question: "What is Zentaro's SECONDARY called? (His dash)",
    type: "multiple",
    choices: ["Backstab", "Iai Rush", "Slicing Winds"],
    correct: "Iai Rush",
    image: "/i/character/goalscore/Zentaro.webp",
    tier: 1
  },

  {
    id: 118,
    question: "What is Dubu's PRIMARY called? (His log)",
    type: "multiple",
    choices: ["Rollout", "Bamboo Bash", "Breakthrough"],
    correct: "Rollout",
    image: "/i/character/timeline/Dubu.webp",
    tier: 1
  }
];

  export const TriviaTier2: TriviaQuestion[] = [
  {
    id: 1,
    question: "What is the correct spelling?",
    type: "multiple",
    choices: ["A.I. Mi", "Ai.Mi", "AiMi", "A.I.Mi"],
    correct: "Ai.Mi",
    image: "/i/character/timeline/AiMi.webp",
    tier: 2
  },

  {
    id: 2,
    question: "Who was Estelle previously in a relationship with?",
    type: "multiple",
    choices: ["X", "Kai", "Juliette", "Rasmus"],
    correct: "Rasmus",
    image: "/i/character/goalscore/Estelle.webp",
    tier: 2
  },

  {
    id: 6,
    question: "What caused Dubu's size?",
    type: "multiple",
    choices: ["ClarionCorp", "Tofu Consumption", "It's natural"],
    correct: "ClarionCorp",
    image: "/i/character/timeline/Dubu.webp",
    tier: 2
  },

  {
    id: 14,
    question: "Who is 'Missile Propulsion' associated with?",
    type: "multiple",
    choices: ["Rasmus", "Ai.Mi", "Finii", "Luna"],
    correct: "Luna",
    image: "/i/awakening/MissilePropulsion.webp",
    hint: true,
    tier: 2
  },

  {
    id: 19,
    question: "Who is 'Team Player' associated with?",
    type: "multiple",
    choices: ["Juliette", "Finii", "Juno", "Octavia"],
    correct: "Finii",
    image: "/i/awakening/TeamPlayer.webp",
    hint: true,
    tier: 2
  },

  {
    id: 21,
    question: "What team is 'Fire Up!' associated with?",
    type: "multiple",
    choices: ["SSR", "Ember Monarchs", "Frost Fire", "Byte Breakers"],
    correct: "Frost Fire",
    image: "/i/awakening/FireUp.webp",
    hint: true,
    tier: 2
  },

  {
    id: 26,
    question: "Who is 'Siege Machine' associated with?",
    type: "multiple",
    choices: ["Rasmus", "Juno", "Mako", "Luna"],
    correct: "Juno",
    image: "/i/awakening/SiegeMachine.webp",
    hint: true,
    tier: 2
  },

  {
    id: 36,
    question: "Which one of these pairs are siblings?",
    type: "multiple",
    choices: ["Asher and Juno", "Juliette and X", "Rune and Kai", "Atlas and Luna"],
    correct: "Atlas and Luna",
    tier: 2
  },

  {
    id: 50,
    question: "Which title is unlocked via X's affinity?",
    type: "multiple",
    choices: ["Exceptional", "Excessive", "Explosive", "X Factor"],
    correct: "Excessive",
    image: "/i/character/timeline/X.webp",
    tier: 2
  },

  {
    id: 55,
    question: "How do you unlock the 'Founding Member' title?",
    type: "multiple",
    choices: ["Play during the beta", "Pre-Registered before Apr 27th release", "Purchased the Founder's pack"],
    correct: "Purchased the Founder's pack",
    tier: 2
  },

  {
    id: 61,
    question: "'X Lore' is a real title in the game.",
    type: "boolean",
    choices: ["True", "False"],
    correct: "True",
    tier: 2
  },

  {
    id: 123,
    question: "'Zentaro Lore' is a real title in the game.",
    type: "boolean",
    choices: ["True", "False"],
    correct: "False",
    tier: 2
  },

  {
    id: 65,
    question: "'The G.O.A.T.' is a real title in the game.",
    type: "boolean",
    choices: ["True", "False"],
    correct: "False",
    tier: 2
  },

  {
    id: 68,
    question: "How do you unlock the 'Abandoned' title?",
    type: "multiple",
    choices: ["This title doesn't exist", "Given to everyone after the \"Dear Strikers\" video", "Given to those who got into the playtest, but weren't actually given access", "Given to those who's support ticket went unanswered for a month"],
    correct: "Given to those who got into the playtest, but weren't actually given access",
    tier: 2
  },

  {
    id: 73,
    question: "Standing near your own goal grants knockback resistance.",
    type: "boolean",
    choices: ["True", "False"],
    correct: "True",
    tier: 2
  },

  {
    id: 75,
    question: "Which of these is NOT a real Tea Time Tussle map?",
    type: "multiple",
    choices: ["Corner Pocket", "Back to Back", "Center Stage", "Map Flipped"],
    correct: "Center Stage",
    image: "/i/awakening/StaggerSwagger.webp",
    tier: 2
  },

  {
    id: 76,
    question: "The Tea Time Tussle maps are larger than the normal ones",
    type: "boolean",
    choices: ["True", "False"],
    correct: "True",
    image: "/i/awakening/StaggerSwagger.webp",
    tier: 2
  },

  {
    id: 78,
    question: "The sphere on Clarion Test Chamber reduces cooldowns by 10 seconds",
    type: "boolean",
    choices: ["True", "False"],
    correct: "True",
    image: "/i/map/Project_Maelstrom.webp",
    tier: 2
  },

  {
    id: 79,
    question: "Who is Inky of Inky's Splash Zone?",
    type: "multiple",
    choices: ["The Developer that added it to the game", "Nobody, it's a made up name", "The octopus behind the cannon", "aesop"],
    correct: "The octopus behind the cannon",
    image: "/i/map/InkysSplashZone.webp",
    hint: true,
    tier: 2
  },

  {
    id: 86,
    question: "When was Finii added to the game?",
    type: "multiple",
    choices: ["June, 2023", "July, 2023", "August, 2023", "May, 2023"],
    correct: "July, 2023",
    image: "/i/character/goalscore/Finii.webp",
    tier: 2
  },

  {
    id: 90,
    question: "In the beta, Rune had two uses of his primary skill.",
    type: "boolean",
    choices: ["True", "False"],
    correct: "True",
    image: "/i/character/goalscore/Rune.webp",
    tier: 2
  },

  {
    id: 94,
    question: "Who was the last character added before the Apr 27th release?",
    type: "multiple",
    choices: ["Asher", "Juno", "Rasmus", "Drek'ar"],
    correct: "Rasmus",
    tier: 2
  },

  {
    id: 95,
    question: "When did Omega Strikers peak in Player Count?",
    type: "multiple",
    choices: ["September, 2022", "October, 2022", "May, 2023", "July, 2023"],
    correct: "September, 2022",
    tier: 2
  },

  {
    id: 96,
    question: "How many horns does Vyce have?",
    type: "multiple",
    choices: ["1", "2", "3", "None"],
    correct: "1",
    image: "/i/character/body/Vyce.webp",
    hint: true, // idk maybe they'll still get it wrong lol
    tier: 2
  },

  {
    id: 100,
    question: "What character has an ability called 'Magic Maelstrom'?",
    type: "multiple",
    choices: ["Atlas", "Drek'ar", "Era", "Mako"],
    correct: "Era",
    image: "/i/emoticon/Maelstrom.png", // gonna throw them off with this haha
    tier: 2
  },

  {
    id: 105,
    question: "What character has an ability called 'The Slip'?",
    type: "multiple",
    choices: ["Nao", "Kai", "Zentaro", "Kazan"],
    correct: "Kazan",
    tier: 2
  },

  {
    id: 113,
    question: "What character has an ability called 'Death Touch'?",
    type: "multiple",
    choices: ["Juliette", "X", "Kazan", "Rasmus"],
    correct: "Rasmus",
    tier: 2
  },

  {
    id: 119,
    question: "Rune has beef with Kai because...",
    type: "multiple",
    choices: ["He doesn't like his attitude", "Kai humiliated him as a child", "He's jealous of Kai"],
    correct: "Kai humiliated him as a child",
    image: "/i/emoticon/RuneDespair.png",
    tier: 2
  },

  {
    id: 122,
    question: "'Shogun Asher' was claimable via code for free for a short time",
    type: "boolean",
    choices: ["True", "False"],
    correct: "False",
    image: "/i/character/goalscore/skins/Shogun_Asher.webp",
    tier: 2
  },
];

  export const TriviaTier3: TriviaQuestion[] = [
  {
    id: 4,
    question: "Vyce has moshed before",
    type: "boolean",
    choices: ["True", "False"],
    correct: "False",
    image: "/i/emoticon/VyceRockOn.gif", // another red herring
    tier: 3
  },

  {
    id: 22,
    question: "What orb-based awakening reduced cooldowns?",
    type: "multiple",
    choices: ["Orb Dancer", "Orb Focus", "Orb Catalyst", "Orb Ponderer"],
    correct: "Orb Ponderer",
    tier: 3
  },

  {
    id: 24,
    question: "Who is 'Rapid Fire' associated with?",
    type: "multiple",
    choices: ["Zentaro", "Kai", "Kazan", "Dubu"],
    correct: "Dubu",
    image: "/i/awakening/RapidFire.webp",
    hint: true,
    tier: 3
  },

  {
    id: 30,
    question: "Who is 'Timeless Creator' associated with?",
    type: "multiple",
    choices: ["Atlas", "Rasmus", "Juno", "Dubu"],
    correct: "Juno",
    image: "/i/awakening/TimelessCreator.webp",
    hint: true,
    tier: 3
  },

  {
    id: 34,
    question: "Who is 'Spark of Strength' associated with?",
    type: "multiple",
    choices: ["Juliette", "X", "Kazan", "Luna"],
    correct: "X",
    image: "/i/awakening/SparkofStrength.webp",
    hint: true,
    tier: 3
  },

  {
    id: 40,
    question: "Which one of these characters ran an illegal gambling ring?",
    type: "multiple",
    choices: ["Drek'ar", "Mako", "Asher", "Vyce"],
    correct: "Asher",
    image: "/i/misc/Striker_Credits.webp",
    tier: 3
  },

  {
    id: 41,
    question: "Why did Atlas join the Pro League?",
    type: "multiple",
    choices: ["For money", "Because Luna did", "To test his inventions", "His father wanted him to"],
    correct: "To test his inventions",
    image: "/i/character/timeline/Atlas.webp",
    tier: 3
  },

  {
    id: 43,
    question: "How do you unlock the 'Unbreakable' title?",
    type: "multiple",
    choices: ["Altas Affinity", "Asher Affinity", "X Affinity", "Get 200 saves in one match"],
    correct: "Asher Affinity",
    tier: 3
  },

  {
    id: 48,
    question: "Which title is unlocked via Juno's Affinity?",
    type: "multiple",
    choices: ["Blobbo Buddy", "Blob Whisperer", "Ice Cream Enjoyer", "Sweet Treat"],
    correct: "Blobbo Buddy",
    image: "/i/character/timeline/Juno.webp",
    tier: 3
  },

  {
    id: 49,
    question: "How do you unlock the 'Loose Cannon' title?",
    type: "multiple",
    choices: ["Luna Affinity", "Kai Affinity", "Kazan Affinity", "Zentaro Affinity"],
    correct: "Kazan Affinity",
    tier: 3
  },

  {
    id: 52,
    question: "How do you unlock the 'Idol' title?",
    type: "multiple",
    choices: ["Buy the 'Idol Ai.Mi' skin", "Ai.Mi Affinity", "Octavia Affinity", "MVP 5 times during the Music Event"],
    correct: "MVP 5 times during the Music Event",
    image: "/i/character/goalscore/skins/Idol_AiMi.webp", // Another red herring (get trolled)
    tier: 3
  },

  {
    id: 53,
    question: "How do you unlock the 'Promethean' title?",
    type: "multiple",
    choices: ["Played during the beta", "Played before the \"Dear Strikers\" video", "Pre-Registered before Apr 27th release", "This is a free title"],
    correct: "Played before the \"Dear Strikers\" video",
    tier: 3
  },

  {
    id: 54,
    question: "How do you unlock the 'Thousand Absolutes' title?",
    type: "multiple",
    choices: ["Unlock Octavia", "Play during the Music Event", "Team EDM award during the Demon Duel Event"],
    correct: "Team EDM award during the Demon Duel Event",
    tier: 3
  },

  {
    id: 57,
    question: "Which Tournament granted the 'Knower' title to its winners?",
    type: "multiple",
    choices: ["NAST", "OSAS", "Knowledge Gap", "NASA"],
    correct: "Knowledge Gap",
    image: "/i/emoticon/SoniiTrophy.png",
    tier: 3
  },

  {
    id: 59,
    question: "'o7' is a real title in the game",
    type: "boolean",
    choices: ["True", "False"],
    correct: "True",
    image: "/i/emoticon/SoniiSalute.png",
    tier: 3
  },

  {
    id: 62,
    question: "'Demon Queuer' is a real title in the game.",
    type: "boolean",
    choices: ["True", "False"],
    correct: "True",
    tier: 3
  },

  {
    id: 66,
    question: "How do you unlock the 'ClarionCorp Executive' title?",
    type: "multiple",
    choices: ["Unlock all 3 Members of ClarionCorp", "Search your username on ClarionCorp.net", "Season 1 Striker Pass", "This title doesn't exist"],
    correct: "This title doesn't exist",
    image: "/i/emoticon/ClarionCorp.png",
    tier: 3
  },

  {
    id: 67,
    question: "Which of these titles are given in Striker Superlatives?",
    type: "multiple",
    choices: ["Verified Egoist", "Verified Goalie", "Verified Brawler", "Verified Scorer"],
    correct: "Verified Egoist",
    tier: 3
  },

  {
    id: 69,
    question: "How do you unlock the 'Eternal Flame' title?",
    type: "multiple",
    choices: ["This title doesn't exist", "Reach Top 50 Globally", "Given to alpha testers", "Given to Players who chose Frost Fire in the PL VS event"],
    correct: "Given to alpha testers",
    tier: 3
  },

  {
    id: 72,
    question: "What forward gear replaced 'Tempo Swing'?",
    type: "multiple",
    choices: ["Pummelers", "Vicious Vambrace", "Siphoning Wand"],
    correct: "Siphoning Wand",
    image: "/i/awakening/TempoSwings.webp",
    tier: 3
  },

  {
    id: 85,
    question: "Which of these was NOT a team in High Tea Hijinx?",
    type: "multiple",
    choices: ["Taro", "Pumpkin", "Mango", "Milk Tea"],
    correct: "Mango",
    image: "/i/awakening/StaggerSwagger.webp",
    tier: 3
  },

  {
    id: 97,
    question: "What character has an ability called 'Breakthrough'?",
    type: "multiple",
    choices: ["Atlas", "Asher", "Vyce", "X"],
    correct: "Asher",
    tier: 3
  },

  {
    id: 99,
    question: "Which of these characters can make use of every awakening in the game? (No caution symbol)",
    type: "multiple",
    choices: ["Era", "Octavia", "Finii", "Luna"],
    correct: "Era",
    tier: 3
  },

  {
    id: 107,
    question: "What character has an ability called 'Press The Point'?",
    type: "multiple",
    choices: ["Era", "Estelle", "Kazan", "This doesn't exist"],
    correct: "Kazan",
    tier: 3
  },

  {
    id: 120,
    question: "Which character says \"I've got an eye for victory\"?",
    type: "multiple",
    choices: ["Atlas", "Asher", "Juliette", "Estelle"],
    correct: "Asher",
    tier: 3
  },

  {
    id: 121,
    question: "Which character says \"Atlas. Focus on what you've got. Don't get distracted by what might be.\"?",
    type: "multiple",
    choices: ["Rasmus", "Drek'ar", "Rune", "Kazan"],
    correct: "Kazan",
    image: "/i/character/goalscore/Atlas.webp",
    tier: 3
  }
];

  export const TriviaTier4: TriviaQuestion[] = [
  {
    id: 5,
    question: "Who is 'Built Different' associated with?",
    type: "multiple",
    choices: ["Juliette", "Vyce", "Kazan", "X"],
    correct: "X",
    image: "/i/awakening/BuiltDifferent.webp",
    hint: true,
    tier: 4
  },

  {
    id: 7,
    question: "Kai attends X's house parties.",
    type: "boolean",
    choices: ["True", "False"],
    correct: "True",
    image: "/i/character/timeline/Kai.webp",
    tier: 4
  },

  {
    id: 39,
    question: "Which of these characters has beef with Asher?",
    type: "multiple",
    choices: ["X", "Nao", "Atlas", "Estelle"],
    correct: "Atlas",
    image: "/i/character/goalscore/Asher.webp",
    tier: 4
  },

  {
    id: 45,
    question: "How do you unlock the 'The Eager Rookie' title?",
    type: "multiple",
    choices: ["Juliette Affinity", "Luna Affinity", "Playing your first 5 games", "Log in for the 5th time"],
    correct: "Log in for the 5th time",
    tier: 4
  },

  {
    id: 46,
    question: "How do you unlock the 'Rising Star' title?",
    type: "multiple",
    choices: ["Juliette Affinity", "Octavia Affinity", "Kai Affinity", "Zentaro Affinity"],
    correct: "Juliette Affinity",
    tier: 4
  },

  {
    id: 51,
    question: "How do you unlock the 'Watching The Sunset' title?",
    type: "multiple",
    choices: ["Completing the Visual Novel", "Season 2 Striker Pass", "Season 3 Striker Pass", "This title doesn't exist"],
    correct: "Season 2 Striker Pass",
    tier: 4
  },

  {
    id: 56,
    question: "How do you unlock the 'The Champion' title?",
    type: "multiple",
    choices: ["Win your first match", "Reach Pro-League", "Win NASL or EUSL", "Win the Official Pro-League Event"],
    correct: "Win NASL or EUSL",
    tier: 4
  },

  {
    id: 60,
    question: "How do you unlock the 'Chatting' title?",
    type: "multiple",
    choices: ["Become a verified streamer", "Reach level 80 in the OS Discord", "Win TPT or ACU more than once"],
    correct: "Win TPT or ACU more than once",
    tier: 4
  },

  {
    id: 64,
    question: "'Shrimple As' is a real title in the game.",
    type: "boolean",
    choices: ["True", "False"],
    correct: "True",
    tier: 4
  },

  {
    id: 70,
    question: "How do you unlock the 'Pixel Artist' title?",
    type: "multiple",
    choices: ["This title doesn't exist", "Get your emote put into the game", "Participate in the 2023 r/place board", "Only given to Official Odyssey Artists"],
    correct: "Participate in the 2023 r/place board",
    tier: 4
  },

  {
    id: 82,
    question: "How do you unlock the 'Demon Drive' Nameplate?",
    type: "multiple",
    choices: ["Unlock Octavia", "Have your team play Vyce, Octavia, and Mako", "KO 5 enemies with your SPECIAL ability", "Have Aerials, Super Surge, and Chronoboost all at once"],
    correct: "KO 5 enemies with your SPECIAL ability",
    image: "/i/nameplate/DemonDrive_large.webp",
    tier: 4
  }
];

  export const TriviaTier5: TriviaQuestion[] = [
  {
    id: 3,
    question: "Rune's default hair color is natural",
    type: "boolean",
    choices: ["True", "False"],
    correct: "True",
    image: "/i/character/timeline/Rune.webp",
    tier: 5
  },

  {
    id: 29,
    question: "Before getting reworked, 'Unstoppable' used to",
    type: "multiple",
    choices: ["Give Power for each KO", "Resist Knockback and Damage", "Prevent the first KO", "Give speed on hit"],
    correct: "Resist Knockback and Damage",
    image: "/i/awakening/Unstoppable.webp",
    tier: 5
  },

  {
    id: 32,
    question: "Who is 'Spark of Agility' associated with?",
    type: "multiple",
    choices: ["Kai", "Era", "Octavia", "Mako"],
    correct: "Era",
    image: "/i/awakening/SparkofAgility.webp",
    hint: true,
    tier: 5
  },

  {
    id: 33,
    question: "Who is 'Spark of Focus' associated with?",
    type: "multiple",
    choices: ["Atlas", "Luna", "Drek'ar", "Rasmus"],
    correct: "Luna",
    image: "/i/awakening/SparkofFocus.webp",
    hint: true,
    tier: 5
  },

  {
    id: 38,
    question: "Which character has a sibling named Colin?",
    type: "multiple",
    choices: ["Zentaro", "Mako", "Asher", "Nao"],
    correct: "Asher",
    image: "/i/emoticon/Colin.png",
    tier: 5
  },

  {
    id: 58,
    question: "How do you unlock the 'Gatekeeper' title?",
    type: "multiple",
    choices: ["Get 200 saves in a single match", "Earn a spot in 'Top Goalies' of Striker Superlatives", "Defend an NASL spot in Landing", "Reach Pro-League as a Goalie Main"],
    correct: "Defend an NASL spot in Landing",
    tier: 5
  },

  {
    id: 63,
    question: "How do you unlock the 'Clipmaster' title?",
    type: "multiple",
    choices: ["Share a Twitch clip of Omega Strikers", "Stream Omega Strikers once", "Win TPT or ACU more than once", "This title doesn't exist"],
    correct: "Win TPT or ACU more than once",
    tier: 5
  }
];

export const allTiers: Record<1 | 2 | 3 | 4 | 5, TriviaQuestion[]> = {
  1: TriviaTier1,
  2: TriviaTier2,
  3: TriviaTier3,
  4: TriviaTier4,
  5: TriviaTier5
};