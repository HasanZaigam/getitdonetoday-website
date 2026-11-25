import { board, hero, videoTour } from "@/lib/content";
import { CheckIcon, PlayIcon } from "@/components/icons";
import { ButtonLink, Container, cn } from "@/components/ui";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-20 pb-[72px] text-center sm:pt-24">
      <Container>
        <p className="inline-flex items-center gap-2 rounded-full border border-line-strong px-3.5 py-1.5 text-[13px] text-light">
          <span aria-hidden="true" className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-success/60 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-success" />
          </span>
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
        <a
          href="#tour"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-light transition-colors hover:text-fg"
        >
          <span className="flex size-6 items-center justify-center rounded-full bg-chip">
            <PlayIcon className="ml-px size-3" />
          </span>
          {videoTour.heroLink}
        </a>

        <BoardMock />
      </Container>
    </section>
  );
}

const columnDot: Record<string, string> = {
  "To do": "bg-faint",
  "In progress": "bg-brand-light",
  "Done today": "bg-success",
};

function BoardMock() {
  return (
    <figure
      aria-label={`Example board: ${board.project}`}
      className="mx-auto mt-14 max-w-[1100px] overflow-hidden rounded-[18px] border border-line bg-card text-left shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.03]"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 text-sm">
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="hidden gap-1.5 sm:flex">
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
          </span>
          <span className="text-muted">
            {board.workspace} / <span className="font-semibold text-fg">{board.project}</span>
          </span>
        </div>
        <span className="rounded-full bg-chip px-2.5 py-1 text-xs font-semibold text-brand-light">
          {board.status}
        </span>
      </div>
      <div className="flex flex-wrap gap-4 p-4 sm:p-5">
        {board.columns.map((col) => {
          const done = col.name === "Done today";
          return (
            <div
              key={col.name}
              className="flex min-w-0 flex-[1_1_260px] flex-col gap-2.5 rounded-xl border border-line bg-column p-3.5"
            >
              <p className="flex items-center gap-2 text-[13px] font-semibold text-muted">
                <span aria-hidden="true" className={cn("size-1.5 rounded-full", columnDot[col.name])} />
                {col.name} <span className="text-subtle">{col.count}</span>
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.cards.map((card) => (
                  <li
                    key={card.title}
                    className="rounded-[10px] border border-line bg-card-inner p-3 transition-colors hover:border-line-strong"
                  >
                    <p className="flex items-start gap-2 text-sm font-medium">
                      {done ? <CheckIcon className="mt-0.5 size-4 shrink-0 text-success" /> : null}
                      <span>{card.title}</span>
                    </p>
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
          );
        })}
      </div>
    </figure>
  );
}
