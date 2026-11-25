import { faq } from "@/lib/content";
import { PlusIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui";

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="pt-28">
      <div className="mx-auto w-full max-w-[860px] px-6">
        <SectionHeading id="faq-title" title={faq.title} />
        <div className="mt-9 border-b border-line">
          {faq.items.map((item) => (
            <details key={item.q} className="group border-t border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left">
                <h3 className="text-lg font-semibold tracking-[-0.01em] sm:text-[19px]">{item.q}</h3>
                <PlusIcon className="shrink-0 text-muted transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="-mt-2 pr-10 pb-6 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
