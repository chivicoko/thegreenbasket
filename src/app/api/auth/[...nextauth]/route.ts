// app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Mock users (replace with DB lookup in real-world app)
        const users = [
          { id: "1", name: "Admin User", email: "admin@shop.com", role: "admin", password: "admin123" },
          { id: "2", name: "Normal User", email: "user@shop.com", role: "user", password: "user123" },
        ];

        const user = users.find(
          (u) => u.email === credentials?.email && u.password === credentials?.password
        );

        if (!user) return null;
        return { id: user.id, name: user.name, email: user.email, role: user.role } as any;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role as "user" | "admin";
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin", // we’ll create this page
  },
};

// ✅ Needed for App Router (both GET and POST)
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
