import { cookies } from 'next/headers';
import fs from 'fs/promises';
import path from 'path';
import { getExpectedSessionToken } from '../auth/route';

const GITHUB_API = 'https://api.github.com';

const ALLOWED_FILES: Record<string, string> = {
  'it-security': 'dax_labs/app/data/content/it-security-products.json',
  'digital-forensic': 'dax_labs/app/data/content/digital-forensic-products.json',
  'forensic-software': 'dax_labs/app/data/content/forensic-software-tools.json',
  'company-info': 'dax_labs/app/data/content/company-info.json',
  'home-content': 'dax_labs/app/data/content/home-content.json',
  'services-content': 'dax_labs/app/data/content/services-content.json',
  'site-metadata': 'dax_labs/app/data/content/site-metadata.json',
};

// Also map full paths and relative paths
const ALLOWED_PATH_LIST = [
  'dax_labs/app/data/content/it-security-products.json',
  'dax_labs/app/data/content/digital-forensic-products.json',
  'dax_labs/app/data/content/forensic-software-tools.json',
  'dax_labs/app/data/content/company-info.json',
  'dax_labs/app/data/content/home-content.json',
  'dax_labs/app/data/content/services-content.json',
  'dax_labs/app/data/content/site-metadata.json',
  'app/data/content/it-security-products.json',
  'app/data/content/digital-forensic-products.json',
  'app/data/content/forensic-software-tools.json',
  'app/data/content/company-info.json',
  'app/data/content/home-content.json',
  'app/data/content/services-content.json',
  'app/data/content/site-metadata.json',
];

async function verifyAuth(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');
  if (!session) return false;
  return session.value === getExpectedSessionToken();
}

function resolveLocalFilePath(targetPath: string): string {
  const filename = path.basename(targetPath);
  // Candidate locations on disk
  const candidates = [
    path.join(process.cwd(), targetPath),
    path.join(process.cwd(), 'app/data/content', filename),
    path.join(process.cwd(), 'dax_labs/app/data/content', filename),
    path.join(__dirname, '../../../../app/data/content', filename),
  ];

  for (const candidate of candidates) {
    return candidate; // Default to standard structure
  }
  return path.join(process.cwd(), 'app/data/content', filename);
}

async function findExistingFilePath(filename: string): Promise<string | null> {
  const candidates = [
    path.join(process.cwd(), 'app/data/content', filename),
    path.join(process.cwd(), 'dax_labs/app/data/content', filename),
    path.resolve(process.cwd(), '..', 'dax_labs/app/data/content', filename),
  ];

  for (const candidate of candidates) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      // try next
    }
  }
  return null;
}

async function getFileSha(token: string, repo: string, filePath: string): Promise<string | null> {
  try {
    const res = await fetch(`${GITHUB_API}/repos/${repo}/contents/${filePath}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.sha || null;
  } catch {
    return null;
  }
}

// GET - Read content or export all
export async function GET(request: Request) {
  if (!(await verifyAuth())) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const fileKey = searchParams.get('file');
  const action = searchParams.get('action');

  if (action === 'export_all') {
    const bundle: Record<string, unknown> = {};
    for (const [key, relPath] of Object.entries(ALLOWED_FILES)) {
      const filename = path.basename(relPath);
      const diskPath = await findExistingFilePath(filename);
      if (diskPath) {
        try {
          const raw = await fs.readFile(diskPath, 'utf-8');
          bundle[key] = JSON.parse(raw);
        } catch {
          // skip or null
        }
      }
    }
    return Response.json(bundle);
  }

  if (!fileKey) {
    return Response.json({ error: 'file query param required' }, { status: 400 });
  }

  const normalizedPath = ALLOWED_FILES[fileKey] || fileKey;
  const filename = path.basename(normalizedPath);
  const diskPath = await findExistingFilePath(filename);

  if (!diskPath) {
    return Response.json({ error: `File not found on disk: ${filename}` }, { status: 404 });
  }

  try {
    const raw = await fs.readFile(diskPath, 'utf-8');
    const parsed = JSON.parse(raw);
    return Response.json({ ok: true, data: parsed });
  } catch (err) {
    return Response.json({ error: 'Failed to read file', details: String(err) }, { status: 500 });
  }
}

interface ContentUpdate {
  filePath: string;
  content: string;
}

// PUT - Update content file
export async function PUT(request: Request) {
  if (!(await verifyAuth())) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { filePath, content }: ContentUpdate = await request.json();

    if (!filePath || !content) {
      return Response.json({ error: 'filePath and content are required' }, { status: 400 });
    }

    // Verify allowed path
    const isAllowed =
      ALLOWED_PATH_LIST.includes(filePath) ||
      Object.values(ALLOWED_FILES).some((p) => p.endsWith(path.basename(filePath)));

    if (!isAllowed) {
      return Response.json({ error: 'Access denied: Path not permitted' }, { status: 403 });
    }

    // Verify JSON validity
    try {
      JSON.parse(content);
    } catch {
      return Response.json({ error: 'Invalid JSON format' }, { status: 400 });
    }

    const filename = path.basename(filePath);
    let localSaved = false;
    let localError: string | null = null;

    // 1. Try local disk write
    try {
      let targetPath = await findExistingFilePath(filename);
      if (!targetPath) {
        targetPath = resolveLocalFilePath(filePath);
      }
      await fs.writeFile(targetPath, content, 'utf-8');
      localSaved = true;
    } catch (err) {
      localError = err instanceof Error ? err.message : 'Filesystem write failed';
    }

    // 2. Try GitHub commit if configured
    let githubSaved = false;
    let githubCommit = null;
    let githubError: string | null = null;

    const token = process.env.GITHUB_TOKEN;
    const repo = process.env.GITHUB_REPO || 'sohampirale/dac_security';

    if (token) {
      try {
        const repoPath = filePath.startsWith('dax_labs/')
          ? filePath
          : `dax_labs/app/data/content/${filename}`;

        const sha = await getFileSha(token, repo, repoPath);
        const encoded = Buffer.from(content, 'utf-8').toString('base64');

        const body: Record<string, string> = {
          message: `Admin update: ${filename} [skip ci]`,
          content: encoded,
          branch: 'main',
        };
        if (sha) body.sha = sha;

        const ghRes = await fetch(`${GITHUB_API}/repos/${repo}/contents/${repoPath}`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });

        const ghData = await ghRes.json();
        if (ghRes.ok) {
          githubSaved = true;
          githubCommit = ghData.commit;
        } else {
          githubError = ghData.message || 'GitHub API returned error';
        }
      } catch (err) {
        githubError = err instanceof Error ? err.message : 'GitHub commit failed';
      }
    }

    if (!localSaved && !githubSaved) {
      return Response.json(
        {
          error: 'Failed to persist changes',
          localError,
          githubError,
        },
        { status: 500 }
      );
    }

    return Response.json({
      ok: true,
      localSaved,
      githubSaved,
      githubCommit,
      message: localSaved && githubSaved
        ? 'Content saved locally and committed to GitHub'
        : localSaved
        ? 'Content saved locally to disk'
        : 'Content committed to GitHub',
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ error: message }, { status: 500 });
  }
}
