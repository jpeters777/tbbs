import type { GalleryPageContent } from "@/lib/premium-curated/gallery-types";
import { breastSurgeryGalleryPage } from "@/content/curated/gallery/breast-surgery-gallery";
import { femaleBaGalleryPage } from "@/content/curated/gallery/female-b-a-gallery";
import { maleSurgeryGalleryPage } from "@/content/curated/gallery/male-surgery-gallery";

const GALLERY_PAGES: Record<string, GalleryPageContent> = {
  "female-b-a-gallery": femaleBaGalleryPage,
  "breast-surgery-gallery": breastSurgeryGalleryPage,
  "male-surgery-gallery": maleSurgeryGalleryPage,
};

export const GALLERY_SLUGS = Object.keys(GALLERY_PAGES);

export function getGalleryPage(slug: string): GalleryPageContent | null {
  return GALLERY_PAGES[slug] ?? null;
}

export function isGallerySlug(slug: string): boolean {
  return slug in GALLERY_PAGES;
}

export function getGallerySeo(slug: string) {
  const page = getGalleryPage(slug);
  return page?.seo ?? null;
}
