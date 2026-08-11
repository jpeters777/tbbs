import { buildFeminineWaistSchema } from "@/lib/seo/feminine-waist-schema";

export function FeminineWaistJsonLd() {
  const schema = buildFeminineWaistSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
