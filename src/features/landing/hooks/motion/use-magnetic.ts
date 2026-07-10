"use client";

import { useCallback, useRef } from "react";

interface UseMagneticOptions {
  strength?: number;
  radius?: number;
}

export function useMagnetic<T extends HTMLElement = HTMLElement>({
  strength = 0.3,
  radius = 200,
}: UseMagneticOptions = {}) {
  const ref = useRef<T>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance < radius) {
        const strengthFactor = (1 - distance / radius) * strength;
        element.style.transform = `translate(${distX * strengthFactor}px, ${distY * strengthFactor}px)`;
      }
    },
    [strength, radius],
  );

  const handleMouseLeave = useCallback(() => {
    const element = ref.current;
    if (!element) return;
    element.style.transform = "translate(0, 0)";
  }, []);

  const bind = {
    onMouseMove: handleMouseMove as unknown as React.MouseEventHandler,
    onMouseLeave: handleMouseLeave as unknown as React.MouseEventHandler,
  };

  return { ref, bind };
}
