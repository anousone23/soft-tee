import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

export function BagIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 8h12l-1 12H7L6 8z" />
      <path d="M9 8a3 3 0 1 1 6 0" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export function ChevronIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l2.6 5.7 6.4.7-4.8 4.3 1.4 6.3L12 17l-5.6 3 1.4-6.3L3 9.4l6.4-.7L12 3z" />
    </svg>
  );
}

export function SquiggleIcon(props: IconProps) {
  return (
    <svg {...base} {...props} viewBox="0 0 48 24" width={48} height={24}>
      <path d="M2 12 Q 8 2 14 12 T 26 12 T 38 12 T 46 12" />
    </svg>
  );
}

export function WeightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 8h14l-1.5 12h-11L5 8z" />
      <path d="M9 8V6a3 3 0 1 1 6 0v2" />
      <path d="M9 13h6" />
    </svg>
  );
}

export function StitchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h16" strokeDasharray="3 2" />
      <path d="M4 12h16" strokeDasharray="3 2" />
      <path d="M4 16h16" strokeDasharray="3 2" />
    </svg>
  );
}

export function ShrinkIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 9 V3 H9" />
      <path d="M21 9 V3 H15" />
      <path d="M3 15 V21 H9" />
      <path d="M21 15 V21 H15" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function MinusIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function TeeGlyph(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 5.5 Q6 3.5 8 3.5 L9.5 3.5 Q10.5 5.5 12 5.5 Q13.5 5.5 14.5 3.5 L16 3.5 Q18 3.5 18 5.5 L20 7.5 L17 9 L17 19.5 Q17 20.5 16 20.5 L8 20.5 Q7 20.5 7 19.5 L7 9 L4 7.5 Z" fill="var(--clay-paper)" />
    </svg>
  );
}
