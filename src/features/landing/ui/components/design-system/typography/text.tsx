import { cn } from "@/lib/utils";

import type { HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "base" | "lg";
  color?: "default" | "muted" | "primary";
}

export function Text({
  size = "base",
  color = "muted",
  className,
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        "leading-8",
        size === "sm" && "text-sm leading-6",
        size === "base" && "text-base leading-7",
        size === "lg" && "text-lg leading-8",
        color === "default" && "text-foreground",
        color === "muted" && "text-muted-foreground",
        color === "primary" && "text-primary",
        className,
      )}
      {...props}
    />
  );
}
