import { NextResponse } from 'next/server';

export function middleware(request) {
    const url = request.nextUrl;
    const hostname = request.headers.get('host') || '';

    // Check if we are on the partner subdomain (e.g., partner.localhost:3000 or partner.activpaisa.com)
    const isPartnerSubdomain = hostname.startsWith('partner.');

    if (isPartnerSubdomain) {
        // Exclude static files, existing API routes, and Next.js internals
        const isStatic = /\.(.*)$/.test(url.pathname);
        const isNextInternal = url.pathname.startsWith('/_next') || url.pathname.startsWith('/static') || url.pathname.startsWith('/api');

        if (isStatic || isNextInternal) {
            return NextResponse.next();
        }

        // CLEAN URL STRATEGY:
        // If the path start with '/partner', redirect to the path without it to maintain a clean subdomain URL.
        // Example: partner.domain.com/partner/dashboard -> partner.domain.com/dashboard
        if (url.pathname.startsWith('/partner')) {
            const newPath = url.pathname.replace(/^\/partner/, '');
            return NextResponse.redirect(new URL(newPath || '/', request.url));
        }

        // REWRITE STRATEGY:
        // Rewrite all other requests to serve content from the /partner folder.
        // Example: partner.domain.com/dashboard -> /partner/dashboard
        // Example: partner.domain.com/ -> /partner
        return NextResponse.rewrite(new URL(`/partner${url.pathname}`, request.url));
    }

    // Allow standard behavior for main domain
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
