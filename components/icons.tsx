import type { ReactNode, SVGProps } from "react";
import type { FeatureIcon } from "@/lib/content";

function Svg({ children, ...props }: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

const featurePaths: Record<FeatureIcon, ReactNode> = {
  // Kanban board
  board: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M9 4v16M15 4v16" />
    </>
  ),
  // Key
  key: (
    <>
      <circle cx="7.5" cy="15.5" r="4.5" />
      <path d="m10.7 12.3 9.3-9.3M17 6l3 3M14 9l2 2" />
    </>
  ),
  // Switch / swap
  switch: (
    <>
      <path d="M16 3l4 4-4 4" />
      <path d="M20 7H4" />
      <path d="M8 21l-4-4 4-4" />
      <path d="M4 17h16" />
    </>
  ),
  // Eye
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  // Bell
  bell: (
    <>
      <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </>
  ),
  // Log in
  login: (
    <>
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <path d="M10 17l5-5-5-5" />
      <path d="M15 12H3" />
    </>
  ),
};

export function FeatureIconSvg({ name }: { name: FeatureIcon }) {
  return <Svg>{featurePaths[name]}</Svg>;
}

export function MenuIcon() {
  return (
    <Svg width={22} height={22}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function CloseIcon() {
  return (
    <Svg width={22} height={22}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  );
}

export function PlusIcon({ className }: { className?: string }) {
  return (
    <Svg width={18} height={18} className={className}>
      <path d="M12 5v14M5 12h14" />
    </Svg>
  );
}
