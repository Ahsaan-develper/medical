import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ctaButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-brand-foreground rounded-full shadow-sm shadow-brand/20 hover:bg-brand-deep hover:shadow-md hover:shadow-brand/25 hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "bg-white text-brand rounded-full ring-1 ring-brand/20 shadow-sm hover:bg-brand-tint hover:ring-brand/40",
        ghost:
          "text-brand rounded-full hover:bg-brand-tint",
        dark:
          "bg-ink text-white rounded-full hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 shadow-sm",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-6 text-sm",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface CTAButtonBaseProps
  extends VariantProps<typeof ctaButtonVariants> {
  className?: string;
  children: React.ReactNode;
}

type CTAButtonAsButton = CTAButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    as?: "button";
  };

type CTAButtonAsAnchor = CTAButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
    as: "a";
  };

type CTAButtonProps = CTAButtonAsButton | CTAButtonAsAnchor;

/**
 * Marketing CTA button — larger touch targets, rounded-full, brand hover states.
 * Renders as a <button> by default, or pass `as="a"` for links.
 */
export function CTAButton(props: CTAButtonProps) {
  const { variant, size, className, children, ...rest } = props as CTAButtonProps;

  if (props.as === "a") {
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        className={cn(ctaButtonVariants({ variant, size }), className)}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      className={cn(ctaButtonVariants({ variant, size }), className)}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
