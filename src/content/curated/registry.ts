import type { CuratedPageContent } from "@/lib/premium-curated/types";
import { mommyMakeoverPage } from "@/content/curated/body/mommy-makeover";
import { thighLiposuctionPage } from "@/content/curated/body/thigh-liposuction";
import { armLipo360ArmLiftPage } from "@/content/curated/body/arm-lipo-360-arm-lift";
import { femaleChinLiposuctionPage } from "@/content/curated/body/female-chin-liposuction";
import { labiaplastyPage } from "@/content/curated/body/labiaplasty";
import { breastAugmentationContent } from "@/content/curated/breast/breast-augmentation";
import { breastLiftContent } from "@/content/curated/breast/breast-lift";
import { breastReductionContent } from "@/content/curated/breast/breast-reduction";
import { breastRejuvenationContent } from "@/content/curated/breast/breast-rejuvenation";
import { breastRevisionContent } from "@/content/curated/breast/breast-revision";
import { breastImplantExchangeContent } from "@/content/curated/breast/breast-implant-exchange";
import { breastsContent } from "@/content/curated/breast/breasts";
import { maleLiposuction360Content } from "@/content/curated/men/male-liposuction-360-1";
import { maleChestReductionContent } from "@/content/curated/men/male-chest-reduction";
import { maleAbdominalSculptingContent } from "@/content/curated/men/male-abdominal-sculpting";
import { maleTummyTuckContent } from "@/content/curated/men/male-tummy-tuck-1";
import { maleChinLiposuctionContent } from "@/content/curated/men/male-chin-liposuction";
import { adultCircumcisionContent } from "@/content/curated/men/adult-circumcision";
import { menHubContent } from "@/content/curated/men/men";
import { womenHubContent } from "@/content/curated/hubs/women";
import { faqsPage } from "@/content/curated/resources/faqs";
import { financingOptionsPage } from "@/content/curated/resources/financing-options";
import { travelInformationPage } from "@/content/curated/resources/travel-information";
import { recoveryGuidesPage } from "@/content/curated/resources/recovery-guides";
import { outOfTownPatientGuidePage } from "@/content/curated/resources/out-of-town-patient-guide";
import { resourcesPage } from "@/content/curated/resources/resources";
import { howWeSelectProvidersPage } from "@/content/curated/resources/how-we-select-providers";

const CURATED_PAGES: Record<string, CuratedPageContent> = {
  "mommy-makeover": mommyMakeoverPage,
  "thigh-liposuction": thighLiposuctionPage,
  "arm-lipo-360----arm-lift": armLipo360ArmLiftPage,
  "female-chin-liposuction": femaleChinLiposuctionPage,
  labiaplasty: labiaplastyPage,
  "breast-augmentation": breastAugmentationContent,
  "breast-lift": breastLiftContent,
  "breast-reduction": breastReductionContent,
  "breast-rejuvenation": breastRejuvenationContent,
  "breast-revision": breastRevisionContent,
  "breast-implant-exchange": breastImplantExchangeContent,
  breasts: breastsContent,
  "male-liposuction-360-1": maleLiposuction360Content,
  "male-chest-reduction": maleChestReductionContent,
  "male-abdominal-sculpting": maleAbdominalSculptingContent,
  "male-tummy-tuck-1": maleTummyTuckContent,
  "male-chin-liposuction": maleChinLiposuctionContent,
  "adult-circumcision": adultCircumcisionContent,
  men: menHubContent,
  women: womenHubContent,
  faqs: faqsPage,
  "financing-options": financingOptionsPage,
  "travel-information": travelInformationPage,
  "recovery-guides": recoveryGuidesPage,
  "out-of-town-patient-guide": outOfTownPatientGuidePage,
  resources: resourcesPage,
  "how-we-select-providers": howWeSelectProvidersPage,
};

export const CURATED_SLUGS = Object.keys(CURATED_PAGES);

export function getCuratedPage(slug: string): CuratedPageContent | null {
  return CURATED_PAGES[slug] ?? null;
}

export function isCuratedSlug(slug: string): boolean {
  return slug in CURATED_PAGES;
}
