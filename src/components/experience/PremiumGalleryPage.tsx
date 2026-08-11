import Link from "next/link";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { PremiumHeroMedia } from "@/components/experience/PremiumHeroMedia";
import { RichText } from "@/components/RichText";
import { PremiumPageFaq } from "@/components/experience/PremiumPageFaq";
import { GalleryPageJsonLd } from "@/components/seo/GalleryPageJsonLd";
import { GalleryConsultBridge } from "@/components/experience/GalleryConsultBridge";
import { PremiumFinancingCta } from "@/components/experience/PremiumFinancingCta";
import { PremiumTrustStrip } from "@/components/experience/PremiumTrustStrip";
import type { GalleryPageContent } from "@/lib/premium-curated/gallery-types";
import { getPublicPathForSlug } from "@/lib/public-paths";
import { CONSULT_URL, CONTACT_URL } from "@/lib/site";

type GalleryImage = { src: string; alt: string; localSrc?: string };

export function PremiumGalleryPage({
  content,
  images,
}: {
  content: GalleryPageContent;
  images: GalleryImage[];
}) {
  const pagePath = getPublicPathForSlug(content.slug);
  return (
    <>
      <GalleryPageJsonLd content={content} />
      <div className="premium-lipo-page pb-24">
        <section className="premium-hero premium-hero--page premium-hero--lipo">
          <div className="premium-hero-media">
            <PremiumHeroMedia src={content.visuals.hero.src} alt={content.visuals.hero.alt} />
            <div className="premium-hero-scrim" />
          </div>
          <div className="container premium-hero-content">
            <div className="premium-hero-copy">
              <nav className="premium-breadcrumb premium-breadcrumb--hero" aria-label="Breadcrumb">
                <Link href="/">← Home</Link>
                <span aria-hidden="true"> · </span>
                <Link href={content.breadcrumb.href}>{content.breadcrumb.label}</Link>
              </nav>
              <p className="premium-eyebrow">{content.intro.eyebrow}</p>
              <h1 className="premium-hero-title">{content.intro.heroTitle}</h1>
              <RichText as="p" className="premium-hero-lead" text={content.intro.lead} autoLinkKeywords currentPath={pagePath} />
              <div className="premium-hero-cta">
                <a href={CONSULT_URL} className="btn btn-primary premium-btn-glow" target="_blank" rel="noreferrer">
                  Book free virtual consult
                </a>
                <Link href="#gallery" className="btn btn-outline !border-white/30 !text-white">
                  View before & after
                </Link>
              </div>
            </div>
          </div>
        </section>

        <PremiumTrustStrip />

        <section className="premium-section">
          <div className="container max-w-3xl">
            <h2 className="premium-section-title">{content.intro.title}</h2>
            <div className="premium-prose stack-4 mt-6">
              {content.intro.paragraphs.map((text) => (
                <RichText key={text.slice(0, 48)} text={text} autoLinkKeywords currentPath={pagePath} />
              ))}
            </div>
          </div>
        </section>

        <div id="gallery">
          <BeforeAfterGallery
            title={content.gallery.title}
            intro={content.gallery.intro}
            images={images}
          />
        </div>

        <GalleryConsultBridge location={`${content.slug}-gallery-bridge`} />

        <section className="premium-section premium-section--soft">
          <div className="container">
            <PremiumFinancingCta location={`${content.slug}-gallery-financing`} />
          </div>
        </section>

        <section className="premium-section">
          <div className="container">
            <p className="premium-eyebrow">Before you decide</p>
            <h2 className="premium-section-title max-w-3xl">{content.lookFor.title}</h2>
            <RichText as="p" className="premium-section-intro max-w-3xl mt-4" text={content.lookFor.intro} autoLinkKeywords={false} />
            <div className="premium-benefits premium-benefits--balanced mt-8">
              {content.lookFor.items.map((item) => (
                <div key={item.title} className="premium-benefit premium-benefit--card">
                  <h3>{item.title}</h3>
                  <RichText as="p" text={item.body} autoLinkKeywords={false} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="premium-section premium-section--soft" id="related">
          <div className="container">
            <div className="premium-procedures-intro">
              <p className="premium-eyebrow">Learn more</p>
              <h2 className="premium-section-title">Related Procedures</h2>
              <p className="premium-filter-intro">{content.relatedIntro}</p>
            </div>
            <ul className="premium-lipo-directory-list">
              {content.relatedProcedures.map((item, index) => (
                <li key={item.href}>
                  <article className="premium-lipo-directory-item">
                    <span className="premium-lipo-directory-num">{String(index + 1).padStart(2, "0")}</span>
                    <div className="premium-lipo-directory-copy">
                      <h3 className="premium-lipo-directory-title">
                        <Link href={item.href}>{item.title}</Link>
                      </h3>
                      <RichText
                        as="p"
                        className="premium-lipo-directory-body"
                        text={item.body}
                        links={item.links}
                        autoLinkKeywords currentPath={pagePath}
                      />
                    </div>
                    <Link href={item.href} className="premium-lipo-directory-link" aria-label={`View ${item.title}`}>
                      →
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <PremiumPageFaq title={content.faqTitle} intro={content.faqIntro} faqs={content.faqs} />

        <section className="premium-final-cta">
          <div className="container premium-final-inner">
            <h2>{content.finalCtaTitle}</h2>
            <RichText
              as="p"
              text="Schedule your complimentary virtual consultation. Bring photos that reflect your goals—we'll discuss what's realistic for your anatomy."
              autoLinkKeywords currentPath={pagePath}
            />
            <div className="flex flex-wrap gap-3 mt-8 premium-final-actions">
              <a href={CONSULT_URL} className="btn btn-dark !bg-black !text-white !px-8" target="_blank" rel="noreferrer">
                Start consultation
              </a>
              <a href={CONTACT_URL} className="btn btn-outline !border-black/30 !text-black" target="_blank" rel="noreferrer">
                Contact us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
