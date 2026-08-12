import Link from "next/link";
import { RichText } from "@/components/RichText";
import { PremiumHeroMedia } from "@/components/experience/PremiumHeroMedia";
import { PremiumCostSection } from "@/components/experience/PremiumCostSection";
import { PremiumJumpNav } from "@/components/experience/PremiumJumpNav";
import { PremiumPageFaq } from "@/components/experience/PremiumPageFaq";
import { FeminineWaistJsonLd } from "@/components/seo/FeminineWaistJsonLd";
import { PremiumTrustStrip } from "@/components/experience/PremiumTrustStrip";
import {
  feminineWaistCandidacy,
  feminineWaistCombinations,
  feminineWaistComparison,
  feminineWaistFaqs,
  feminineWaistGlance,
  feminineWaistHourglass,
  feminineWaistHowItWorks,
  feminineWaistIntro,
  feminineWaistRecovery,
  feminineWaistRecoveryEssentials,
  feminineWaistRecoverySteps,
  feminineWaistRecoveryTips,
  feminineWaistRelatedProcedures,
  feminineWaistResults,
  feminineWaistVisuals,
  feminineWaistWhyChoose,
} from "@/content/feminine-waist-page";
import { CONSULT_URL, CONTACT_URL } from "@/lib/site";

const FEMININE_WAIST_JUMP_LINKS = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#how-waist-contouring-works", label: "How it works" },
  { href: "#hourglass-sculpting", label: "Hourglass sculpting" },
  { href: "#candidacy", label: "Candidacy" },
  { href: "#recovery", label: "Recovery" },
  { href: "#cost", label: "Cost & financing" },
  { href: "#waist-results", label: "Results" },
  { href: "#faq", label: "FAQ" },
];

