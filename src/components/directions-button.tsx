import { MapPin } from "lucide-react";

import { buttonSalmon, buttonSecondary } from "@/components/styles";
import { cn } from "@/lib/cn";
import { directionsHref } from "@/lib/maps";

type Placement = "hero" | "bar" | "visit";

export function DirectionsButton({
  placement = "hero",
  className,
}: {
  placement?: Placement;
  className?: string;
}) {
  const href = directionsHref();
  if (!href) return null;

  const prominent = placement === "hero" || placement === "visit";

  return (
    <a
      href={href}
      className={cn(
        placement === "hero" ? buttonSecondary : buttonSalmon,
        prominent && "min-h-14 px-6 text-base",
        placement === "visit" && "w-full sm:w-auto",
        placement === "bar" && "w-full px-3",
        className,
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MapPin aria-hidden className="size-4 shrink-0" />
      Get directions
    </a>
  );
}
