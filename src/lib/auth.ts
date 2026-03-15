import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { readJson } from './jsondb';
import { User } from '../../types';

export const { auth, handlers: { GET, POST } } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) return null;
        const users = await readJson<User[]>('users.json');
        const user = users.find(u => u.email.toLowerCase() === credentials.email.toLowerCase());
        if (!user) return null;
        const ok = await compare(credentials.password, user.passwordHash);
        if (!ok) return null;
        return { id: user.id, name: user.name, email: user.email, role: user.role } as any;
      }
    })
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      (session as any).role = token.role;
      return session;
    }
  },
  pages: { signIn: '/' }
});