import { footer } from "@/lib/content";
import { Container, LogoMark } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-4 py-8 text-sm text-subtle sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p className="flex items-center gap-2.5">
          <LogoMark small />
          {footer.copyright}
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-muted transition-colors hover:text-fg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
