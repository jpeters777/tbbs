import { PremiumUnifiedLayout } from "@/components/experience/PremiumUnifiedLayout";
import type { PageContent } from "@/lib/content";
import { preparePremiumPageData } from "@/lib/premium-page-extractors";

export function PremiumStandardPage({ page }: { page: PageContent }) {
  const data = preparePremiumPageData(page);
  return <PremiumUnifiedLayout data={data} />;
}
