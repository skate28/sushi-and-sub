import { site } from "@/content/site";
import type { SiteContent } from "@/content/types";
import { safeHref } from "@/lib/ordering";

/** Get directions. Uses the place link from content, including its place id. */
export function directionsHref(content: SiteContent = site): string | null {
  return safeHref(content.mapUrl);
}

/** Embedded map. Coordinates keep the pin on the shop rather than a neighbor out front. */
export function mapEmbedSrc(content: SiteContent = site): string | null {
  const { latitude, longitude } = content.geo;
  if (latitude != null && longitude != null) {
    const query = `${latitude},${longitude}`;
    return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=17&output=embed`;
  }
  const full = content.address.full.trim();
  if (!full) return null;
  return `https://maps.google.com/maps?q=${encodeURIComponent(full)}&z=16&output=embed`;
}
