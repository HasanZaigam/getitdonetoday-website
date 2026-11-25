"use client";

import { useEffect } from "react";

/**
 * Adds a gentle fade-in to every element marked with `data-reveal` that starts
 * below the fold. Content stays visible without JavaScript, and nothing animates
 * when the user prefers reduced motion (see globals.css).
 */
export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const below = elements.filter((el) => el.getBoundingClientRect().top > window.innerHeight);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    for (const el of below) {
      el.classList.add("reveal-pending");
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
