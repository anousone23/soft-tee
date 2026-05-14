"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCart } from "@/features/cart/store/CartContext";
import { TeeGlyph } from "@/shared/icons";

export function FlyToCart() {
  const { pendingFly, completeFly } = useCart();

  return (
    <AnimatePresence>
      {pendingFly && (
        <motion.div
          key={`fly-${pendingFly.from.x}-${pendingFly.from.y}`}
          initial={{
            position: "fixed",
            top: pendingFly.from.y,
            left: pendingFly.from.x,
            x: "-50%",
            y: "-50%",
            scale: 1,
            opacity: 1,
            zIndex: 50,
            pointerEvents: "none",
          }}
          animate={{
            top: [pendingFly.from.y, pendingFly.from.y - 80, pendingFly.to.y],
            left: [pendingFly.from.x, (pendingFly.from.x + pendingFly.to.x) / 2, pendingFly.to.x],
            scale: [1, 0.85, 0.55],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
            times: [0, 0.55, 1],
            opacity: { duration: 0.75, times: [0, 0.85, 1], ease: "easeOut" },
          }}
          onAnimationComplete={() => completeFly()}
          aria-hidden="true"
        >
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border-[2px] border-clay-ink bg-clay-mint clay-shadow-sm">
            <TeeGlyph className="h-6 w-6 text-clay-ink" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
