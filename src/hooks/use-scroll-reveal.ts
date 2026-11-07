"use client";

import { type Variants } from "framer-motion";

/**
 * Shared framer-motion variants for subtle scroll-reveal animations.
 * Usage:
 *   const reveal = useScrollReveal();
 *   <motion.div {...reveal}>...</motion.div>
 *
 * Variants are progressive-enhancement only — content is visible by default
 * if JS is disabled (the parent sets initial opacity via framer-motion).
 */
export function useScrollReveal(delay: number = 0): {
  initial: { opacity: number; y: number };
  whileInView: { opacity: number; y: number };
  viewport: { once: boolean; margin: string };
  transition: { duration: number; delay: number; ease: number[] };
} {
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: {
      duration: 0.55,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  };
}

/**
 * Stagger container for revealing a list of children one after another.
 */
export function useStaggerContainer(stagger: number = 0.08): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: 0.05,
      },
    },
  };
}

/**
 * Child item that fades up inside a stagger container.
 */
export function useStaggerItem(): Variants {
  return {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };
}
