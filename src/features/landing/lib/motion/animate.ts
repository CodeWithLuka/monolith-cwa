export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function animate(
  element: HTMLElement | null,
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions,
): Animation | undefined {
  if (!element || prefersReducedMotion()) return undefined;
  const animation = element.animate(keyframes, options);
  animation.onfinish = () => animation.commitStyles();
  return animation;
}

export function animateIn(
  element: HTMLElement | null,
  options: KeyframeAnimationOptions = { duration: 600, fill: "forwards" },
): Animation | undefined {
  if (!element) return undefined;
  const from = element.getAttribute("data-animate-from");
  const to = element.getAttribute("data-animate-to");

  const fromStyles = from ? (JSON.parse(from) as Record<string, string>) : { opacity: "0", transform: "translateY(16px)" };
  const toStyles = to ? (JSON.parse(to) as Record<string, string>) : { opacity: "1", transform: "translateY(0)" };

  return animate(element, [fromStyles, toStyles], options);
}

export function animateStagger(
  container: HTMLElement | null,
  selector = "[data-animate-stagger]",
  options: KeyframeAnimationOptions = { duration: 600, fill: "forwards" },
  staggerDelay = 80,
): Animation[] {
  if (!container || prefersReducedMotion()) return [];
  const items = container.querySelectorAll<HTMLElement>(selector);
  const animations: Animation[] = [];

  items.forEach((item, index) => {
    const anim = animateIn(item, { ...options, delay: (options.delay ?? 0) + index * staggerDelay });
    if (anim) animations.push(anim);
  });

  return animations;
}
