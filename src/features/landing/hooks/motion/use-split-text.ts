"use client";

import { useEffect, useRef, useState } from "react";

interface UseSplitTextOptions {
  type?: "chars" | "words" | "lines";
  delay?: number;
  stagger?: number;
}

export function useSplitText<T extends HTMLElement = HTMLElement>({
  type = "words",
  delay = 0,
  stagger = 0.04,
}: UseSplitTextOptions = {}) {
  const ref = useRef<T>(null);
  const [elements, setElements] = useState<HTMLElement[]>([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const text = el.textContent ?? "";
    el.textContent = "";

    const fragments: { text: string; separator?: string }[] = [];

    if (type === "chars") {
      for (const char of text) {
        fragments.push({ text: char === " " ? "\u00A0" : char });
      }
    } else if (type === "words") {
      const words = text.split(" ");
      for (let i = 0; i < words.length; i++) {
        fragments.push({ text: words[i] });
        if (i < words.length - 1) fragments.push({ text: " ", separator: " " });
      }
    } else {
      const lines = text.split("\n");
      for (let i = 0; i < lines.length; i++) {
        fragments.push({ text: lines[i] });
      }
    }

    const spans: HTMLElement[] = [];
    let currentDelay = delay;

    for (const frag of fragments) {
      if (frag.separator) {
        el.appendChild(document.createTextNode(frag.separator));
        continue;
      }
      const span = document.createElement("span");
      span.textContent = frag.text;
      span.style.display = type === "chars" ? "inline-block" : "inline";
      span.style.opacity = "0";
      span.style.transform = "translateY(8px)";
      span.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
      span.style.transitionDelay = `${currentDelay}s`;
      span.style.transitionProperty = "opacity, transform";
      el.appendChild(span);
      spans.push(span);
      currentDelay += stagger;
    }

    requestAnimationFrame(() => {
      for (const span of spans) {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }
    });

    setElements(spans);

    return () => {
      el.textContent = text;
    };
  }, [type, delay, stagger]);

  return { ref, elements };
}
