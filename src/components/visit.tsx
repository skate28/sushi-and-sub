import { CallButton } from "@/components/call-button";
import { DirectionsButton } from "@/components/directions-button";
import { HoursNote } from "@/components/hours-note";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TextButton } from "@/components/text-button";
import { site } from "@/content/site";
import { telHref } from "@/lib/contact";
import { scheduleRows } from "@/lib/hours";
import { directionsHref, mapEmbedSrc } from "@/lib/maps";
import { safeHref } from "@/lib/ordering";

export function Visit() {
  const address = site.address.full.trim();
  const hint = site.locationHint.trim();
  const payment = site.paymentNote.trim();
  const phoneHref = safeHref(telHref(site.phone));
  const directions = directionsHref();
  const embed = mapEmbedSrc();
  const rows = scheduleRows(site.hours);
  const hasAnything = Boolean(address || hint || phoneHref || directions || embed || rows.length || site.hours.summary.trim());

  if (!hasAnything) return null;

  return (
    <section id="visit" aria-labelledby="visit-heading" className="bg-rice">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:py-24">
        <Reveal>
          <SectionHeading kicker="Beach & University" title="Visit" id="visit-heading" />
          {address && <p className="mt-6 text-xl leading-snug">{address}</p>}
          {hint && <p className="mt-2 max-w-xl text-ink/80">{hint}</p>}
          <p className="mt-4 max-w-xl rounded-2xl border border-salmon/50 bg-salmon/15 px-4 py-3 text-sm leading-relaxed">
            Map apps often stop at the beauty store out front. The shop is in the plaza behind it,
            next to The UPS Store.
          </p>
          <div className="mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Hours</h3>
            <HoursNote className="mt-3 text-base font-medium" />
            {rows.length > 0 && (
              <ul className="mt-4 max-w-sm divide-y divide-ink/10">
                {rows.map((row) => (
                  <li key={row.label} className="flex items-baseline justify-between gap-6 py-2">
                    <span className="font-semibold">{row.label}</span>
                    <span className={row.value === "Closed" ? "font-semibold text-accent" : ""}>
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {payment && <p className="mt-4 text-sm font-medium">{payment}</p>}
          </div>
          {phoneHref && site.phone.display.trim() && (
            <p className="mt-6">
              <a href={phoneHref} className="text-lg font-semibold underline decoration-salmon decoration-2 underline-offset-4">
                {site.phone.display}
              </a>
            </p>
          )}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CallButton placement="visit" />
            <DirectionsButton placement="visit" />
            <TextButton />
          </div>
        </Reveal>
        {embed && (
          <Reveal delay={0.08} className="min-h-80">
            <iframe
              title={`Map of ${site.name || "Sushi & Sub"}${address ? ` at ${address}` : ""}`}
              src={embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full rounded-[1.75rem] border border-ink/10 bg-paper lg:h-full lg:min-h-[32rem]"
            />
          </Reveal>
        )}
      </div>
    </section>
  );
}
