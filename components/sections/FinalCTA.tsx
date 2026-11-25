import { finalCta } from "@/lib/content";
import { ButtonLink, Container } from "@/components/ui";

export function FinalCTA() {
  return (
    <section id="cta" aria-labelledby="cta-title" className="py-28">
      <Container>
        <div
          className="rounded-[24px] bg-brand px-6 py-16 text-center text-on-brand sm:px-8 sm:py-[72px]"
          data-reveal
        >
          <h2
            id="cta-title"
            className="text-[clamp(36px,5vw,64px)] leading-[1.05] font-bold tracking-[-0.03em] text-on-brand"
          >
            {finalCta.title}
          </h2>
          {/* text-on-brand (#EFF6FF) passes AA on the brand blue (4.8:1); on-brand-soft was 4.3:1. */}
          <p className="mx-auto mt-4 max-w-[560px] text-[19px] text-on-brand">{finalCta.body}</p>
          <ButtonLink href={finalCta.cta.href} variant="inverse" className="mt-8 px-7">
            {finalCta.cta.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
