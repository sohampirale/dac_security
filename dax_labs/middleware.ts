import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const VALID_PASSWORDS = ['CyberDAK@2026', 'CyberDAC@2026'];
const SESSION_SALT = process.env.ADMIN_SESSION_SALT || 'dak-cyber-security-session-salt-2026';

async function getExpectedToken(): Promise<string> {
  const str = `admin:${VALID_PASSWORDS[0]}:${SESSION_SALT}`;
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect all /admin routes except /admin/login
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const sessionCookie = request.cookies.get('admin_session');
    const expectedToken = await getExpectedToken();

    if (!sessionCookie || sessionCookie.value !== expectedToken) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
