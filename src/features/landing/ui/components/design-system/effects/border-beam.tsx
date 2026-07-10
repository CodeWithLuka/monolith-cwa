import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  color?: string;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 8,
  color = "var(--primary)",
}: BorderBeamProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]",
        className,
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${color} 180deg, transparent 360deg)`,
          animation: `spin ${duration}s linear infinite`,
          WebkitMaskImage:
            "radial-gradient(farthest-side at 50% 50%, transparent calc(100% - 2px), black calc(100% - 1px), black 100%)",
          maskImage:
            "radial-gradient(farthest-side at 50% 50%, transparent calc(100% - 2px), black calc(100% - 1px), black 100%)",
          width: size,
          height: size,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
