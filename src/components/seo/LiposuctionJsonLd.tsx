import { buildLiposuctionSchema } from "@/lib/seo/liposuction-schema";

export function LiposuctionJsonLd() {
  const schema = buildLiposuctionSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
