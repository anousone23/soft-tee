"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { ClayButton } from "@/shared/ui/ClayButton";
import { ClayCard } from "@/shared/ui/ClayCard";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function Hero() {
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduced ? 0 : -40],
  );

  return (
    <section
      ref={heroRef}
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
        <div className="relative z-10">
          <span className="inline-block rounded-full border-[2px] border-clay-ink bg-clay-butter px-4 py-1 text-xs font-bold tracking-widest text-clay-ink">
            NEW · 240GSM HEAVYWEIGHT
          </span>
          <motion.h1
            id="hero-heading"
            className="mt-5 font-display text-[clamp(3rem,8vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-clay-ink"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={word} className="inline-block">
              soft
            </motion.span>{" "}
            <motion.span variants={word} className="inline-block">
              tee,
            </motion.span>
            <br />
            <motion.span variants={word} className="inline-block">
              good
            </motion.span>{" "}
            <motion.span variants={word} className="inline-block">
              vibes.
            </motion.span>
          </motion.h1>
          <p className="mt-5 max-w-md text-lg text-clay-ink-soft lg:text-xl">
            Built from heavyweight cotton so it lives in your closet, not the
            bin.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="inline-flex h-12 items-center rounded-full border-[3px] border-clay-ink bg-clay-butter px-5 font-display text-xl font-bold clay-shadow-sm">
              ฿890
            </span>
            <ClayButton
              size="lg"
              variant="primary"
              onClick={() => {
                const target = document.getElementById("buy");
                if (!target) return;
                const prefersReduced = window.matchMedia(
                  "(prefers-reduced-motion: reduce)",
                ).matches;
                target.scrollIntoView({
                  behavior: prefersReduced ? "auto" : "smooth",
                  block: "start",
                });
              }}
            >
              grab one →
            </ClayButton>
          </div>
        </div>

        <motion.div
          style={{ y: parallaxY }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            animate={reduced ? undefined : { rotate: 360 }}
            transition={
              reduced
                ? undefined
                : { duration: 20, ease: "linear", repeat: Infinity }
            }
            className="pointer-events-none absolute -left-4 -top-4 z-10"
            aria-hidden="true"
          >
            <Image src="/decor-star.svg" alt="" width={64} height={64} />
          </motion.div>
          <motion.div
            animate={reduced ? undefined : { x: [0, 6, -6, 0] }}
            transition={
              reduced
                ? undefined
                : { duration: 6, ease: "easeInOut", repeat: Infinity }
            }
            className="pointer-events-none absolute -bottom-6 -right-2 z-10"
            aria-hidden="true"
          >
            <Image src="/decor-squiggle.svg" alt="" width={96} height={32} />
          </motion.div>

          <motion.div
            animate={reduced ? undefined : { y: [0, -8, 0] }}
            transition={
              reduced
                ? undefined
                : { duration: 4, ease: "easeInOut", repeat: Infinity }
            }
          >
            <ClayCard tone="peach" size="lg">
              <div className="flex items-center justify-center">
                <Image
                  src="/tee-hero.png"
                  alt="The soft. heavyweight cotton t-shirt, front view."
                  width={900}
                  height={1350}
                  priority
                  sizes="(min-width: 1024px) 580px, min(360px, 100vw)"
                  className="h-auto w-full max-w-[360px] rounded-2xl"
                />
              </div>
            </ClayCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
