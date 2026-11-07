"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Container, SectionHeading, StarRating } from "@/component/common";

/**
 * Testimonials — 3 real-style patient reviews with names, ratings, and treatment tags.
 */
export function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-slate-50 py-20 lg:py-28">
      <Container size="wide">
        <SectionHeading
          eyebrow="Patient stories"
          title="Trusted by 12,000+ Austin smiles"
          description="Real reviews from real patients. Every one verified through Google, Healthgrades, or our private post-visit survey."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex flex-col rounded-3xl bg-white p-7 ring-1 ring-slate-200/70"
            >
              {/* Quote mark */}
              <Quote
                size={40}
                className="text-brand-tint"
                fill="currentColor"
                strokeWidth={0}
                aria-hidden
              />

              {/* Rating */}
              <div className="mt-3 flex items-center gap-2">
                <StarRating rating={t.rating} size={16} />
                <span className="text-xs font-medium text-slate-400">{t.date}</span>
              </div>

              {/* Quote */}
              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <div className="flex size-11 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-heading text-sm font-bold text-ink">{t.name}</div>
                  <div className="text-xs text-slate-500">
                    {t.treatment} · {t.location}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Review summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-sm text-slate-500"
        >
          <span className="flex items-center gap-2">
            <StarRating rating={4.9} size={16} />
            <strong className="font-bold text-ink">4.9</strong> on Google
          </span>
          <span className="hidden h-4 w-px bg-slate-300 sm:block" aria-hidden />
          <span>
            <strong className="font-bold text-ink">487</strong> verified reviews
          </span>
          <span className="hidden h-4 w-px bg-slate-300 sm:block" aria-hidden />
          <span>
            <strong className="font-bold text-ink">98%</strong> would recommend
          </span>
        </motion.div>
      </Container>
    </section>
  );
}
