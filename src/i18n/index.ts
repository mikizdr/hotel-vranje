import type { Translation } from '../types/Translation';
import type { SupportedLang } from './config';
import { defaultLang, supportedLangs } from './config';
import { en, sr } from './translations';

export const locales = ['sr', 'en'] as const;
export type Locale = (typeof locales)[number];

const dictionaries: Record<SupportedLang, Translation> = {
    sr,
    en,
};

export function getDictionary(lang: string): Translation {
    // IF language is not supported, return the default language dictionary
    if (!supportedLangs.includes(lang as any)) {
        return dictionaries[defaultLang];
    }
    return dictionaries[lang as SupportedLang];
}

export function getStaticPathsLocales() {
    return locales.map((lang) => ({ params: { lang } }));
}

export function getLocaleUrl(targetLocale: SupportedLang, pathname: string) {
    const pattern = new RegExp(`^/(${locales.join('|')})(?=/|$)`);
    const currentPath = pathname.replace(pattern, '') || '/';

    if (targetLocale === defaultLang) {
        return currentPath;
    }

    return `/${targetLocale}${currentPath === '/' ? '' : currentPath}`;
}
