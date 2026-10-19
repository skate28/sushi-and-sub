import { z } from "zod";

import { site } from "@/content/site";
import type { OrderingLink, SiteContent } from "@/content/types";

const orderingLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
  kind: z.enum(["phone", "sms", "online", "delivery"]),
});

export function safeHref(href: string | null | undefined): string | null {
  const value = href?.trim() ?? "";
  if (!value) return null;
  if (/^(https?:|tel:|sms:|mailto:|\/)/i.test(value)) return value;
  return null;
}

/**
 * Phone `orderingLinks` only. Online and delivery entries are ignored.
 * A phone entry must be a `tel:` link so it cannot become an order-online button.
 */
export function phoneOrderingLinks(content: SiteContent = site): OrderingLink[] {
  return content.orderingLinks.flatMap((link) => {
    const parsed = orderingLinkSchema.safeParse(link);
    if (!parsed.success || parsed.data.kind !== "phone") return [];
    const href = safeHref(parsed.data.href);
    const label = parsed.data.label.trim();
    if (!href || !label || !/^tel:/i.test(href)) return [];
    return [{ ...parsed.data, href, label }];
  });
}

/**
 * Text pre-order stays off while `textNumber` is null.
 * Do not fall back to the shop line — it is unknown whether that line can receive texts.
 */
export function textOrderingEnabled(content: SiteContent = site): boolean {
  const number = content.textNumber;
  if (!number) return false;
  return Boolean(number.e164.trim() || number.tel.trim());
}
