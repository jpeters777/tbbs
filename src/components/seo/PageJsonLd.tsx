import type { PageContent } from "@/lib/content";
import { buildPageSchema } from "@/lib/seo/page-schema";

export function PageJsonLd({ page }: { page: PageContent }) {
  const schema = buildPageSchema(page);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
