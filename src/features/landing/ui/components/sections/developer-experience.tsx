"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { useReveal } from "@/features/landing/hooks/motion/use-reveal";

import { Container } from "../design-system/layout/container";

const features = [
  { label: "TypeScript", description: "End-to-end type safety across every workflow." },
  { label: "React", description: "Build custom nodes with familiar component patterns." },
  { label: "Docker", description: "Self-host with a single docker compose command." },
  { label: "REST API", description: "Trigger workflows programmatically from any system." },
  { label: "Webhooks", description: "Real-time event-driven workflow execution." },
  { label: "AI SDK", description: "Native SDK for OpenAI, Gemini, and Claude." },
];

export function DeveloperExperience() {
  const { ref, isVisible } = useReveal({ threshold: 0.15 });

  return (
    <section className="relative border-t border-border/40 py-24 sm:py-32 md:py-40" ref={ref}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Developer First
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Built for{" "}
              <span className="bg-gradient-to-r from-primary to-primary/40 bg-clip-text text-transparent">
                engineers.
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-8">
              Every API is typed. Every workflow is version controlled.
              Every node is extensible. Monolith is built by developers,
              for developers.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4">
              {features.map((f) => (
                <Card
                  key={f.label}
                  size="sm"
                  className="transition-all hover:shadow-sm"
                >
                  <CardHeader>
                    <CardTitle>{f.label}</CardTitle>
                    <CardDescription>{f.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div
            className={`rounded-2xl border border-border/40 bg-card/20 p-5 backdrop-blur-sm transition-all duration-700 delay-200 sm:p-6 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/50" />
              <span className="ml-3 font-mono text-[11px]">monolith.config.ts</span>
            </div>

            <Separator className="mb-4" />

            <pre className="overflow-x-auto text-[13px] leading-6">
              <code>
                <span className="text-muted-foreground">import</span>{" "}
                <span className="text-primary">createWorkflow</span>{" "}
                <span className="text-muted-foreground">from</span>{" "}
                <span className="text-primary/60">&quot;monolith&quot;</span>
                {"\n\n"}
                <span className="text-muted-foreground">const</span> workflow ={" "}
                <span className="text-primary">createWorkflow</span>({"{"}
                {"\n  "}name:{" "}
                <span className="text-primary/60">&quot;Lead Scoring&quot;</span>,
                {"\n  "}trigger: Trigger.Webhook,
                {"\n  "}nodes: [
                {"\n    "}{"{"} type:{" "}
                <span className="text-primary/60">&quot;gemini&quot;</span>,{" "}
                prompt:{" "}
                <span className="text-primary/60">&quot;Analyze lead&quot;</span>{" "}
                {"}"},
                {"\n    "}{"{"} type:{" "}
                <span className="text-primary/60">&quot;slack&quot;</span>,{" "}
                channel:{" "}
                <span className="text-primary/60">&quot;#sales&quot;</span>{" "}
                {"}"},
                {"\n  "}],
                {"\n"}{"})"}
                {"\n\n"}
                <span className="text-muted-foreground">await</span> workflow.
                <span className="text-primary">execute</span>()
              </code>
            </pre>
          </div>
        </div>
      </Container>
    </section>
  );
}
