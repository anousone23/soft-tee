"use client";

import type { ReactNode } from "react";
import { SizeProvider } from "@/shared/state/SizeContext";
import { CartProvider } from "@/features/cart/store/CartContext";
import { FlyToCart } from "@/features/cart/components/FlyToCart";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <SizeProvider>
        {children}
        <FlyToCart />
      </SizeProvider>
    </CartProvider>
  );
}
