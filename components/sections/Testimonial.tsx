import { testimonial } from "@/lib/content";
import { Container } from "@/components/ui";

export function Testimonial() {
  return (
    <section aria-label="Testimonial" className="pt-5">
      <Container>
        <figure className="rounded-card border border-line bg-card p-8 sm:p-10" data-reveal>
          <p className="text-sm text-subtle">{testimonial.label}</p>
          <blockquote className="mt-3.5 max-w-[880px] text-[clamp(22px,2.6vw,30px)] leading-[1.3] font-medium tracking-[-0.015em]">
            <p>{testimonial.quote}</p>
          </blockquote>
          <figcaption className="mt-4 text-muted">{testimonial.attribution}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
