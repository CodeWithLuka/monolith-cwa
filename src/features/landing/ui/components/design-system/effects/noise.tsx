import { cn } from "@/lib/utils";

interface NoiseProps {
  className?: string;
  opacity?: number;
}

export function Noise({ className, opacity = 0.035 }: NoiseProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 mix-blend-soft-light",
        className,
      )}
      style={{
        opacity,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.9'/%3E%3C/svg%3E\")",
      }}
    />
  );
}
