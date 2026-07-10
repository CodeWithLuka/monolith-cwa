"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useReveal } from "@/features/landing/hooks/motion/use-reveal";

import { Container } from "../design-system/layout/container";

const activities = [
  { user: "Alex", action: "published", target: "AI Support Agent", time: "2h ago" },
  { user: "Maria", action: "forked", target: "Lead Qualification", time: "4h ago" },
  { user: "John", action: "improved", target: "Content Pipeline", time: "6h ago" },
  { user: "Sarah", action: "reused", target: "Customer Onboarding", time: "12h ago" },
  { user: "David", action: "published", target: "Code Review Bot", time: "1d ago" },
];

const metrics = [
  { value: "12,400+", label: "Workflows" },
  { value: "3,200+", label: "Templates" },
  { value: "850+", label: "Builders" },
  { value: "98%", label: "Uptime" },
];

export function Community() {
  const { ref, isVisible } = useReveal({ threshold: 0.15 });

  return (
    <section className="relative border-t border-border/40 py-24 sm:py-32 md:py-40" ref={ref}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div
              className={`transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Community
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                A network that{" "}
                <span className="bg-gradient-to-r from-primary to-primary/40 bg-clip-text text-transparent">
                  grows.
                </span>
              </h2>
            </div>

            <div
              className={`mt-10 space-y-0 transition-all duration-700 delay-200 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {activities.map((a, i) => (
                <div
                  key={`${a.user}-${i}`}
                  className="group relative flex items-center gap-4 border-l-2 border-border/30 py-3.5 pl-6 transition-all last:border-l-0 hover:border-primary/30 sm:py-4"
                >
                  <div className="absolute -left-[9px] h-4 w-4 rounded-full border-2 border-border/50 bg-background transition-all group-hover:border-primary/50 group-hover:bg-primary/5" />
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-card text-xs font-semibold">
                    {a.user.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-sm">
                      <span className="font-medium">{a.user}</span>{" "}
                      <span className="text-muted-foreground">{a.action}</span>{" "}
                      <span className="font-medium text-primary/80">
                        {a.target}
                      </span>
                    </span>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">{a.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {metrics.map((m, i) => (
              <Card
                key={m.label}
                size="sm"
                className="text-center transition-all duration-700 hover:shadow-sm"
                style={{
                  transitionDelay: `${i * 100 + 300}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(0) scale(1)"
                    : "translateY(16px) scale(0.97)",
                }}
              >
                <CardHeader>
                  <CardTitle className="text-3xl sm:text-4xl">
                    {m.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{m.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
