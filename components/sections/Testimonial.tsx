import { founderNote } from "@/lib/content";
import { Container } from "@/components/ui";

/** Founder note (replaces the customer-quote placeholder until there is a real quote). */
export function Testimonial() {
  return (
    <section aria-labelledby="founder-title" className="pt-5">
      <Container>
        <figure className="rounded-card border border-line bg-card p-8 sm:p-10" data-reveal>
          <p id="founder-title" className="text-sm font-semibold tracking-[0.08em] text-brand-light uppercase">
            {founderNote.label}
          </p>
          <blockquote className="mt-4 max-w-[860px] space-y-3 text-[clamp(19px,2.2vw,24px)] leading-[1.45] font-medium tracking-[-0.01em]">
            {founderNote.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </blockquote>
          <figcaption className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3">
            <span
              aria-hidden="true"
              className="flex size-11 items-center justify-center rounded-full bg-brand text-sm font-semibold text-on-brand"
            >
              {founderNote.initials}
            </span>
            <span>
              <span className="block font-semibold">{founderNote.name}</span>
              <span className="block text-sm text-muted">{founderNote.role}</span>
            </span>
            <a
              href={founderNote.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brand-light transition-colors hover:text-fg sm:ml-auto"
            >
              {founderNote.link.label} <span aria-hidden="true">↗</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
