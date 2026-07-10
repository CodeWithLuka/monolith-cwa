"use client";

import { useEffect, useRef } from "react";

interface UseParallaxOptions {
  speed?: number;
  direction?: "vertical" | "horizontal";
}

export function useParallax<T extends HTMLElement = HTMLDivElement>({
  speed = 0.5,
  direction = "vertical",
}: UseParallaxOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    function handleScroll() {
      const rect = element!.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const offset = rect.top - viewportHeight;
      const translate = offset * speed;

      if (direction === "vertical") {
        element!.style.transform = `translateY(${translate}px)`;
      } else {
        element!.style.transform = `translateX(${translate}px)`;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);

  return ref;
}
