"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Siren,
  Clock,
  MapPin,
  Stethoscope,
  AlertTriangle,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import { clinic } from "@/data/clinic";
import { emergencySteps } from "@/data/stats";
import { Container, CTAButton } from "@/component/common";

const commonEmergencies = [
  {
    title: "Knocked-out tooth",
    action: "Keep the tooth moist in milk or saliva. Call us immediately — reimplantation is possible within 60 minutes.",
  },
  {
    title: "Severe toothache",
    action: "Rinse with warm water, gently floss around the tooth, and take ibuprofen. Call us for a same-day slot.",
  },
  {
    title: "Cracked or broken tooth",
    action: "Rinse your mouth, save any fragments, and apply a cold compress for swelling. Avoid chewing on that side.",
  },
  {
    title: "Lost filling or crown",
    action: "Keep the crown if possible. You can temporarily reseat it with dental cement from a pharmacy — call us to re-cement it properly.",
  },
  {
    title: "Dental abscess / swelling",
    action: "Swelling near a tooth can indicate infection. Rinse with warm salt water and call us right away — infections can spread quickly.",
  },
  {
    title: "Bleeding after extraction",
    action: "Bite firmly on gauze for 30 minutes. If bleeding continues beyond an hour, call our emergency line.",
  },
];

const whatNotToDo = [
  "Don't scrub a knocked-out tooth — handle it by the crown only.",
  "Don't apply aspirin directly to gums — it causes chemical burns.",
  "Don't use superglue to reattach a broken tooth or crown.",
  "Don't ignore facial swelling — it can signal a spreading infection.",
];

/**
 * Emergency / urgent dental care page.
 * Covers what counts as an emergency, step-by-step first aid, and how to reach us.
 */
export default function TransportPage() {
  return (
    <>
      {/* Hero strip */}
      <section className="relative overflow-hidden bg-brand py-16 text-white lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 size-[30rem] rounded-full bg-white/5 blur-3xl"
        />
        <Container size="wide" className="relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/25">
              <Siren size={13} />
              Dental Emergency
            </span>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Dental emergency? We&apos;re here — same day.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
              Toothaches, broken teeth, and lost crowns don&apos;t wait. Call our
              emergency line now and we&apos;ll get you in today.
            </p>

            {/* Emergency call block */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={clinic.emergencyPhoneHref}
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-brand shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand text-white">
                  <Phone size={22} strokeWidth={2} />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Emergency line · 24/7
                  </span>
                  <span className="font-heading text-xl font-extrabold text-ink">
                    {clinic.emergencyPhone}
                  </span>
                </span>
              </a>
              <div className="text-sm text-white/80">
                <p className="font-semibold text-white">Same-day appointments</p>
                <p>Call before noon · seen the same day</p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* What to do steps */}
      <section className="bg-white py-20 lg:py-24">
        <Container size="wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-600 ring-1 ring-red-100">
              <AlertTriangle size={13} />
              First aid
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-ink sm:text-4xl">
              What to do in the first 60 minutes
            </h2>
            <p className="mt-3 text-base text-body">
              Follow these steps, then call us. Quick action can save a knocked-out tooth.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {emergencySteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand text-white font-heading text-lg font-bold">
                  {step.step}
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Common emergencies + what not to do */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Common emergencies */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
                Common dental emergencies
              </h2>
              <p className="mt-2 text-base text-body">
                If you&apos;re unsure whether your situation is urgent, call us —
                we&apos;ll help you decide.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {commonEmergencies.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <div className="flex items-center gap-2">
                      <Stethoscope size={18} className="text-brand" />
                      <h3 className="font-heading text-sm font-bold text-ink">{item.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-body">{item.action}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What not to do */}
            <div>
              <div className="rounded-3xl bg-red-50 p-6 ring-1 ring-red-100">
                <div className="flex items-center gap-2 text-red-600">
                  <AlertTriangle size={20} />
                  <h2 className="font-heading text-lg font-bold">What NOT to do</h2>
                </div>
                <ul className="mt-4 space-y-3">
                  {whatNotToDo.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
                        ✕
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-3xl bg-brand-tint p-6 ring-1 ring-brand/15">
                <ShieldCheck size={24} className="text-brand" />
                <h3 className="mt-3 font-heading text-base font-bold text-ink">
                  We bill insurance for emergencies
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  Most dental emergencies are covered by insurance. We&apos;ll verify
                  your benefits before treatment and explain any out-of-pocket costs.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Location + hours CTA */}
      <section className="bg-white py-20 lg:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Map */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <iframe
                title={`Map to ${clinic.name}`}
                src={clinic.mapsEmbedSrc}
                className="h-full min-h-[20rem] w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center gap-5">
              <div>
                <h2 className="font-heading text-3xl font-bold text-ink">
                  Come straight to us
                </h2>
                <p className="mt-3 text-base text-body">
                  We&apos;re on West 6th Street with validated parking in the building.
                  Tell the front desk it&apos;s an emergency and they&apos;ll take you
                  straight back.
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-ink">Address</p>
                    <p className="text-sm text-body">
                      {clinic.address.line1}, {clinic.address.line2}<br />
                      {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-ink">Emergency line</p>
                    <a href={clinic.emergencyPhoneHref} className="text-sm font-semibold text-brand hover:underline">
                      {clinic.emergencyPhone}
                    </a>
                    <p className="text-xs text-slate-500">Available 24/7 — an after-hours dentist is always on call</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-ink">Emergency hours</p>
                    <p className="text-sm text-body">Mon–Fri: same-day slots reserved</p>
                    <p className="text-sm text-body">Weekends &amp; after hours: call the emergency line</p>
                  </div>
                </li>
              </ul>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <CTAButton as="a" href={clinic.emergencyPhoneHref} size="lg" variant="primary">
                  <Phone size={18} />
                  Call {clinic.emergencyPhone}
                </CTAButton>
                <CTAButton as="a" href="/#booking" size="lg" variant="secondary">
                  Book non-urgent visit
                </CTAButton>
              </div>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-12 border-t border-slate-100 pt-6">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              <ArrowLeft size={16} />
              Back to home
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
