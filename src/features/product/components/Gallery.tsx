"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ClayCard } from "@/shared/ui/ClayCard";
import { makeStagger } from "@/shared/animation/variants";

const shots = [
  { src: "/tee-1.png", alt: "Flat lay of a plain cream cotton t-shirt." },
  { src: "/tee-2.png", alt: "Cream cotton t-shirt hanging on a clean wall." },
  { src: "/tee-3.png", alt: "Wearing the soft. t-shirt." },
  { src: "/tee-4.png", alt: "Close-up of the 240gsm cotton fabric weave." },
];

const { container, item } = makeStagger({ y: 28, stagger: 0.12, delay: 0.05, duration: 0.5 });

export function Gallery() {
  return (
    <section
      aria-labelledby="gallery-heading"
      className="bg-clay-paper border-y-[3px] border-clay-ink"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="mx-auto max-w-[1200px] px-5 py-16 lg:px-10 lg:py-24"
      >
        <motion.h2
          variants={item}
          id="gallery-heading"
          className="font-display text-4xl font-bold leading-tight text-clay-ink lg:text-5xl"
        >
          look at the thing.
        </motion.h2>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {shots.map((s) => (
            <motion.div key={s.src} variants={item}>
              <ClayCard
                tone="paper"
                size="md"
                hover
                className="overflow-hidden !p-0"
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={800}
                  height={800}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="aspect-square h-auto w-full object-cover"
                />
              </ClayCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
