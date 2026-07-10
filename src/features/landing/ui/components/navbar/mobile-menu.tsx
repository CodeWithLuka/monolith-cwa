"use client";

import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { NavActions } from "./nav-actions";
import { NavLinks } from "./nav-links";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    ref.current?.focus();
  }, [isOpen]);

  return (
    <>
      <div
        aria-hidden
        className={cn(
          "fixed inset-0 z-40 transition-all duration-500",
          isOpen ? "bg-black/20 backdrop-blur-sm opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
      />

      <div
        ref={ref}
        role="dialog"
        aria-modal
        tabIndex={-1}
        className={cn(
          "fixed inset-x-4 top-4 z-50",
          "flex flex-col gap-6",
          "rounded-2xl border border-border/60",
          "bg-background/90 shadow-2xl shadow-black/5 backdrop-blur-3xl",
          "p-5",
          "transition-all duration-500",
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none",
        )}
      >
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-lg"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 5l10 10M15 5l-10 10" />
            </svg>
          </Button>
        </div>

        <NavLinks className="flex flex-col gap-1" onClick={onClose} />

        <div className="border-t border-border/40 pt-4">
          <NavActions />
        </div>
      </div>
    </>
  );
}
