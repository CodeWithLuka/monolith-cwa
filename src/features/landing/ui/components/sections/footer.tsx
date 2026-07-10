import Image from "next/image";
import Link from "next/link";

import { Container } from "../design-system/layout/container";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Marketplace", href: "#marketplace" },
      { label: "Templates", href: "#templates" },
      { label: "Pricing", href: "#pricing" },
      { label: "Docs", href: "/docs" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: "https://github.com" },
      { label: "Discord", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 py-12 sm:py-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logos/logo.svg"
                alt=""
                width={56}
                height={18}
                className="h-4 w-auto"
              />
              <span className="text-sm font-semibold tracking-tight">Monolith</span>
            </Link>

            <p className="mt-4 text-sm leading-6 text-muted-foreground max-w-xs">
              The open platform where every workflow makes every other
              workflow smarter.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-sm font-semibold">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-xs text-muted-foreground sm:mt-16">
          &copy; {new Date().getFullYear()} Monolith. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
