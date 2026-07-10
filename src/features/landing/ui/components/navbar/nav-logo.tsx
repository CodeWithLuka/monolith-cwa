import Image from "next/image";
import Link from "next/link";

export function NavLogo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5">
      <Image
        src="/logos/logo.svg"
        alt=""
        width={60}
        height={20}
        className="h-5 w-auto"
        priority
      />
      <span className="text-sm font-semibold tracking-tight">Monolith</span>
    </Link>
  );
}
