"use client";

import { useEffect, useState } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

export function CursorGlow() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, color-mix(in oklch, var(--primary) 8%, transparent), transparent 40%)`,
      }}
    />
  );
}
