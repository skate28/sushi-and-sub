import Link from "next/link";

import { CallButton } from "@/components/call-button";
import { RollMark } from "@/components/roll-mark";
import { focusRing } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { publicPhotos } from "@/lib/photos";
import { safeHref } from "@/lib/ordering";

export function Header() {
  const name = site.name.trim() || "Sushi & Sub";
  const links = [
    { href: "/#menu", label: "Menu", show: site.menu.some((category) => category.name.trim()) },
    {
      href: "/#about",
      label: "About",
      show: Boolean(site.about.heading.trim() || site.about.paragraphs.some((paragraph) => paragraph.trim())),
    },
    { href: "/#gallery", label: "Gallery", show: publicPhotos().length > 0 },
    {
      href: "/#reviews",
      label: "Reviews",
      show: site.testimonials.some((item) => item.quote.trim() && safeHref(item.sourceUrl)),
    },
    { href: "/#visit", label: "Visit", show: true },
  ].filter((link) => link.show);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-rice/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-5 gap-y-2 px-5 py-3">
        <Link
          href="/"
          className={cn("mr-auto inline-flex items-center gap-2 rounded-full", focusRing)}
        >
          <RollMark className="size-10" />
          <span className="font-display text-[1.65rem] uppercase leading-none tracking-wide">{name}</span>
        </Link>
        <CallButton placement="header" />
        <nav
          aria-label="Primary"
          className="order-3 flex w-full gap-4 overflow-x-auto pb-1 text-sm font-semibold md:order-none md:w-auto md:pb-0"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "whitespace-nowrap rounded-full px-1 py-2 text-ink/80 underline-offset-4 hover:text-ink hover:underline hover:decoration-salmon hover:decoration-2",
                focusRing,
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="h-1 bg-salmon" aria-hidden />
    </header>
  );
}
