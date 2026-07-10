export function AnimatedGrid() {
  return (
    <div
      aria-hidden
      className="
      absolute
      inset-0
      opacity-[0.05]
      pointer-events-none
      [background-image:
      linear-gradient(to_right,var(--border)_1px,transparent_1px),
      linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]
      [background-size:72px_72px]
      [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]
    "
    />
  );
}
