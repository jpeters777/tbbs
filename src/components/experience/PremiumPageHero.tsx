import Link from "next/link";
import { PremiumHeroMedia } from "@/components/experience/PremiumHeroMedia";
import { RichText } from "@/components/RichText";
import { TrackedContactLink } from "@/components/TrackedContactLink";

export function PremiumPageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative premium-page-hero overflow-hidden min-h-[42vh] flex items-end">
      {imageSrc ? (
        <>
          <div className="absolute inset-0">
            <PremiumHeroMedia
              src={imageSrc}
              alt={imageAlt || title}
              className="object-cover opacity-50"
            />
          </div>
          <div className="premium-hero-scrim" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1614] to-black" />
      )}
      <div className="container relative z-10 py-20 md:py-24">
        <Link href="/" className="premium-breadcrumb">
          ← Home
        </Link>
        <h1 className="premium-page-title">{title}</h1>
        {subtitle ? (
          <RichText as="p" className="premium-page-subtitle" text={subtitle} autoLinkKeywords />
        ) : null}
        <div className="flex flex-wrap gap-3 mt-8">
          <TrackedContactLink className="btn btn-primary premium-btn-glow" location="page-hero">
            Request a consult
          </TrackedContactLink>
          <Link href="/#procedures" className="btn btn-outline !border-white/30 !text-white">
            View all procedures
          </Link>
        </div>
      </div>
    </section>
  );
}
