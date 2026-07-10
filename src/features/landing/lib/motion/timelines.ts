import { motionTokens } from "./tokens";

interface TimelineStep {
  target: string;
  styles: Record<string, string | number>;
  duration?: number;
  ease?: number[];
  delay?: number;
}

export function createTimeline(steps: TimelineStep[]) {
  return steps.map((step) => ({
    ...step,
    duration: step.duration ?? motionTokens.duration.normal,
    ease: step.ease ?? motionTokens.easing.out,
    delay: step.delay ?? 0,
  }));
}

export const heroTimeline = () =>
  createTimeline([
    {
      target: "[data-hero-badge]",
      styles: { opacity: 1, transform: "translateY(0)" },
      duration: motionTokens.duration.slow,
      delay: 0.2,
    },
    {
      target: "[data-hero-title]",
      styles: { opacity: 1, transform: "translateY(0)" },
      duration: motionTokens.duration.slow,
      delay: 0.4,
    },
    {
      target: "[data-hero-description]",
      styles: { opacity: 1, transform: "translateY(0)" },
      duration: motionTokens.duration.slow,
      delay: 0.6,
    },
    {
      target: "[data-hero-actions]",
      styles: { opacity: 1, transform: "translateY(0)" },
      duration: motionTokens.duration.slow,
      delay: 0.8,
    },
    {
      target: "[data-hero-visual]",
      styles: { opacity: 1, transform: "scale(1)" },
      duration: motionTokens.duration.slower,
      delay: 1.0,
    },
  ]);

export const sectionRevealTimeline = () =>
  createTimeline([
    {
      target: "[data-section-eyebrow]",
      styles: { opacity: 1, transform: "translateY(0)" },
    },
    {
      target: "[data-section-title]",
      styles: { opacity: 1, transform: "translateY(0)" },
      delay: 0.1,
    },
    {
      target: "[data-section-description]",
      styles: { opacity: 1, transform: "translateY(0)" },
      delay: 0.2,
    },
    {
      target: "[data-section-content]",
      styles: { opacity: 1, transform: "translateY(0)" },
      delay: 0.3,
    },
  ]);
