import { PremiumLegalPage } from "@/components/experience/PremiumLegalPage";
import { PremiumBblPage } from "@/components/experience/PremiumBblPage";
import { PremiumCuratedPage } from "@/components/experience/PremiumCuratedPage";
import { PremiumFeminineWaistPage } from "@/components/experience/PremiumFeminineWaistPage";
import { PremiumGalleryPage } from "@/components/experience/PremiumGalleryPage";
import { PremiumLiposuctionPage } from "@/components/experience/PremiumLiposuctionPage";
import { PremiumLipo360Page } from "@/components/experience/PremiumLipo360Page";
import { PremiumStandardPage } from "@/components/experience/PremiumStandardPage";
import { PremiumTummyTuckPage } from "@/components/experience/PremiumTummyTuckPage";
import { getGalleryPage } from "@/content/curated/gallery-registry";
import { getCuratedPage } from "@/content/curated/registry";
import type { PageContent } from "@/lib/content";

export function PremiumPageView({ page }: { page: PageContent }) {
  if (page.slug === "privacy-policy") {
    return <PremiumLegalPage />;
  }

  if (page.slug === "liposuction") {
    return <PremiumLiposuctionPage page={page} />;
  }

  if (page.slug === "liposuction-360") {
    return <PremiumLipo360Page />;
  }

  if (page.slug === "brazilian-butt-lift-bbl") {
    return <PremiumBblPage />;
  }

  if (page.slug === "feminine-waist-contouring") {
    return <PremiumFeminineWaistPage />;
  }

  if (page.slug === "tummy-tuck") {
    return <PremiumTummyTuckPage />;
  }

  const gallery = getGalleryPage(page.slug);
  if (gallery) {
    return <PremiumGalleryPage content={gallery} />;
  }

  const curated = getCuratedPage(page.slug);
  if (curated) {
    return <PremiumCuratedPage content={curated} />;
  }

  return <PremiumStandardPage page={page} />;
}
