import { auth } from './auth';

export async function requireUser() {
  const session = await auth();
  if (!session?.user?.email) {
    return { ok: false as const, status: 401, error: 'Unauthorized', session: null };
  }
  return { ok: true as const, session };
}

export async function requireRole(role: 'admin' | 'customer') {
  const session = await auth();
  const userRole = (session as any)?.role;
  if (!session?.user?.email) return { ok: false as const, status: 401, error: 'Unauthorized', session: null };
  if (userRole !== role && role === 'admin') return { ok: false as const, status: 403, error: 'Forbidden', session };
  return { ok: true as const, session };
}