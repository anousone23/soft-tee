"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  /** Loop duration in seconds. Lower = faster. Default 22. */
  duration?: number;
  className?: string;
};

export function Marquee({ children, duration = 22, className = "" }: MarqueeProps) {
  const reduced = useReducedMotion();

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        className="flex w-max"
        animate={reduced ? undefined : { x: ["0%", "-50%"] }}
        transition={
          reduced
            ? undefined
            : { duration, ease: "linear", repeat: Infinity }
        }
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0">{children}</div>
      </motion.div>
    </div>
  );
}
