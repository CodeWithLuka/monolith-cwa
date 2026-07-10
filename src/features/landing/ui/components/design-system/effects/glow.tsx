import { cn } from "@/lib/utils";

import type { HTMLAttributes } from "react";

interface GlowProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  size?: "sm" | "md" | "lg";
}

export function Glow({
  className,
  color = "bg-primary/20",
  size = "md",
  ...props
}: GlowProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-[120px]",
        size === "sm" && "h-[300px] w-[300px]",
        size === "md" && "h-[500px] w-[500px]",
        size === "lg" && "h-[700px] w-[700px]",
        color,
        className,
      )}
      {...props}
    />
  );
}
