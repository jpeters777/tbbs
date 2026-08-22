import Image from "next/image";
import {
  HERO_IMAGE_SIZES,
  resolveHeroMobileSrc,
  resolveHeroSrc,
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
 * LCP-optimized full-bleed hero. Priority heroes use picture + native img (no
 * srcSet preload duplication) so mobile gets the 640px WebP by default.
 */
export function PremiumHeroMedia({
  src,
  alt,
  className = "object-cover premium-hero-image--lipo",
  priority = true,
}: PremiumHeroMediaProps) {
  const optimizedSrc = resolveHeroSrc(src);
  const mobileSrc = resolveHeroMobileSrc(src);

  if (priority && optimizedSrc.endsWith(".webp")) {
    if (mobileSrc) {
      return (
        <picture>
          <source media="(min-width: 769px)" srcSet={optimizedSrc} type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element -- intentional LCP path */}
          <img
            src={mobileSrc}
            alt={alt}
            fetchPriority="high"
            decoding="sync"
            className={className}
            style={LCP_IMG_STYLE}
          />
        </picture>
      );
    }

    return (
      // eslint-disable-next-line @next/next/no-img-element -- intentional LCP path
      <img
        src={optimizedSrc}
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
