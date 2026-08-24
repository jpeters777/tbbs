import Link from "next/link";
import { RichText } from "@/components/RichText";
import { PremiumHeroMedia } from "@/components/experience/PremiumHeroMedia";
import { PremiumCostSection } from "@/components/experience/PremiumCostSection";
import { PremiumJumpNav } from "@/components/experience/PremiumJumpNav";
import { PremiumPageFaq } from "@/components/experience/PremiumPageFaq";
import { Lipo360JsonLd } from "@/components/seo/Lipo360JsonLd";
import { PremiumTrustStrip } from "@/components/experience/PremiumTrustStrip";
import {
  lipo360Combinations,
  lipo360Comparison,
  lipo360Faqs,
  lipo360Glance,
  lipo360Intro,
  lipo360RecoverySteps,
  lipo360RecoveryTips,
  lipo360RelatedProcedures,
  lipo360Visuals,
  lipo360WhyChoose,
} from "@/content/lipo-360-page";
import { TrackedContactLink } from "@/components/TrackedContactLink";

const LIPO360_JUMP_LINKS = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#recovery", label: "Recovery" },
  { href: "#cost", label: "Cost & financing" },
  { href: "#related", label: "Related" },
  { href: "#faq", label: "FAQ" },
];

export function PremiumLipo360Page() {
  let relatedIndex = 0;

  return (
    <>
      <Lipo360JsonLd />
      <div className="premium-lipo-page pb-24">
        {/* Hero */}
        <section className="premium-hero premium-hero--page premium-hero--lipo">
          <div className="premium-hero-media">
            <PremiumHeroMedia
              src={lipo360Visuals.hero.src}
              alt={lipo360Visuals.hero.alt}
            />
            <div className="premium-hero-scrim" />
          </div>
          <div className="container premium-hero-content">
            <div className="premium-hero-copy">
              <nav className="premium-breadcrumb premium-breadcrumb--hero" aria-label="Breadcrumb">
                <Link href="/">← Home</Link>
                <span aria-hidden="true"> · </span>
                <Link href="/liposuction">Liposuction</Link>
              </nav>
              <p className="premium-eyebrow">{lipo360Intro.eyebrow}</p>
              <h1 className="premium-hero-title">{lipo360Intro.heroTitle}</h1>
              <RichText as="p" className="premium-hero-lead" text={lipo360Intro.lead} autoLinkKeywords />
              <div className="premium-hero-cta">
                <TrackedContactLink className="btn btn-primary premium-btn-glow" location="lipo360-hero">
                  Request a consult
                </TrackedContactLink>
                <Link href="#at-a-glance" className="btn btn-outline !border-white/30 !text-white">
                  Lipo 360 at a glance
                </Link>
              </div>
            </div>
          </div>
        </section>

        <PremiumTrustStrip />
        <PremiumJumpNav links={LIPO360_JUMP_LINKS} />

        {/* Intro */}
        <section className="premium-section">
          <div className="container max-w-3xl">
            <p className="premium-eyebrow">What is Lipo 360?</p>
            <h2 className="premium-section-title">{lipo360Intro.title}</h2>
            <div className="premium-prose stack-4 mt-6">
              {lipo360Intro.paragraphs.map((text) => (
                <RichText key={text.slice(0, 48)} text={text} autoLinkKeywords />
              ))}
            </div>
            <TrackedContactLink
              className="inline-link mt-6 inline-block font-ui text-sm uppercase tracking-wider"
              location="lipo360-intro"
            >
              Get in touch →
            </TrackedContactLink>
          </div>
        </section>

        {/* At a glance */}
        <section className="premium-section premium-section--soft" id="at-a-glance">
          <div className="container">
            <p className="premium-eyebrow">Quick reference</p>
            <h2 className="premium-section-title">Lipo 360 At A Glance</h2>
            <div className="premium-glance-grid">
              <article className="premium-glance-card">
                <h3 className="premium-glance-title">Areas treated</h3>
                <ul className="premium-checklist">
                  {lipo360Glance.areas.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords />
                    </li>
                  ))}
                </ul>
              </article>
              <article className="premium-glance-card">
                <h3 className="premium-glance-title">Good candidates</h3>
                <ul className="premium-checklist">
                  {lipo360Glance.candidates.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords />
                    </li>
                  ))}
                </ul>
              </article>
              <article className="premium-glance-card">
                <h3 className="premium-glance-title">Key benefits</h3>
                <ul className="premium-checklist">
                  {lipo360Glance.benefits.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords />
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="premium-section premium-section--difference">
          <div className="container">
            <div className="premium-difference-header">
              <p className="premium-eyebrow">Compare options</p>
              <h2 className="premium-section-title">{lipo360Comparison.title}</h2>
              <p className="premium-difference-lead">{lipo360Comparison.intro}</p>
            </div>
            <div className="premium-difference-cards premium-difference-cards--two">
              {lipo360Comparison.columns.map((col, index) => (
                <article key={col.title} className="premium-difference-card">
                  <span className="premium-difference-card-num">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{col.title}</h3>
                  <RichText as="p" text={col.body} autoLinkKeywords />
                </article>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/liposuction" className="btn btn-outline !border-white/25 !text-white">
                Explore all liposuction options
              </Link>
              <Link href="#related" className="inline-link self-center">
                Related procedures →
              </Link>
            </div>
          </div>
        </section>

        {/* Combined procedures */}
        <section className="premium-section premium-section--explore">
          <div className="container">
            <p className="premium-eyebrow">Combined procedures</p>
            <h2 className="premium-section-title">{lipo360Combinations.title}</h2>
            <RichText as="p" className="premium-explore-intro" text={lipo360Combinations.intro} autoLinkKeywords />
            <div className="premium-lipo-combo-grid">
              {lipo360Combinations.groups.map((group) => (
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

        {/* Recovery */}
        <section className="premium-section premium-section--soft" id="recovery">
          <div className="container">
            <p className="premium-eyebrow">Recovery</p>
            <h2 className="premium-section-title max-w-2xl">What To Expect After Lipo 360</h2>
            <RichText
              as="p"
              className="premium-section-intro max-w-2xl"
              text="Recovery varies by treatment areas and the amount of fat removed. Following your provider's instructions helps promote optimal healing and results."
              autoLinkKeywords
            />
            <ol className="premium-journey mt-10">
              {lipo360RecoverySteps.map((step) => (
                <li key={step.step} className="premium-journey-step">
                  <span className="premium-journey-num">{step.step}</span>
                  <h3>{step.title}</h3>
                  <RichText as="p" text={step.body} autoLinkKeywords />
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <h3 className="premium-inner-h4">Recovery Tips</h3>
              <ul className="premium-checklist">
                {lipo360RecoveryTips.map((tip) => (
                  <li key={tip}>
                    <RichText as="span" text={tip} autoLinkKeywords />
                  </li>
                ))}
              </ul>
              <Link href="/recovery-guides" className="inline-link mt-6 inline-block">
                Read full recovery guides →
              </Link>
            </div>
          </div>
        </section>

        <PremiumCostSection procedureLabel="Lipo 360" location="liposuction-360-cost" />

        {/* Related procedures */}
        <section className="premium-section premium-section--soft" id="related">
          <div className="container">
            <div className="premium-procedures-intro">
              <p className="premium-eyebrow">Explore further</p>
              <h2 className="premium-section-title">Related Procedures & Resources</h2>
              <p className="premium-filter-intro">
                Continue researching with guides tailored to candidacy, recovery, and what to expect.
              </p>
            </div>
            <ul className="premium-lipo-directory-list">
              {lipo360RelatedProcedures.map((item) => {
                relatedIndex += 1;
                return (
                  <li key={item.href}>
                    <article className="premium-lipo-directory-item">
                      <span className="premium-lipo-directory-num">
                        {String(relatedIndex).padStart(2, "0")}
                      </span>
                      <div className="premium-lipo-directory-copy">
                        <h3 className="premium-lipo-directory-title">
                          <Link href={item.href}>{item.title}</Link>
                        </h3>
                        <RichText
                          as="p"
                          className="premium-lipo-directory-body"
                          text={item.body}
                          links={item.links}
                          autoLinkKeywords
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
          </div>
        </section>

        {/* Why choose */}
        <section className="premium-section premium-section--why-choose">
          <div className="container">
            <div className="premium-why-choose-header">
              <h2 className="premium-section-title">{lipo360WhyChoose.title}</h2>
              <RichText
                as="p"
                className="premium-section-intro max-w-2xl"
                text={lipo360WhyChoose.intro}
                autoLinkKeywords
              />
            </div>
            <div className="premium-benefits">
              {lipo360WhyChoose.items.map((item) => (
                <div key={item.title} className="premium-benefit">
                  <h3>{item.title}</h3>
                  <RichText as="p" text={item.body} autoLinkKeywords />
                </div>
              ))}
            </div>
          </div>
        </section>

        <PremiumPageFaq
          title="Lipo 360 FAQs"
          intro="Clear answers about candidacy, recovery, combinations, and what to expect when researching Lipo 360 in Tampa Bay."
          faqs={lipo360Faqs}
        />

        {/* Final CTA */}
        <section className="premium-final-cta">
          <div className="container premium-final-inner">
            <h2>Ready To Explore Lipo 360 In Tampa Bay?</h2>
            <RichText
              as="p"
              text="Schedule your complimentary virtual consultation and discover the personalized, concierge experience that sets Tampa Bay Body Sculpting apart."
              autoLinkKeywords
            />
            <div className="flex flex-wrap gap-3 mt-8 premium-final-actions">
              <TrackedContactLink className="btn btn-dark !bg-black !text-white !px-8" location="lipo360-final">
                Request a consult
              </TrackedContactLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
