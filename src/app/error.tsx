"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { CTAButton } from "@/component/common";

/**
 * Route-level error boundary.
 * Catches uncaught errors in the page segment and lets the user recover.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-5 px-6 py-20 text-center">
      <div className="flex size-16 items-center justify-center rounded-2xl bg-red-50 text-red-500">
        <AlertTriangle size={30} strokeWidth={1.75} />
      </div>
      <div>
        <h1 className="font-heading text-2xl font-bold text-ink">
          Something went wrong
        </h1>
        <p className="mt-2 max-w-md text-sm text-body">
          We hit an unexpected snag loading this page. Please try again — if the
          problem persists, call us at{" "}
          <a href="tel:+15125550142" className="font-semibold text-brand">
            (512) 555-0142
          </a>
          .
        </p>
      </div>
      <CTAButton onClick={reset} size="md" variant="primary">
        <RotateCcw size={18} />
        Try again
      </CTAButton>
    </div>
  );
}
