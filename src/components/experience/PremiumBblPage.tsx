import Link from "next/link";
import { RichText } from "@/components/RichText";
import { PremiumHeroMedia } from "@/components/experience/PremiumHeroMedia";
import { PremiumCostSection } from "@/components/experience/PremiumCostSection";
import { PremiumJumpNav } from "@/components/experience/PremiumJumpNav";
import { PremiumPageFaq } from "@/components/experience/PremiumPageFaq";
import { BblJsonLd } from "@/components/seo/BblJsonLd";
import { PremiumTrustStrip } from "@/components/experience/PremiumTrustStrip";
import {
  bblCombinations,
  bblComparison,
  bblCandidacy,
  bblFaqs,
  bblGlance,
  bblHowItWorks,
  bblIntro,
  bblLowBmi,
  bblRecovery,
  bblRecoveryEssentials,
  bblRecoverySteps,
  bblRecoveryTips,
  bblRelatedProcedures,
  bblResults,
  bblSafety,
  bblVisuals,
  bblWhyChoose,
} from "@/content/bbl-page";
import { CONSULT_URL, CONTACT_URL } from "@/lib/site";

const BBL_JUMP_LINKS = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#how-bbl-works", label: "How it works" },
  { href: "#candidacy", label: "Candidacy" },
  { href: "#recovery", label: "Recovery" },
  { href: "#cost", label: "Cost & financing" },
  { href: "#bbl-results", label: "Results" },
  { href: "#faq", label: "FAQ" },
];

