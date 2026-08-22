/** Pre-compressed WebP heroes (see scripts/optimize-hero-images.mjs). */
const HERO_WEBP: Record<string, string> = {
  "/images/shutterstock_99994967_801684509466.JPG": "/images/heroes/home.webp",
  "/images/shutterstock_263340653-b2373a9.jpg": "/images/heroes/liposuction-hub.webp",
  "/images/shutterstock_359476844_801685051614.JPG": "/images/heroes/recovery-resources.webp",
  "/images/shutterstock_125481776.jpg": "/images/heroes/male-gallery.webp",
  "/images/blob-10293ad.png": "/images/heroes/lipo-360.webp",
  "/images/blob-2294999.png": "/images/heroes/bbl.webp",
  "/images/blob-8f7eab9.png": "/images/heroes/tummy-tuck.webp",
  "/images/blob-b4cdcb1.png": "/images/heroes/liposuction-secondary.webp",
  "/images/blob-d88ea83.png": "/images/heroes/home-about.webp",
  "/images/17-6f8c86a.png": "/images/heroes/travel.webp",
  "/images/blob-504fd1c.png": "/images/heroes/financing.webp",
  "/images/blob-0773ab0.png": "/images/heroes/mommy-makeover.webp",
  "/images/blob-71f8471.png": "/images/heroes/breast-augmentation.webp",
  "/images/blob-e67c52e.png": "/images/heroes/breasts.webp",
  "/images/blob-1a6bc00.png": "/images/heroes/female-chin-lipo.webp",
  "/images/blob-832e2e0.png": "/images/heroes/labiaplasty.webp",
  "/images/blob-f945845.png": "/images/heroes/thigh-lipo.webp",
  "/images/blob-ab62aae.png": "/images/heroes/arm-lipo.webp",
  "/images/blob-5c35b08.png": "/images/heroes/breast-lift.webp",
  "/images/blob-4202c05.png": "/images/heroes/breast-reduction.webp",
  "/images/blob-d9d6b23.png": "/images/heroes/breast-rejuvenation.webp",
  "/images/blob-2412f2d.png": "/images/heroes/breast-revision.webp",
  "/images/blob-0205933.png": "/images/heroes/breast-implant-exchange.webp",
};

/** Cap decoded hero width — avoids 100vw over-fetch on large screens. */
export const HERO_IMAGE_SIZES = "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1400px";

export function resolveHeroSrc(src: string): string {
  return HERO_WEBP[src] ?? src;
}

export function resolveHeroMobileSrc(src: string): string | undefined {
  const desktop = HERO_WEBP[src];
  if (!desktop) return undefined;
  return desktop.replace(/\.webp$/, "-640.webp");
}

export function resolveHeroSrcSet(src: string): string | undefined {
  const desktop = resolveHeroSrc(src);
  const mobile = resolveHeroMobileSrc(src);
  if (!mobile || mobile === desktop) return undefined;
  return `${mobile} 640w, ${desktop} 1400w`;
}
