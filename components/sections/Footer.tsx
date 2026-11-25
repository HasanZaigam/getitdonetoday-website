import { CONTACT_EMAIL, footer, site } from "@/lib/content";
import { Container, LogoMark, SmartLink } from "@/components/ui";

const isExternal = (href: string) => href.startsWith("http");

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="grid gap-10 py-12 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
        <div>
          <p className="flex items-center gap-2.5 text-lg font-bold tracking-[-0.01em]">
            <LogoMark size={28} />
            {site.wordmark}
          </p>
          <p className="mt-3 max-w-[280px] text-sm text-muted">{footer.tagline}</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-block text-sm font-semibold text-brand-light transition-colors hover:text-fg"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        {footer.groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <p className="text-sm font-semibold text-fg">{group.title}</p>
            <ul className="mt-3 space-y-2.5 text-sm">
              {group.links.map((link) => {
                const external = isExternal(link.href) && !link.href.startsWith("https://app.");
                return (
                  <li key={link.label}>
                    <SmartLink
                      href={link.href}
                      className="text-muted transition-colors hover:text-fg"
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
                    </SmartLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        ))}
      </Container>
      <div className="border-t border-line">
        <Container className="py-6 text-sm text-subtle">
          <p>{footer.copyright}</p>
        </Container>
      </div>
    </footer>
  );
}