export function PremiumBblPage() {
  let relatedIndex = 0;

  return (
    <>
      <BblJsonLd />
      <div className="premium-lipo-page pb-24">
        <section className="premium-hero premium-hero--page premium-hero--lipo">
          <div className="premium-hero-media">
            <PremiumHeroMedia src={bblVisuals.hero.src} alt={bblVisuals.hero.alt} />
            <div className="premium-hero-scrim" />
          </div>
          <div className="container premium-hero-content">
            <div className="premium-hero-copy">
              <nav className="premium-breadcrumb premium-breadcrumb--hero" aria-label="Breadcrumb">
                <Link href="/">← Home</Link>
                <span aria-hidden="true"> · </span>
                <Link href="/liposuction">Liposuction</Link>
              </nav>
              <p className="premium-eyebrow">{bblIntro.eyebrow}</p>
              <h1 className="premium-hero-title">{bblIntro.heroTitle}</h1>
              <RichText as="p" className="premium-hero-lead" text={bblIntro.lead} autoLinkKeywords />
              <div className="premium-hero-cta">
                <a href={CONSULT_URL} className="btn btn-primary premium-btn-glow" target="_blank" rel="noreferrer">
                  Book free virtual consult
                </a>
                <Link href="#at-a-glance" className="btn btn-outline !border-white/30 !text-white">
                  BBL at a glance
                </Link>
              </div>
            </div>
          </div>
        </section>

        <PremiumTrustStrip />
        <PremiumJumpNav links={BBL_JUMP_LINKS} />

        <section className="premium-section">
          <div className="container max-w-3xl">
            <p className="premium-eyebrow">What is a Brazilian Butt Lift (BBL)?</p>
            <h2 className="premium-section-title">{bblIntro.title}</h2>
            <div className="premium-prose stack-4 mt-6">
              {bblIntro.paragraphs.map((text) => (
                <RichText key={text.slice(0, 48)} text={text} autoLinkKeywords />
              ))}
            </div>
            <a
              href={CONSULT_URL}
              className="inline-link mt-6 inline-block font-ui text-sm uppercase tracking-wider"
              target="_blank"
              rel="noreferrer"
            >
              Schedule your complimentary consultation →
            </a>
          </div>
        </section>

        <section className="premium-section premium-section--soft" id="at-a-glance">
          <div className="container">
            <p className="premium-eyebrow">Quick reference</p>
            <h2 className="premium-section-title">Brazilian Butt Lift (BBL) At A Glance</h2>
            <div className="premium-glance-grid premium-glance-grid--four">
              <article className="premium-glance-card">
                <h3 className="premium-glance-title">Donor areas</h3>
                <ul className="premium-checklist">
                  {bblGlance.donorAreas.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords />
                    </li>
                  ))}
                </ul>
              </article>
              <article className="premium-glance-card">
                <h3 className="premium-glance-title">Good candidates</h3>
                <ul className="premium-checklist">
                  {bblGlance.candidates.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords />
                    </li>
                  ))}
                </ul>
              </article>
              <article className="premium-glance-card">
                <h3 className="premium-glance-title">Key benefits</h3>
                <ul className="premium-checklist">
                  {bblGlance.benefits.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords />
                    </li>
                  ))}
                </ul>
              </article>
              <article className="premium-glance-card">
                <h3 className="premium-glance-title">Procedure snapshot</h3>
                <ul className="premium-checklist">
                  {bblGlance.procedureSnapshot.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords={false} />
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="premium-section" id="how-bbl-works">
          <div className="container">
            <p className="premium-eyebrow">{bblHowItWorks.eyebrow}</p>
            <h2 className="premium-section-title max-w-3xl">{bblHowItWorks.title}</h2>
            <RichText
              as="p"
              className="premium-section-intro max-w-3xl mt-4"
              text={bblHowItWorks.intro}
              autoLinkKeywords
            />
            <ol className="premium-journey premium-journey--steps-grid mt-10">
              {bblHowItWorks.steps.map((step) => (
                <li key={step.step} className="premium-journey-step">
                  <span className="premium-journey-num">{step.step}</span>
                  <h3>{step.title}</h3>
                  <RichText as="p" text={step.body} autoLinkKeywords={false} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="premium-section premium-section--soft" id="candidacy">
          <div className="container">
            <p className="premium-eyebrow">{bblCandidacy.eyebrow}</p>
            <h2 className="premium-section-title max-w-3xl">{bblCandidacy.title}</h2>
            <RichText
              as="p"
              className="premium-section-intro max-w-3xl mt-4"
              text={bblCandidacy.intro}
              autoLinkKeywords
            />
            <div className="premium-candidacy-grid">
              <div>
                <h3 className="premium-inner-h4">{bblCandidacy.idealTitle}</h3>
                <ul className="premium-checklist mt-4">
                  {bblCandidacy.ideal.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords={false} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="premium-inner-h4">{bblCandidacy.considerationsTitle}</h3>
                <ul className="premium-checklist mt-4">
                  {bblCandidacy.considerations.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords={false} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="premium-prose max-w-3xl mt-8">
              <RichText as="p" text={bblCandidacy.closing} autoLinkKeywords />
            </div>
            <Link href="#low-bmi-bbl" className="inline-link mt-4 inline-block">
              Low BMI & hip dip candidacy →
            </Link>
          </div>
        </section>

        <section className="premium-section" id="low-bmi-bbl">
          <div className="container">
            <p className="premium-eyebrow">{bblLowBmi.eyebrow}</p>
            <h2 className="premium-section-title max-w-3xl">{bblLowBmi.title}</h2>
            <RichText
              as="p"
              className="premium-section-intro max-w-3xl mt-4"
              text={bblLowBmi.intro}
              autoLinkKeywords={false}
            />
            <div className="premium-benefits premium-benefits--balanced mt-8">
              {bblLowBmi.items.map((item) => (
                <div key={item.title} className="premium-benefit premium-benefit--card">
                  <h4>{item.title}</h4>
                  <RichText as="p" text={item.body} autoLinkKeywords={false} />
                </div>
              ))}
            </div>
            <div className="mt-10 max-w-3xl">
              <h3 className="premium-inner-h4">{bblLowBmi.candidateSignalsTitle}</h3>
              <ul className="premium-checklist mt-4">
                {bblLowBmi.candidateSignals.map((item) => (
                  <li key={item}>
                    <RichText as="span" text={item} autoLinkKeywords={false} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="premium-safety-closing">
              {bblLowBmi.closingParagraphs.map((paragraph) => (
                <RichText key={paragraph.slice(0, 48)} as="p" text={paragraph} autoLinkKeywords={false} />
              ))}
            </div>
          </div>
        </section>

        <section className="premium-section premium-section--difference">
          <div className="container">
            <div className="premium-difference-header">
              <p className="premium-eyebrow">Understand your options</p>
              <h2 className="premium-section-title">{bblComparison.title}</h2>
              <p className="premium-difference-lead">{bblComparison.intro}</p>
            </div>
            <div className="premium-difference-cards premium-difference-cards--two">
              {bblComparison.columns.map((col, index) => (
                <article key={col.title} className="premium-difference-card">
                  <span className="premium-difference-card-num">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{col.title}</h3>
                  <RichText as="p" text={col.body} autoLinkKeywords={false} />
                </article>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/liposuction-360" className="btn btn-outline !border-white/25 !text-white">
                Learn about Lipo 360
              </Link>
              <Link href="#related" className="inline-link self-center">
                Related procedures →
              </Link>
            </div>
          </div>
        </section>

        <section className="premium-section premium-section--soft" id="bbl-safety">
          <div className="container">
            <p className="premium-eyebrow">{bblSafety.eyebrow}</p>
            <h2 className="premium-section-title max-w-3xl">{bblSafety.title}</h2>
            <RichText as="p" className="premium-section-intro max-w-3xl mt-4" text={bblSafety.intro} autoLinkKeywords={false} />
            <div className="mt-10 max-w-3xl">
              <h3 className="premium-inner-h4">{bblSafety.risksTitle}</h3>
              <div className="premium-prose mt-3">
                <RichText as="p" text={bblSafety.risksIntro} autoLinkKeywords={false} />
              </div>
              <ul className="premium-checklist mt-4">
                {bblSafety.risks.map((item) => (
                  <li key={item}>
                    <RichText as="span" text={item} autoLinkKeywords={false} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12">
              <h3 className="premium-inner-h4 max-w-2xl">{bblSafety.precautionsTitle}</h3>
              <RichText
                as="p"
                className="premium-section-intro max-w-2xl mt-3"
                text={bblSafety.precautionsIntro}
                autoLinkKeywords={false}
              />
              <div className="premium-benefits premium-benefits--balanced mt-8">
                {bblSafety.precautions.map((item) => (
                  <div key={item.title} className="premium-benefit premium-benefit--card">
                    <h4>{item.title}</h4>
                    <RichText as="p" text={item.body} autoLinkKeywords={false} />
                  </div>
                ))}
              </div>
            </div>
            <div className="premium-safety-closing">
              {bblSafety.closingParagraphs.map((paragraph) => (
                <RichText key={paragraph.slice(0, 48)} as="p" text={paragraph} autoLinkKeywords={false} />
              ))}
            </div>
          </div>
        </section>

        <section className="premium-section premium-section--explore">
          <div className="container">
            <p className="premium-eyebrow">Combined procedures</p>
            <h2 className="premium-section-title">{bblCombinations.title}</h2>
            <RichText as="p" className="premium-explore-intro" text={bblCombinations.intro} autoLinkKeywords />
            <div className="premium-lipo-combo-grid">
              {bblCombinations.groups.map((group) => (
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
            <p className="premium-eyebrow">{bblRecovery.eyebrow}</p>
            <h2 className="premium-section-title max-w-2xl">{bblRecovery.title}</h2>
            <RichText
              as="p"
              className="premium-section-intro max-w-3xl mt-4"
              text={bblRecovery.intro}
              autoLinkKeywords
            />
            <ol className="premium-journey mt-10">
              {bblRecoverySteps.map((step) => (
                <li key={step.step} className="premium-journey-step">
                  <span className="premium-journey-num">{step.step}</span>
                  <h3>{step.title}</h3>
                  <RichText as="p" text={step.body} autoLinkKeywords />
                </li>
              ))}
            </ol>
            <div className="mt-12">
              <h3 className="premium-inner-h4 max-w-2xl">{bblRecovery.essentialsTitle}</h3>
              <RichText
                as="p"
                className="premium-section-intro max-w-2xl mt-3"
                text={bblRecovery.essentialsIntro}
                autoLinkKeywords={false}
              />
              <div className="premium-benefits premium-benefits--balanced mt-8">
                {bblRecoveryEssentials.map((item) => (
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
                {bblRecoveryTips.map((tip) => (
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

        <PremiumCostSection procedureLabel="BBL" location="bbl-cost" />

        <section className="premium-section" id="bbl-results">
          <div className="container">
            <p className="premium-eyebrow">{bblResults.eyebrow}</p>
            <h2 className="premium-section-title max-w-3xl">{bblResults.title}</h2>
            <RichText
              as="p"
              className="premium-section-intro max-w-3xl mt-4"
              text={bblResults.intro}
              autoLinkKeywords={false}
            />
            <div className="premium-benefits premium-benefits--balanced mt-8">
              {bblResults.items.map((item) => (
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
                Continue researching with guides tailored to candidacy, recovery, and what to expect.
              </p>
            </div>
            <ul className="premium-lipo-directory-list">
              {bblRelatedProcedures.map((item) => {
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
              <h2 className="premium-section-title">{bblWhyChoose.title}</h2>
              <RichText
                as="p"
                className="premium-section-intro max-w-2xl"
                text={bblWhyChoose.intro}
                autoLinkKeywords
              />
            </div>
            <div className="premium-benefits premium-benefits--balanced">
              {bblWhyChoose.items.map((item) => (
                <div key={item.title} className="premium-benefit premium-benefit--card">
                  <h3>{item.title}</h3>
                  <RichText as="p" text={item.body} autoLinkKeywords />
                </div>
              ))}
            </div>
          </div>
        </section>

        <PremiumPageFaq
          title="Brazilian Butt Lift (BBL) FAQs"
          intro="Clear answers about how BBL works, candidacy, low BMI & hip dips, ultrasound-guided safety, recovery, sitting rules, results, and what to expect when researching a Brazilian Butt Lift (BBL) in Tampa Bay."
          faqs={bblFaqs}
        />

        <section className="premium-final-cta">
          <div className="container premium-final-inner">
            <h2>Ready To Explore A Brazilian Butt Lift (BBL) In Tampa Bay?</h2>
            <RichText
              as="p"
              text="Schedule your complimentary virtual consultation and discover the personalized, concierge experience that sets Tampa Bay Body Sculpting apart."
              autoLinkKeywords
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
