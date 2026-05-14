"use client";

import { ClayChip } from "@/shared/ui/ClayChip";
import { Collapsible } from "@/shared/ui/Collapsible";
import { SIZES, useSize, type Size } from "@/shared/state/SizeContext";
import { AnimatedSection } from "@/shared/ui/AnimatedSection";

const sizingRows: { size: Size; chest: number; length: number; shoulder: number }[] = [
  { size: "XS", chest: 48, length: 66, shoulder: 42 },
  { size: "S", chest: 51, length: 68, shoulder: 45 },
  { size: "M", chest: 54, length: 70, shoulder: 48 },
  { size: "L", chest: 57, length: 72, shoulder: 51 },
  { size: "XL", chest: 60, length: 74, shoulder: 54 },
];

export function SizeFit() {
  const { selected, setSelected } = useSize();

  return (
    <section aria-labelledby="size-heading" className="bg-clay-cream">
      <AnimatedSection className="mx-auto max-w-[1200px] px-5 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <span className="inline-block rounded-full border-[2px] border-clay-ink bg-clay-lilac px-4 py-1 text-xs font-bold tracking-widest text-clay-ink">
              SIZE &amp; FIT
            </span>
            <h2
              id="size-heading"
              className="mt-4 font-display text-4xl font-bold leading-tight text-clay-ink lg:text-5xl"
            >
              find your fit.
            </h2>
            <p className="mt-4 max-w-md text-lg text-clay-ink-soft">
              Boxy through the body, slightly cropped, true to size. If you&apos;re between sizes, size down for a cropped look or up for relaxed.
            </p>

            <div className="mt-8">
              <p className="text-sm font-bold text-clay-ink">pick a size</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {SIZES.map((s) => (
                  <ClayChip
                    key={s}
                    selected={selected === s}
                    onClick={() => setSelected(selected === s ? null : s)}
                  >
                    {s}
                  </ClayChip>
                ))}
              </div>
              {selected && (
                <p className="mt-3 text-sm text-clay-ink-soft">
                  ↓ {selected} carries over to checkout below.
                </p>
              )}
            </div>
          </div>

          <Collapsible
            className="rounded-[20px] border-[3px] border-clay-ink bg-clay-paper clay-shadow overflow-hidden"
            summaryClassName="p-6 text-xl"
            panelClassName="border-t-[3px] border-clay-ink p-6"
            summary="size chart (cm)"
          >
            <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-clay-ink text-clay-ink">
                  <th className="py-2 pr-3 font-bold">size</th>
                  <th className="py-2 pr-3 font-bold">chest</th>
                  <th className="py-2 pr-3 font-bold">length</th>
                  <th className="py-2 font-bold">shoulder</th>
                </tr>
              </thead>
              <tbody>
                {sizingRows.map((r) => (
                  <tr
                    key={r.size}
                    className="border-b border-clay-ink/15 last:border-0 text-clay-ink-soft"
                  >
                    <td className="py-2 pr-3 font-bold text-clay-ink">{r.size}</td>
                    <td className="py-2 pr-3 tabular-nums">{r.chest}</td>
                    <td className="py-2 pr-3 tabular-nums">{r.length}</td>
                    <td className="py-2 tabular-nums">{r.shoulder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </Collapsible>
        </div>
      </AnimatedSection>
    </section>
  );
}
