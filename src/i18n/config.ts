export const supportedLangs = ['sr', 'en'] as const;
export type SupportedLang = (typeof supportedLangs)[number];

export const defaultLang: SupportedLang = 'sr';
