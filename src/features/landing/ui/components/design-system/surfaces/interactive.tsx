import { cn } from "@/lib/utils";

import type { ButtonHTMLAttributes } from "react";

type InteractiveProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Interactive({ className, ...props }: InteractiveProps) {
  return (
    <button
      className={cn(
        "rounded-xl border bg-card px-6 py-4 text-left",
        "transition-all duration-300",
        "hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5",
        "active:translate-y-0 active:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className,
      )}
      {...props}
    />
  );
}
