"use client";

import { Collapsible } from "@/shared/ui/Collapsible";
import { AnimatedSection } from "@/shared/ui/AnimatedSection";

const items = [
  {
    q: "How do I wash it?",
    a: "Cold machine wash, inside-out. Hang dry or tumble low. Skip the bleach — your future self will thank you.",
  },
  {
    q: "When does it ship?",
    a: "Orders ship from Bangkok within 2 business days. Standard delivery is 2–4 days domestic, 7–10 days international.",
  },
  {
    q: "Can I return it?",
    a: "Yes — free returns within 30 days of delivery. Tee just needs to be unworn and unwashed. Send it back, we refund within 5 business days.",
  },
  {
    q: "How do I pick a size?",
    a: "We run boxy and a touch cropped. Pick your usual size for true fit. Between sizes? Size down for cropped, up for relaxed.",
  },
];

export function FAQ() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-clay-paper border-t-[3px] border-clay-ink"
    >
      <AnimatedSection className="mx-auto max-w-[1200px] px-5 py-16 lg:px-10 lg:py-24">
        <h2
          id="faq-heading"
          className="font-display text-4xl font-bold text-clay-ink lg:text-5xl"
        >
          care &amp; questions.
        </h2>

        <div className="mt-10 flex flex-col gap-4">
          {items.map((item) => (
            <Collapsible
              key={item.q}
              className="rounded-[20px] border-[3px] border-clay-ink bg-clay-cream clay-shadow overflow-hidden"
              summaryClassName="p-5 text-lg lg:p-6 lg:text-xl"
              panelClassName="border-t-[3px] border-clay-ink p-5 text-clay-ink-soft lg:p-6"
              summary={item.q}
            >
              {item.a}
            </Collapsible>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
