import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  's',
  'z',
  'e',
  'i',
  'u',
  'o',
  'ao',
  'v',
  'ts',
  'kw',
  'c',
  'cw',
  'lh',
  '7',
  'r',
  'q',
  'qw',
  'x',
  'xw',
  'g',
  'gw',
  "p̓",
  "k̓",
  "k̓w",
  "t̓s",
  "l̓",
  "m̓",
  "n̓",
  "w̓",
  "y̓",
  "z̓",
  "r̓",
  "g̓",
  "g̓w",
  "q̓",
  "q̓w",
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
