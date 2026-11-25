import type { ComponentPropsWithoutRef, ReactNode } from "react";

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
    <a className={cn(buttonBase, buttonVariants[variant], buttonSizes[size], className)} {...props} />
  );
}

export function LogoMark({ small = false }: { small?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center bg-brand font-mono font-semibold text-on-brand",
        small ? "size-6 rounded-[8px] text-[10px]" : "size-[34px] rounded-[11px] text-[13px]",
      )}
    >
      &lt;/&gt;
    </span>
  );
}

export function Logo({ wordmark }: { wordmark: string }) {
  return (
    <a
      href="#top"
      className="flex items-center gap-2.5 text-xl font-bold tracking-[-0.01em] text-fg"
    >
      <LogoMark />
      {wordmark}
    </a>
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
