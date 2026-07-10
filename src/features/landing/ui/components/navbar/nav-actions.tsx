import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NavActions() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <Link
        href="https://github.com"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "gap-2 rounded-lg px-3 text-xs sm:px-4 sm:text-sm",
        )}
      >
        <Image
          src="/logos/github.svg"
          alt="GitHub"
          width={16}
          height={16}
          className="h-4 w-4"
        />
        <span className="hidden sm:inline">GitHub</span>
      </Link>

      <Link
        href="/sign-up"
        className={cn(
          buttonVariants({ variant: "default", size: "sm" }),
          "rounded-lg px-4 text-xs sm:px-5 sm:text-sm",
        )}
      >
        Start Building
      </Link>
    </div>
  );
}
