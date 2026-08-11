import Image from "next/image";
import { HERO_IMAGE_SIZES, resolveHeroSrc } from "@/lib/hero-images";

type PremiumHeroMediaProps = {
  src: string;
  alt: string;
  className?: string;
  /** Set false for secondary heroes on the same page. */
  priority?: boolean;
};

/**
 * LCP-optimized full-bleed hero image (pre-compressed WebP, tight sizes, fetch priority).
 */
export function PremiumHeroMedia({
  src,
  alt,
  className = "object-cover premium-hero-image--lipo",
  priority = true,
}: PremiumHeroMediaProps) {
  const optimizedSrc = resolveHeroSrc(src);

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
