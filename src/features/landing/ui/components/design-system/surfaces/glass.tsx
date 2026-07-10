import { cn } from "@/lib/utils";

import type { HTMLAttributes } from "react";

interface GlassProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "card" | "panel";
}

export function Glass({ className, variant = "card", ...props }: GlassProps) {
  return (
    <div
      className={cn(
        variant === "card" && [
          "rounded-3xl border border-border/70 bg-card/70",
          "hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl",
        ],
        variant === "panel" && [
          "rounded-[32px] border border-border/70 bg-background/65 shadow-2xl shadow-black/5",
        ],
        "backdrop-blur-xl transition-all duration-500",
        className,
      )}
      {...props}
    />
  );
}
