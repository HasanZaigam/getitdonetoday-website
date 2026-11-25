import { features } from "@/lib/content";
import { FeatureIconSvg } from "@/components/icons";
import { Card, Container, SectionHeading } from "@/components/ui";

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="pt-28">
      <Container>
        <SectionHeading id="features-title" eyebrow={features.eyebrow} title={features.title} />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
          {features.items.map((f) => (
            <li key={f.title}>
              <Card className="h-full transition duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:bg-[#1a1a1a] motion-reduce:hover:translate-y-0">
                <span className="inline-flex size-10 items-center justify-center rounded-[10px] bg-chip text-brand-light">
                  <FeatureIconSvg name={f.icon} />
                </span>
                <h3 className="mt-[18px] text-xl font-semibold tracking-[-0.01em]">{f.title}</h3>
                <p className="mt-2 text-muted">{f.body}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
