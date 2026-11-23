// Verifies every locale has the same keys, value types and array lengths as en.js.
//   node scripts/check-locales.mjs
import { readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'i18n', 'locales');
const load = async (f) => (await import(pathToFileURL(path.join(dir, f)).href)).default;
const en = await load('en.js');

function compare(ref, other, p, errors) {
  if (Array.isArray(ref)) {
    if (!Array.isArray(other)) return errors.push(`${p}: expected array`);
    if (ref.length !== other.length) errors.push(`${p}: length ${other.length} ≠ ${ref.length}`);
    ref.forEach((v, i) => other[i] !== undefined && compare(v, other[i], `${p}[${i}]`, errors));
  } else if (ref && typeof ref === 'object') {
    if (!other || typeof other !== 'object') return errors.push(`${p}: expected object`);
    for (const k of Object.keys(ref)) {
      if (!(k in other)) errors.push(`${p}.${k}: missing`);
      else compare(ref[k], other[k], `${p}.${k}`, errors);
    }
    for (const k of Object.keys(other)) if (!(k in ref)) errors.push(`${p}.${k}: extra key`);
  } else if (typeof ref !== typeof other) {
    errors.push(`${p}: type ${typeof other} ≠ ${typeof ref}`);
  }
}

let failed = false;
for (const f of readdirSync(dir).filter((x) => x.endsWith('.js') && x !== 'en.js')) {
  const errors = [];
  compare(en, await load(f), f.replace('.js', ''), errors);
  if (errors.length) {
    failed = true;
    console.error(`✗ ${f}\n  ` + errors.join('\n  '));
  } else console.log(`✓ ${f}`);
}
process.exit(failed ? 1 : 0);
