"use client";

import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { useReveal } from "@/features/landing/hooks/motion/use-reveal";

import { Container } from "../design-system/layout/container";

const workflows = [
  {
    name: "AI Support Agent",
    rating: "5.0",
    forks: "2.3k",
    nodes: [
      { name: "OpenAI", logo: "/logos/openai.svg" },
      { name: "Claude", logo: "/logos/anthropic.svg" },
      { name: "Slack", logo: "/logos/slack.svg" },
    ],
    featured: true,
  },
  {
    name: "Lead Qualification",
    rating: "4.9",
    forks: "1.8k",
    nodes: [
      { name: "Google Forms", logo: "/logos/googleform.svg" },
      { name: "Gemini", logo: "/logos/gemini.svg" },
      { name: "Slack", logo: "/logos/slack.svg" },
    ],
  },
  {
    name: "Content Pipeline",
    rating: "4.8",
    forks: "1.2k",
    nodes: [
      { name: "Gemini", logo: "/logos/gemini.svg" },
      { name: "OpenAI", logo: "/logos/openai.svg" },
      { name: "Claude", logo: "/logos/anthropic.svg" },
    ],
  },
  {
    name: "Customer Onboarding",
    rating: "4.7",
    forks: "950",
    nodes: [
      { name: "Google Forms", logo: "/logos/googleform.svg" },
      { name: "Slack", logo: "/logos/slack.svg" },
    ],
  },
];

export function Marketplace() {
  const { ref, isVisible } = useReveal({ threshold: 0.15 });

  return (
    <section className="relative border-t border-border/40 py-24 sm:py-32 md:py-40" ref={ref}>
      <Container>
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Marketplace
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl xl:text-6xl">
            Workflows worth{" "}
            <span className="bg-gradient-to-r from-primary to-primary/40 bg-clip-text text-transparent">
              sharing.
            </span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6">
          {workflows.map((wf, i) => (
            <Card
              key={wf.name}
              size="sm"
              className={cn(
                "transition-all duration-500 hover:shadow-md",
                wf.featured
                  ? "border-primary/20 ring-primary/20 hover:border-primary/30"
                  : "hover:border-border/60",
              )}
              style={{
                transitionDelay: `${i * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
              }}
            >
              <CardHeader className="flex-row items-center justify-between">
                <div>
                  <CardTitle>{wf.name}</CardTitle>
                  <CardDescription>
                    {wf.rating} rating &middot; {wf.forks} forks
                  </CardDescription>
                </div>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "rounded-lg text-xs opacity-0 transition-opacity group-hover/card:opacity-100 sm:text-sm",
                  )}
                >
                  View →
                </Link>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-2">
                  {wf.nodes.map((node) => (
                    <div
                      key={node.name}
                      className="flex items-center gap-1.5 rounded-lg border border-border/30 bg-background/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      <Image
                        src={node.logo}
                        alt={node.name}
                        width={14}
                        height={14}
                        className="h-3.5 w-auto"
                      />
                      {node.name}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <Link
            href="/marketplace"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-lg px-8",
            )}
          >
            Browse Marketplace
            <span aria-hidden className="ml-1.5">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
