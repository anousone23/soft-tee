import { Marquee } from "@/shared/ui/Marquee";
import { Fragment } from "react";

const items = [
  "240 GSM",
  "COMBED COTTON",
  "PRE-SHRUNK",
  "MADE IN BANGKOK",
];

// Repeat the [items + trailing gap] block so a single "copy" extends well past
// any viewport. The Marquee primitive duplicates children for the seamless loop;
// with REPS copies of the items inside each child, the result reads as a single
// continuous conveyor — each set drifts in from the right rather than appearing
// already in place.
const REPS = 3;

export function MaterialMarquee() {
  return (
    <section className="border-y-[3px] border-clay-ink bg-clay-butter">
      <Marquee duration={60} className="py-4">
        {Array.from({ length: REPS }).map((_, repIdx) => (
          <Fragment key={repIdx}>
            {items.map((item, i) => (
              <span
                key={`${repIdx}-${item}-${i}`}
                className="font-display text-base font-bold uppercase tracking-widest text-clay-ink whitespace-nowrap"
              >
                {item}
                <span aria-hidden="true" className="mx-6 text-clay-ink/40">
                  ·
                </span>
              </span>
            ))}
            <span
              aria-hidden="true"
              className="inline-block w-[16rem] lg:w-[28rem]"
            />
          </Fragment>
        ))}
      </Marquee>
    </section>
  );
}
