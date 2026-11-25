import { modelStrip } from "@/lib/content";
import { Container } from "@/components/ui";

export function ModelStrip() {
  return (
    <section aria-label="Supported model providers" className="border-y border-line">
      <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-9 text-center">
        <p className="text-sm text-subtle">{modelStrip.label}</p>
        <ul className="flex flex-wrap justify-center gap-x-9 gap-y-3 text-lg font-semibold text-light sm:text-xl">
          {modelStrip.providers.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
