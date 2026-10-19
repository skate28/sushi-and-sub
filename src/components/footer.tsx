import Link from "next/link";

import { RollMark } from "@/components/roll-mark";
import { TextButton } from "@/components/text-button";
import { focusRing } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { telHref } from "@/lib/contact";
import { directionsHref } from "@/lib/maps";
import { safeHref } from "@/lib/ordering";

export function Footer() {
  const name = site.name.trim() || "Sushi & Sub";
  const phoneHref = safeHref(telHref(site.phone));
  const directions = directionsHref();
  const socials = site.socials.flatMap((social) => {
    const href = safeHref(social.href);
    if (!href || !social.label.trim()) return [];
    return [{ label: social.label.trim(), href }];
  });
  const credit = site.footerCredit.trim();

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <RollMark className="size-12" />
          <p className="mt-4 font-display text-5xl uppercase leading-none tracking-wide">{name}</p>
          {site.address.full.trim() && <p className="mt-4 text-paper/85">{site.address.full}</p>}
          {site.locationHint.trim() && (
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-paper/70">{site.locationHint}</p>
          )}
          {phoneHref && site.phone.display.trim() && (
            <a
              href={phoneHref}
              className={cn("mt-4 inline-block text-lg font-semibold underline decoration-salmon underline-offset-4", focusRing)}
            >
              {site.phone.display}
            </a>
          )}
        </div>
        <nav aria-label="Footer" className="grid content-start gap-2 text-sm font-semibold">
          <Link href="/#menu" className={cn("w-fit rounded-full", focusRing)}>
            Menu
          </Link>
          <Link href="/#gallery" className={cn("w-fit rounded-full", focusRing)}>
            Gallery
          </Link>
          <Link href="/#reviews" className={cn("w-fit rounded-full", focusRing)}>
            Reviews
          </Link>
          <Link href="/#visit" className={cn("w-fit rounded-full", focusRing)}>
            Visit
          </Link>
          {site.faq.length > 0 && (
            <Link href="/#faq" className={cn("w-fit rounded-full", focusRing)}>
              Questions
            </Link>
          )}
          {directions && (
            <a
              href={directions}
              className={cn("w-fit rounded-full", focusRing)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
            </a>
          )}
        </nav>
        <div className="grid content-start gap-3 text-sm">
          {site.hours.summary.trim() && <p className="text-base font-semibold">{site.hours.summary}</p>}
          <p className="max-w-xs text-paper/75">Walk in, or call ahead and pick up.</p>
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              className={cn("w-fit underline underline-offset-4", focusRing)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label}
            </a>
          ))}
          <TextButton className="mt-2 w-fit" />
        </div>
      </div>
      {credit && (
        <div className="border-t border-paper/15 px-5 py-6 pb-36 md:pb-6">
          <p className="text-center text-sm">
            <a
              href="https://nicklopacki.com"
              className={cn("underline decoration-salmon underline-offset-4", focusRing)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {credit}
            </a>
          </p>
        </div>
      )}
    </footer>
  );
}
