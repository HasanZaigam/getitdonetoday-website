import { pricing } from "@/lib/content";
import { ButtonLink, Container, SectionHeading, cn } from "@/components/ui";

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="pt-28">
      <Container>
        <SectionHeading id="pricing-title" eyebrow={pricing.eyebrow} title={pricing.title} />
        <div className="mt-12 grid gap-5 md:grid-cols-2" data-reveal>
          {pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col gap-4 rounded-card border bg-card p-8",
                plan.highlighted ? "border-brand" : "border-line",
              )}
            >
              <h3 className="text-[22px] font-semibold tracking-[-0.01em]">{plan.name}</h3>
              <p className="text-[clamp(36px,5vw,48px)] leading-none font-bold tracking-[-0.02em] break-words">
                {plan.price}{" "}
                <span className="text-base font-medium tracking-normal text-muted">{plan.period}</span>
              </p>
              <p className="text-muted">{plan.description}</p>
              <ButtonLink
                href={plan.cta.href}
                variant={plan.highlighted ? "primary" : "secondary"}
                size="md"
                className="mt-auto"
              >
                {plan.cta.label}
              </ButtonLink>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
