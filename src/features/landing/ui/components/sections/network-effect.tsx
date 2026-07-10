"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { useReveal } from "@/features/landing/hooks/motion/use-reveal";

import { Container } from "../design-system/layout/container";

const steps = [
  {
    number: "01",
    title: "Build a workflow",
    description: "Connect Google Forms to Gemini to Slack in minutes.",
  },
  {
    number: "02",
    title: "Publish to the network",
    description: "Share your workflow as a reusable template.",
  },
  {
    number: "03",
    title: "Community improves it",
    description: "Others fork, extend, and optimize your workflow.",
  },
  {
    number: "04",
    title: "Everyone benefits",
    description: "Every workflow makes every other workflow smarter.",
  },
];

export function NetworkEffect() {
  const { ref, isVisible } = useReveal({ threshold: 0.2 });

  return (
    <section className="relative py-24 sm:py-32 md:py-40" ref={ref}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span
            className={`mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            The Network Effect
          </span>

          <h2
            className={`text-3xl font-bold tracking-tight text-balance transition-all duration-700 delay-100 sm:text-4xl lg:text-5xl xl:text-6xl ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Every workflow makes every other workflow{" "}
            <span className="bg-gradient-to-r from-primary to-primary/40 bg-clip-text text-transparent">
              smarter.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:mt-20 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Card
              key={step.number}
              size="sm"
              className={cn(
                "transition-all duration-500 hover:shadow-md hover:border-primary/20",
              )}
              style={{
                transitionDelay: `${i * 120}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
              }}
            >
              <CardHeader>
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg border border-primary/15 bg-primary/5 text-sm font-semibold text-primary sm:h-10 sm:w-10">
                  {step.number}
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
