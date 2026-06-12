import { createHash } from 'crypto';
import { cookies } from 'next/headers';

const GITHUB_API = 'https://api.github.com';

function getRepoInfo() {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;
  if (!token || !repo) {
    throw new Error('GITHUB_TOKEN and GITHUB_REPO must be set');
  }
  return { token, repo };
}

async function verifyAuth() {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) return false;
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');
  if (!session) return false;
  const hash = createHash('sha256').update(adminPassword).digest('hex');
  return session.value === hash;
}

async function getFileSha(token: string, repo: string, path: string): Promise<string | null> {
  const res = await fetch(
    `${GITHUB_API}/repos/${repo}/contents/${path}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data.sha || null;
}

const ALLOWED_PATHS = [
  'dax_labs/app/data/content/it-security-products.json',
  'dax_labs/app/data/content/digital-forensic-products.json',
  'dax_labs/app/data/content/forensic-software-tools.json',
];

interface ContentUpdate {
  filePath: string;
  content: string;
}

export async function PUT(request: Request) {
  if (!(await verifyAuth())) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { filePath, content }: ContentUpdate = await request.json();

    if (!filePath || !content) {
      return Response.json({ error: 'filePath and content are required' }, { status: 400 });
    }

    if (!ALLOWED_PATHS.includes(filePath)) {
      return Response.json({ error: 'Only content JSON files can be edited' }, { status: 403 });
    }

    const { token, repo } = getRepoInfo();

    const sha = await getFileSha(token, repo, filePath);

    const encoded = Buffer.from(content, 'utf-8').toString('base64');

    const body: Record<string, string> = {
      message: `Update content: ${filePath}`,
      content: encoded,
      branch: 'main',
    };
    if (sha) body.sha = sha;

    const res = await fetch(
      `${GITHUB_API}/repos/${repo}/contents/${filePath}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    const result = await res.json();

    if (!res.ok) {
      return Response.json({ error: result.message || 'GitHub API error' }, { status: 500 });
    }

    return Response.json({ ok: true, commit: result.commit });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ error: message }, { status: 500 });
  }
}
