import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Redirect /settings to /settings/general
  if (request.nextUrl.pathname === '/settings') {
    return NextResponse.redirect(new URL('/settings/general', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/settings',
};