"use client";

import { motion } from "motion/react";
import { ClayCard } from "@/shared/ui/ClayCard";
import { makeStagger } from "@/shared/animation/variants";
import { WeightIcon, StitchIcon, ShrinkIcon } from "@/shared/icons";
import type { ReactNode } from "react";

const features = [
  {
    icon: <WeightIcon className="h-8 w-8" />,
    tone: "mint" as const,
    label: "240 GSM",
    title: "Heavyweight cotton",
    body: "Drapes, doesn't cling. The kind of weight that gets better the more you wash it.",
  },
  {
    icon: <StitchIcon className="h-8 w-8" />,
    tone: "butter" as const,
    label: "DOUBLE-STITCHED",
    title: "Built to last",
    body: "Side-seamed body, double-stitched hems, and a ribbed collar that holds its shape.",
  },
  {
    icon: <ShrinkIcon className="h-8 w-8" />,
    tone: "lilac" as const,
    label: "PRE-SHRUNK",
    title: "Stays your size",
    body: "Wash it cold a hundred times — it'll still be the size you bought.",
  },
];

const { container, item } = makeStagger({ y: 32, stagger: 0.18, delay: 0.05, duration: 0.55 });

export function Material() {
  return (
    <section aria-labelledby="material-heading" className="bg-clay-cream">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="mx-auto max-w-[1200px] px-5 py-16 lg:px-10 lg:py-24"
      >
        <motion.div variants={item} className="max-w-2xl">
          <span className="inline-block rounded-full border-[2px] border-clay-ink bg-clay-pink px-4 py-1 text-xs font-bold tracking-widest text-clay-ink">
            WHAT IT&apos;S MADE OF
          </span>
          <h2
            id="material-heading"
            className="mt-4 font-display text-4xl font-bold leading-tight text-clay-ink lg:text-5xl"
          >
            the good-stuff list.
          </h2>
          <p className="mt-3 text-lg text-clay-ink-soft">
            Three things that make a t-shirt last past one season.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {features.map((f) => (
            <motion.div key={f.label} variants={item}>
              <FeatureCard {...f} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function FeatureCard({
  icon,
  tone,
  label,
  title,
  body,
}: {
  icon: ReactNode;
  tone: "mint" | "butter" | "lilac";
  label: string;
  title: string;
  body: string;
}) {
  return (
    <ClayCard tone={tone} size="lg" hover>
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border-[2px] border-clay-ink bg-clay-paper clay-shadow-sm">
        {icon}
      </div>
      <p className="mt-5 text-xs font-bold tracking-widest text-clay-ink">{label}</p>
      <h3 className="mt-2 font-display text-2xl font-bold text-clay-ink">{title}</h3>
      <p className="mt-3 text-clay-ink-soft">{body}</p>
    </ClayCard>
  );
}
