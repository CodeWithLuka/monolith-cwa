import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroCta() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
      <Link
        href="/sign-up"
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          "rounded-lg px-6 text-sm sm:px-8 sm:text-base",
        )}
      >
        Start Building
      </Link>

      <Link
        href="#workflow"
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "rounded-lg px-6 text-sm sm:px-8 sm:text-base",
        )}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="mr-2"
        >
          <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Explore Nodes
      </Link>
    </div>
  );
}
