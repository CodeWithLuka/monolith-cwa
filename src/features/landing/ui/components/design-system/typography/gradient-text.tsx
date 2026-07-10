import { cn } from "@/lib/utils";

import type { HTMLAttributes } from "react";

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  as?: "span" | "h1" | "h2" | "h3" | "h4";
  from?: string;
  to?: string;
}

export function GradientText({
  as: Tag = "span",
  from = "from-foreground",
  to = "to-foreground/40",
  className,
  ...props
}: GradientTextProps) {
  return (
    <Tag
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        from,
        to,
        className,
      )}
      {...props}
    />
  );
}
