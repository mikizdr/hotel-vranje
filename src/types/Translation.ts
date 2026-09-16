// src/types/Translation.ts
import type { PageKeys } from './PageKeys';

export interface PageContent {
    title: string;
    welcome?: string;
    description?: string;
    content?: string;
}

export interface UIContent {
    nav: {
        home: string;
        about: string;
        rooms: string;
        contact: string;
    };
    form: {
        submit: string;
        checkIn: string;
    };
    footer: {
        rights: string;
    };
    switchLanguage: string;
    switchLabel: string;
}

export interface Translation {
    pages: Record<PageKeys, PageContent>;
    ui: UIContent;
}
