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
        roomDetails: string;
        services: string;
        contact: string;
        bookingOnline: string;
    };
    form: {
        submit: string;
        checkIn: string;
        checkOut: string;
        guest: string;
        adult: string;
        children: string;
        room: string;
    };
    footer: {
        rights: string;
        contactInfo: string;
        usefulLinks: string;
        gallery: string;
        newsletter: string;
        newsletterText: string;
        subscribe: string;
        emailPlaceholder: string;
    };
    switchLanguage: string;
    switchLabel: string;
}

export interface Translation {
    pages: Record<PageKeys, PageContent>;
    ui: UIContent;
}
