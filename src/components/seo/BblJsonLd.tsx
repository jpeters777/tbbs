import { buildBblSchema } from "@/lib/seo/bbl-schema";

export function BblJsonLd() {
  const schema = buildBblSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
