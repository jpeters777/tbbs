import Image from "next/image";
import {
  HERO_IMAGE_SIZES,
  resolveHeroSrc,
  resolveHeroSrcSet,
} from "@/lib/hero-images";

type PremiumHeroMediaProps = {
  src: string;
  alt: string;
  className?: string;
  /** Set false for secondary heroes on the same page. */
  priority?: boolean;
};

const LCP_IMG_STYLE = {
  position: "absolute" as const,
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover" as const,
};

/**
 * LCP-optimized full-bleed hero. Priority heroes use a native img + srcSet so
 * mobile loads a small WebP without waiting on Next/Image or extra font preloads.
 */
export function PremiumHeroMedia({
  src,
  alt,
  className = "object-cover premium-hero-image--lipo",
  priority = true,
}: PremiumHeroMediaProps) {
  const optimizedSrc = resolveHeroSrc(src);
  const srcSet = resolveHeroSrcSet(src);

  if (priority && optimizedSrc.endsWith(".webp")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- intentional LCP path
      <img
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={HERO_IMAGE_SIZES}
        alt={alt}
        fetchPriority="high"
        decoding="sync"
        className={className}
        style={LCP_IMG_STYLE}
      />
    );
  }

  return (
    <Image
      src={optimizedSrc}
      alt={alt}
      fill
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      quality={priority ? 80 : 75}
      unoptimized={optimizedSrc.endsWith(".webp")}
      className={className}
      sizes={HERO_IMAGE_SIZES}
    />
  );
}
