"use client";

// Adapted from Watermelon UI continuous-tabs (MIT). See THIRD_PARTY_NOTICES.md.
import { useId } from "react";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";

export function ContinuousTabs({ tabs, value, onChange, label }: {
  tabs: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
  label: string;
}) {
  const group = useId();
  const reduced = useReducedMotion();
  return (
    <LayoutGroup id={group}>
      <div className="wm-tabs" role="group" aria-label={label}>
        {tabs.map(tab => {
          const active = value === tab.id;
          return <button type="button" key={tab.id} onClick={() => onChange(tab.id)} aria-pressed={active}>
            {active && <motion.span className="wm-tab-pill" layoutId="active-pill" transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 30, mass: 0.9 }} />}
            <span className="wm-tab-label">{tab.label}</span>
          </button>;
        })}
      </div>
    </LayoutGroup>
  );
}
