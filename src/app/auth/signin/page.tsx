// app/auth/signin/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  // async function run() {
  //   const hashedPassword = await bcrypt.hash("password123", 10);
  //   console.log(hashedPassword); 
  // }
  // run();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // await signIn("credentials", {
    //   email,
    //   password,
    //   callbackUrl: "/",
    // });
    router.push('/');
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-4 w-96"
      >
        <h1 className="text-xl font-bold text-center">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
