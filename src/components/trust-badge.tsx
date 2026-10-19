import { Star } from "lucide-react";

import { site } from "@/content/site";

export function TrustBadge({ className }: { className?: string }) {
  const rating = site.rating;
  if (!rating || !Number.isFinite(rating.value) || rating.count <= 0) return null;

  const source = rating.source.trim();

  return (
    <p
      className={
        className ??
        "inline-flex items-center gap-2 rounded-full bg-paper px-3 py-1.5 text-sm font-semibold text-ink ring-1 ring-ink/10"
      }
    >
      <Star aria-hidden className="size-4 fill-salmon text-salmon" />
      <span>{rating.value.toFixed(1)}</span>
      <span className="font-medium text-ink/75">
        {rating.count.toLocaleString("en-US")}
        {source ? ` ${source}` : ""} reviews
      </span>
    </p>
  );
}
