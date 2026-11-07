import { Phone, Mail, MapPin, Clock, ShieldCheck, ExternalLink } from "lucide-react";
import { clinic } from "@/data/clinic";
import { BrandLogo } from "@/component/common";

const footerNav = [
  {
    title: "Services",
    links: [
      { label: "General Dentistry", href: "#services" },
      { label: "Cosmetic Dentistry", href: "#services" },
      { label: "Dental Implants", href: "#services" },
      { label: "Invisalign", href: "#services" },
      { label: "Emergency Care", href: "/transport" },
    ],
  },
  {
    title: "Practice",
    links: [
      { label: "Why Choose Us", href: "#why-us" },
      { label: "Meet the Team", href: "#team" },
      { label: "Patient Reviews", href: "#reviews" },
      { label: "Book Appointment", href: "#booking" },
      { label: "Contact & Hours", href: "#contact" },
    ],
  },
  {
    title: "Patients",
    links: [
      { label: "New Patient Forms", href: "#booking" },
      { label: "Insurance & Financing", href: "#why-us" },
      { label: "Emergency Dentistry", href: "/transport" },
      { label: "FAQ", href: "#contact" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

const socialIcons: Record<string, string> = {
  facebook: "M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.7c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z",
  instagram: "M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.2.6.4 1.3.5 2.3 0 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.2-1.3.4-2.3.5-1.1 0-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.2-.6-.4-1.3-.5-2.3 0-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c0-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.2 1.3-.4 2.3-.5C9 2 9.3 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.8 7a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z",
  twitter: "M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.3a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.2 8.2 0 0 1 2 18a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2Z",
  youtube: "M23 12s0-3.2-.4-4.7c-.2-.8-.9-1.5-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4c-.8.2-1.5.9-1.7 1.7C1 8.8 1 12 1 12s0 3.2.4 4.7c.2.8.9 1.5 1.7 1.7 1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.7.4-4.7Zm-13 3V9l5 3-5 3Z",
  linkedin: "M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3v9ZM6.5 8.2a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6ZM20 19h-3v-4.7c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3v-9h2.9v1.2h.04c.4-.8 1.4-1.5 2.8-1.5 3 0 3.6 2 3.6 4.5V19Z",
};

/**
 * Site footer — links, contact summary, license, socials.
 * Sticks to the bottom naturally because the body is a flex column with min-h-screen.
 */
export function SiteFooter() {
  const fullAddress = `${clinic.address.line1}, ${clinic.address.city}, ${clinic.address.state} ${clinic.address.zip}`;

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <BrandLogo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-body">
              {clinic.description}
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
                <span className="text-slate-600">{fullAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-brand" />
                <a href={clinic.phoneHref} className="font-semibold text-ink hover:text-brand">
                  {clinic.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-brand" />
                <a href={`mailto:${clinic.email}`} className="text-slate-600 hover:text-brand">
                  {clinic.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-brand" />
                <span className="text-slate-600">
                  Mon–Fri 8am–6pm · Sat 9am–2pm · Sun closed
                </span>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-ink">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-600 transition-colors hover:text-brand"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* License + socials */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-ink">
              Accreditation
            </h3>
            <div className="mt-4 rounded-xl bg-white p-4 ring-1 ring-slate-200">
              <div className="flex items-center gap-2 text-brand">
                <ShieldCheck size={18} />
                <span className="text-xs font-bold uppercase tracking-wide">Licensed</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {clinic.license.label}
              </p>
              <p className="mt-1 text-sm font-bold text-ink">{clinic.license.number}</p>
            </div>
            <div className="mt-5 flex gap-2">
              {clinic.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 transition-all hover:bg-brand hover:text-white hover:ring-brand"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                    <path d={socialIcons[s.icon] ?? socialIcons.facebook} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a href="#" className="hover:text-brand">Privacy Policy</a>
            <span aria-hidden>·</span>
            <a href="#" className="hover:text-brand">HIPAA Notice</a>
            <span aria-hidden>·</span>
            <a href="#" className="hover:text-brand">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
