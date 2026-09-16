import { en, sr } from './translations';
import type { Translation } from '../types/Translation';

export const locales = ['sr', 'en'] as const;
export type Locale = (typeof locales)[number];

const translations: Record<string, Translation> = { sr, en };

export function getDictionary(lang: string): Translation {
    return translations[lang] ?? translations['sr']; // fallback to Serbian
}

export function getStaticPathsLocales() {
    return locales.map((lang) => ({ params: { lang } }));
}

export function getLocaleUrl(targetLocale: string, pathname: string) {
    const pattern = new RegExp(`^/(${locales.join('|')})(?=/|$)`);
    const currentPath = pathname.replace(pattern, '');
    return `/${targetLocale}${currentPath}`;
}
