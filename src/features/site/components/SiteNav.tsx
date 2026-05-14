"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useCart } from "@/features/cart/store/CartContext";
import { BagIcon } from "@/shared/icons";

export function SiteNav() {
  const { count, bumpTick, setBadgeRect } = useCart();
  const badgeRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = badgeRef.current;
        if (!el) return setBadgeRect(null);
        const rect = el.getBoundingClientRect();
        setBadgeRect({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      cancelAnimationFrame(frame);
      setBadgeRect(null);
    };
  }, [setBadgeRect]);

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-clay-ink bg-clay-butter">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 lg:px-10">
        <a
          href="#top"
          aria-label="soft. — home"
          className="inline-flex items-center"
        >
          <Image
            src="/wordmark.png"
            alt="soft."
            width={1024}
            height={434}
            priority
            className="h-9 w-auto"
          />
        </a>

        <button
          type="button"
          aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
          aria-live="polite"
          aria-atomic="true"
          className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border-[2px] border-clay-ink bg-clay-paper clay-shadow-sm transition-transform duration-150 ease-out active:translate-x-0.5 active:translate-y-0.5 active:clay-shadow-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-clay-mint focus-visible:ring-offset-2 focus-visible:ring-offset-clay-butter cursor-pointer"
        >
          <BagIcon className="h-5 w-5" />
          <motion.span
            ref={badgeRef}
            key={bumpTick}
            animate={bumpTick > 0 ? { scale: [1, 1.4, 1] } : undefined}
            transition={{ duration: 0.28, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-clay-pink px-1 text-xs font-bold text-clay-ink border-[2px] border-clay-ink"
            aria-hidden="true"
          >
            {count}
          </motion.span>
        </button>
      </div>
    </header>
  );
}
