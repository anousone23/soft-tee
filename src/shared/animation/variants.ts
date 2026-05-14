import type { Variants } from "motion/react";

type StaggerOptions = {
  /** Pixels the child slides up from. Default 24. */
  y?: number;
  /** Per-child stagger in seconds. Default 0.15. */
  stagger?: number;
  /** Initial delay before the first child starts. Default 0.05. */
  delay?: number;
  /** Each child's animation duration in seconds. Default 0.5. */
  duration?: number;
};

/**
 * Returns a `{ container, item }` pair of Framer Motion variants for
 * staggered fade-up entrances. Designed for parents with `initial="hidden"`
 * + `whileInView="visible"` and children with `variants={item}`.
 */
export function makeStagger({
  y = 24,
  stagger = 0.15,
  delay = 0.05,
  duration = 0.5,
}: StaggerOptions = {}): { container: Variants; item: Variants } {
  return {
    container: {
      hidden: {},
      visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
    },
    item: {
      hidden: { opacity: 0, y },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, ease: "easeOut" },
      },
    },
  };
}
