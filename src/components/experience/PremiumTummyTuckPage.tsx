import Link from "next/link";
import { RichText } from "@/components/RichText";
import { PremiumHeroMedia } from "@/components/experience/PremiumHeroMedia";
import { PremiumCostSection } from "@/components/experience/PremiumCostSection";
import { PremiumJumpNav } from "@/components/experience/PremiumJumpNav";
import { PremiumPageFaq } from "@/components/experience/PremiumPageFaq";
import { TummyTuckJsonLd } from "@/components/seo/TummyTuckJsonLd";
import { PremiumTrustStrip } from "@/components/experience/PremiumTrustStrip";
import {
  tummyTuckCandidacy,
  tummyTuckCombinations,
  tummyTuckComparison,
  tummyTuckFaqs,
  tummyTuckGlance,
  tummyTuckAbdominoplasty,
  tummyTuckHowItWorks,
  tummyTuckIntro,
  tummyTuckRecovery,
  tummyTuckRecoveryEssentials,
  tummyTuckRecoverySteps,
  tummyTuckRecoveryTips,
  tummyTuckRelatedProcedures,
  tummyTuckResults,
  tummyTuckVisuals,
  tummyTuckWhyChoose,
} from "@/content/tummy-tuck-page";
import { TrackedContactLink } from "@/components/TrackedContactLink";

const TUMMY_TUCK_JUMP_LINKS = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#how-tummy-tuck-works", label: "How it works" },
  { href: "#abdominoplasty-options", label: "Options" },
  { href: "#candidacy", label: "Candidacy" },
  { href: "#recovery", label: "Recovery" },
  { href: "#cost", label: "Cost & financing" },
  { href: "#tummy-tuck-results", label: "Results" },
  { href: "#faq", label: "FAQ" },
];

