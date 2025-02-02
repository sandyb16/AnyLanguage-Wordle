import { CONFIG } from './config'

export const WORDS = [
  'kalhas',
  "sp̓vsqs",
  "lhpal̓s",
  'musmus',
  'mixalh',
  "hawint",
  'sqaxa7',
  'keckec',
  'sisqa7',
  'mitsaq',
  "q̓aylec",
  "q̓ilhil",
  "lawan'",
  "lhpal̓s",
  'qaoqna7',
  'gwelin',
  "sq̓waxt",
  
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
