import { createHash, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';

// Hardcoded default credentials requested by user
const VALID_USERNAME = 'admin';
const VALID_PASSWORDS = [
  'CyberDAK@2026',
  'CyberDAC@2026',
];

// Optional environment variable override
if (process.env.ADMIN_PASSWORD) {
  VALID_PASSWORDS.push(process.env.ADMIN_PASSWORD);
}

const SESSION_SALT = process.env.ADMIN_SESSION_SALT || 'dak-cyber-security-session-salt-2026';

export function getExpectedSessionToken(): string {
  // Compute deterministic valid token hash
  return createHash('sha256')
    .update(`admin:${VALID_PASSWORDS[0]}:${SESSION_SALT}`)
    .digest('hex');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const username = (body.username || '').toString().trim().toLowerCase();
    const password = (body.password || '').toString();

    if (!username || !password) {
      return Response.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    if (username !== VALID_USERNAME) {
      return Response.json(
        { error: 'Invalid username or password' },
        { status: 401 }
      );
    }

    const isValidPassword = VALID_PASSWORDS.some((validPwd) => {
      if (validPwd.length !== password.length) return false;
      return timingSafeEqual(Buffer.from(validPwd), Buffer.from(password));
    });

    if (!isValidPassword) {
      return Response.json(
        { error: 'Invalid username or password' },
        { status: 401 }
      );
    }

    const sessionToken = getExpectedSessionToken();
    const cookieStore = await cookies();

    cookieStore.set('admin_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return Response.json({ ok: true, message: 'Authentication successful' });
  } catch {
    return Response.json(
      { error: 'An error occurred during authentication' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_session');
  return Response.json({ ok: true });
}

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');
  const expectedToken = getExpectedSessionToken();

  if (session && session.value === expectedToken) {
    return Response.json({ authenticated: true, user: VALID_USERNAME });
  }
  return Response.json({ authenticated: false }, { status: 401 });
}
