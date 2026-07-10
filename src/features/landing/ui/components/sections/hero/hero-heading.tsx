"use client";

import { cn } from "@/lib/utils";

interface HeroHeadingProps {
  className?: string;
}

export function HeroHeading({ className }: HeroHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary sm:px-4">
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        Workflow Intelligence
      </div>

      <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        Automation that{" "}
        <span className="bg-gradient-to-r from-primary to-primary/40 bg-clip-text text-transparent">
          evolves.
        </span>
      </h1>

      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
        Every workflow becomes knowledge. Every node becomes reusable.
        Every builder improves the network. Monolith is the open platform
        where automation learns from itself.
      </p>
    </div>
  );
}
