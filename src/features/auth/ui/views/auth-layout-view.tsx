import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface AuthLayoutViewProps {
  children: ReactNode;
}

export const AuthLayoutView = ({ children }: AuthLayoutViewProps) => {
  return (
    <div className="bg-muted flex min-h-svh flex-col justify-center gap-6 p-6 md:p-10 items-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          prefetch
          className="flex items-center gap-2 self-center font-semibold"
        >
          <Image src="/logos/logo.svg" alt="Monolith" height={48} width={48} />
          <span className="text-2xl">Monolith</span>
        </Link>
        <main>{children}</main>
      </div>
    </div>
  );
};
