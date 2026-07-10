import { cn } from "@/lib/utils";

import type { HTMLAttributes } from "react";

interface WorkflowStepProps extends HTMLAttributes<HTMLDivElement> {
  step: number;
  title: string;
  description?: string;
}

export function WorkflowStep({
  step,
  title,
  description,
  className,
  ...props
}: WorkflowStepProps) {
  return (
    <div className={cn("flex gap-6", className)} {...props}>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-card text-sm font-semibold">
        {step}
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>

        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
