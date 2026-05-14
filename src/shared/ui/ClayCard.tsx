import type { HTMLAttributes, ReactNode } from "react";

type Tone = "cream" | "paper" | "peach" | "mint" | "butter" | "lilac" | "pink" | "ink";
type Size = "sm" | "md" | "lg";

type ClayCardProps = {
  tone?: Tone;
  size?: Size;
  hover?: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const toneMap: Record<Tone, string> = {
  cream: "bg-clay-cream",
  paper: "bg-clay-paper",
  peach: "bg-clay-peach",
  mint: "bg-clay-mint",
  butter: "bg-clay-butter",
  lilac: "bg-clay-lilac",
  pink: "bg-clay-pink",
  ink: "bg-clay-ink text-clay-cream",
};

const sizeMap: Record<Size, string> = {
  sm: "rounded-2xl border-[2px] clay-shadow-sm p-4",
  md: "rounded-[20px] border-[3px] clay-shadow p-6 lg:p-8",
  lg: "rounded-[28px] border-[3px] clay-shadow-lg p-6 lg:p-10",
};

export function ClayCard({
  tone = "paper",
  size = "md",
  hover = false,
  className = "",
  children,
  ...rest
}: ClayCardProps) {
  const hoverCls = hover
    ? "transition-all duration-200 ease-out hover:-translate-y-1 hover:clay-shadow-lg"
    : "";
  return (
    <div
      className={`border-clay-ink ${toneMap[tone]} ${sizeMap[size]} ${hoverCls} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
