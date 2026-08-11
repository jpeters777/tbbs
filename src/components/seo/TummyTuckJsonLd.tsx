import { buildTummyTuckSchema } from "@/lib/seo/tummy-tuck-schema";

export function TummyTuckJsonLd() {
  const schema = buildTummyTuckSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
