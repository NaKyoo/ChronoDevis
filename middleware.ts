import { NextResponse } from 'next/server';

export function middleware() {
    return NextResponse.next();
}

export const config = {
    // On exclut explicitement les routes d'API pour éviter tout conflit avec Puppeteer
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};