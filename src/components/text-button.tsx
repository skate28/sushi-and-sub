import { MessageSquare } from "lucide-react";

import { buttonSecondary } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { smsHref } from "@/lib/contact";
import { safeHref, textOrderingEnabled } from "@/lib/ordering";

/**
 * Hidden while `textNumber` is null. The shop line's text capability is unknown,
 * so this never falls back to a normal phone number.
 */
export function TextButton({ className }: { className?: string }) {
  if (!textOrderingEnabled() || !site.textNumber) return null;

  const href = safeHref(smsHref(site.textNumber, site.preorder.textMessage));
  if (!href) return null;

  const label = site.preorder.textButtonLabel.trim() || "Text us your order";

  return (
    <a href={href} className={cn(buttonSecondary, className)}>
      <MessageSquare aria-hidden className="size-4 shrink-0" />
      {label}
    </a>
  );
}
