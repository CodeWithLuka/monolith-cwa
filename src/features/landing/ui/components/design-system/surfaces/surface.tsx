import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

import type { HTMLAttributes } from "react";

const surfaceVariants = cva(
  [
    "relative overflow-hidden rounded-[32px]",
    "border",
    "transition-all duration-500",
    "backdrop-blur-xl",
  ],
  {
    variants: {
      variant: {
        glass: "border-border/60 bg-background/60",
        elevated: "border-border bg-card shadow-xl",
        interactive:
          "border-border bg-card hover:border-primary/30 hover:-translate-y-1",
        workflow: "border-primary/20 bg-card",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
    },
    defaultVariants: {
      variant: "glass",
      padding: "lg",
    },
  },
);

interface SurfaceProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof surfaceVariants> {}

export function Surface({ variant, padding, className, ...props }: SurfaceProps) {
  return (
    <div className={cn(surfaceVariants({ variant, padding, className }))} {...props} />
  );
}
