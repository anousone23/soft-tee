"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Size = "XS" | "S" | "M" | "L" | "XL";
export const SIZES: Size[] = ["XS", "S", "M", "L", "XL"];

type SizeContextValue = {
  selected: Size | null;
  setSelected: (s: Size | null) => void;
};

const SizeContext = createContext<SizeContextValue | null>(null);

export function SizeProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<Size | null>(null);
  return (
    <SizeContext.Provider value={{ selected, setSelected }}>
      {children}
    </SizeContext.Provider>
  );
}

export function useSize() {
  const ctx = useContext(SizeContext);
  if (!ctx) throw new Error("useSize must be used within SizeProvider");
  return ctx;
}
