"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

const links = [
  { label: "Features", href: "#features" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "Templates", href: "#templates" },
  { label: "Community", href: "#community" },
  { label: "Docs", href: "/docs" },
];

interface NavLinksProps {
  className?: string;
  onClick?: () => void;
}

export function NavLinks({ className, onClick }: NavLinksProps) {
  return (
    <nav className={cn("items-center gap-1", className)}>
      {links.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={onClick}
          className={cn(
            "group relative rounded-lg px-3 py-2 text-sm font-medium transition-all",
            "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
