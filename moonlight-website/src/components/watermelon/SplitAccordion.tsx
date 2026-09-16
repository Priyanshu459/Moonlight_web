"use client";

// Adapted from Watermelon UI card-split-accordian (MIT).
// Retains its separated active card, neighbour corners and spring transitions.
import { useId, useState, type ReactNode } from "react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function SplitAccordion({ items }: { items: { id: string; title: string; content: string; icon?: ReactNode }[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const group = useId();
  const reduced = useReducedMotion();
  const openIndex = items.findIndex(item => item.id === openId);
  return <MotionConfig transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 600, damping: 50, mass: 1 }}>
    <ul className="wm-accordion">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        const isFirst = index === 0;
        const isLast = index === items.length - 1;
        const isBeforeOpen = index === openIndex - 1;
        const isAfterOpen = index === openIndex + 1;
        const top = isOpen || isFirst || isAfterOpen;
        const bottom = isOpen || isLast || isBeforeOpen;
        return <motion.li layout={!reduced} key={item.id}>
          <motion.div className="wm-accordion-card" animate={{ borderTopLeftRadius: top ? 18 : 0, borderTopRightRadius: top ? 18 : 0, borderBottomLeftRadius: bottom ? 18 : 0, borderBottomRightRadius: bottom ? 18 : 0, marginTop: isOpen ? 12 : 0, marginBottom: isOpen ? 12 : 0 }}>
            <h3><button type="button" id={group+item.id+"-button"} aria-expanded={isOpen} aria-controls={group+item.id} onClick={() => setOpenId(isOpen ? null : item.id)}><span className="wm-accordion-title">{item.icon}{item.title}</span><motion.span animate={{ rotate: isOpen ? 180 : 0 }}><ChevronDown size={18} aria-hidden="true" /></motion.span></button></h3>
            <motion.div id={group+item.id} role="region" aria-labelledby={group+item.id+"-button"} aria-hidden={!isOpen} initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} className="wm-accordion-content"><p>{item.content}</p></motion.div>
          </motion.div>
        </motion.li>;
      })}
    </ul>
  </MotionConfig>;
}
