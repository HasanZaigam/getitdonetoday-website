import { problem } from "@/lib/content";
import { Card, Container, SectionHeading } from "@/components/ui";

export function Problem() {
  return (
    <section aria-labelledby="problem-title" className="pt-28">
      <Container>
        <SectionHeading id="problem-title" title={problem.title} />
        <div className="mt-12 grid gap-5 md:grid-cols-3" data-reveal>
          {problem.cards.map((card) => (
            <Card key={card.title}>
              <h3 className="text-xl font-semibold tracking-[-0.01em]">{card.title}</h3>
              <p className="mt-2.5 text-muted">{card.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
