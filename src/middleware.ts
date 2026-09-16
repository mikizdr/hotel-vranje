import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ request, redirect }, next) => {
    const url = new URL(request.url);

    if (url.pathname === '/') {
        // Always return a Response here
        return redirect('/sr');
    }

    // Continue normally
    return next();
};
