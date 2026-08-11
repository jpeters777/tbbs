import type { PageContent } from "@/lib/content";
import { getPageHeroImage, getPageHeroTitle } from "@/lib/premium-page-utils";
import { resolveOgImage } from "@/lib/seo/og-image";

export function curatedSeoFromPage(page: PageContent) {
  const heroImage = getPageHeroImage(page);
  return {
    title: page.title,
    description: page.description,
    ogImage: resolveOgImage(page.ogImage, heroImage),
  };
}

export function curatedVisualsFromPage(page: PageContent) {
  const alt = page.hero?.alt?.replace(/&#39;/g, "'").trim();
  return {
    hero: {
      src: getPageHeroImage(page),
      alt: alt || `${getPageHeroTitle(page)} in Tampa Bay`,
    },
  };
}
