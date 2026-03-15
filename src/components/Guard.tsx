"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function Guard({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  console.log("session: ", session);
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
