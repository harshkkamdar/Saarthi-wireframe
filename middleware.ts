import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Redirect /settings to /settings/general
  if (request.nextUrl.pathname === '/settings') {
    return NextResponse.redirect(new URL('/settings/general', request.url));
  }
  
  // Redirect /teams/[slug]/settings to /teams/[slug]/settings/members
  if (request.nextUrl.pathname.match(/^\/teams\/[^\/]+\/settings$/)) {
    return NextResponse.redirect(new URL(`${request.nextUrl.pathname}/members`, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/settings', '/teams/:slug/settings'],
};