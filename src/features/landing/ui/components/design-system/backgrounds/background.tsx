import type { ReactNode } from "react";

import { AnimatedGrid } from "./animated-grid";
import { GradientBlobs } from "./gradient-blobs";
import { Grain } from "./grain";

interface BackgroundProps {
  children: ReactNode;
}

export function Background({ children }: BackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <GradientBlobs />

      <AnimatedGrid />

      <Grain />

      <main className="relative z-20">{children}</main>
    </div>
  );
}
