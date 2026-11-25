import { howItWorks } from "@/lib/content";
import { Container, SectionHeading, cn } from "@/components/ui";

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="pt-28">
      <Container>
        <SectionHeading id="how-title" eyebrow={howItWorks.eyebrow} title={howItWorks.title} />
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-4" data-reveal>
          {howItWorks.steps.map((step, i) => (
            <li
              key={step.title}
              className={cn("border-t-2 pt-6", i === 0 ? "border-brand" : "border-line-strong")}
            >
              <p className="text-[15px] text-subtle tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.01em]">{step.title}</h3>
              <p className="mt-2.5 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
