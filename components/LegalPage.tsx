import type { ReactNode } from "react";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";

export type LegalSection = { heading: string; body: ReactNode };

/** Shared layout for /privacy and /terms: one h1, readable line length, plain styling. */
export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
      <Navbar />
      <main id="main" className="mx-auto w-full max-w-[760px] px-6 pt-16 pb-28 sm:pt-20">
        <p className="text-sm font-semibold tracking-[0.08em] text-brand-light uppercase">Legal</p>
        <h1 className="mt-3 text-[clamp(34px,5vw,52px)] leading-[1.08] font-bold tracking-[-0.03em]">{title}</h1>
        <p className="mt-4 text-sm text-subtle">Last updated {updated}</p>
        <div className="mt-8 text-lg text-light">{intro}</div>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.heading} className="border-t border-line pt-8">
              <h2 className="text-xl font-semibold tracking-[-0.01em]">{s.heading}</h2>
              <div className="legal-body mt-3 space-y-3 text-muted">{s.body}</div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
