import Image from "next/image";
import Link from "next/link";
import { RichText } from "@/components/RichText";
import { PremiumHeroMedia } from "@/components/experience/PremiumHeroMedia";
import { PremiumCostSection } from "@/components/experience/PremiumCostSection";
import { PremiumJumpNav } from "@/components/experience/PremiumJumpNav";
import { PremiumPageFaq } from "@/components/experience/PremiumPageFaq";
import { LiposuctionJsonLd } from "@/components/seo/LiposuctionJsonLd";
import { PremiumTrustStrip } from "@/components/experience/PremiumTrustStrip";
import {
  liposuctionCandidateSignals,
  liposuctionCombinations,
  liposuctionComparison,
  liposuctionFaqs,
  liposuctionIntro,
  liposuctionProcedureGroups,
  liposuctionRecoverySteps,
  liposuctionRecoveryTips,
  liposuctionTreatmentAreas,
  liposuctionTreatmentAreasIntro,
  liposuctionVisuals,
  liposuctionWhyChoose,
} from "@/content/liposuction-page";
import type { PageContent } from "@/lib/content";
import { TrackedContactLink } from "@/components/TrackedContactLink";
import { resolveHeroSrc } from "@/lib/hero-images";

const LIPOSUCTION_JUMP_LINKS = [
  { href: "#procedures", label: "Procedures" },
  { href: "#recovery", label: "Recovery" },
  { href: "#cost", label: "Cost & financing" },
  { href: "#faq", label: "FAQ" },
];

