"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/data/services";
import { Container, SectionHeading, ServiceIcon } from "@/component/common";

/**
 * Services — grid of benefit-driven service cards with clean medical icons.
 * Hover state lifts the card and reveals a "Learn more" affordance.
 */
export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <Container size="wide">
        <SectionHeading
          eyebrow="What we do"
          title="Comprehensive dental care, under one roof"
          description="From preventive cleanings to full-mouth reconstruction, every treatment is delivered with the same calm, precise, and genuinely personal approach."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (i % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5"
            >
              {/* Icon */}
              <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-tint text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                <ServiceIcon name={service.icon} size={26} />
              </div>

              <h3 className="mt-5 font-heading text-lg font-bold leading-snug text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="mt-4 space-y-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check size={15} className="mt-0.5 shrink-0 text-brand" strokeWidth={2.5} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Footer: price + link */}
              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                {service.startingPrice ? (
                  <span className="text-xs font-semibold text-slate-400">
                    {service.startingPrice}
                  </span>
                ) : (
                  <span className="text-xs font-semibold text-brand">24/7 available</span>
                )}
                <a
                  href="#booking"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-all group-hover:gap-2"
                  aria-label={`Book ${service.title}`}
                >
                  Book
                  <ArrowRight size={14} strokeWidth={2.5} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-10 text-center text-sm text-slate-400">
          Don&apos;t see what you need?{" "}
          <a href="#contact" className="font-semibold text-brand hover:underline">
            Call us
          </a>{" "}
          — we treat most dental concerns in-house.
        </p>
      </Container>
    </section>
  );
}
