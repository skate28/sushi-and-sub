import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";
import { formatUsd } from "@/lib/money";

export function MenuSection() {
  const categories = site.menu.filter((category) => category.name.trim());
  if (categories.length === 0 && !site.menuNote.trim()) return null;

  return (
    <section id="menu" aria-labelledby="menu-heading" className="bg-rice">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <Reveal>
          <SectionHeading kicker="Rolled to order" title="Menu" id="menu-heading" />
          {site.priceRange.trim() && (
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-ink/70">
              Price range <span className="text-ink">{site.priceRange.trim()}</span>
            </p>
          )}
          {site.menuNote.trim() && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/85">{site.menuNote}</p>
          )}
        </Reveal>
        {categories.length > 0 && (
          <div className="mt-10 rounded-[2rem] bg-paper px-5 py-8 shadow-[0_30px_80px_-48px_rgba(12,31,64,0.8)] ring-1 ring-ink/10 sm:px-8 sm:py-10 lg:px-12">
            <div className="grid gap-x-16 gap-y-12 lg:grid-cols-2">
              {categories.map((category) => {
                const items = category.items.filter((item) => item.name.trim());
                const realItems = items.filter((item) => !item.placeholder);
                const visibleItems = realItems.length > 0 ? realItems : items;
                return (
                  <section key={category.id} aria-labelledby={`${category.id}-heading`}>
                    <div className="border-b border-ink/10 pb-3">
                      <h3
                        id={`${category.id}-heading`}
                        className="font-display text-4xl uppercase leading-none tracking-wide"
                      >
                        {category.name}
                      </h3>
                      {category.description?.trim() && (
                        <p className="mt-2 text-sm text-ink/70">{category.description}</p>
                      )}
                    </div>
                    {visibleItems.length === 0 ? (
                      <p className="mt-4 text-ink/80">Menu coming soon</p>
                    ) : (
                      <ul className="divide-y divide-ink/10">
                        {visibleItems.map((item) => (
                          <li key={item.id} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-3 py-4">
                            <span className="font-display text-xl leading-none text-accent">
                              {item.number ?? ""}
                            </span>
                            <div>
                              <div className="flex items-baseline gap-3">
                                <h4 className="font-semibold leading-tight">{item.name}</h4>
                                <span
                                  aria-hidden
                                  className="mb-1 hidden min-w-4 flex-1 border-b border-dotted border-ink/25 sm:block"
                                />
                                {typeof item.price === "number" && Number.isFinite(item.price) && (
                                  <p className="ml-auto shrink-0 font-display text-2xl leading-none tabular-nums">
                                    {formatUsd(item.price)}
                                  </p>
                                )}
                              </div>
                              {item.description?.trim() && (
                                <p className="mt-1 text-sm leading-relaxed text-ink/75">
                                  {item.description}
                                </p>
                              )}
                              {item.pieces ? (
                                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-nori">
                                  {item.pieces} pieces
                                </p>
                              ) : null}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
