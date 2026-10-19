import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";
import type { Photo } from "@/content/types";
import { cn } from "@/lib/cn";
import { isBlockedMenuFile, photoDimensions, photoFileName } from "@/lib/photos";

/**
 * Takeout menu photos stay in public/images for price reference.
 * takeout-menu-pink.jpg and takeout-menu-green.jpg, and every menu-board
 * photo, are filtered out and never rendered.
 */
function visibleGalleryPhoto(photo: Photo): boolean {
  if (!photo.src.trim() || !photo.alt.trim()) return false;
  if (photo.category === "menu-board") return false;
  if (isBlockedMenuFile(photo.src)) return false;
  if (photoFileName(photo.src) === "takeout-menu-pink.jpg") return false;
  if (photoFileName(photo.src) === "takeout-menu-green.jpg") return false;
  return true;
}

function isLandscape(photo: Photo): boolean {
  const { width, height } = photoDimensions(photo);
  return width > height;
}

export function Gallery() {
  const photos = site.photos.filter(visibleGalleryPhoto);
  const food = photos.filter((photo) => photo.category === "food");
  const interiors = photos.filter((photo) => photo.category === "interior");
  const storefront = photos.filter((photo) => photo.category === "storefront");
  const other = photos.filter(
    (photo) =>
      photo.category !== "food" &&
      photo.category !== "interior" &&
      photo.category !== "storefront" &&
      photo.category !== "logo",
  );

  if (photos.length === 0) return null;

  const landscapes = food.filter(isLandscape);
  const portraits = food.filter((photo) => !isLandscape(photo));

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="bg-brand-deep text-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <SectionHeading invert kicker="From the counter" title="Gallery" id="gallery-heading" />
        {food.length > 0 && (
          <div className="mt-10">
            <h3 className="font-display text-3xl uppercase tracking-wide text-salmon">The food</h3>
            {landscapes.length > 0 && (
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {landscapes.map((photo) => (
                  <li key={photo.src}>
                    <PhotoFrame photo={photo} sizes="(min-width: 768px) 50vw, 100vw" />
                  </li>
                ))}
              </ul>
            )}
            {portraits.length > 0 && (
              <ul className="mt-3 columns-2 gap-3 md:columns-3">
                {portraits.map((photo) => (
                  <li key={photo.src} className="mb-3 break-inside-avoid">
                    <PhotoFrame photo={photo} sizes="(min-width: 768px) 33vw, 50vw" />
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {(storefront.length > 0 || interiors.length > 0 || other.length > 0) && (
          <div className="mt-14">
            <h3 className="font-display text-3xl uppercase tracking-wide text-salmon">The shop</h3>
            <ul className="mt-5 flex flex-wrap items-end gap-3">
              {storefront.map((photo) => (
                <li key={photo.src} className="w-32 sm:w-40">
                  <PhotoFrame photo={photo} sizes="160px" />
                </li>
              ))}
              {[...interiors, ...other].map((photo) => (
                <li key={photo.src} className="w-40 sm:w-56">
                  <PhotoFrame photo={photo} sizes="224px" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

function PhotoFrame({ photo, sizes }: { photo: Photo; sizes: string }) {
  const { width, height } = photoDimensions(photo);
  const tallStorefront = photo.category === "storefront";

  return (
    <div className={cn("overflow-hidden rounded-2xl bg-brand", tallStorefront && "max-w-40")}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={width}
        height={height}
        sizes={sizes}
        className="h-auto w-full"
      />
    </div>
  );
}
