"use client";

import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import { team } from "@/data/team";
import { Container, SectionHeading } from "@/component/common";

/**
 * Team — doctor portraits with name, specialty, credentials, and highlights.
 */
export function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <Container size="wide">
        <SectionHeading
          eyebrow="Meet your dentists"
          title="Specialists who actually listen"
          description="Our doctors bring together cosmetic, surgical, orthodontic, and pediatric expertise — so you rarely need a referral elsewhere."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {team.map((doctor, i) => (
            <motion.article
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (i % 4) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5"
            >
              {/* Portrait */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <img
                  src={doctor.image}
                  alt={doctor.imageAlt}
                  loading="lazy"
                  width={400}
                  height={500}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/5 to-transparent" aria-hidden />
                {/* Specialty chip on image */}
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand shadow-sm backdrop-blur">
                  {doctor.specialty}
                </span>
                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-heading text-lg font-bold leading-tight text-white">
                    {doctor.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-white/80">
                    {doctor.credentials}
                  </p>
                </div>
              </div>

              {/* Bio + highlights */}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm leading-relaxed text-body">{doctor.bio}</p>
                <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
                  {doctor.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 size={14} className="shrink-0 text-brand" strokeWidth={2.25} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Credentials footer */}
        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-slate-500">
          <GraduationCap size={18} className="text-brand" />
          All dentists are licensed by the Texas State Board of Dental Examiners.
        </div>
      </Container>
    </section>
  );
}
