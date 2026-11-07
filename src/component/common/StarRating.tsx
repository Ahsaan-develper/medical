import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  outOf?: number;
  size?: number;
  className?: string;
  showValue?: boolean;
}

/**
 * Accessible star rating. Renders filled stars for the integer portion
 * and a half-filled star for the fractional part.
 */
export function StarRating({
  rating,
  outOf = 5,
  size = 16,
  className,
  showValue = false,
}: StarRatingProps) {
  const rounded = Math.round(rating * 2) / 2; // nearest half

  return (
    <span
      className={cn("inline-flex items-center gap-1.5", className)}
      role="img"
      aria-label={`${rating} out of ${outOf} stars`}
    >
      <span className="inline-flex items-center gap-0.5" aria-hidden>
        {Array.from({ length: outOf }).map((_, i) => {
          const filled = i + 1 <= Math.floor(rounded);
          const half = !filled && i + 0.5 === rounded;
          return (
            <span key={i} className="relative inline-flex" style={{ width: size, height: size }}>
              <Star
                size={size}
                className="absolute inset-0 text-amber-300/40"
                strokeWidth={0}
                fill="currentColor"
              />
              {(filled || half) && (
                <Star
                  size={size}
                  className="absolute inset-0 text-amber-400"
                  strokeWidth={0}
                  fill="currentColor"
                  style={half ? { clipPath: "inset(0 50% 0 0)" } : undefined}
                />
              )}
            </span>
          );
        })}
      </span>
      {showValue ? (
        <span className="text-sm font-semibold text-ink">{rating.toFixed(1)}</span>
      ) : null}
    </span>
  );
}
