import { Loader2 } from "lucide-react";

/**
 * Route-level loading UI.
 * Shown automatically by Next.js App Router while the page segment loads.
 */
export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6">
      <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-tint text-brand">
        <Loader2 size={26} className="animate-spin" />
      </div>
      <p className="text-sm font-medium text-slate-500">Loading Lumière Dental…</p>
    </div>
  );
}
