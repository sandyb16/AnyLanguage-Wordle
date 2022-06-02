import { CONFIG } from './config'

export const WORDS = [
  'pala7',
  "an̓was",
  'kalhas',
  'gitsmen',
  "sp̓vsqs",
  "t̓ena7",
  "lhoal̓s",
  'musmus',
  'mixalh',
  "hawint,
  'sqaxa7',
  'keckec',
  "sesq̓wez̓,
  "sisqa7',
  'mitsaq',
  "q'aylec",
  "q'ilhil",
  "lawan'"
  "lhpal̓s"
  "da'mas",
  'qaoqna7',
  'gwelin',
  "sq'waxt",
  
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
