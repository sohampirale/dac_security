import { cookies } from 'next/headers';
import fs from 'fs/promises';
import path from 'path';
import { getExpectedSessionToken } from '../auth/route';

const GITHUB_API = 'https://api.github.com';

// Global in-memory cache for serverless environments where disk is read-only
const globalCache: Record<string, string> =
  (globalThis as unknown as { __dakContentCache?: Record<string, string> }).__dakContentCache ||
  ((globalThis as unknown as { __dakContentCache: Record<string, string> }).__dakContentCache = {});

const TMP_DIR = path.join('/tmp', 'dak_content');

const ALLOWED_FILES: Record<string, string> = {
  'it-security': 'dax_labs/app/data/content/it-security-products.json',
  'digital-forensic': 'dax_labs/app/data/content/digital-forensic-products.json',
  'forensic-software': 'dax_labs/app/data/content/forensic-software-tools.json',
  'company-info': 'dax_labs/app/data/content/company-info.json',
  'home-content': 'dax_labs/app/data/content/home-content.json',
  'services-content': 'dax_labs/app/data/content/services-content.json',
  'site-metadata': 'dax_labs/app/data/content/site-metadata.json',
};

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

async function readFromTmp(filename: string): Promise<string | null> {
  try {
    const tmpFile = path.join(TMP_DIR, filename);
    await fs.access(tmpFile);
    return await fs.readFile(tmpFile, 'utf-8');
  } catch {
    return null;
  }
}

async function writeToTmp(filename: string, content: string): Promise<boolean> {
  try {
    await fs.mkdir(TMP_DIR, { recursive: true });
    const tmpFile = path.join(TMP_DIR, filename);
    await fs.writeFile(tmpFile, content, 'utf-8');
    return true;
  } catch {
    return false;
  }
}

async function findExistingDiskPath(filename: string): Promise<string | null> {
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

      // 1. Check in-memory cache
      if (globalCache[filename]) {
        try {
          bundle[key] = JSON.parse(globalCache[filename]);
          continue;
        } catch {}
      }

      // 2. Check /tmp
      const tmpContent = await readFromTmp(filename);
      if (tmpContent) {
        try {
          bundle[key] = JSON.parse(tmpContent);
          continue;
        } catch {}
      }

      // 3. Check disk
      const diskPath = await findExistingDiskPath(filename);
      if (diskPath) {
        try {
          const raw = await fs.readFile(diskPath, 'utf-8');
          bundle[key] = JSON.parse(raw);
        } catch {}
      }
    }
    return Response.json(bundle);
  }

  if (!fileKey) {
    return Response.json({ error: 'file query param required' }, { status: 400 });
  }

  const normalizedPath = ALLOWED_FILES[fileKey] || fileKey;
  const filename = path.basename(normalizedPath);

  // 1. In-memory cache
  if (globalCache[filename]) {
    try {
      return Response.json({ ok: true, data: JSON.parse(globalCache[filename]), source: 'memory' });
    } catch {}
  }

  // 2. /tmp cache
  const tmpContent = await readFromTmp(filename);
  if (tmpContent) {
    try {
      return Response.json({ ok: true, data: JSON.parse(tmpContent), source: 'tmp' });
    } catch {}
  }

  // 3. Disk file
  const diskPath = await findExistingDiskPath(filename);
  if (!diskPath) {
    return Response.json({ error: `File not found on disk: ${filename}` }, { status: 404 });
  }

  try {
    const raw = await fs.readFile(diskPath, 'utf-8');
    const parsed = JSON.parse(raw);
    return Response.json({ ok: true, data: parsed, source: 'disk' });
  } catch (err) {
    return Response.json({ error: 'Failed to read file', details: String(err) }, { status: 500 });
  }
}

interface ContentUpdate {
  filePath: string;
  content: string;
  githubToken?: string;
}

// PUT - Update content file
export async function PUT(request: Request) {
  if (!(await verifyAuth())) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body: ContentUpdate = await request.json();
    const { filePath, content, githubToken } = body;

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

    // Always update the server-side in-memory cache
    globalCache[filename] = content;

    // 1. Try local disk write
    let localSaved = false;
    let localError: string | null = null;

    try {
      let targetPath = await findExistingDiskPath(filename);
      if (!targetPath) {
        targetPath = path.join(process.cwd(), 'app/data/content', filename);
      }
      await fs.writeFile(targetPath, content, 'utf-8');
      localSaved = true;
    } catch (err) {
      localError = err instanceof Error ? err.message : 'Filesystem write failed';
    }

    // 2. If local disk is read-only (e.g. Vercel serverless /var/task), write to /tmp
    let tmpSaved = false;
    if (!localSaved) {
      tmpSaved = await writeToTmp(filename, content);
    }

    // 3. Try GitHub commit if token is available (either in env or passed by client)
    let githubSaved = false;
    let githubCommit = null;
    let githubError: string | null = null;

    const token = githubToken || process.env.GITHUB_TOKEN;
    const repo = process.env.GITHUB_REPO || 'sohampirale/dac_security';

    if (token) {
      try {
        const repoPath = filePath.startsWith('dax_labs/')
          ? filePath
          : `dax_labs/app/data/content/${filename}`;

        const sha = await getFileSha(token, repo, repoPath);
        const encoded = Buffer.from(content, 'utf-8').toString('base64');

        const commitBody: Record<string, string> = {
          message: `Admin update: ${filename} [skip ci]`,
          content: encoded,
          branch: 'main',
        };
        if (sha) commitBody.sha = sha;

        const ghRes = await fetch(`${GITHUB_API}/repos/${repo}/contents/${repoPath}`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commitBody),
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

    // If local write succeeded or /tmp write succeeded or in-memory write succeeded
    const isPersisted = localSaved || tmpSaved || githubSaved || true;

    let storageMode = 'disk';
    let message = 'Content saved successfully!';

    if (githubSaved) {
      storageMode = 'github';
      message = 'Saved & committed to GitHub! Vercel will deploy automatically in 1-2 minutes.';
    } else if (localSaved) {
      storageMode = 'disk';
      message = 'Changes saved to disk successfully.';
    } else if (tmpSaved || globalCache[filename]) {
      storageMode = 'session';
      message = 'Changes saved to demonstration session!';
    }

    return Response.json({
      ok: true,
      storage: storageMode,
      localSaved,
      tmpSaved,
      githubSaved,
      githubCommit,
      githubError,
      message,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ error: message }, { status: 500 });
  }
}
