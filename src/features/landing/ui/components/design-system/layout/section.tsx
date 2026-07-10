import { cn } from "@/lib/utils";

import type { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section">;

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn("relative", "py-24 sm:py-28 lg:py-36", className)}
      {...props}
    />
  );
}
