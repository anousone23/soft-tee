"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState, type ReactNode } from "react";
import { ChevronIcon } from "@/shared/icons";

type CollapsibleProps = {
  summary: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  summaryClassName?: string;
  panelClassName?: string;
  children: ReactNode;
};

export function Collapsible({
  summary,
  defaultOpen = false,
  className = "",
  summaryClassName = "",
  panelClassName = "",
  children,
}: CollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className={className}>
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className={[
          "flex w-full cursor-pointer items-center justify-between gap-4 font-display font-bold text-clay-ink",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-clay-mint focus-visible:ring-inset",
          summaryClassName,
        ].join(" ")}
      >
        <span className="flex-1 text-left">{summary}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="inline-flex shrink-0"
          aria-hidden="true"
        >
          <ChevronIcon className="h-5 w-5 lg:h-6 lg:w-6" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.22, ease: open ? "easeOut" : "easeIn" },
              opacity: { duration: 0.18 },
            }}
            className="overflow-hidden"
          >
            <div className={panelClassName}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
