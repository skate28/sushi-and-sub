import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { photoByFile, photoDimensions } from "@/lib/photos";

export function About() {
  const paragraphs = site.about.paragraphs.map((paragraph) => paragraph.trim()).filter(Boolean);
  const heading = site.about.heading.trim();
  const storefront = photoByFile("storefront-sign-dusk.jpg");
  const interiors = ["interior-counter.jpg", "interior-dining-room.jpg"]
    .map((file) => photoByFile(file))
    .filter((photo) => photo !== null);
  const hasPhotos = Boolean(storefront || interiors.length > 0);

  if (!heading && paragraphs.length === 0 && !hasPhotos) return null;

  return (
    <section id="about" aria-labelledby="about-heading" className="bg-brand text-paper">
      <div className="h-2 bg-salmon" aria-hidden />
      <div
        className={cn(
          "mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:py-24",
          hasPhotos && "lg:grid-cols-[1.12fr_0.88fr] lg:items-center",
        )}
      >
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-salmon">The counter</p>
          <h2
            id="about-heading"
            className="mt-3 max-w-xl font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl"
          >
            {heading || site.name}
          </h2>
          {site.opened.trim() && (
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-salmon">
              Opened {site.opened.trim()}
            </p>
          )}
          {paragraphs.length > 0 && (
            <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-paper/90">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
          {site.address.full.trim() && (
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-salmon">
              {site.address.full}
            </p>
          )}
        </Reveal>
        {hasPhotos && (
          <Reveal delay={0.08}>
            <div className="grid grid-cols-[6.5rem_1fr] gap-3 sm:grid-cols-[8.5rem_1fr]">
              {storefront && (
                <div
                  className={cn(
                    "relative h-full min-h-40 overflow-hidden rounded-2xl bg-brand-deep",
                    interiors.length > 1 && "row-span-2",
                  )}
                >
                  <Image
                    src={storefront.src}
                    alt={storefront.alt}
                    fill
                    sizes="136px"
                    className="object-cover object-top"
                  />
                </div>
              )}
              {interiors.map((photo) => {
                const { width, height } = photoDimensions(photo);
                return (
                  <div key={photo.src} className="overflow-hidden rounded-2xl bg-brand-deep">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={width}
                      height={height}
                      sizes="(min-width: 1024px) 24rem, 70vw"
                      className="h-auto w-full"
                    />
                  </div>
                );
              })}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
