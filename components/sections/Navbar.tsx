"use client";

import { useEffect, useState } from "react";
import { APP_LOGIN_URL, navLinks, site } from "@/lib/content";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { ButtonLink, Container, Logo } from "@/components/ui";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md supports-[backdrop-filter]:bg-bg/70">
      <Container>
        <nav
          aria-label="Main"
          className="flex items-center justify-between gap-4 py-[18px]"
        >
          <Logo wordmark={site.wordmark} />

          <ul className="hidden items-center gap-6 text-[15px] lg:flex xl:gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-muted transition-colors hover:text-fg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={APP_LOGIN_URL}
              className="px-4 py-3 text-[15px] text-fg transition-colors hover:text-white"
            >
              Sign in
            </a>
            <ButtonLink href={APP_LOGIN_URL} size="sm">
              Start free
            </ButtonLink>
          </div>

          <button
            type="button"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-fg hover:bg-white/5 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>

        <div
          id="mobile-menu"
          hidden={!open}
          className="border-t border-line pt-2 pb-6 lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block py-3 text-base text-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={APP_LOGIN_URL} variant="secondary" size="md" onClick={close}>
              Sign in
            </ButtonLink>
            <ButtonLink href={APP_LOGIN_URL} size="md" onClick={close}>
              Start free
            </ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}