export function PremiumTummyTuckPage() {
  let relatedIndex = 0;

  return (
    <>
      <TummyTuckJsonLd />
      <div className="premium-lipo-page pb-24">
        <section className="premium-hero premium-hero--page premium-hero--lipo">
          <div className="premium-hero-media">
            <PremiumHeroMedia src={tummyTuckVisuals.hero.src} alt={tummyTuckVisuals.hero.alt} />
            <div className="premium-hero-scrim" />
          </div>
          <div className="container premium-hero-content">
            <div className="premium-hero-copy">
              <nav className="premium-breadcrumb premium-breadcrumb--hero" aria-label="Breadcrumb">
                <Link href="/">← Home</Link>
                <span aria-hidden="true"> · </span>
                <Link href="/liposuction">Liposuction</Link>
              </nav>
              <p className="premium-eyebrow">{tummyTuckIntro.eyebrow}</p>
              <h1 className="premium-hero-title">{tummyTuckIntro.heroTitle}</h1>
              <RichText as="p" className="premium-hero-lead" text={tummyTuckIntro.lead} autoLinkKeywords />
              <div className="premium-hero-cta">
                <TrackedContactLink className="btn btn-primary premium-btn-glow" location="tummy-tuck-hero">
                  Request a consult
                </TrackedContactLink>
                <Link href="#at-a-glance" className="btn btn-outline !border-white/30 !text-white">
                  Tummy tuck at a glance
                </Link>
              </div>
            </div>
          </div>
        </section>

        <PremiumTrustStrip />
        <PremiumJumpNav links={TUMMY_TUCK_JUMP_LINKS} />

        <section className="premium-section">
          <div className="container max-w-3xl">
            <p className="premium-eyebrow">What is a tummy tuck?</p>
            <h2 className="premium-section-title">{tummyTuckIntro.title}</h2>
            <div className="premium-prose stack-4 mt-6">
              {tummyTuckIntro.paragraphs.map((text) => (
                <RichText key={text.slice(0, 48)} text={text} autoLinkKeywords />
              ))}
            </div>
            <TrackedContactLink
              className="inline-link mt-6 inline-block font-ui text-sm uppercase tracking-wider"
              location="tummy-tuck-intro"
            >
              Get in touch →
            </TrackedContactLink>
          </div>
        </section>

        <section className="premium-section premium-section--soft" id="at-a-glance">
          <div className="container">
            <p className="premium-eyebrow">Quick reference</p>
            <h2 className="premium-section-title">Tummy Tuck At A Glance</h2>
            <div className="premium-glance-grid premium-glance-grid--four">
              <article className="premium-glance-card">
                <h3 className="premium-glance-title">What it treats</h3>
                <ul className="premium-checklist">
                  {tummyTuckGlance.treats.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords />
                    </li>
                  ))}
                </ul>
              </article>
              <article className="premium-glance-card">
                <h3 className="premium-glance-title">Good candidates</h3>
                <ul className="premium-checklist">
                  {tummyTuckGlance.candidates.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords />
                    </li>
                  ))}
                </ul>
              </article>
              <article className="premium-glance-card">
                <h3 className="premium-glance-title">Key benefits</h3>
                <ul className="premium-checklist">
                  {tummyTuckGlance.benefits.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords />
                    </li>
                  ))}
                </ul>
              </article>
              <article className="premium-glance-card">
                <h3 className="premium-glance-title">Procedure snapshot</h3>
                <ul className="premium-checklist">
                  {tummyTuckGlance.procedureSnapshot.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords={false} />
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="premium-section" id="how-tummy-tuck-works">
          <div className="container">
            <p className="premium-eyebrow">{tummyTuckHowItWorks.eyebrow}</p>
            <h2 className="premium-section-title max-w-3xl">{tummyTuckHowItWorks.title}</h2>
            <RichText
              as="p"
              className="premium-section-intro max-w-3xl mt-4"
              text={tummyTuckHowItWorks.intro}
              autoLinkKeywords
            />
            <ol className="premium-journey premium-journey--steps-grid mt-10">
              {tummyTuckHowItWorks.steps.map((step) => (
                <li key={step.step} className="premium-journey-step">
                  <span className="premium-journey-num">{step.step}</span>
                  <h3>{step.title}</h3>
                  <RichText as="p" text={step.body} autoLinkKeywords={false} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="premium-section premium-section--soft" id="abdominoplasty-options">
          <div className="container">
            <p className="premium-eyebrow">{tummyTuckAbdominoplasty.eyebrow}</p>
            <h2 className="premium-section-title max-w-3xl">{tummyTuckAbdominoplasty.title}</h2>
            <RichText
              as="p"
              className="premium-section-intro max-w-3xl mt-4"
              text={tummyTuckAbdominoplasty.intro}
              autoLinkKeywords={false}
            />
            <div className="premium-benefits premium-benefits--balanced mt-8">
              {tummyTuckAbdominoplasty.items.map((item) => (
                <div key={item.title} className="premium-benefit premium-benefit--card">
                  <h4>{item.title}</h4>
                  <RichText as="p" text={item.body} autoLinkKeywords={false} />
                </div>
              ))}
            </div>
            <div className="premium-safety-closing">
              {tummyTuckAbdominoplasty.closingParagraphs.map((paragraph) => (
                <RichText key={paragraph.slice(0, 48)} as="p" text={paragraph} autoLinkKeywords={false} />
              ))}
            </div>
            <TrackedContactLink
              className="inline-link mt-6 inline-block font-ui text-sm uppercase tracking-wider"
              location="tummy-tuck-focus"
            >
              Request a consult →
            </TrackedContactLink>
          </div>
        </section>

        <section className="premium-section premium-section--difference">
          <div className="container">
            <div className="premium-difference-header">
              <p className="premium-eyebrow">Understand your options</p>
              <h2 className="premium-section-title">{tummyTuckComparison.title}</h2>
              <p className="premium-difference-lead">{tummyTuckComparison.intro}</p>
            </div>
            <div className="premium-difference-cards premium-difference-cards--two">
              {tummyTuckComparison.columns.map((col, index) => (
                <article key={col.title} className="premium-difference-card">
                  <span className="premium-difference-card-num">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{col.title}</h3>
                  <RichText as="p" text={col.body} autoLinkKeywords={false} />
                </article>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/liposuction" className="btn btn-outline !border-white/25 !text-white">
                Learn about Liposuction
              </Link>
              <Link href="/liposuction-360" className="btn btn-outline !border-white/25 !text-white">
                Lipo 360 options
              </Link>
              <Link href="#related" className="inline-link self-center">
                Related procedures →
              </Link>
            </div>
          </div>
        </section>

        <section className="premium-section premium-section--soft" id="candidacy">
          <div className="container">
            <p className="premium-eyebrow">{tummyTuckCandidacy.eyebrow}</p>
            <h2 className="premium-section-title max-w-3xl">{tummyTuckCandidacy.title}</h2>
            <RichText
              as="p"
              className="premium-section-intro max-w-3xl mt-4"
              text={tummyTuckCandidacy.intro}
              autoLinkKeywords
            />
            <div className="premium-candidacy-grid">
              <div>
                <h3 className="premium-inner-h4">{tummyTuckCandidacy.idealTitle}</h3>
                <ul className="premium-checklist mt-4">
                  {tummyTuckCandidacy.ideal.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords={false} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="premium-inner-h4">{tummyTuckCandidacy.considerationsTitle}</h3>
                <ul className="premium-checklist mt-4">
                  {tummyTuckCandidacy.considerations.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords={false} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="premium-prose max-w-3xl mt-8">
              <RichText as="p" text={tummyTuckCandidacy.closing} autoLinkKeywords />
            </div>
            <TrackedContactLink className="inline-link mt-4 inline-block" location="tummy-tuck-candidacy">
              Check your candidacy — get in touch →
            </TrackedContactLink>
          </div>
        </section>

        <section className="premium-section premium-section--explore">
          <div className="container">
            <p className="premium-eyebrow">Combined procedures</p>
            <h2 className="premium-section-title">{tummyTuckCombinations.title}</h2>
            <RichText as="p" className="premium-explore-intro" text={tummyTuckCombinations.intro} autoLinkKeywords />
            <div className="premium-lipo-combo-grid">
              {tummyTuckCombinations.groups.map((group) => (
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

        <section className="premium-section premium-section--soft" id="recovery">
          <div className="container">
            <p className="premium-eyebrow">{tummyTuckRecovery.eyebrow}</p>
            <h2 className="premium-section-title max-w-2xl">{tummyTuckRecovery.title}</h2>
            <RichText
              as="p"
              className="premium-section-intro max-w-3xl mt-4"
              text={tummyTuckRecovery.intro}
              autoLinkKeywords
            />
            <ol className="premium-journey mt-10">
              {tummyTuckRecoverySteps.map((step) => (
                <li key={step.step} className="premium-journey-step">
                  <span className="premium-journey-num">{step.step}</span>
                  <h3>{step.title}</h3>
                  <RichText as="p" text={step.body} autoLinkKeywords />
                </li>
              ))}
            </ol>
            <div className="mt-12">
              <h3 className="premium-inner-h4 max-w-2xl">{tummyTuckRecovery.essentialsTitle}</h3>
              <RichText
                as="p"
                className="premium-section-intro max-w-2xl mt-3"
                text={tummyTuckRecovery.essentialsIntro}
                autoLinkKeywords={false}
              />
              <div className="premium-benefits premium-benefits--balanced mt-8">
                {tummyTuckRecoveryEssentials.map((item) => (
                  <div key={item.title} className="premium-benefit premium-benefit--card">
                    <h4>{item.title}</h4>
                    <RichText as="p" text={item.body} autoLinkKeywords={false} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 max-w-3xl">
              <h3 className="premium-inner-h4">Recovery Tips</h3>
              <ul className="premium-checklist mt-4">
                {tummyTuckRecoveryTips.map((tip) => (
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

        <PremiumCostSection procedureLabel="Tummy tuck" location="tummy-tuck-cost" />

        <section className="premium-section" id="tummy-tuck-results">
          <div className="container">
            <p className="premium-eyebrow">{tummyTuckResults.eyebrow}</p>
            <h2 className="premium-section-title max-w-3xl">{tummyTuckResults.title}</h2>
            <RichText
              as="p"
              className="premium-section-intro max-w-3xl mt-4"
              text={tummyTuckResults.intro}
              autoLinkKeywords={false}
            />
            <div className="premium-benefits premium-benefits--balanced mt-8">
              {tummyTuckResults.items.map((item) => (
                <div key={item.title} className="premium-benefit premium-benefit--card">
                  <h4>{item.title}</h4>
                  <RichText as="p" text={item.body} autoLinkKeywords={false} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="premium-section premium-section--soft" id="related">
          <div className="container">
            <div className="premium-procedures-intro">
              <p className="premium-eyebrow">Explore further</p>
              <h2 className="premium-section-title">Related Procedures & Resources</h2>
              <p className="premium-filter-intro">
                Continue researching with guides tailored to abdominoplasty, recovery, and what to expect in Tampa Bay.
              </p>
            </div>
            <ul className="premium-lipo-directory-list">
              {tummyTuckRelatedProcedures.map((item) => {
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

        <section className="premium-section premium-section--why-choose">
          <div className="container">
            <div className="premium-why-choose-header">
              <h2 className="premium-section-title">{tummyTuckWhyChoose.title}</h2>
              <RichText
                as="p"
                className="premium-section-intro max-w-2xl"
                text={tummyTuckWhyChoose.intro}
                autoLinkKeywords
              />
            </div>
            <div className="premium-benefits premium-benefits--balanced">
              {tummyTuckWhyChoose.items.map((item) => (
                <div key={item.title} className="premium-benefit premium-benefit--card">
                  <h3>{item.title}</h3>
                  <RichText as="p" text={item.body} autoLinkKeywords />
                </div>
              ))}
            </div>
          </div>
        </section>

        <PremiumPageFaq
          title="Tummy Tuck FAQs"
          intro="Clear answers about full vs mini abdominoplasty, diastasis repair, mommy makeover combinations, candidacy, recovery, results, and what to expect when researching a tummy tuck in Tampa Bay."
          faqs={tummyTuckFaqs}
        />

        <section className="premium-final-cta">
          <div className="container premium-final-inner">
            <h2>Ready To Restore Your Abdomen In Tampa Bay?</h2>
            <RichText
              as="p"
              text="Schedule your complimentary virtual consultation and discover the personalized, concierge experience that sets Tampa Bay Body Sculpting apart."
              autoLinkKeywords
            />
            <div className="flex flex-wrap gap-3 mt-8 premium-final-actions">
              <TrackedContactLink className="btn btn-dark !bg-black !text-white !px-8" location="tummy-tuck-final">
                Request a consult
              </TrackedContactLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
