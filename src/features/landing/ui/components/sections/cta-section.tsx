import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Container } from "../design-system/layout/container";

export function CtaSection() {
  return (
    <section className="relative border-t border-border/40 py-24 sm:py-32 md:py-40">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Get Started
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl xl:text-6xl">
            Build workflows that{" "}
            <span className="bg-gradient-to-r from-primary to-primary/40 bg-clip-text text-transparent">
              evolve.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
            Join thousands of builders creating workflows that get smarter
            every time someone uses them.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
            <Link
              href="/sign-up"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "rounded-lg px-8 text-sm sm:px-10 sm:text-base",
              )}
            >
              Start for free
            </Link>
            <Link
              href="/docs"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-lg px-8 text-sm sm:px-10 sm:text-base",
              )}
            >
              Read the docs
            </Link>
          </div>

          <p className="mt-5 text-xs text-muted-foreground">
            No credit card required. Self-host or cloud.
          </p>
        </div>
      </Container>
    </section>
  );
}
