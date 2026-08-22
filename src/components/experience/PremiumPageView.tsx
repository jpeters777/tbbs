import { PremiumLegalPage } from "@/components/experience/PremiumLegalPage";
import { PremiumBblPage } from "@/components/experience/PremiumBblPage";
import { PremiumCuratedPage } from "@/components/experience/PremiumCuratedPage";
import { PremiumFeminineWaistPage } from "@/components/experience/PremiumFeminineWaistPage";
import { PremiumGalleryPage } from "@/components/experience/PremiumGalleryPage";
import { PremiumLiposuctionPage } from "@/components/experience/PremiumLiposuctionPage";
import { PremiumLipo360Page } from "@/components/experience/PremiumLipo360Page";
import { PremiumStandardPage } from "@/components/experience/PremiumStandardPage";
import { PremiumTummyTuckPage } from "@/components/experience/PremiumTummyTuckPage";
import { HeroPreload } from "@/components/experience/HeroPreload";
import { getGalleryPage } from "@/content/curated/gallery-registry";
import { getCuratedPage } from "@/content/curated/registry";
import type { PageContent } from "@/lib/content";
import { imageSrc } from "@/lib/content";
import { resolveHeroSrc } from "@/lib/hero-images";
import type { ReactNode } from "react";

function withHeroPreload(page: PageContent, content: ReactNode) {
  const src = imageSrc(page.hero);
  if (!src || resolveHeroSrc(src) === src) {
    return content;
  }
  return (
    <>
      <HeroPreload src={src} />
      {content}
    </>
  );
}

export function PremiumPageView({ page }: { page: PageContent }) {
  if (page.slug === "privacy-policy") {
    return <PremiumLegalPage />;
  }

  if (page.slug === "liposuction") {
    return withHeroPreload(page, <PremiumLiposuctionPage page={page} />);
  }

  if (page.slug === "liposuction-360") {
    return withHeroPreload(page, <PremiumLipo360Page />);
  }

  if (page.slug === "brazilian-butt-lift-bbl") {
    return withHeroPreload(page, <PremiumBblPage />);
  }

  if (page.slug === "feminine-waist-contouring") {
    return withHeroPreload(page, <PremiumFeminineWaistPage />);
  }

  if (page.slug === "tummy-tuck") {
    return withHeroPreload(page, <PremiumTummyTuckPage />);
  }

  const gallery = getGalleryPage(page.slug);
  if (gallery) {
    return <PremiumGalleryPage content={gallery} images={page.images} />;
  }

  const curated = getCuratedPage(page.slug);
  if (curated) {
    return withHeroPreload(page, <PremiumCuratedPage content={curated} />);
  }

  return withHeroPreload(page, <PremiumStandardPage page={page} />);
}
