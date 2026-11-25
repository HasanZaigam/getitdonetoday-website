import { audience } from "@/lib/content";
import { Card, Container, SectionHeading } from "@/components/ui";

export function Audience() {
  return (
    <section aria-labelledby="audience-title" className="pt-28">
      <Container>
        <SectionHeading id="audience-title" title={audience.title} />
        <div className="mt-12 grid gap-5 md:grid-cols-2" data-reveal>
          {audience.cards.map((card) => (
            <Card key={card.title} className="p-8">
              <h3 className="text-2xl font-semibold tracking-[-0.015em]">{card.title}</h3>
              <p className="mt-2.5 text-muted">{card.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
