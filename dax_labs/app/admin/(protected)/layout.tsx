import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getExpectedSessionToken } from '@/app/api/admin/auth/route';
import NavigationProgressBar from '@/app/admin/components/NavigationProgressBar';

export const dynamic = 'force-dynamic';

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');
  const expectedToken = getExpectedSessionToken();

  if (!session || session.value !== expectedToken) {
    redirect('/admin/login');
  }

  return (
    <>
      <NavigationProgressBar />
      {children}
    </>
  );
}
