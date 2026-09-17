export const sr = {
    title: 'Хотел Врање',
    home: 'Почетна',
    pages: {
        homepage: {
            title: 'Хотел Врање',
            welcome: 'Добро Дошли у Хотел Врање',
            description: 'Удобан боравак у срцу Врања.',
        },
        about: {
            title: 'О нама',
            description: 'Хотел Врање је породични хотел који нуди удобан боравак у срцу Врања.',
            content:
                'Ово је додатни садржај за страницу о нама. Можете овде додати више информација о хотелу, његовој историји, услугама и свему што желите да посетилац зна.',
        },
        rooms: {
            title: 'Собе',
            description: 'Удобне собе за пријатан боравак.',
        },
        contact: {
            title: 'Контакт',
            description: 'Контактирајте нас за више информација и резервације.',
        },
    },
    ui: {
        switchLanguage: 'en',
        switchLabel: 'English',
        nav: {
            home: 'Почетна',
            about: 'О нама',
            rooms: 'Собе',
            contact: 'Контакт',
        },
        form: {
            submit: 'Pošalji zahtev za rezervaciju',
            checkIn: 'Datum dolaska',
        },
        footer: {
            rights: 'Sva prava zadržana',
        },
    },
} as const;

export const en = {
    title: 'Hotel Vranje',
    home: 'Home',
    pages: {
        homepage: {
            title: 'Hotel Vranje',
            welcome: 'Welcome to Hotel Vranje',
            description: 'A comfortable stay in the heart of Vranje.',
        },
        about: {
            title: 'About Us',
            description:
                'Hotel Vranje is a family-run hotel offering a comfortable stay in the heart of Vranje.',
            content:
                'This is additional content for the about page. You can add more information about the hotel, its history, services, and anything else you want visitors to know.',
        },
        rooms: {
            title: 'Rooms',
            description: 'Comfortable rooms for a pleasant stay.',
        },
        contact: {
            title: 'Contact',
            description: 'Contact us for more information and reservations.',
        },
    },
    ui: {
        switchLanguage: 'sr',
        switchLabel: 'Srpski',
        nav: {
            home: 'Home',
            about: 'About Us',
            rooms: 'Rooms',
            contact: 'Contact',
        },
        form: {
            submit: 'Send Reservation Request',
            checkIn: 'Check-in date',
        },
        footer: {
            rights: 'All rights reserved',
        },
    },
} as const;