export function PremiumFeminineWaistPage() {
  let relatedIndex = 0;

  return (
    <>
      <FeminineWaistJsonLd />
      <div className="premium-lipo-page pb-24">
        <section className="premium-hero premium-hero--page premium-hero--lipo">
          <div className="premium-hero-media">
            <PremiumHeroMedia src={feminineWaistVisuals.hero.src} alt={feminineWaistVisuals.hero.alt} />
            <div className="premium-hero-scrim" />
          </div>
          <div className="container premium-hero-content">
            <div className="premium-hero-copy">
              <nav className="premium-breadcrumb premium-breadcrumb--hero" aria-label="Breadcrumb">
                <Link href="/">← Home</Link>
                <span aria-hidden="true"> · </span>
                <Link href="/women">Women</Link>
              </nav>
              <p className="premium-eyebrow">{feminineWaistIntro.eyebrow}</p>
              <h1 className="premium-hero-title">{feminineWaistIntro.heroTitle}</h1>
              <RichText as="p" className="premium-hero-lead" text={feminineWaistIntro.lead} autoLinkKeywords />
              <div className="premium-hero-cta">
                <a href={CONSULT_URL} className="btn btn-primary premium-btn-glow" target="_blank" rel="noreferrer">
                  Book free virtual consult
                </a>
                <Link href="#at-a-glance" className="btn btn-outline !border-white/30 !text-white">
                  Waist contouring at a glance
                </Link>
              </div>
            </div>
          </div>
        </section>

        <PremiumTrustStrip />
        <PremiumJumpNav links={FEMININE_WAIST_JUMP_LINKS} />

        <section className="premium-section">
          <div className="container max-w-3xl">
            <p className="premium-eyebrow">What is feminine waist contouring?</p>
            <h2 className="premium-section-title">{feminineWaistIntro.title}</h2>
            <div className="premium-prose stack-4 mt-6">
              {feminineWaistIntro.paragraphs.map((text) => (
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
            <h2 className="premium-section-title">Feminine Waist Contouring At A Glance</h2>
            <div className="premium-glance-grid premium-glance-grid--four">
              <article className="premium-glance-card">
                <h3 className="premium-glance-title">Treatment areas</h3>
                <ul className="premium-checklist">
                  {feminineWaistGlance.treatmentAreas.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords />
                    </li>
                  ))}
                </ul>
              </article>
              <article className="premium-glance-card">
                <h3 className="premium-glance-title">Good candidates</h3>
                <ul className="premium-checklist">
                  {feminineWaistGlance.candidates.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords />
                    </li>
                  ))}
                </ul>
              </article>
              <article className="premium-glance-card">
                <h3 className="premium-glance-title">Key benefits</h3>
                <ul className="premium-checklist">
                  {feminineWaistGlance.benefits.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords />
                    </li>
                  ))}
                </ul>
              </article>
              <article className="premium-glance-card">
                <h3 className="premium-glance-title">Procedure snapshot</h3>
                <ul className="premium-checklist">
                  {feminineWaistGlance.procedureSnapshot.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords={false} />
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="premium-section" id="how-waist-contouring-works">
          <div className="container">
            <p className="premium-eyebrow">{feminineWaistHowItWorks.eyebrow}</p>
            <h2 className="premium-section-title max-w-3xl">{feminineWaistHowItWorks.title}</h2>
            <RichText
              as="p"
              className="premium-section-intro max-w-3xl mt-4"
              text={feminineWaistHowItWorks.intro}
              autoLinkKeywords
            />
            <ol className="premium-journey premium-journey--steps-grid mt-10">
              {feminineWaistHowItWorks.steps.map((step) => (
                <li key={step.step} className="premium-journey-step">
                  <span className="premium-journey-num">{step.step}</span>
                  <h3>{step.title}</h3>
                  <RichText as="p" text={step.body} autoLinkKeywords={false} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="premium-section premium-section--soft" id="hourglass-sculpting">
          <div className="container">
            <p className="premium-eyebrow">{feminineWaistHourglass.eyebrow}</p>
            <h2 className="premium-section-title max-w-3xl">{feminineWaistHourglass.title}</h2>
            <RichText
              as="p"
              className="premium-section-intro max-w-3xl mt-4"
              text={feminineWaistHourglass.intro}
              autoLinkKeywords={false}
            />
            <div className="premium-benefits premium-benefits--balanced mt-8">
              {feminineWaistHourglass.items.map((item) => (
                <div key={item.title} className="premium-benefit premium-benefit--card">
                  <h4>{item.title}</h4>
                  <RichText as="p" text={item.body} autoLinkKeywords={false} />
                </div>
              ))}
            </div>
            <div className="premium-safety-closing">
              {feminineWaistHourglass.closingParagraphs.map((paragraph) => (
                <RichText key={paragraph.slice(0, 48)} as="p" text={paragraph} autoLinkKeywords={false} />
              ))}
            </div>
            <a
              href={CONSULT_URL}
              className="inline-link mt-6 inline-block font-ui text-sm uppercase tracking-wider"
              target="_blank"
              rel="noreferrer"
            >
              Book your free virtual consult →
            </a>
          </div>
        </section>

        <section className="premium-section premium-section--difference">
          <div className="container">
            <div className="premium-difference-header">
              <p className="premium-eyebrow">Understand your options</p>
              <h2 className="premium-section-title">{feminineWaistComparison.title}</h2>
              <p className="premium-difference-lead">{feminineWaistComparison.intro}</p>
            </div>
            <div className="premium-difference-cards premium-difference-cards--two">
              {feminineWaistComparison.columns.map((col, index) => (
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
              <Link href="/tummy-tuck" className="btn btn-outline !border-white/25 !text-white">
                Tummy tuck options
              </Link>
              <Link href="#related" className="inline-link self-center">
                Related procedures →
              </Link>
            </div>
          </div>
        </section>

        <section className="premium-section premium-section--soft" id="candidacy">
          <div className="container">
            <p className="premium-eyebrow">{feminineWaistCandidacy.eyebrow}</p>
            <h2 className="premium-section-title max-w-3xl">{feminineWaistCandidacy.title}</h2>
            <RichText
              as="p"
              className="premium-section-intro max-w-3xl mt-4"
              text={feminineWaistCandidacy.intro}
              autoLinkKeywords
            />
            <div className="premium-candidacy-grid">
              <div>
                <h3 className="premium-inner-h4">{feminineWaistCandidacy.idealTitle}</h3>
                <ul className="premium-checklist mt-4">
                  {feminineWaistCandidacy.ideal.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords={false} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="premium-inner-h4">{feminineWaistCandidacy.considerationsTitle}</h3>
                <ul className="premium-checklist mt-4">
                  {feminineWaistCandidacy.considerations.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords={false} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="premium-prose max-w-3xl mt-8">
              <RichText as="p" text={feminineWaistCandidacy.closing} autoLinkKeywords />
            </div>
            <a
              href={CONSULT_URL}
              className="inline-link mt-4 inline-block"
              target="_blank"
              rel="noreferrer"
            >
              Check your candidacy with a free consult →
            </a>
          </div>
        </section>

        <section className="premium-section premium-section--explore">
          <div className="container">
            <p className="premium-eyebrow">Combined procedures</p>
            <h2 className="premium-section-title">{feminineWaistCombinations.title}</h2>
            <RichText as="p" className="premium-explore-intro" text={feminineWaistCombinations.intro} autoLinkKeywords />
            <div className="premium-lipo-combo-grid">
              {feminineWaistCombinations.groups.map((group) => (
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
            <p className="premium-eyebrow">{feminineWaistRecovery.eyebrow}</p>
            <h2 className="premium-section-title max-w-2xl">{feminineWaistRecovery.title}</h2>
            <RichText
              as="p"
              className="premium-section-intro max-w-3xl mt-4"
              text={feminineWaistRecovery.intro}
              autoLinkKeywords
            />
            <ol className="premium-journey mt-10">
              {feminineWaistRecoverySteps.map((step) => (
                <li key={step.step} className="premium-journey-step">
                  <span className="premium-journey-num">{step.step}</span>
                  <h3>{step.title}</h3>
                  <RichText as="p" text={step.body} autoLinkKeywords />
                </li>
              ))}
            </ol>
            <div className="mt-12">
              <h3 className="premium-inner-h4 max-w-2xl">{feminineWaistRecovery.essentialsTitle}</h3>
              <RichText
                as="p"
                className="premium-section-intro max-w-2xl mt-3"
                text={feminineWaistRecovery.essentialsIntro}
                autoLinkKeywords={false}
              />
              <div className="premium-benefits premium-benefits--balanced mt-8">
                {feminineWaistRecoveryEssentials.map((item) => (
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
                {feminineWaistRecoveryTips.map((tip) => (
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

        <PremiumCostSection procedureLabel="Waist contouring" location="feminine-waist-cost" />

        <section className="premium-section" id="waist-results">
          <div className="container">
            <p className="premium-eyebrow">{feminineWaistResults.eyebrow}</p>
            <h2 className="premium-section-title max-w-3xl">{feminineWaistResults.title}</h2>
            <RichText
              as="p"
              className="premium-section-intro max-w-3xl mt-4"
              text={feminineWaistResults.intro}
              autoLinkKeywords={false}
            />
            <div className="premium-benefits premium-benefits--balanced mt-8">
              {feminineWaistResults.items.map((item) => (
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
                Continue researching with guides tailored to hourglass goals, recovery, and what to expect in Tampa Bay.
              </p>
            </div>
            <ul className="premium-lipo-directory-list">
              {feminineWaistRelatedProcedures.map((item) => {
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
              <h2 className="premium-section-title">{feminineWaistWhyChoose.title}</h2>
              <RichText
                as="p"
                className="premium-section-intro max-w-2xl"
                text={feminineWaistWhyChoose.intro}
                autoLinkKeywords
              />
            </div>
            <div className="premium-benefits premium-benefits--balanced">
              {feminineWaistWhyChoose.items.map((item) => (
                <div key={item.title} className="premium-benefit premium-benefit--card">
                  <h3>{item.title}</h3>
                  <RichText as="p" text={item.body} autoLinkKeywords />
                </div>
              ))}
            </div>
          </div>
        </section>

        <PremiumPageFaq
          title="Feminine Waist Contouring FAQs"
          intro="Clear answers about hourglass waist sculpting, Lipo 360 technique, BBL combinations, candidacy, recovery, results, and what to expect when researching waist contouring in Tampa Bay."
          faqs={feminineWaistFaqs}
        />

        <section className="premium-final-cta">
          <div className="container premium-final-inner">
            <h2>Ready To Sculpt Your Waist In Tampa Bay?</h2>
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
