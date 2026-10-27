import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

const TMP_DIR = path.join('/tmp', 'dak_content');

const ALLOWED_FILES: Record<string, string> = {
  'it-security': 'it-security-products.json',
  'it-security-products': 'it-security-products.json',
  'it-security-products.json': 'it-security-products.json',
  'digital-forensic': 'digital-forensic-products.json',
  'digital-forensic-products': 'digital-forensic-products.json',
  'digital-forensic-products.json': 'digital-forensic-products.json',
  'forensic-software': 'forensic-software-tools.json',
  'forensic-software-tools': 'forensic-software-tools.json',
  'forensic-software-tools.json': 'forensic-software-tools.json',
  'company-info': 'company-info.json',
  'company-info.json': 'company-info.json',
  'home-content': 'home-content.json',
  'home-content.json': 'home-content.json',
  'services-content': 'services-content.json',
  'services-content.json': 'services-content.json',
  'site-metadata': 'site-metadata.json',
  'site-metadata.json': 'site-metadata.json',
};

async function readFromTmp(filename: string): Promise<string | null> {
  try {
    const tmpFile = path.join(TMP_DIR, filename);
    await fs.access(tmpFile);
    return await fs.readFile(tmpFile, 'utf-8');
  } catch {
    return null;
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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fileKey = searchParams.get('file');

  if (!fileKey) {
    return Response.json({ error: 'file query param required' }, { status: 400 });
  }

  const filename = ALLOWED_FILES[fileKey] || (fileKey.endsWith('.json') ? fileKey : `${fileKey}.json`);

  if (!Object.values(ALLOWED_FILES).includes(filename)) {
    return Response.json({ error: 'File not permitted' }, { status: 403 });
  }

  const globalCache = (globalThis as unknown as { __dakContentCache?: Record<string, string> }).__dakContentCache;

  // 1. In-memory cache
  if (globalCache && globalCache[filename]) {
    try {
      return Response.json(
        { ok: true, data: JSON.parse(globalCache[filename]), source: 'memory' },
        { headers: { 'Cache-Control': 'no-store, max-age=0' } }
      );
    } catch {}
  }

  // 2. /tmp cache
  const tmpContent = await readFromTmp(filename);
  if (tmpContent) {
    try {
      return Response.json(
        { ok: true, data: JSON.parse(tmpContent), source: 'tmp' },
        { headers: { 'Cache-Control': 'no-store, max-age=0' } }
      );
    } catch {}
  }

  // 3. Disk file
  const diskPath = await findExistingDiskPath(filename);
  if (!diskPath) {
    return Response.json({ error: `File not found: ${filename}` }, { status: 404 });
  }

  try {
    const raw = await fs.readFile(diskPath, 'utf-8');
    const parsed = JSON.parse(raw);
    return Response.json(
      { ok: true, data: parsed, source: 'disk' },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  } catch (err) {
    return Response.json({ error: 'Failed to read content', details: String(err) }, { status: 500 });
  }
}
