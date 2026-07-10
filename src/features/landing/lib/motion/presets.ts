import { motionTokens } from "./tokens";

import type { MotionDuration, MotionEasing } from "./tokens";

interface AnimationPreset {
  initial: Record<string, string>;
  animate: Record<string, string>;
  transition: {
    duration: number;
    ease: readonly number[];
    delay?: number;
  };
}

function preset(
  initial: Record<string, string>,
  animate: Record<string, string>,
  duration: MotionDuration = "normal",
  ease: MotionEasing = "out",
  delay?: number,
): AnimationPreset {
  return {
    initial,
    animate,
    transition: {
      duration: motionTokens.duration[duration],
      ease: motionTokens.easing[ease],
      ...(delay !== undefined && { delay }),
    },
  };
}

export const fadeIn = (delay?: number) =>
  preset(
    { opacity: "0" },
    { opacity: "1" },
    "slow",
    "out",
    delay,
  );

export const fadeInUp = (delay?: number) =>
  preset(
    { opacity: "0", transform: `translateY(${motionTokens.distance.lg}px)` },
    { opacity: "1", transform: "translateY(0)" },
    "slow",
    "out",
    delay,
  );

export const fadeInDown = (delay?: number) =>
  preset(
    { opacity: "0", transform: `translateY(-${motionTokens.distance.lg}px)` },
    { opacity: "1", transform: "translateY(0)" },
    "slow",
    "out",
    delay,
  );

export const fadeInLeft = (delay?: number) =>
  preset(
    { opacity: "0", transform: `translateX(-${motionTokens.distance.lg}px)` },
    { opacity: "1", transform: "translateX(0)" },
    "slow",
    "out",
    delay,
  );

export const fadeInRight = (delay?: number) =>
  preset(
    { opacity: "0", transform: `translateX(${motionTokens.distance.lg}px)` },
    { opacity: "1", transform: "translateX(0)" },
    "slow",
    "out",
    delay,
  );

export const scaleIn = (delay?: number) =>
  preset(
    { opacity: "0", transform: "scale(0.9)" },
    { opacity: "1", transform: "scale(1)" },
    "slow",
    "out",
    delay,
  );

export const slideUp = (delay?: number) =>
  preset(
    { transform: `translateY(${motionTokens.distance.lg}px)` },
    { transform: "translateY(0)" },
    "slow",
    "out",
    delay,
  );

interface StaggerPreset {
  initial: Record<string, string>;
  animate: Record<string, string>;
  transition: (index: number) => {
    duration: number;
    ease: readonly number[];
    delay: number;
  };
}

export const stagger = (childDelay = motionTokens.delay.stagger): StaggerPreset => ({
  initial: { opacity: "0", transform: `translateY(${motionTokens.distance.md}px)` },
  animate: { opacity: "1", transform: "translateY(0)" },
  transition: (index: number) => ({
    duration: motionTokens.duration.slow,
    ease: motionTokens.easing.out,
    delay: index * childDelay,
  }),
});
