import Link from "next/link";
import { PremiumHeroMedia } from "@/components/experience/PremiumHeroMedia";
import { HeroPreload } from "@/components/experience/HeroPreload";
import { RichText } from "@/components/RichText";
import { CONSULT_URL } from "@/lib/site";
import { toTitleCase } from "@/lib/text";
import type { PageContent } from "@/lib/content";

const HOME_HERO_SRC = "/images/shutterstock_99994967_801684509466.JPG";

type PremiumHomeHeroProps = {
  page: PageContent;
  featuredQuote: string;
};

/** Server-rendered homepage hero so LCP image is in the first HTML payload. */
export function PremiumHomeHero({ page, featuredQuote }: PremiumHomeHeroProps) {
  return (
    <>
      <HeroPreload src={HOME_HERO_SRC} />
      <section className="premium-hero">
        <div className="premium-hero-media">
          <PremiumHeroMedia
            src={HOME_HERO_SRC}
            alt="Cosmetic surgery guidance in Tampa Bay"
            className="object-cover"
          />
          <div className="premium-hero-scrim" />
        </div>
        <div className="container premium-hero-content">
          <div className="premium-hero-copy">
            <p className="premium-eyebrow">Tampa Bay · Concierge cosmetic surgery guidance</p>
            <h1 className="premium-hero-title">
              {toTitleCase(page.h1)}
              <span className="premium-hero-accent"> Confidence starts with the right plan.</span>
            </h1>
            <RichText
              as="p"
              className="premium-hero-lead"
              text="Lipo 360, tummy tuck, breast surgery, and male body sculpting—with a team that guides you from complimentary consult through recovery."
              autoLinkKeywords
            />
            <div className="premium-hero-cta">
              <Link href={CONSULT_URL} className="btn btn-primary premium-btn-glow">
                Book free virtual consult
              </Link>
              <Link href="#procedures" className="btn btn-outline !border-white/30 !text-white">
                Explore procedures
              </Link>
            </div>
          </div>
          <blockquote className="premium-hero-quote">
            <p>
              &ldquo;
              <RichText as="span" text={featuredQuote} autoLinkKeywords />
              &rdquo;
            </p>
            <footer>— Tampa Bay Body Sculpting patient</footer>
          </blockquote>
        </div>
      </section>
    </>
  );
}
