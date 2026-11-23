import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import en from './locales/en.js';
import uz from './locales/uz.js';
import uzCyrl from './locales/uz-cyrl.js';
import ru from './locales/ru.js';
import zh from './locales/zh.js';

// code: used in ?lang= and storage · htmlLang: <html lang> · short: switcher label
export const LANGUAGES = [
  { code: 'en', htmlLang: 'en', short: 'EN', name: 'English', dict: en },
  { code: 'uz', htmlLang: 'uz-Latn', short: 'O‘Z', name: 'O‘zbekcha', dict: uz },
  { code: 'uz-cyrl', htmlLang: 'uz-Cyrl', short: 'ЎЗ', name: 'Ўзбекча', dict: uzCyrl },
  { code: 'ru', htmlLang: 'ru', short: 'RU', name: 'Русский', dict: ru },
  { code: 'zh', htmlLang: 'zh-Hans', short: '中文', name: '中文', dict: zh },
];

const STORAGE_KEY = 'usm-bekway-lang';
const byCode = Object.fromEntries(LANGUAGES.map((l) => [l.code, l]));

function detectInitial() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (fromUrl && byCode[fromUrl]) return fromUrl;
  } catch {
    /* ignore */
  }
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && byCode[saved]) return saved;
  } catch {
    /* storage unavailable */
  }
  const nav = (navigator.languages || [navigator.language || 'en']).map((l) => l.toLowerCase());
  for (const l of nav) {
    if (l.startsWith('uz-cyrl')) return 'uz-cyrl';
    if (l.startsWith('uz')) return 'uz';
    if (l.startsWith('ru')) return 'ru';
    if (l.startsWith('zh')) return 'zh';
    if (l.startsWith('en')) return 'en';
  }
  return 'en';
}

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(detectInitial);
  const current = byCode[lang] || byCode.en;

  const setLang = useCallback((code) => {
    if (!byCode[code]) return;
    setLangState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* storage unavailable */
    }
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.has('lang')) {
        url.searchParams.set('lang', code);
        window.history.replaceState(null, '', url);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = current.htmlLang;
    document.title = current.dict.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', current.dict.meta.description);
  }, [current]);

  const value = useMemo(() => ({ lang, setLang, t: current.dict, language: current }), [lang, setLang, current]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}
