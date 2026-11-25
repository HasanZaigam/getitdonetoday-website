import { board, hero } from "@/lib/content";
import { ButtonLink, Container } from "@/components/ui";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-24 pb-[72px] text-center">
      <Container>
        <p className="inline-block rounded-full border border-line-strong px-3.5 py-1.5 text-[13px] text-light">
          {hero.badge}
        </p>
        <h1
          id="hero-title"
          className="mx-auto mt-7 max-w-[960px] text-[clamp(40px,6vw,76px)] leading-[1.05] font-bold tracking-[-0.035em] text-balance"
        >
          {hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-[680px] text-lg text-muted sm:text-xl">{hero.subtitle}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </ButtonLink>
        </div>
        <p className="mt-[18px] text-sm text-subtle">{hero.footnote}</p>

        <BoardMock />
      </Container>
    </section>
  );
}

function BoardMock() {
  return (
    <figure
      aria-label={`Example board: ${board.project}`}
      className="mx-auto mt-16 max-w-[1100px] overflow-hidden rounded-[18px] border border-line bg-card text-left"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 text-sm">
        <span className="text-muted">
          {board.workspace} / <span className="font-semibold text-fg">{board.project}</span>
        </span>
        <span className="rounded-full bg-chip px-2.5 py-1 text-xs font-semibold text-brand-light">
          {board.status}
        </span>
      </div>
      <div className="flex flex-wrap gap-4 p-4 sm:p-5">
        {board.columns.map((col) => (
          <div
            key={col.name}
            className="flex min-w-0 flex-[1_1_260px] flex-col gap-2.5 rounded-xl border border-line bg-column p-3.5"
          >
            <p className="text-[13px] font-semibold text-muted">
              {col.name} <span className="text-subtle">{col.count}</span>
            </p>
            <ul className="flex flex-col gap-2.5">
              {col.cards.map((card) => (
                <li
                  key={card.title}
                  className="rounded-[10px] border border-line bg-card-inner p-3 transition-colors hover:border-line-strong"
                >
                  <p className="text-sm font-medium">{card.title}</p>
                  <div className="mt-2.5 flex items-center justify-between">
                    <span className="rounded-md bg-chip-alt px-2 py-0.5 text-xs text-light">
                      {card.model}
                    </span>
                    <span
                      className="inline-flex size-6 items-center justify-center rounded-full bg-white/15 text-[11px] font-semibold"
                      title={`Assigned to ${card.who}`}
                    >
                      {card.who}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </figure>
  );
}
