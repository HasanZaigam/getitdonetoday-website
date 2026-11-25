import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";

// Bump this when the page content changes meaningfully.
const LAST_UPDATED = "2026-11-25";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
