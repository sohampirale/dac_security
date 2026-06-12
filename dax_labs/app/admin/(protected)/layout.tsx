import { createHash } from 'crypto';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Setup Required</h1>
          <p className="text-gray-400">
            Set <code className="text-[var(--color-accent)] bg-white/5 px-2 py-0.5 rounded">ADMIN_PASSWORD</code> environment variable to enable the admin panel.
          </p>
        </div>
      </div>
    );
  }

  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');

  if (!session) {
    redirect('/admin/login');
  }

  const hash = createHash('sha256').update(adminPassword).digest('hex');
  if (session.value !== hash) {
    redirect('/admin/login');
  }

  return <>{children}</>;
}
