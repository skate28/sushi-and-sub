"use client";

import { Phone } from "lucide-react";

import { useShopStatus } from "@/components/shop-status";
import { buttonPrimary } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { phoneLabel, telHref } from "@/lib/contact";
import { phoneOrderingLinks, safeHref } from "@/lib/ordering";

type Placement = "header" | "hero" | "bar" | "visit";

export function CallButton({
  placement = "hero",
  className,
}: {
  placement?: Placement;
  className?: string;
}) {
  const status = useShopStatus();
  const call = status?.call ?? site.phone;
  const ordering = phoneOrderingLinks()[0];
  const usingShopLine = !status || call.e164 === site.phone.e164 || call.tel === site.phone.tel;
  const href = (usingShopLine ? safeHref(ordering?.href) : null) ?? safeHref(telHref(call));
  if (!href) return null;

  const label = phoneLabel(call) || "the shop";
  const prominent = placement === "hero" || placement === "visit";

  return (
    <a
      href={href}
      aria-label={`Call ${label}`}
      className={cn(
        buttonPrimary,
        prominent && "min-h-14 px-6 text-base",
        placement === "visit" && "w-full sm:w-auto",
        placement === "bar" && "w-full px-3",
        className,
      )}
    >
      <Phone aria-hidden className="size-4 shrink-0" />
      {placement === "bar" ? (
        <span>{label}</span>
      ) : placement === "header" ? (
        <>
          <span className="sm:hidden">Call</span>
          <span className="hidden sm:inline">Call {label}</span>
        </>
      ) : (
        <span>Call {label}</span>
      )}
    </a>
  );
}
