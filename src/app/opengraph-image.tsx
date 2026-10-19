import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = site.seo.title.trim() || site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const place = [site.address.neighborhood, site.address.city].filter((part) => part.trim()).join(" · ");
  const detail = [site.hours.summary.trim(), site.phone.display.trim()].filter(Boolean).join("   ·   ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: site.palette.brandDeep,
          color: site.palette.rice,
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              background: site.palette.accent,
              color: site.palette.rice,
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              padding: "12px 18px",
              fontWeight: 700,
            }}
          >
            {place || "Jacksonville"}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: -1,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 34,
              lineHeight: 1.25,
              color: site.palette.salmon,
            }}
          >
            {site.tagline}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28 }}>{detail}</div>
      </div>
    ),
    { ...size },
  );
}
