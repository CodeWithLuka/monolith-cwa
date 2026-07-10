import { cn } from "@/lib/utils";

import type { ComponentPropsWithoutRef } from "react";

type PageGridProps = ComponentPropsWithoutRef<"div">;

export function PageGrid({ className, ...props }: PageGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-4 gap-6",
        "sm:grid-cols-8",
        "lg:grid-cols-12 lg:gap-8",
        className,
      )}
      {...props}
    />
  );
}
