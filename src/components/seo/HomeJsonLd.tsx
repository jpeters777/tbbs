import { buildHomeSchema } from "@/lib/seo/home-schema";

/** Structured data for homepage SEO and AI search engines. */
export function HomeJsonLd() {
  const schema = buildHomeSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
