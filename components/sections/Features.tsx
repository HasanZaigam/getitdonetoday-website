import Image from "next/image";
import { features } from "@/lib/content";
import { FeatureIconSvg, LockIcon } from "@/components/icons";
import { Card, Container, SectionHeading } from "@/components/ui";

function IconTile({ name }: { name: Parameters<typeof FeatureIconSvg>[0]["name"] }) {
  return (
    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-chip text-brand-light">
      <FeatureIconSvg name={name} />
    </span>
  );
}

export function Features() {
  const { highlight } = features;

  return (
    <section id="features" aria-labelledby="features-title" className="pt-28">
      <Container>
        <SectionHeading id="features-title" eyebrow={features.eyebrow} title={features.title} />

        {/* Headline feature: GitHub, with a real product screenshot. */}
        <article
          className="mt-12 grid items-center gap-8 overflow-hidden rounded-card border border-line bg-card p-7 sm:p-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10"
          data-reveal
        >
          <div>
            <IconTile name={highlight.icon} />
            <h3 className="mt-[18px] text-2xl font-semibold tracking-[-0.015em]">{highlight.title}</h3>
            <p className="mt-2.5 text-muted">{highlight.body}</p>
          </div>
          {/* Product screenshot slot: swap the image in lib/content.ts (features.highlight.screenshot). */}
          <figure className="overflow-hidden rounded-[12px] border border-line-strong bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
            <Image
              src={highlight.screenshot.src}
              width={highlight.screenshot.width}
              height={highlight.screenshot.height}
              alt={highlight.screenshot.alt}
              sizes="(min-width: 1200px) 660px, (min-width: 1024px) 55vw, 100vw"
              className="h-auto w-full"
            />
          </figure>
        </article>

        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
          {features.items.map((f) => (
            <li key={f.title}>
              <Card className="flex h-full flex-col transition duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:bg-[#1a1a1a] motion-reduce:hover:translate-y-0">
                <IconTile name={f.icon} />
                <h3 className="mt-[18px] text-xl font-semibold tracking-[-0.01em]">{f.title}</h3>
                <p className="mt-2 text-muted">{f.body}</p>
                {f.note ? (
                  <p className="mt-5 flex items-start gap-2 rounded-[10px] border border-brand/30 bg-brand/10 px-3 py-2.5 text-sm text-light">
                    <LockIcon className="mt-0.5 shrink-0 text-brand-light" />
                    <span>{f.note}</span>
                  </p>
                ) : null}
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
