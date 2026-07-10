"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { MobileMenu } from "./mobile-menu";
import { NavActions } from "./nav-actions";
import { NavLinks } from "./nav-links";
import { NavLogo } from "./nav-logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div
            className={cn(
              "relative mx-auto mt-3 flex items-center justify-between overflow-hidden sm:mt-4",
              "rounded-xl px-4 py-2.5 sm:rounded-2xl sm:px-6 sm:py-3",
              "border transition-all duration-500",
              scrolled
                ? "border-border/50 bg-background/70 shadow-lg shadow-black/5 backdrop-blur-3xl"
                : "border-transparent",
            )}
          >
            <NavLogo />

            <NavLinks className="hidden lg:flex" />

            <div className="hidden lg:block">
              <NavActions />
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2 5h16M2 10h16M2 15h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
