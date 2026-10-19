import { site } from "@/content/site";
import type { Photo } from "@/content/types";

/**
 * Printed takeout menus stay in `public/images/` for price reference.
 * They are never a hero, a gallery tile, or any other UI image.
 */
const BLOCKED_MENU_FILES = new Set(["takeout-menu-pink.jpg", "takeout-menu-green.jpg"]);

export function photoFileName(src: string): string {
  const path = src.trim().split("?")[0]?.split("#")[0] ?? "";
  return (path.split("/").pop() ?? "").toLowerCase();
}

export function isBlockedMenuFile(src: string): boolean {
  return BLOCKED_MENU_FILES.has(photoFileName(src));
}

export function isPublicPhoto(photo: Photo): boolean {
  if (!photo.src.trim() || !photo.alt.trim()) return false;
  if (photo.category === "menu-board") return false;
  if (isBlockedMenuFile(photo.src)) return false;
  return true;
}

export function photoDimensions(photo: Pick<Photo, "width" | "height" | "category">): {
  width: number;
  height: number;
} {
  if (photo.width && photo.width > 0 && photo.height && photo.height > 0) {
    return { width: photo.width, height: photo.height };
  }
  if (photo.category === "storefront") return { width: 608, height: 1080 };
  if (photo.category === "logo") return { width: 360, height: 360 };
  return { width: 1200, height: 1600 };
}

export function publicPhotos(photos: Photo[] = site.photos): Photo[] {
  return photos.filter(isPublicPhoto);
}

export function photoByFile(file: string, photos: Photo[] = site.photos): Photo | null {
  const target = file.toLowerCase();
  return publicPhotos(photos).find((photo) => photoFileName(photo.src) === target) ?? null;
}

/** Portrait for the homepage side column. `site.heroImage` wins. */
export function heroPhoto(
  photos: Photo[] = site.photos,
  heroImage: string | undefined = site.heroImage,
): Photo | null {
  const explicit = heroImage?.trim();
  if (explicit) {
    if (isBlockedMenuFile(explicit)) return null;
    const match = photos.find((photo) => photo.src.trim() === explicit);
    if (!match || !isPublicPhoto(match)) return null;
    return match;
  }
  return photos.find((photo) => photo.hero && isPublicPhoto(photo)) ?? null;
}
