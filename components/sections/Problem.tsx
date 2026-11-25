import { problem } from "@/lib/content";
import { CheckIcon, CloseIcon } from "@/components/icons";
import { Container, SectionHeading } from "@/components/ui";

export function Problem() {
  return (
    <section aria-labelledby="problem-title" className="pt-28">
      <Container>
        <SectionHeading id="problem-title" title={problem.title} />

        {/* Before / after comparison: a table-like layout instead of another row of cards. */}
        <div className="mt-12 overflow-hidden rounded-card border border-line" data-reveal>
          <div className="hidden grid-cols-2 text-sm font-semibold md:grid">
            <p className="px-7 py-4 text-muted">{problem.beforeLabel}</p>
            <p className="border-l border-line bg-brand/10 px-7 py-4 text-brand-light">{problem.afterLabel}</p>
          </div>
          <ul>
            {problem.rows.map((row) => (
              <li key={row.before.title} className="grid border-t border-line first:border-t-0 md:grid-cols-2 md:first:border-t">
                <div className="px-6 py-6 sm:px-7">
                  <p className="mb-2 text-xs font-semibold tracking-[0.08em] text-subtle uppercase md:hidden">
                    {problem.beforeLabel}
                  </p>
                  <h3 className="flex items-center gap-2.5 text-lg font-semibold tracking-[-0.01em] text-light">
                    <span aria-hidden="true" className="flex size-6 items-center justify-center rounded-full bg-chip text-muted">
                      <CloseIcon className="size-3.5" />
                    </span>
                    {row.before.title}
                  </h3>
                  <p className="mt-2 text-muted">{row.before.body}</p>
                </div>
                <div className="border-t border-dashed border-line bg-card px-6 py-6 sm:px-7 md:border-t-0 md:border-l md:border-solid">
                  <p className="mb-2 text-xs font-semibold tracking-[0.08em] text-brand-light uppercase md:hidden">
                    {problem.afterLabel}
                  </p>
                  <h3 className="flex items-center gap-2.5 text-lg font-semibold tracking-[-0.01em]">
                    <span aria-hidden="true" className="flex size-6 items-center justify-center rounded-full bg-success/15 text-success">
                      <CheckIcon className="size-3.5" />
                    </span>
                    {row.after.title}
                  </h3>
                  <p className="mt-2 text-muted">{row.after.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
