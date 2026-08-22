import { resolveHeroMobileSrc, resolveHeroSrc } from "@/lib/hero-images";

/** Preload LCP hero art early; prefer the mobile asset on narrow viewports. */
export function HeroPreload({ src }: { src: string }) {
  const desktop = resolveHeroSrc(src);
  const mobile = resolveHeroMobileSrc(src);

  if (!desktop.endsWith(".webp")) {
    return <link rel="preload" as="image" href={desktop} fetchPriority="high" />;
  }

  return (
    <>
      <link
        rel="preload"
        as="image"
        href={mobile ?? desktop}
        type="image/webp"
        fetchPriority="high"
        media="(max-width: 768px)"
      />
      <link
        rel="preload"
        as="image"
        href={desktop}
        type="image/webp"
        fetchPriority="high"
        media="(min-width: 769px)"
      />
    </>
  );
}
