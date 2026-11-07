"use client";

import { useEffect, useState } from "react";
import { Phone, Menu, X, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { clinic } from "@/data/clinic";
import { BrandLogo, CTAButton } from "@/component/common";

/**
 * Sticky site header.
 * - Transparent-ish on hero, gains a white background + shadow on scroll.
 * - Logo, desktop nav, click-to-call phone, and a prominent Book Appointment CTA.
 * - Mobile: slide-down sheet menu triggered by a hamburger.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    // allow default anchor jump; smooth scroll handled by CSS
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/90 shadow-sm ring-1 ring-slate-200/70 backdrop-blur-md"
          : "bg-white/70 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:h-20 lg:px-8">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center transition-opacity hover:opacity-90"
          aria-label={`${clinic.name} — home`}
        >
          <BrandLogo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {clinic.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-brand-tint hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right cluster: phone + CTA (desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={clinic.phoneHref}
            className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-ink transition-colors hover:text-brand"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-brand-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <Phone size={16} strokeWidth={2.25} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[0.65rem] font-medium uppercase tracking-wider text-slate-400">
                Call us
              </span>
              <span className="text-sm font-bold text-ink">{clinic.phone}</span>
            </span>
          </a>
          <CTAButton as="a" href="#booking" size="md" variant="primary">
            <CalendarCheck size={18} />
            Book Appointment
          </CTAButton>
        </div>

        {/* Mobile: phone + hamburger */}
        <div className="flex items-center gap-1.5 md:hidden">
          <a
            href={clinic.phoneHref}
            className="flex size-10 items-center justify-center rounded-full bg-brand-tint text-brand"
            aria-label={`Call ${clinic.phone}`}
          >
            <Phone size={18} />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full text-ink ring-1 ring-slate-200 transition-colors hover:bg-slate-50"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile sheet menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-slate-100 bg-white transition-[max-height,opacity] duration-300 md:hidden",
          menuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {clinic.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-brand-tint hover:text-brand"
            >
              {item.label}
            </a>
          ))}
          <CTAButton
            as="a"
            href="#booking"
            size="lg"
            variant="primary"
            className="mt-3 w-full"
            onClick={() => setMenuOpen(false)}
          >
            <CalendarCheck size={18} />
            Book Appointment
          </CTAButton>
          <a
            href={clinic.phoneHref}
            className="mt-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold text-brand"
          >
            <Phone size={16} />
            {clinic.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
