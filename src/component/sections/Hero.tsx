"use client";

import { motion } from "framer-motion";
import { Phone, CalendarCheck, Star, Users, Award, ShieldCheck } from "lucide-react";
import { clinic } from "@/data/clinic";
import { CTAButton, StarRating } from "@/component/common";

const trustItems = [
  { icon: Star, label: `${clinic.rating}★ rating`, sub: `${clinic.reviewCount} reviews` },
  { icon: Users, label: `${clinic.patientsServed} patients`, sub: "since 2007" },
  { icon: Award, label: `${clinic.yearsInPractice} years`, sub: "family-owned" },
];

/**
 * Hero — realistic clinic photography, benefit-driven headline, dual CTA, trust line.
 */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-tint">
      {/* soft decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 size-[32rem] rounded-full bg-brand/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 size-[28rem] rounded-full bg-emerald-200/30 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-brand ring-1 ring-brand/15 shadow-sm">
            <span className="flex size-1.5 rounded-full bg-emerald-500" aria-hidden />
            Now accepting new patients · Same-day emergencies
          </span>

          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
            Gentle, modern dentistry in the heart of{" "}
            <span className="text-brand">Austin</span>.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">
            From routine cleanings to full-mouth implants, Lumière Dental Studio pairs
            advanced 3D technology with genuinely compassionate care — so every visit
            feels calm, clear, and on your schedule.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <CTAButton as="a" href="#booking" size="lg" variant="primary">
              <CalendarCheck size={20} />
              Book Appointment
            </CTAButton>
            <CTAButton as="a" href={clinic.phoneHref} size="lg" variant="secondary">
              <Phone size={18} />
              {clinic.phone}
            </CTAButton>
          </div>

          {/* Trust line */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200/70 pt-6">
            <div className="flex items-center gap-2">
              <StarRating rating={clinic.rating} size={18} />
              <span className="text-sm font-semibold text-ink">
                {clinic.rating}
              </span>
              <span className="text-sm text-slate-500">/ 5</span>
            </div>
            <div className="hidden h-5 w-px bg-slate-200 sm:block" aria-hidden />
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <item.icon size={16} className="text-brand" strokeWidth={2} />
                <span className="text-sm">
                  <span className="font-semibold text-ink">{item.label}</span>{" "}
                  <span className="text-slate-500">· {item.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-brand/10 ring-1 ring-slate-200/60">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
              alt="Dentist consulting with a smiling patient in a bright, modern treatment room at Lumière Dental Studio"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              loading="eager"
              width={1000}
              height={1250}
            />
            {/* gradient scrim for text legibility on the floating card */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" aria-hidden />
          </div>

          {/* Floating rating card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="absolute -bottom-5 -left-3 hidden w-60 rounded-2xl bg-white p-4 shadow-lg ring-1 ring-slate-200/70 sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                <Star size={22} fill="currentColor" strokeWidth={0} />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-2xl font-bold text-ink">{clinic.rating}</span>
                  <span className="text-xs text-slate-500">/ 5.0</span>
                </div>
                <p className="text-xs text-slate-500">{clinic.reviewCount} verified reviews</p>
              </div>
            </div>
          </motion.div>

          {/* Floating accreditation chip */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="absolute -right-2 top-6 hidden items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-brand shadow-md ring-1 ring-slate-200/70 backdrop-blur sm:flex"
          >
            <ShieldCheck size={15} />
            ADA · TSBDE Licensed
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
