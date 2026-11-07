"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Award, Sparkles } from "lucide-react";
import { trustBadges, insurancePartners } from "@/data/clinic";
import { Container } from "@/component/common";

const badgeIcons = [ShieldCheck, BadgeCheck, Award, Sparkles];

/**
 * Trust bar — accreditations + accepted insurance partners.
 * Sits directly under the hero to establish credibility before the pitch.
 */
export function TrustBar() {
  return (
    <section aria-label="Accreditations and insurance partners" className="border-b border-slate-200/70 bg-white py-10">
      <Container size="wide">
        {/* Accreditations */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {trustBadges.map((badge, i) => {
            const Icon = badgeIcons[i % badgeIcons.length];
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <p className="truncate font-heading text-sm font-bold text-ink">{badge.label}</p>
                  <p className="truncate text-xs text-slate-500">{badge.note}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Insurance partners */}
        <div className="mt-8 flex flex-col items-center gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:gap-6">
          <p className="shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-400">
            In-network with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:justify-start">
            {insurancePartners.map((partner) => (
              <span
                key={partner}
                className="font-heading text-sm font-bold text-slate-400 transition-colors hover:text-slate-600 sm:text-base"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
