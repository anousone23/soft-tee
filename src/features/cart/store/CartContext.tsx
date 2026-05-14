"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useReducedMotion } from "motion/react";

export type FlyPoint = { x: number; y: number };

type PendingFly = { from: FlyPoint; to: FlyPoint; qty: number };

type CartContextValue = {
  count: number;
  bumpTick: number;
  pendingFly: PendingFly | null;
  add: (qty: number) => void;
  requestFly: (input: { from: FlyPoint; qty: number }) => void;
  completeFly: () => void;
  setBadgeRect: (rect: FlyPoint | null) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  const [bumpTick, setBumpTick] = useState(0);
  const [pendingFly, setPendingFly] = useState<PendingFly | null>(null);
  const badgeRectRef = useRef<FlyPoint | null>(null);
  const reduced = useReducedMotion();

  const add = useCallback((qty: number) => {
    setCount((c) => c + qty);
    setBumpTick((t) => t + 1);
  }, []);

  const requestFly = useCallback(
    ({ from, qty }: { from: FlyPoint; qty: number }) => {
      if (reduced || !badgeRectRef.current) {
        // No animation: increment immediately.
        setCount((c) => c + qty);
        setBumpTick((t) => t + 1);
        return;
      }
      const to = badgeRectRef.current;
      // If a fly is already in flight, fold this qty into it rather than
      // dropping the existing one. Cheaper than queuing and matches what a
      // user double-clicking the add button intends ("I want N more").
      setPendingFly((current) =>
        current
          ? { from: current.from, to: current.to, qty: current.qty + qty }
          : { from, to, qty },
      );
    },
    [reduced],
  );

  const completeFly = useCallback(() => {
    if (!pendingFly) return;
    const qty = pendingFly.qty;
    setCount((c) => c + qty);
    setBumpTick((t) => t + 1);
    setPendingFly(null);
  }, [pendingFly]);

  const setBadgeRect = useCallback((rect: FlyPoint | null) => {
    badgeRectRef.current = rect;
  }, []);

  return (
    <CartContext.Provider
      value={{
        count,
        bumpTick,
        pendingFly,
        add,
        requestFly,
        completeFly,
        setBadgeRect,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
