// These must match the pageKey strings in src/data/pages.ts exactly, since
// [...slug].astro's getStaticPaths generates each page's URL directly from
// its pageKey (e.g. pageKey "room_details" -> the page at /room_details).
export const routes = {
    home: '/',
    about: '/about',
    rooms: '/rooms',
    room_details: '/room_details',
    services: '/services',
    contact: '/contact',
} as const;
