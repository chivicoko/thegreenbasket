// types/next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      role: "user" | "admin";
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role: "user" | "admin";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "user" | "admin";
  }
}
