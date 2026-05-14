"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

type ClayChipProps = {
  selected?: boolean;
  /** Increment to trigger a wobble animation (e.g., on form error). */
  wobbleSignal?: number;
  /** Tailwind class for the focus ring offset color. Default `ring-offset-clay-cream`. */
  ringOffsetClassName?: string;
  children: ReactNode;
} & Omit<HTMLMotionProps<"button">, "children">;

export function ClayChip({
  selected = false,
  wobbleSignal = 0,
  ringOffsetClassName = "focus-visible:ring-offset-clay-cream",
  className = "",
  children,
  ...rest
}: ClayChipProps) {
  const prevSelected = useRef(selected);
  const [bounceTick, setBounceTick] = useState(0);
  const [wobbleTick, setWobbleTick] = useState(0);

  useEffect(() => {
    if (selected && !prevSelected.current) setBounceTick((t) => t + 1);
    prevSelected.current = selected;
  }, [selected]);

  const prevWobble = useRef(wobbleSignal);
  useEffect(() => {
    if (wobbleSignal !== prevWobble.current) {
      setWobbleTick((t) => t + 1);
      prevWobble.current = wobbleSignal;
    }
  }, [wobbleSignal]);

  // Layered animation: bounce on select, wobble on error. Wobble takes precedence
  // when both happen in the same frame because we key on whichever ticked last.
  const animateKey =
    wobbleTick > 0 && wobbleTick >= bounceTick
      ? `w-${wobbleTick}`
      : `b-${bounceTick}`;
  const animateProps =
    wobbleTick > 0 && wobbleTick >= bounceTick
      ? { rotate: [0, -4, 4, -4, 4, 0] }
      : bounceTick > 0
        ? { scale: [1, 1.18, 1] }
        : {};

  return (
    <motion.button
      type="button"
      aria-pressed={selected}
      key={animateKey}
      animate={animateProps}
      transition={{
        duration: wobbleTick > 0 && wobbleTick >= bounceTick ? 0.45 : 0.28,
        ease: "easeOut",
      }}
      className={[
        "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full",
        "px-4 text-sm font-bold border-[2px] border-clay-ink",
        "transition-colors duration-150 ease-out",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-clay-mint focus-visible:ring-offset-2",
        ringOffsetClassName,
        "cursor-pointer",
        selected
          ? "bg-clay-ink text-clay-cream"
          : "bg-clay-paper text-clay-ink hover:bg-clay-butter",
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
