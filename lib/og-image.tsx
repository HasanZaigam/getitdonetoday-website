import { ImageResponse } from "next/og";
import { board, hero, site } from "@/lib/content";

// Shared by app/opengraph-image.tsx and app/twitter-image.tsx.
// Colours are the design tokens from globals.css (CSS variables aren't available here).
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_ALT = `${site.name}: ${hero.title}`;

const c = {
  bg: "#0A0A0A",
  card: "#171717",
  inner: "#1F1F1F",
  column: "#111111",
  chip: "#262626",
  fg: "#FAFAFA",
  muted: "#A1A1A1",
  light: "#D4D4D4",
  line: "rgba(255,255,255,0.10)",
  brand: "#155DFC",
  onBrand: "#EFF6FF",
  brandLight: "#7AA2FF",
  success: "#4ADE80",
};

function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="10" fill={c.brand} />
      <g stroke={c.onBrand} strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.5 11 7 16l4.5 5" />
        <path d="M20.5 11 25 16l-4.5 5" />
        <path d="M17.5 9.5l-3 13" />
      </g>
    </svg>
  );
}

// Inter TTFs from Google Fonts, fetched once at build time (the image is static).
// Without a browser User-Agent, the CSS API returns TrueType URLs, which next/og supports.
// If the fetch fails, the image still renders with the default font.
async function loadInter(weight: 400 | 600 | 700) {
  try {
    const css = await fetch(`https://fonts.googleapis.com/css2?family=Inter:wght@${weight}`).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1];
    if (!url) return null;
    const data = await fetch(url).then((r) => r.arrayBuffer());
    return { name: "Inter", data, weight, style: "normal" as const };
  } catch {
    return null;
  }
}

export async function renderOgImage() {
  const fonts = (await Promise.all([loadInter(400), loadInter(600), loadInter(700)])).filter(
    (f): f is NonNullable<typeof f> => f !== null,
  );
  const total = board.columns.reduce((n, col) => n + col.cards.length, 0);
  const done = board.columns.filter((col) => col.done).reduce((n, col) => n + col.cards.length, 0);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: c.bg,
          color: c.fg,
          padding: "56px 64px 0",
          fontFamily: fonts.length ? "Inter" : "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexShrink: 0, alignItems: "center", gap: 14 }}>
          <Mark size={44} />
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.01em" }}>{site.wordmark}</div>
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              fontSize: 20,
              color: c.light,
              border: `1px solid rgba(255,255,255,0.15)`,
              borderRadius: 999,
              padding: "8px 18px",
            }}
          >
            {hero.badge}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexShrink: 0,
            marginTop: 40,
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
            maxWidth: 1000,
          }}
        >
          {hero.title}
        </div>
        <div style={{ display: "flex", flexShrink: 0, marginTop: 18, fontSize: 26, color: c.muted }}>
          The AI task board for dev agencies and startups.
        </div>

        {/* Mini board, cropped by the bottom edge like a product peek. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 40,
            flexGrow: 1,
            background: c.card,
            border: `1px solid ${c.line}`,
            borderBottom: "none",
            borderRadius: "20px 20px 0 0",
            padding: "18px 22px 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", fontSize: 18, color: c.muted }}>
            {board.workspace} /<span style={{ color: c.fg, fontWeight: 600, marginLeft: 6 }}>{board.project}</span>
            <div
              style={{
                display: "flex",
                marginLeft: "auto",
                fontSize: 16,
                fontWeight: 600,
                color: c.brandLight,
                background: c.chip,
                borderRadius: 999,
                padding: "5px 12px",
              }}
            >
              Today · {done} of {total} done
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
            {board.columns.map((col) => (
              <div
                key={col.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  gap: 10,
                  background: c.column,
                  border: `1px solid ${c.line}`,
                  borderRadius: 14,
                  padding: 14,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 16, fontWeight: 600, color: c.muted }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 8,
                      background: col.done ? c.success : col.name === "In progress" ? c.brandLight : "#737373",
                    }}
                  />
                  {col.name} {col.cards.length}
                </div>
                {col.cards.map((card) => (
                  <div
                    key={card.title}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      background: c.inner,
                      border: `1px solid ${c.line}`,
                      borderRadius: 10,
                      padding: 12,
                      gap: 10,
                    }}
                  >
                    <div style={{ display: "flex", fontSize: 17, fontWeight: 500 }}>{card.title}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div
                        style={{
                          display: "flex",
                          fontSize: 14,
                          color: c.light,
                          background: "#27272A",
                          borderRadius: 6,
                          padding: "2px 8px",
                        }}
                      >
                        {card.model}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 26,
                          height: 26,
                          borderRadius: 26,
                          fontSize: 12,
                          fontWeight: 600,
                          background: "rgba(255,255,255,0.15)",
                        }}
                      >
                        {card.who}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}
