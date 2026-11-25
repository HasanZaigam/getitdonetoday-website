import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/** Internal paths ("/", "/#features", "/privacy") use next/link; everything else is a plain <a>. */
export function SmartLink({ href = "", ...props }: ComponentPropsWithoutRef<"a">) {
  if (href.startsWith("/")) return <Link href={href} {...props} />;
  return <a href={href} {...props} />;
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-6", className)} {...props} />;
}

type ButtonVariant = "primary" | "secondary" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

const buttonBase =
  "inline-flex items-center justify-center rounded-full font-semibold whitespace-nowrap transition-colors duration-200";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-brand text-on-brand hover:bg-brand/85",
  secondary: "border border-line-strong text-fg hover:border-white/30 hover:bg-white/5",
  // Used on the brand-blue CTA block, so the focus ring switches to a light colour.
  inverse: "bg-bg text-fg hover:bg-[#1a1a1a] focus-visible:outline-on-brand",
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "px-[18px] py-3 text-[15px]",
  md: "px-5 py-3.5 text-base",
  lg: "px-[26px] py-[15px] text-base",
};

export function ButtonLink({
  variant = "primary",
  size = "lg",
  className,
  ...props
}: ComponentPropsWithoutRef<"a"> & { variant?: ButtonVariant; size?: ButtonSize }) {
  return (
    <SmartLink className={cn(buttonBase, buttonVariants[variant], buttonSizes[size], className)} {...props} />
  );
}

/**
 * The "</>" logo tile. Same geometry as app/icon.svg (favicon) and the OG image,
 * so the mark is identical everywhere.
 */
export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className="shrink-0"
    >
      <rect width="32" height="32" rx="10" className="fill-brand" />
      <g
        className="stroke-on-brand"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11.5 11 7 16l4.5 5" />
        <path d="M20.5 11 25 16l-4.5 5" />
        <path d="M17.5 9.5l-3 13" />
      </g>
    </svg>
  );
}

export function Logo({ wordmark }: { wordmark: string }) {
  return (
    <Link
      href="/#top"
      className="flex items-center gap-2.5 text-xl font-bold tracking-[-0.01em] text-fg"
    >
      <LogoMark />
      {wordmark}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-semibold tracking-[0.08em] text-brand-light uppercase">{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  id,
  className,
}: {
  eyebrow?: string;
  title: string;
  id?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className={cn(
          "max-w-[760px] text-[clamp(30px,4vw,48px)] leading-[1.1] font-bold tracking-[-0.02em] text-balance",
          eyebrow && "mt-3",
        )}
      >
        {title}
      </h2>
    </div>
  );
}

export function Card({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("rounded-card border border-line bg-card p-7", className)}
      {...props}
    />
  );
}
