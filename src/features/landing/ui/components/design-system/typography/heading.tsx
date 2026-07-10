import { cn } from "@/lib/utils";

import type { HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
}

export function Heading({
  as: Tag = "h2",
  className,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-semibold tracking-tight text-balance",
        Tag === "h1" && "text-5xl sm:text-6xl lg:text-7xl",
        Tag === "h2" && "text-4xl sm:text-5xl lg:text-6xl",
        Tag === "h3" && "text-2xl sm:text-3xl",
        Tag === "h4" && "text-xl sm:text-2xl",
        className,
      )}
      {...props}
    />
  );
}
