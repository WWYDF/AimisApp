export const characters = [
  'AiMi',
  'Asher',
  'Atlas',
  'Drekar',
  'Dubu',
  'Era',
  'Estelle',
  'Finii',
  'Juliette',
  'Juno',
  'Kai',
  'Kazan',
  'Luna',
  'Mako',
  'Nao',
  'Octavia',
  'Rasmus',
  'Rune',
  'Vyce',
  'X',
  'Zentaro'
]


export const characterImageMap: Record<string, string> = {
  aimi: '/i/character/timeline/AiMi.webp',
  'ai.mi': '/i/character/timeline/AiMi.webp',
  asher: '/i/character/timeline/Asher.webp',
  atlas: '/i/character/timeline/Atlas.webp',
  drekar: '/i/character/timeline/Drekar.webp',
  "drek'ar": '/i/character/timeline/Drekar.webp',
  dubu: '/i/character/timeline/Dubu.webp',
  era: '/i/character/timeline/Era.webp',
  estelle: '/i/character/timeline/Estelle.webp',
  finii: '/i/character/timeline/Finii.webp',
  juliette: '/i/character/timeline/Juliette.webp',
  juno: '/i/character/timeline/Juno.webp',
  kai: '/i/character/timeline/Kai.webp',
  kazan: '/i/character/timeline/Kazan.webp',
  luna: '/i/character/timeline/Luna.webp',
  mako: '/i/character/timeline/Mako.webp',
  nao: '/i/character/timeline/Nao.webp',
  octavia: '/i/character/timeline/Octavia.webp',
  rasmus: '/i/character/timeline/Rasmus.webp',
  rune: '/i/character/timeline/Rune.webp',
  vyce: '/i/character/timeline/Vyce.webp',
  x: '/i/character/timeline/X.webp',
  zentaro: '/i/character/timeline/Zentaro.webp',
}

// Returns image path or null
export function getCharacterPath(name: string | null): string | null {
  if (!name) return null
  const key = name.toLowerCase()
  return characterImageMap[key] ?? null
}
