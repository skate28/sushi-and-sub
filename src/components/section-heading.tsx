import { cn } from "@/lib/cn";

export function SectionHeading({
  kicker,
  title,
  id,
  invert = false,
  className,
}: {
  kicker?: string;
  title: string;
  id: string;
  invert?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      {kicker?.trim() && (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.22em]",
            invert ? "text-salmon" : "text-accent",
          )}
        >
          {kicker}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "font-display text-5xl uppercase leading-[0.88] tracking-wide md:text-7xl",
          kicker?.trim() && "mt-3",
        )}
      >
        {title}
      </h2>
    </div>
  );
}
