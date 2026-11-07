"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Navigation, CalendarCheck } from "lucide-react";
import { clinic } from "@/data/clinic";
import { Container, SectionHeading, CTAButton } from "@/component/common";
import { cn } from "@/lib/utils";

/**
 * Contact strip — address, phone, hours, and embedded map side-by-side.
 */
export function ContactStrip() {
  const fullAddress = `${clinic.address.line1}, ${clinic.address.city}, ${clinic.address.state} ${clinic.address.zip}`;
  const mapsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinic.mapsQuery)}`;

  return (
    <section id="contact" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <Container size="wide">
        <SectionHeading
          eyebrow="Visit us"
          title="Find us on West 6th Street"
          description="Convenient downtown Austin location with validated parking in the building. Walk-ins welcome for emergencies."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex h-full flex-col gap-5">
              {/* Address card */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <MapPin size={20} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-slate-400">
                      Address
                    </h3>
                    <p className="mt-1 font-heading text-base font-bold text-ink">
                      {clinic.address.line1}
                    </p>
                    <p className="text-sm text-slate-600">
                      {clinic.address.line2}, {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
                    </p>
                    <a
                      href={mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                    >
                      <Navigation size={14} />
                      Get directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone + email card */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand text-white">
                    <Phone size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 font-heading text-sm font-bold uppercase tracking-wide text-slate-400">
                    Call us
                  </h3>
                  <a
                    href={clinic.phoneHref}
                    className="mt-1 block font-heading text-lg font-bold text-ink hover:text-brand"
                  >
                    {clinic.phone}
                  </a>
                  <p className="text-xs text-slate-500">Emergency? {clinic.emergencyPhone}</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand text-white">
                    <Mail size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 font-heading text-sm font-bold uppercase tracking-wide text-slate-400">
                    Email
                  </h3>
                  <a
                    href={`mailto:${clinic.email}`}
                    className="mt-1 block break-all font-heading text-sm font-bold text-ink hover:text-brand"
                  >
                    {clinic.email}
                  </a>
                  <p className="text-xs text-slate-500">We reply within a day</p>
                </div>
              </div>

              {/* Hours card */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <Clock size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-slate-400">
                    Opening hours
                  </h3>
                </div>
                <ul className="mt-4 divide-y divide-slate-200">
                  {clinic.hours.map((entry) => {
                    const isToday = new Date().toLocaleDateString("en-US", { weekday: "long" }) === entry.day;
                    return (
                      <li
                        key={entry.day}
                        className={cn(
                          "flex items-center justify-between py-2 text-sm",
                          isToday && "rounded-lg bg-brand-tint px-3 -mx-1",
                        )}
                      >
                        <span className={cn("font-medium", isToday ? "text-brand" : "text-slate-600")}>
                          {entry.day}
                          {isToday ? <span className="ml-2 text-xs font-bold uppercase text-brand">Today</span> : null}
                        </span>
                        <span className={cn("font-semibold", entry.closed ? "text-slate-400" : "text-ink")}>
                          {entry.hours}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <CTAButton as="a" href="#booking" size="lg" variant="primary" className="w-full">
                <CalendarCheck size={20} />
                Book an appointment
              </CTAButton>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative h-full min-h-[24rem] overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <iframe
                title={`Map showing ${clinic.name} at ${fullAddress}`}
                src={clinic.mapsEmbedSrc}
                className="absolute inset-0 size-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
