import { buildCuratedPageSchema } from "@/lib/seo/curated-page-schema";
import type { CuratedPageContent } from "@/lib/premium-curated/types";

export function CuratedPageJsonLd({ content }: { content: CuratedPageContent }) {
  const schema = buildCuratedPageSchema(content);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
