export const motionTokens = {
  duration: {
    instant: 0,
    fast: 0.15,
    normal: 0.3,
    slow: 0.6,
    slower: 0.9,
    slowest: 1.2,
  },
  delay: {
    none: 0,
    short: 0.1,
    medium: 0.3,
    long: 0.6,
    stagger: 0.08,
  },
  easing: {
    linear: [0, 0, 1, 1],
    in: [0.4, 0, 1, 1],
    out: [0, 0, 0.2, 1],
    inOut: [0.4, 0, 0.2, 1],
    bounce: [0.34, 1.56, 0.64, 1],
    spring: [0.34, 1.56, 0.64, 1],
    smooth: [0.25, 0.1, 0.25, 1],
  },
  distance: {
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
    "2xl": 120,
  },
  blur: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
  },
} as const;

export type MotionDuration = keyof typeof motionTokens.duration;
export type MotionEasing = keyof typeof motionTokens.easing;
export type MotionDistance = keyof typeof motionTokens.distance;
