#!/usr/bin/env node
/**
 * Verifica el contraste de los pares de tokens que realmente se usan.
 *
 * Lee los valores de `app/globals.css`, no de una copia: si alguien ajusta
 * la paleta y rompe un mínimo, esto falla aquí en vez de que el problema
 * llegue a una auditoría posterior.
 *
 * WCAG AA: 4.5:1 para texto normal, 3:1 para texto grande (24 px, o
 * 18.67 px en negrita — 24, no los 18 px que varios rulesets traen mal) y
 * 3:1 para contraste no textual: bordes de control y anillo de foco.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { contrast, hex } from './oklch.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const css = readFileSync(join(root, 'app/globals.css'), 'utf8');

const toRgb = (h) => {
  h = h.replace('#', '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
};

const tokens = {};
for (const m of css.matchAll(/--color-([\w-]+):\s*(#[0-9a-fA-F]{3,6})\s*;/g)) {
  tokens[m[1]] = toRgb(m[2]);
}

/** [tinta, fondo, mínimo, para qué] */
const PAIRS = [
  ['ink', 'ground', 4.5, 'cuerpo sobre marfil'],
  ['ink', 'band', 4.5, 'cuerpo sobre hueso'],
  ['ink-2', 'ground', 4.5, 'tinta secundaria sobre marfil'],
  ['ink-2', 'band', 4.5, 'tinta secundaria sobre hueso'],
  ['accent-ink', 'ground', 4.5, 'etiquetas y numerales sobre marfil'],
  ['accent-ink', 'band', 4.5, 'etiquetas y numerales sobre hueso'],
  ['ink', 'accent', 4.5, 'texto del botón principal'],
  ['accent-ink', 'ground', 3.0, 'silueta del botón principal contra el fondo'],
  ['ground', 'accent-ink', 4.5, 'texto del botón principal al pasar'],
  ['ink', 'accent', 3.0, 'anillo de foco dentro del acento'],
  ['edge', 'ground', 3.0, 'borde del botón contorneado (no textual)'],
  ['accent-ink', 'ground', 3.0, 'anillo de foco sobre claro'],
  ['deep-ink', 'deep', 4.5, 'títulos sobre petróleo'],
  ['deep-ink-2', 'deep', 4.5, 'cuerpo y etiquetas sobre petróleo'],
  ['accent-warm', 'deep', 3.0, 'el 21 y el anillo de foco sobre petróleo'],
  ['deep-rule', 'deep', 1.2, 'regla sobre petróleo (sólo visible)'],
];

let failed = 0;
const missing = new Set();
for (const [fg, bg, min, what] of PAIRS) {
  if (!tokens[fg] || !tokens[bg]) {
    missing.add(!tokens[fg] ? fg : bg);
    continue;
  }
  const r = contrast(tokens[fg], tokens[bg]);
  const ok = r >= min;
  if (!ok) failed++;
  console.log(
    `${ok ? 'ok  ' : 'FALLA'} ${r.toFixed(2).padStart(6)}:1  (min ${min})  ` +
      `${fg} ${hex(tokens[fg])} sobre ${bg} ${hex(tokens[bg])} — ${what}`
  );
}

for (const t of missing) console.log(`FALLA  token --color-${t} no existe en globals.css`);
failed += missing.size;

console.log(
  failed === 0
    ? `\n${PAIRS.length} pares verificados, todos pasan.`
    : `\n${failed} par(es) por debajo del mínimo.`
);
process.exit(failed === 0 ? 0 : 1);
