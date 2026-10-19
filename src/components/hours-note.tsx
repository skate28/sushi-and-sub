"use client";

import { useShopStatus } from "@/components/shop-status";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function HoursNote({ className }: { className?: string }) {
  const status = useShopStatus();
  const summary = site.hours.summary.trim();
  let line = summary || "Hours coming soon";
  let tone: "neutral" | "open" | "closed" = "neutral";

  if (status?.isOpen === true) {
    line = status.todayWindow ? `Open now · Today ${status.todayWindow}` : "Open now";
    tone = "open";
  } else if (status?.isOpen === false && status.closedNotice) {
    line = status.closedNotice;
    tone = "closed";
  }

  if (!line) return null;

  return (
    <p className={cn("inline-flex items-start gap-2", className)}>
      <span
        aria-hidden
        className={cn(
          "mt-1.5 size-2 shrink-0 rounded-full",
          tone === "open" && "bg-nori",
          tone === "closed" && "bg-accent",
          tone === "neutral" && "bg-salmon",
        )}
      />
      <span>{line}</span>
    </p>
  );
}
