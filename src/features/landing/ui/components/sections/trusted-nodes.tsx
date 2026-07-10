"use client";

import Image from "next/image";

import { Container } from "../design-system/layout/container";

const nodes = [
  { name: "Google Forms", logo: "/logos/googleform.svg", w: 32, h: 44 },
  { name: "Gemini", logo: "/logos/gemini.svg", w: 32, h: 32 },
  { name: "OpenAI", logo: "/logos/openai.svg", w: 32, h: 32 },
  { name: "Claude", logo: "/logos/anthropic.svg", w: 32, h: 32 },
  { name: "Slack", logo: "/logos/slack.svg", w: 32, h: 32 },
];

export function TrustedNodes() {
  return (
    <section className="relative border-y border-border/40 py-14 sm:py-16">
      <Container>
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground sm:text-sm sm:tracking-[0.2em]">
          Connect every major AI platform
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-14 sm:gap-y-8">
          {nodes.map((node) => (
            <div
              key={node.name}
              className="group flex items-center gap-3 rounded-xl border border-transparent px-4 py-2.5 transition-all duration-300 hover:border-border/50 hover:bg-card/40 hover:shadow-sm sm:px-5 sm:py-3"
            >
              <Image
                src={node.logo}
                alt={node.name}
                width={node.w}
                height={node.h}
                className="h-6 w-auto opacity-60 transition-all duration-300 group-hover:opacity-100 sm:h-8"
              />
              <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground sm:text-sm">
                {node.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
