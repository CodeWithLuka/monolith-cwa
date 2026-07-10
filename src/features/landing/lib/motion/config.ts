export const motionConfig = {
  defaultDuration: 0.6,
  defaultDelay: 0,
  defaultEasing: [0.25, 0.1, 0.25, 1],
  reducedMotion: {
    duration: 0,
    opacity: 1,
    transform: "none",
  },
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
} as const;

export const transitionDefaults = {
  duration: motionConfig.defaultDuration,
  ease: motionConfig.defaultEasing,
} as const;
