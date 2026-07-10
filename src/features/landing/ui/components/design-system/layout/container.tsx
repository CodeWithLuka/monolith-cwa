import { cn } from "@/lib/utils";

import type { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px]",
        "px-6 sm:px-8 lg:px-10 xl:px-12",
        className,
      )}
      {...props}
    />
  );
}
