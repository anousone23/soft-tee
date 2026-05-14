"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ClayButton } from "@/shared/ui/ClayButton";
import { ClayChip } from "@/shared/ui/ClayChip";
import { AnimatedSection } from "@/shared/ui/AnimatedSection";
import { CheckIcon, MinusIcon, PlusIcon } from "@/shared/icons";
import { SIZES, useSize } from "@/shared/state/SizeContext";
import { useCart } from "@/features/cart/store/CartContext";

const MAX_QTY = 9;

export function BuyBlock() {
  const { selected, setSelected } = useSize();
  const { requestFly } = useCart();

  const [qty, setQty] = useState(1);
  const [wobbleSignal, setWobbleSignal] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Track the success-toast timer so it's cleared on unmount or repeated clicks.
  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    return () => {
      if (successTimerRef.current) clearTimeout(successTimerRef.current);
    };
  }, []);

  const handleAdd = (e: MouseEvent<HTMLButtonElement>) => {
    if (!selected) {
      setError("pick a size first");
      setWobbleSignal((s) => s + 1);
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const from = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
    setError(null);
    setSuccess(true);
    requestFly({ from, qty });
    if (successTimerRef.current) clearTimeout(successTimerRef.current);
    successTimerRef.current = setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <section id="buy" aria-labelledby="buy-heading" className="bg-clay-cream">
      <AnimatedSection className="mx-auto max-w-[1200px] px-5 py-16 lg:px-10 lg:py-24">
        <div className="rounded-[28px] border-[3px] border-clay-ink bg-clay-pink p-6 clay-shadow-lg lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2
                id="buy-heading"
                className="font-display text-4xl font-bold text-clay-ink lg:text-5xl"
              >
                take it home.
              </h2>
              <p className="mt-3 max-w-md text-lg text-clay-ink-soft">
                Ships in 2–3 days. Free returns within 30.
              </p>

              <div className="mt-6">
                <p className="text-sm font-bold text-clay-ink">size</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {SIZES.map((s) => (
                    <ClayChip
                      key={s}
                      selected={selected === s}
                      wobbleSignal={!selected ? wobbleSignal : 0}
                      ringOffsetClassName="focus-visible:ring-offset-clay-pink"
                      onClick={() => {
                        setSelected(selected === s ? null : s);
                        setError(null);
                      }}
                    >
                      {s}
                    </ClayChip>
                  ))}
                </div>
                <p
                  className="mt-3 text-sm font-bold text-clay-ink min-h-5"
                  role="status"
                  aria-live="polite"
                >
                  {error}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-stretch gap-4 lg:items-end">
              <span className="font-display text-4xl font-bold text-clay-ink lg:text-5xl">
                ฿890
              </span>

              <div className="inline-flex items-center gap-2 self-start rounded-full border-[2px] border-clay-ink bg-clay-paper p-1 lg:self-end">
                <StepperButton
                  ariaLabel="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  disabled={qty <= 1}
                >
                  <MinusIcon className="h-4 w-4" />
                </StepperButton>
                <span
                  className="min-w-6 text-center font-bold tabular-nums text-clay-ink"
                  role="status"
                  aria-live="polite"
                >
                  {qty}
                </span>
                <StepperButton
                  ariaLabel="Increase quantity"
                  onClick={() => setQty((q) => Math.min(MAX_QTY, q + 1))}
                  disabled={qty >= MAX_QTY}
                >
                  <PlusIcon className="h-4 w-4" />
                </StepperButton>
              </div>

              {qty >= MAX_QTY && (
                <p className="text-xs text-clay-ink-soft">max {MAX_QTY} per order</p>
              )}

              <ClayButton
                size="lg"
                variant={success ? "secondary" : "primary"}
                onClick={handleAdd}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {success ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className="inline-flex items-center gap-2"
                    >
                      <CheckIcon className="h-5 w-5" /> added — bag updated
                    </motion.span>
                  ) : (
                    <motion.span
                      key="default"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                    >
                      add to bag →
                    </motion.span>
                  )}
                </AnimatePresence>
              </ClayButton>
              {/* Visually hidden live region that mirrors the button's current state for SR users. */}
              <span className="sr-only" role="status" aria-live="polite">
                {success ? "added to bag" : ""}
              </span>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

function StepperButton({
  ariaLabel,
  onClick,
  disabled,
  children,
}: {
  ariaLabel: string;
  onClick: () => void;
  disabled: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-clay-ink hover:bg-clay-butter focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-clay-mint cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
