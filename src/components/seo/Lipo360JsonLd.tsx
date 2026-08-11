import { buildLipo360Schema } from "@/lib/seo/lipo-360-schema";

export function Lipo360JsonLd() {
  const schema = buildLipo360Schema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
