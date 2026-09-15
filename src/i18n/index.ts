import { en, sr } from './languages';
import type { Dictionary } from '../types/Dictionary';

export const locales = ['sr', 'en'] as const;
export type Locale = (typeof locales)[number];

const dictionaries: Record<string, Dictionary> = { sr, en };

export function getDictionary(lang: string): Dictionary {
    return dictionaries[lang] ?? dictionaries['sr']; // fallback to Serbian
}

export function getStaticPathsLocales() {
    return locales.map((lang) => ({ params: { lang } }));
}

export function getLocaleUrl(targetLocale: string, pathname: string) {
    const pattern = new RegExp(`^/(${locales.join('|')})(?=/|$)`);
    const currentPath = pathname.replace(pattern, '');
    return `/${targetLocale}${currentPath}`;
}
