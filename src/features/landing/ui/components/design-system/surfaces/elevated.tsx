import { cn } from "@/lib/utils";

import type { HTMLAttributes } from "react";

interface ElevatedProps extends HTMLAttributes<HTMLDivElement> {
  level?: 1 | 2 | 3;
}

export function Elevated({ className, level = 1, ...props }: ElevatedProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-card",
        level === 1 && "shadow-md",
        level === 2 && "shadow-lg",
        level === 3 && "shadow-xl",
        className,
      )}
      {...props}
    />
  );
}
