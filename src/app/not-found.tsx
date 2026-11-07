import Link from "next/link";
import { Home, Phone, CalendarCheck } from "lucide-react";
import { CTAButton } from "@/component/common";

/**
 * 404 — shown when a route doesn't exist.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 py-20 text-center">
      <div className="relative">
        <span className="font-heading text-[7rem] font-extrabold leading-none text-brand-tint sm:text-[9rem]">
          404
        </span>
        <span className="absolute inset-0 flex items-center justify-center font-heading text-2xl font-bold text-brand">
          Oops!
        </span>
      </div>
      <div>
        <h1 className="font-heading text-2xl font-bold text-ink">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-2 max-w-md text-sm text-body">
          The page you&apos;re looking for may have moved. Try heading back home,
          or book an appointment and we&apos;ll take great care of you.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <CTAButton as="a" href="/" size="md" variant="primary">
          <Home size={18} />
          Back to home
        </CTAButton>
        <CTAButton as="a" href="/#booking" size="md" variant="secondary">
          <CalendarCheck size={18} />
          Book appointment
        </CTAButton>
      </div>
      <Link
        href="tel:+15125550142"
        className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
      >
        <Phone size={16} />
        Or call us: (512) 555-0142
      </Link>
    </div>
  );
}
