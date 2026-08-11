import { buildGalleryPageSchema } from "@/lib/seo/gallery-page-schema";
import type { GalleryPageContent } from "@/lib/premium-curated/gallery-types";

export function GalleryPageJsonLd({ content }: { content: GalleryPageContent }) {
  const schema = buildGalleryPageSchema(content);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
