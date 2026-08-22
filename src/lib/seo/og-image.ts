import { resolveHeroSrc } from "@/lib/hero-images";
import { SITE_URL } from "@/lib/site";

/** Shared generic OG image used as a placeholder before hero-specific images are applied. */
export const GENERIC_OG_IMAGE =
  "https://img1.wsimg.com/isteam/ip/63a9ae1f-fda4-44c0-addf-b31927ec5222/shutterstock_263340653-b2373a9.jpg";

export function isGenericOgImage(ogImage?: string): boolean {
  if (!ogImage) return true;
  return ogImage.includes("wsimg.com/isteam/ip/63a9ae1f");
}

/** Prefer page hero art for social sharing when OG is unset or still the generic placeholder. */
export function resolveOgImage(ogImage: string | undefined, heroSrc: string): string {
  const optimizedHero = resolveHeroSrc(heroSrc);
  if (isGenericOgImage(ogImage)) return optimizedHero;
  return ogImage!;
}

export function ogImageAbsoluteUrl(ogImage: string): string {
  return ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;
}
