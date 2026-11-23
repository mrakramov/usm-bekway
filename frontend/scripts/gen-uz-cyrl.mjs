// Generates src/i18n/locales/uz-cyrl.js from src/i18n/locales/uz.js by
// transliterating Uzbek Latin to Uzbek Cyrillic.
//   node scripts/gen-uz-cyrl.mjs
import { writeFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(here, '..', 'src', 'i18n', 'locales', 'uz.js');
const out = path.join(here, '..', 'src', 'i18n', 'locales', 'uz-cyrl.js');
const uz = (await import(pathToFileURL(src).href)).default;

// Values at these key paths are copied unchanged
const SKIP_PATHS = [
  /^contact\.offices\.[12]\.address$/, // Turkish street addresses
  /^form\.emailPh$/,
  /^footer\.rights$/,
];

// Kept in Latin script wherever they appear
const PROTECTED = [
  'USM BEKWAY LOGISTICS', 'USM Bekway Logistics', 'USM Bekway', 'VİPET', 'DEGER', 'Mar Tur',
  'Low-bed', 'low-bed', 'FCL', 'FTL', 'LTL', 'E-mail', '24/7', '{name}', 'you@company.com',
];

// Whole-word spellings that differ from letter-by-letter transliteration
const WORDS = {
  Fransiya: 'Франция', Shveysariya: 'Швейцария', Shvetsiya: 'Швеция', Polsha: 'Польша',
  Avstriya: 'Австрия', Vengriya: 'Венгрия', Norvegiya: 'Норвегия', Ruminiya: 'Руминия',
  Niderlandiya: 'Нидерландия', Slovakiya: 'Словакия', Portugaliya: 'Португалия',
  Ispaniya: 'Испания', Irlandiya: 'Ирландия', Italiya: 'Италия', Germaniya: 'Германия',
  Gruziya: 'Грузия', Daniya: 'Дания', Angliya: 'Англия',
  izolyatsiyalangan: 'изоляцияланган', aksessuarlar: 'аксессуарлар', Aksessuarlar: 'Аксессуарлар',
  menyuni: 'менюни', Menyuni: 'Менюни', alyuminiy: 'алюминий', Gamburg: 'Гамбург',
  Mesopotamiyadan: 'Месопотамиядан', Konvektorlar: 'Конвекторлар', Reaktorlar: 'Реакторлар',
  kross: 'кросс', Kross: 'Кросс', Samolyotga: 'Самолётга', samolyot: 'самолёт',
  sikli: 'цикли',
  Avtomobil: 'Автомобиль', avtomobil: 'автомобиль', Avto: 'Авто',
  mebel: 'мебель', festival: 'фестиваль', profil: 'профиль', Belgiya: 'Бельгия', MFY: 'МФЙ', MChJ: 'МЧЖ', MFO: 'МФО', STIR: 'СТИР', 'H/r': 'Ҳ/р',
};

const VOWELS = 'aeiouAEIOUоОўЎ';
const SINGLE = {
  a: 'а', b: 'б', d: 'д', e: 'е', f: 'ф', g: 'г', h: 'ҳ', i: 'и', j: 'ж', k: 'к', l: 'л', m: 'м',
  n: 'н', o: 'о', p: 'п', q: 'қ', r: 'р', s: 'с', t: 'т', u: 'у', v: 'в', x: 'х', y: 'й', z: 'з',
  c: 'с', w: 'в',
};
const DIGRAPHS = [
  // "yo‘" is й + ў (yo‘l → йўл), not ё + ‘
  ['yo‘', 'йў'], ["yo'", 'йў'], ['yoʻ', 'йў'],
  ['o‘', 'ў'], ['g‘', 'ғ'], ["o'", 'ў'], ["g'", 'ғ'], ['oʻ', 'ў'], ['gʻ', 'ғ'],
  ['sh', 'ш'], ['ch', 'ч'], ['yo', 'ё'], ['yu', 'ю'], ['ya', 'я'], ['ye', 'е'],
];

function translitWord(word) {
  if (WORDS[word]) return WORDS[word];
  let outStr = '';
  let i = 0;
  while (i < word.length) {
    const rest = word.slice(i);
    const lower = rest.toLowerCase();
    let matched = false;
    for (const [lat, cyr] of DIGRAPHS) {
      if (lower.startsWith(lat)) {
        const isUpper = rest[0] !== rest[0].toLowerCase();
        const allUpper = isUpper && rest.length > 1 && /[A-Z]/.test(rest[1]);
        let c = cyr;
        if (isUpper) c = cyr.toUpperCase();
        if (allUpper) c = cyr.toUpperCase();
        outStr += c;
        i += lat.length;
        matched = true;
        break;
      }
    }
    if (matched) continue;
    const ch = word[i];
    if (ch === '’' || ch === "'" || ch === 'ʼ') { outStr += 'ъ'; i += 1; continue; }
    const low = ch.toLowerCase();
    if (low === 'e') {
      const prev = outStr.slice(-1);
      const atStart = outStr.length === 0 || !/[\p{L}]/u.test(prev);
      const afterVowel = prev && 'аеёиоуўэюяАЕЁИОУЎЭЮЯ'.includes(prev);
      const c = atStart || afterVowel ? 'э' : 'е';
      outStr += ch === 'E' ? c.toUpperCase() : c;
      i += 1;
      continue;
    }
    if (SINGLE[low]) {
      outStr += ch === low ? SINGLE[low] : SINGLE[low].toUpperCase();
    } else {
      outStr += ch;
    }
    i += 1;
  }
  return outStr;
}

function translit(text) {
  // Protect tokens
  const saved = [];
  let s = text;
  for (const p of PROTECTED) {
    s = s.split(p).join(`\u0000${saved.push(p) - 1}\u0000`);
  }
  for (const [k, v] of Object.entries(WORDS)) {
    if (/[^A-Za-z]/.test(k)) s = s.split(k).join(`\u0000${saved.push(v) - 1}\u0000`);
  }
  // Transliterate word by word (letters, apostrophes and ‘ inside words)
  s = s.replace(/[A-Za-z][A-Za-z‘’'ʻʼ]*/g, (w) => translitWord(w));
  return s.replace(/\u0000(\d+)\u0000/g, (_, n) => saved[Number(n)]);
}

function walk(node, keyPath) {
  if (typeof node === 'string') {
    return SKIP_PATHS.some((re) => re.test(keyPath)) ? node : translit(node);
  }
  if (Array.isArray(node)) return node.map((v, i) => walk(v, `${keyPath}.${i}`));
  if (node && typeof node === 'object') {
    const o = {};
    for (const [k, v] of Object.entries(node)) {
      // form.services keys are backend values — never transliterate keys
      o[k] = walk(v, keyPath ? `${keyPath}.${k}` : k);
    }
    return o;
  }
  return node;
}

const result = walk(uz, '');
const banner = '// Ўзбекча (кирилл). GENERATED from uz.js by scripts/gen-uz-cyrl.mjs — do not edit by hand.\n\n';
writeFileSync(out, `${banner}export default ${JSON.stringify(result, null, 2)};\n`);
console.log('wrote', path.relative(process.cwd(), out));