export function PremiumLiposuctionPage({ page }: { page: PageContent }) {
  const pagePath = `/${page.slug}`;
  let procedureIndex = 0;

  return (
    <>
      <LiposuctionJsonLd />
      <div className="premium-lipo-page pb-24">
      {/* Hero */}
      <section className="premium-hero premium-hero--page premium-hero--lipo">
        <div className="premium-hero-media">
          <PremiumHeroMedia
            src={liposuctionVisuals.hero.src}
            alt={liposuctionVisuals.hero.alt}
          />
          <div className="premium-hero-scrim" />
        </div>
        <div className="container premium-hero-content">
          <div className="premium-hero-copy">
            <Link href="/" className="premium-breadcrumb premium-breadcrumb--hero">
              ← Home
            </Link>
            <p className="premium-eyebrow">{liposuctionIntro.eyebrow}</p>
            <h1 className="premium-hero-title">{liposuctionIntro.heroTitle}</h1>
            <RichText as="p" className="premium-hero-lead" text={liposuctionIntro.lead} autoLinkKeywords currentPath={pagePath} />
            <div className="premium-hero-cta">
              <TrackedContactLink className="btn btn-primary premium-btn-glow" location="liposuction-hero">
                Request a consult
              </TrackedContactLink>
              <Link href="#procedures" className="btn btn-outline !border-white/30 !text-white">
                Explore liposuction options
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PremiumTrustStrip />
      <PremiumJumpNav links={LIPOSUCTION_JUMP_LINKS} />

      {/* Intro */}
      <section className="premium-section">
        <div className="container premium-split premium-split--reverse">
          <div className="premium-split-media">
            <Image
              src={resolveHeroSrc(liposuctionVisuals.intro.src)}
              alt={liposuctionVisuals.intro.alt}
              width={720}
              height={720}
              loading="lazy"
              unoptimized
              sizes="(max-width: 768px) 100vw, 720px"
              className="premium-split-image premium-split-image--lipo"
            />
          </div>
          <div>
            <p className="premium-eyebrow">About liposuction</p>
            <h2 className="premium-section-title">{liposuctionIntro.title}</h2>
            <div className="premium-prose stack-4 mt-6">
              {liposuctionIntro.paragraphs.map((text) => (
                <RichText key={text.slice(0, 48)} text={text} autoLinkKeywords currentPath={pagePath} />
              ))}
            </div>
            <TrackedContactLink
              className="inline-link mt-6 inline-block font-ui text-sm uppercase tracking-wider"
              location="liposuction-intro"
            >
              Get in touch →
            </TrackedContactLink>
          </div>
        </div>
      </section>

      {/* Procedures — text directory (no duplicate homepage photo grid) */}
      <section className="premium-section premium-section--soft" id="procedures">
        <div className="container">
          <div className="premium-procedures-intro">
            <p className="premium-eyebrow">Procedure directory</p>
            <h2 className="premium-section-title">Liposuction Options We Guide Patients Through</h2>
            <p className="premium-filter-intro">
              Browse by category. Each procedure links to a dedicated guide with candidacy, recovery, and what to
              expect.
            </p>
          </div>
          <div className="premium-lipo-directory">
            {liposuctionProcedureGroups.map((group) => (
              <section key={group.label} className="premium-lipo-directory-group" aria-label={group.label}>
                <h3 className="premium-lipo-directory-label">{group.label}</h3>
                <ul className="premium-lipo-directory-list">
                  {group.items.map((item) => {
                    procedureIndex += 1;
                    return (
                    <li key={item.href}>
                      <article className="premium-lipo-directory-item">
                        <span className="premium-lipo-directory-num">
                          {String(procedureIndex).padStart(2, "0")}
                        </span>
                        <div className="premium-lipo-directory-copy">
                          <h4 className="premium-lipo-directory-title">
                            <Link href={item.href}>{item.title}</Link>
                          </h4>
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
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment areas */}
      <section className="premium-section premium-section--compact-bottom">
        <div className="container">
          <p className="premium-eyebrow">Treatment areas</p>
          <h2 className="premium-section-title max-w-2xl">Where Liposuction Can Help</h2>
          <RichText
            as="p"
            className="premium-section-intro max-w-2xl"
            text={liposuctionTreatmentAreasIntro}
            autoLinkKeywords currentPath={pagePath}
          />
          <ul className="premium-checklist premium-checklist--grid mt-8">
            {liposuctionTreatmentAreas.map((area) => (
              <li key={area}>
                <RichText as="span" text={area} autoLinkKeywords currentPath={pagePath} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Candidate signals */}
      <section className="premium-section premium-section--soft premium-section--why-choose">
        <div className="container">
          <div className="premium-why-choose-header">
            <h2 className="premium-section-title">Who Is A Good Candidate?</h2>
            <RichText
              as="p"
              className="premium-section-intro max-w-2xl"
              text="Liposuction works best for patients who understand what it can achieve. During your consultation, we help determine whether liposuction—or a complementary procedure like a tummy tuck—is the right fit."
              autoLinkKeywords currentPath={pagePath}
            />
          </div>
          <div className="premium-benefits">
            {liposuctionCandidateSignals.map((item) => (
              <div key={item.title} className="premium-benefit">
                <h3>{item.title}</h3>
                <RichText as="p" text={item.body} autoLinkKeywords currentPath={pagePath} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lipo vs Lipo 360 */}
      <section className="premium-section premium-section--difference">
        <div className="container">
          <div className="premium-difference-header">
            <p className="premium-eyebrow">Compare options</p>
            <h2 className="premium-section-title">{liposuctionComparison.title}</h2>
            <p className="premium-difference-lead">{liposuctionComparison.intro}</p>
          </div>
          <div className="premium-difference-cards premium-difference-cards--two">
            {liposuctionComparison.columns.map((col, index) => (
              <article key={col.title} className="premium-difference-card">
                <span className="premium-difference-card-num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{col.title}</h3>
                <RichText as="p" text={col.body} autoLinkKeywords currentPath={pagePath} />
              </article>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/liposuction-360" className="btn btn-outline !border-white/25 !text-white">
              Learn about Lipo 360
            </Link>
            <Link href="#procedures" className="inline-link self-center">
              Browse all liposuction options →
            </Link>
          </div>
        </div>
      </section>

      {/* Recovery */}
      <section className="premium-section premium-section--soft" id="recovery">
        <div className="container">
          <p className="premium-eyebrow">Recovery</p>
          <h2 className="premium-section-title max-w-2xl">What To Expect After Liposuction</h2>
          <RichText
            as="p"
            className="premium-section-intro max-w-2xl"
            text="Recovery varies by treatment areas and the amount of fat removed. Following your provider's instructions helps promote optimal healing and results."
            autoLinkKeywords currentPath={pagePath}
          />
          <ol className="premium-journey mt-10">
            {liposuctionRecoverySteps.map((step) => (
              <li key={step.step} className="premium-journey-step">
                <span className="premium-journey-num">{step.step}</span>
                <h3>{step.title}</h3>
                <RichText as="p" text={step.body} autoLinkKeywords currentPath={pagePath} />
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <h3 className="premium-inner-h4">Recovery Tips</h3>
            <ul className="premium-checklist">
              {liposuctionRecoveryTips.map((tip) => (
                <li key={tip}>
                  <RichText as="span" text={tip} autoLinkKeywords currentPath={pagePath} />
                </li>
              ))}
            </ul>
            <Link href="/recovery-guides" className="inline-link mt-6 inline-block">
              Read full recovery guides →
            </Link>
          </div>
        </div>
      </section>

      <PremiumCostSection procedureLabel="Liposuction" location="liposuction-cost" />

      {/* Combinations */}
      <section className="premium-section premium-section--explore">
        <div className="container">
          <p className="premium-eyebrow">Combined procedures</p>
          <h2 className="premium-section-title">{liposuctionCombinations.title}</h2>
          <RichText as="p" className="premium-explore-intro" text={liposuctionCombinations.intro} autoLinkKeywords currentPath={pagePath} />
          <div className="premium-lipo-combo-grid">
            {liposuctionCombinations.groups.map((group) => (
              <section key={group.label} className="premium-lipo-combo-group" aria-label={group.label}>
                <h3 className="premium-lipo-combo-label">{group.label}</h3>
                <ul className="premium-lipo-combo-list">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="premium-lipo-combo-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="premium-section premium-section--why-choose">
        <div className="container">
          <div className="premium-why-choose-header">
            <h2 className="premium-section-title">{liposuctionWhyChoose.title}</h2>
            <RichText
              as="p"
              className="premium-section-intro max-w-2xl"
              text={liposuctionWhyChoose.intro}
              autoLinkKeywords currentPath={pagePath}
            />
          </div>
          <div className="premium-benefits">
            {liposuctionWhyChoose.items.map((item) => (
              <div key={item.title} className="premium-benefit">
                <h3>{item.title}</h3>
                <RichText as="p" text={item.body} autoLinkKeywords currentPath={pagePath} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <PremiumPageFaq
        title="Liposuction FAQs"
        intro="Clear answers about candidacy, recovery, combinations, and what to expect when researching liposuction in Tampa Bay."
        faqs={liposuctionFaqs}
        currentPath={pagePath}
      />

      {/* Final CTA */}
      <section className="premium-final-cta">
        <div className="container premium-final-inner">
          <h2>Ready To Explore Liposuction In Tampa Bay?</h2>
          <RichText
            as="p"
            text="Schedule your complimentary virtual consultation and discover the personalized, concierge experience that sets Tampa Bay Body Sculpting apart."
            autoLinkKeywords currentPath={pagePath}
          />
          <div className="flex flex-wrap gap-3 mt-8 premium-final-actions">
            <TrackedContactLink className="btn btn-dark !bg-black !text-white !px-8" location="liposuction-final">
              Request a consult
            </TrackedContactLink>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
