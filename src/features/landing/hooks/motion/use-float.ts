"use client";

import { useEffect, useRef } from "react";

interface UseFloatOptions {
  amplitude?: number;
  period?: number;
  delay?: number;
}

export function useFloat<T extends HTMLElement = HTMLDivElement>({
  amplitude = 10,
  period = 3,
  delay = 0,
}: UseFloatOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let startTime: number | null = null;
    let animationId: number;

    function animate(time: number) {
      if (startTime === null) startTime = time;
      const elapsed = (time - startTime) / 1000 - delay;

      if (elapsed > 0) {
        const y = Math.sin((elapsed * 2 * Math.PI) / period) * amplitude;
        element!.style.transform = `translateY(${y}px)`;
      }

      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [amplitude, period, delay]);

  return ref;
}
