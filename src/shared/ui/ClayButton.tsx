"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "md" | "lg";

type ClayButtonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantMap: Record<Variant, string> = {
  primary: "bg-clay-mint text-clay-ink border-clay-ink",
  secondary: "bg-clay-butter text-clay-ink border-clay-ink",
  ghost: "bg-clay-paper text-clay-ink border-clay-ink",
  danger: "bg-clay-pink text-clay-ink border-clay-ink",
};

const sizeMap: Record<Size, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

export function ClayButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ClayButtonProps) {
  return (
    <button
      type="button"
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full font-bold",
        "border-[3px] clay-shadow",
        "transition-[transform,box-shadow] duration-150 ease-out",
        "hover:-translate-y-0.5 hover:clay-shadow-lg",
        "active:translate-x-1 active:translate-y-1 active:clay-shadow-none",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-clay-mint focus-visible:ring-offset-2 focus-visible:ring-offset-clay-cream",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-x-0 disabled:active:translate-y-0",
        "cursor-pointer",
        variantMap[variant],
        sizeMap[size],
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}
