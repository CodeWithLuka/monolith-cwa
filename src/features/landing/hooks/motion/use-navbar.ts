"use client";

import { useEffect, useRef, useState } from "react";

interface UseNavbarOptions {
  scrollThreshold?: number;
  hideOnScrollDown?: boolean;
}

export function useNavbar({
  scrollThreshold = 50,
  hideOnScrollDown = true,
}: UseNavbarOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      setIsScrolled(currentScrollY > scrollThreshold);

      if (hideOnScrollDown && currentScrollY > scrollThreshold) {
        setIsHidden(scrollingDown);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold, hideOnScrollDown]);

  return { ref, isScrolled, isHidden };
}
