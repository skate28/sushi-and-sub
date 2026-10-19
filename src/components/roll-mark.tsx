import { cn } from "@/lib/cn";

/** Maki mark. Rice ring so it stays visible on navy. */
export function RollMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={cn("shrink-0", className)} aria-hidden>
      <circle cx="24" cy="24" r="23" fill="var(--ss-rice)" />
      <circle cx="24" cy="24" r="20" fill="var(--ss-nori)" />
      <circle cx="24" cy="24" r="13.5" fill="var(--ss-rice)" />
      <circle cx="24" cy="24" r="5.5" fill="var(--ss-salmon)" />
      <circle cx="19.5" cy="21" r="1.4" fill="var(--ss-accent)" />
      <circle cx="28" cy="27" r="1.15" fill="var(--ss-nori)" />
    </svg>
  );
}
