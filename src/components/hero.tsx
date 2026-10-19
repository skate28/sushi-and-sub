"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { CallButton } from "@/components/call-button";
import { DirectionsButton } from "@/components/directions-button";
import { HoursNote } from "@/components/hours-note";
import { RollMark } from "@/components/roll-mark";
import { TrustBadge } from "@/components/trust-badge";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { scheduleRows } from "@/lib/hours";
import { heroPhoto } from "@/lib/photos";

function signLines(name: string): string[] {
  const match = /^(.*?)\s*&\s*(.+)$/.exec(name.trim());
  if (!match?.[1] || !match[2]) return [name.trim() || "Sushi"];
  return [match[1], `& ${match[2]}`];
}

export function Hero() {
  const shouldReduce = useReducedMotion();
  const hero = heroPhoto();
  const name = site.name.trim() || "Sushi & Sub";
  const lines = signLines(name);
  const place = [site.address.neighborhood, site.address.city].filter((part) => part.trim()).join(", ");
  const rows = scheduleRows(site.hours);
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative overflow-hidden bg-rice">
      <div aria-hidden className="pointer-events-none absolute -left-24 top-10 size-[28rem] rounded-full bg-salmon/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-16 bottom-0 size-[22rem] rounded-full bg-brand/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-start gap-8 px-5 py-12 sm:gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(16rem,26rem)] lg:py-16">
        <div className="order-1 lg:col-start-1 lg:row-start-1">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.22em] text-accent"
            initial={shouldReduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.45, ease }}
          >
            Sushi{place ? ` · ${place}` : ""}
          </motion.p>
          <motion.h1
            className="mt-3 font-display text-[clamp(4.25rem,12vw,7.5rem)] uppercase leading-[0.82] tracking-tight text-ink"
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.6, ease }}
          >
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h1>
          {site.tagline.trim() && (
            <p className="mt-4 max-w-xl font-serif text-3xl italic leading-tight text-brand md:text-4xl">
              {site.tagline}
            </p>
          )}
        </div>
        <motion.div
          className="order-2 mx-auto w-full min-w-0 max-w-[24rem] pb-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:max-w-none lg:justify-self-end"
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.7, delay: 0.08, ease }}
        >
          {hero ? <HeroPortrait photo={hero} /> : <RollMark className="mx-auto size-56" />}
        </motion.div>
        <div className="order-3 lg:col-start-1 lg:row-start-2">
          <div className="flex flex-col items-start gap-3">
            <TrustBadge />
            <HoursNote className="max-w-xl text-base font-medium" />
          </div>
          <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <CallButton placement="hero" />
            <DirectionsButton placement="hero" />
          </div>
          {site.locationHint.trim() && (
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink/80">{site.locationHint}</p>
          )}
        </div>
        {rows.length > 0 && (
          <ul className="order-4 col-span-full grid grid-cols-2 gap-4 border-t border-ink/10 pt-6 sm:grid-cols-3">
            {rows.map((row) => (
              <li key={row.label}>
                <p
                  className={cn(
                    "font-display text-3xl uppercase leading-none tracking-wide",
                    row.value === "Closed" && "text-accent",
                  )}
                >
                  {row.value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">{row.label}</p>
              </li>
            ))}
            <li>
              <p className="font-display text-3xl uppercase leading-none tracking-wide">Pickup</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">Walk in or call</p>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
}

function HeroPortrait({ photo }: { photo: NonNullable<ReturnType<typeof heroPhoto>> }) {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -bottom-3 -left-3 top-8 w-[94%] rounded-[1.8rem] bg-salmon" />
      <div className="relative aspect-[3/4] overflow-hidden rounded-[1.8rem] bg-brand shadow-[0_28px_70px_-32px_rgba(12,31,64,0.75)]">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority
          sizes="(min-width: 1024px) 26rem, 90vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
