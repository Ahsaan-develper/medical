import { cn } from "@/lib/utils";
import { clinic } from "@/data/clinic";

interface BrandLogoProps {
  className?: string;
  showWordmark?: boolean;
  variant?: "default" | "light";
}

/**
 * Lumière Dental Studio wordmark + tooth-spark logo mark.
 * Uses an inline SVG so it stays crisp at every size and inherits color.
 */
export function BrandLogo({
  className,
  showWordmark = true,
  variant = "default",
}: BrandLogoProps) {
  const wordmarkColor = variant === "light" ? "text-white" : "text-ink";
  const subColor = variant === "light" ? "text-white/70" : "text-body";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative inline-flex size-10 items-center justify-center rounded-xl bg-brand text-brand-foreground shadow-sm shadow-brand/30">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-6"
          aria-hidden="true"
        >
          <path
            d="M12 3.5c-2.2 0-3.3.9-4.7.9-1.4 0-2.3-.6-3.6-.6C2 3.8 1 5.2 1 8.2c0 2 .6 3.7 1.2 6 .5 2 1 4.4 1.8 6.1.5 1.1 1 2 1.8 2 .9 0 1.3-.8 1.7-1.7.4-1 .8-2.3 1.2-3.6.3-.9.6-1.4 1.3-1.4s1 .5 1.3 1.4c.4 1.3.8 2.6 1.2 3.6.4.9.8 1.7 1.7 1.7.8 0 1.3-.9 1.8-2 .8-1.7 1.3-4.1 1.8-6 .6-2.3 1.2-4 1.2-6 0-3-1-4.4-2.7-4.4-1.3 0-2.2.6-3.6.6-1.4 0-2.5-.9-4.7-.9Z"
            fill="currentColor"
          />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-emerald-400 ring-2 ring-white" aria-hidden />
      </span>
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span className={cn("font-heading text-[1.05rem] font-bold tracking-tight", wordmarkColor)}>
            {clinic.shortName}
          </span>
          <span className={cn("text-[0.7rem] font-medium tracking-wide", subColor)}>
            Dental Studio
          </span>
        </span>
      ) : null}
    </span>
  );
}
