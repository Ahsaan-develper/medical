"use client";

import { motion } from "framer-motion";
import { Clock, ScanLine, Wallet } from "lucide-react";
import { stats, differentiators } from "@/data/stats";
import { Container, SectionHeading } from "@/component/common";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  clock: Clock,
  scan: ScanLine,
  wallet: Wallet,
  heart: Clock,
  leaf: Clock,
  shield: Clock,
};

/**
 * Why Choose Us — 3 real differentiators + a stats strip.
 * The stats strip uses the brand-tint background to visually separate it.
 */
export function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-brand-tint py-20 lg:py-28">
      <Container size="wide">
        <SectionHeading
          eyebrow="Why Lumière"
          title="The difference is in the details"
          description="Three things our patients tell us matter most — and that we've built the practice around."
        />

        {/* Differentiators */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {differentiators.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Clock;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden rounded-3xl bg-white p-7 ring-1 ring-slate-200/60"
              >
                {/* Numbered watermark */}
                <span className="absolute -right-2 -top-4 font-heading text-7xl font-extrabold text-brand-tint" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-brand text-white shadow-sm shadow-brand/30">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold leading-snug text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-body">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-slate-200/70 ring-1 ring-slate-200 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 text-center sm:p-8">
              <div className="font-heading text-4xl font-extrabold text-brand sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 font-heading text-sm font-bold uppercase tracking-wide text-ink">
                {stat.label}
              </div>
              {stat.sublabel ? (
                <div className="mt-1 text-xs text-slate-500">{stat.sublabel}</div>
              ) : null}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
