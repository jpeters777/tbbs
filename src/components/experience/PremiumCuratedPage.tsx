import Link from "next/link";
import { RichText } from "@/components/RichText";
import { PremiumHeroMedia } from "@/components/experience/PremiumHeroMedia";
import { PremiumPageFaq } from "@/components/experience/PremiumPageFaq";
import { PremiumRecoveryGuides } from "@/components/experience/PremiumRecoveryGuides";
import { PremiumFinancingCta } from "@/components/experience/PremiumFinancingCta";
import { ConsultInterestForm } from "@/components/experience/ConsultInterestForm";
import { CuratedPageJsonLd } from "@/components/seo/CuratedPageJsonLd";
import { PremiumTrustStrip } from "@/components/experience/PremiumTrustStrip";
import { premiumWhyChoose } from "@/content/premium-shared-sections";
import { getPublicPathForSlug } from "@/lib/public-paths";
import type { CuratedPageContent } from "@/lib/premium-curated/types";
import { TrackedContactLink } from "@/components/TrackedContactLink";

export function PremiumCuratedPage({ content }: { content: CuratedPageContent }) {
  let relatedIndex = 0;
  const pagePath = getPublicPathForSlug(content.slug);
  const howId = content.howItWorks.sectionId ?? "how-it-works";
  const focusId = content.focusSection?.sectionId ?? "procedure-focus";
  const resultsId = content.results.sectionId ?? "results";

  return (
    <>
      <CuratedPageJsonLd content={content} />
      <div className="premium-lipo-page pb-24">
        <section className="premium-hero premium-hero--page premium-hero--lipo">
          <div className="premium-hero-media">
            <PremiumHeroMedia
              src={content.visuals.hero.src}
              alt={content.visuals.hero.alt}
            />
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
                <TrackedContactLink className="btn btn-primary premium-btn-glow" location={`curated-${content.slug}-hero`}>
                  Request a consult
                </TrackedContactLink>
                <Link href="#at-a-glance" className="btn btn-outline !border-white/30 !text-white">
                  {content.heroSecondaryCta}
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6">
                {content.jumpLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="inline-link text-sm">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PremiumTrustStrip />

        {content.jumpLinks.length > 0 ? (
          <nav className="premium-jump-nav" aria-label="On this page">
            <div className="container premium-jump-nav-scroller">
              {content.jumpLinks.map((link) => (
                <a key={link.href} href={link.href} className="premium-jump-nav-link">
                  {link.label}
                </a>
              ))}
              <a href="#get-started" className="premium-jump-nav-link">
                Get started
              </a>
            </div>
          </nav>
        ) : null}

        <section className="premium-section">
          <div className="container max-w-3xl">
            <p className="premium-eyebrow">{content.intro.eyebrowQuestion}</p>
            <h2 className="premium-section-title">{content.intro.title}</h2>
            <div className="premium-prose stack-4 mt-6">
              {content.intro.paragraphs.map((text) => (
                <RichText key={text.slice(0, 48)} text={text} autoLinkKeywords currentPath={pagePath} />
              ))}
            </div>
            <TrackedContactLink
              className="inline-link mt-6 inline-block font-ui text-sm uppercase tracking-wider"
              location={`curated-${content.slug}-intro`}
            >
              Get in touch →
            </TrackedContactLink>
          </div>
        </section>

        <section className="premium-section premium-section--soft" id="at-a-glance">
          <div className="container">
            <p className="premium-eyebrow">Quick reference</p>
            <h2 className="premium-section-title">{content.intro.heroTitle.replace(/ In Tampa Bay$/i, "")} At A Glance</h2>
            <div className="premium-glance-grid premium-glance-grid--four">
              <article className="premium-glance-card">
                <h3 className="premium-glance-title">{content.glance.col1Title}</h3>
                <ul className="premium-checklist">
                  {content.glance.col1Items.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords currentPath={pagePath} />
                    </li>
                  ))}
                </ul>
              </article>
              <article className="premium-glance-card">
                <h3 className="premium-glance-title">Good candidates</h3>
                <ul className="premium-checklist">
                  {content.glance.candidates.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords currentPath={pagePath} />
                    </li>
                  ))}
                </ul>
              </article>
              <article className="premium-glance-card">
                <h3 className="premium-glance-title">Key benefits</h3>
                <ul className="premium-checklist">
                  {content.glance.benefits.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords currentPath={pagePath} />
                    </li>
                  ))}
                </ul>
              </article>
              <article className="premium-glance-card">
                <h3 className="premium-glance-title">Procedure snapshot</h3>
                <ul className="premium-checklist">
                  {content.glance.procedureSnapshot.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords={false} />
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="premium-section" id={howId}>
          <div className="container">
            <p className="premium-eyebrow">{content.howItWorks.eyebrow}</p>
            <h2 className="premium-section-title max-w-3xl">{content.howItWorks.title}</h2>
            <RichText as="p" className="premium-section-intro max-w-3xl mt-4" text={content.howItWorks.intro} autoLinkKeywords currentPath={pagePath} />
            <ol className="premium-journey premium-journey--steps-grid mt-10">
              {content.howItWorks.steps.map((step) => (
                <li key={step.step} className="premium-journey-step">
                  <span className="premium-journey-num">{step.step}</span>
                  <h3>{step.title}</h3>
                  <RichText as="p" text={step.body} autoLinkKeywords currentPath={pagePath} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        {content.focusSection ? (
          <section className="premium-section premium-section--soft" id={focusId}>
            <div className="container">
              <p className="premium-eyebrow">{content.focusSection.eyebrow}</p>
              <h2 className="premium-section-title max-w-3xl">{content.focusSection.title}</h2>
              <RichText
                as="p"
                className="premium-section-intro max-w-3xl mt-4"
                text={content.focusSection.intro}
                autoLinkKeywords={false}
              />
              {content.focusSection.items.some((item) => item.phases?.length) ? (
                <PremiumRecoveryGuides
                  items={content.focusSection.items}
                  nav={content.focusSection.items
                    .filter((item) => item.phases?.length && item.id)
                    .map((item) => {
                      const jump = content.jumpLinks.find((link) => link.href === `#${item.id}`);
                      return { href: `#${item.id}`, label: jump?.label ?? item.title };
                    })}
                  pagePath={pagePath}
                />
              ) : (
                <div className="premium-benefits premium-benefits--balanced mt-8">
                  {content.focusSection.items.map((item) => (
                    <div key={item.title} id={item.id} className="premium-benefit premium-benefit--card">
                      <h4>{item.title}</h4>
                      <RichText as="p" text={item.body} autoLinkKeywords currentPath={pagePath} />
                      {item.href ? (
                        <Link href={item.href} className="inline-link mt-3 inline-block text-sm">
                          View procedure recovery →
                        </Link>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}
              <div className="premium-safety-closing">
                {content.focusSection.closingParagraphs.map((paragraph) => (
                  <RichText key={paragraph.slice(0, 48)} as="p" text={paragraph} autoLinkKeywords={false} />
                ))}
              </div>
              <TrackedContactLink
                className="inline-link mt-6 inline-block font-ui text-sm uppercase tracking-wider"
                location={`curated-${content.slug}-focus`}
              >
                Request a consult →
              </TrackedContactLink>
            </div>
          </section>
        ) : null}

        {content.comparison ? (
          <section id="compare" className="premium-section premium-section--difference">
            <div className="container">
              <div className="premium-difference-header">
                <p className="premium-eyebrow">Understand your options</p>
                <h2 className="premium-section-title">{content.comparison.title}</h2>
                <p className="premium-difference-lead">{content.comparison.intro}</p>
              </div>
              {content.comparison.rows?.length ? (
                <div className="premium-recovery-comparison-wrap">
                  <table className="premium-recovery-comparison">
                    <thead>
                      <tr>
                        <th scope="col">Procedure</th>
                        <th scope="col">Return to desk work</th>
                        <th scope="col">Exercise clearance</th>
                        <th scope="col">Garment wear</th>
                      </tr>
                    </thead>
                    <tbody>
                      {content.comparison.rows.map((row) => (
                        <tr key={row.procedure}>
                          <th scope="row">{row.procedure}</th>
                          <td data-label="Return to desk work">{row.deskWork}</td>
                          <td data-label="Exercise clearance">{row.exercise}</td>
                          <td data-label="Garment wear">{row.garment}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : content.comparison.columns?.length ? (
                <div className="premium-difference-cards premium-difference-cards--two">
                  {content.comparison.columns.map((col, index) => (
                    <article key={col.title} className="premium-difference-card">
                      <span className="premium-difference-card-num">{String(index + 1).padStart(2, "0")}</span>
                      <h3>{col.title}</h3>
                      <RichText as="p" text={col.body} autoLinkKeywords={false} />
                    </article>
                  ))}
                </div>
              ) : null}
              {content.comparison.links?.length ? (
                <div className="flex flex-wrap gap-3 mt-8">
                  {content.comparison.links.map((link) => (
                    <Link key={link.href} href={link.href} className="btn btn-outline !border-white/25 !text-white">
                      {link.label}
                    </Link>
                  ))}
                  <Link href="#related" className="inline-link self-center">
                    Related procedures →
                  </Link>
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

        <section className="premium-section premium-section--soft" id="candidacy">
          <div className="container">
            <p className="premium-eyebrow">{content.candidacy.eyebrow}</p>
            <h2 className="premium-section-title max-w-3xl">{content.candidacy.title}</h2>
            <RichText as="p" className="premium-section-intro max-w-3xl mt-4" text={content.candidacy.intro} autoLinkKeywords currentPath={pagePath} />
            <div className="premium-candidacy-grid">
              <div>
                <h3 className="premium-inner-h4">{content.candidacy.idealTitle}</h3>
                <ul className="premium-checklist mt-4">
                  {content.candidacy.ideal.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords={false} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="premium-inner-h4">{content.candidacy.considerationsTitle}</h3>
                <ul className="premium-checklist mt-4">
                  {content.candidacy.considerations.map((item) => (
                    <li key={item}>
                      <RichText as="span" text={item} autoLinkKeywords={false} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="premium-prose max-w-3xl mt-8">
              <RichText as="p" text={content.candidacy.closing} autoLinkKeywords currentPath={pagePath} />
            </div>
            <TrackedContactLink className="inline-link mt-4 inline-block" location={`curated-${content.slug}-candidacy`}>
              Check your candidacy — get in touch →
            </TrackedContactLink>
          </div>
        </section>

        <section className="premium-section premium-section--explore">
          <div className="container">
            <p className="premium-eyebrow">Combined procedures</p>
            <h2 className="premium-section-title">{content.combinations.title}</h2>
            <RichText as="p" className="premium-explore-intro" text={content.combinations.intro} autoLinkKeywords currentPath={pagePath} />
            <div className="premium-lipo-combo-grid">
              {content.combinations.groups.map((group) => (
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
            <p className="premium-eyebrow">{content.recovery.eyebrow}</p>
            <h2 className="premium-section-title max-w-2xl">{content.recovery.title}</h2>
            <RichText as="p" className="premium-section-intro max-w-3xl mt-4" text={content.recovery.intro} autoLinkKeywords currentPath={pagePath} />
            <ol className="premium-journey mt-10">
              {content.recovery.steps.map((step) => (
                <li key={step.step} className="premium-journey-step">
                  <span className="premium-journey-num">{step.step}</span>
                  <h3>{step.title}</h3>
                  <RichText as="p" text={step.body} autoLinkKeywords currentPath={pagePath} />
                </li>
              ))}
            </ol>
            <div className="mt-12">
              <h3 className="premium-inner-h4 max-w-2xl">{content.recovery.essentialsTitle}</h3>
              <RichText as="p" className="premium-section-intro max-w-2xl mt-3" text={content.recovery.essentialsIntro} autoLinkKeywords={false} />
              <div className="premium-benefits premium-benefits--balanced mt-8">
                {content.recovery.essentials.map((item) => (
                  <div key={item.title} className="premium-benefit premium-benefit--card">
                    <h4>{item.title}</h4>
                    <RichText as="p" text={item.body} autoLinkKeywords currentPath={pagePath} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 max-w-3xl">
              <h3 className="premium-inner-h4">Recovery Tips</h3>
              <ul className="premium-checklist mt-4">
                {content.recovery.tips.map((tip) => (
                  <li key={tip}>
                    <RichText as="span" text={tip} autoLinkKeywords currentPath={pagePath} />
                  </li>
                ))}
              </ul>
              <Link href="/recovery-guides" className="inline-link mt-6 inline-block">
                Read full recovery guides →
              </Link>
            </div>
            <PremiumFinancingCta location={`${content.slug}-recovery`} procedureLabel={content.schemaProcedureName} />
          </div>
        </section>

        <section className="premium-section" id={resultsId}>
          <div className="container">
            <p className="premium-eyebrow">{content.results.eyebrow}</p>
            <h2 className="premium-section-title max-w-3xl">{content.results.title}</h2>
            <RichText as="p" className="premium-section-intro max-w-3xl mt-4" text={content.results.intro} autoLinkKeywords={false} />
            <div className="premium-benefits premium-benefits--balanced mt-8">
              {content.results.items.map((item) => (
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
                {content.relatedIntro ??
                  "Continue researching with guides tailored to candidacy, recovery, and what to expect in Tampa Bay."}
              </p>
            </div>
            <ul className="premium-lipo-directory-list">
              {content.relatedProcedures.map((item) => {
                relatedIndex += 1;
                return (
                  <li key={item.href}>
                    <article className="premium-lipo-directory-item">
                      <span className="premium-lipo-directory-num">{String(relatedIndex).padStart(2, "0")}</span>
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
                );
              })}
            </ul>
          </div>
        </section>

        <section className="premium-section premium-section--why-choose">
          <div className="container">
            <div className="premium-why-choose-header">
              <h2 className="premium-section-title">{premiumWhyChoose.title}</h2>
              <RichText as="p" className="premium-section-intro max-w-2xl" text={premiumWhyChoose.intro} autoLinkKeywords currentPath={pagePath} />
            </div>
            <div className="premium-benefits premium-benefits--balanced">
              {premiumWhyChoose.items.map((item) => (
                <div key={item.title} className="premium-benefit premium-benefit--card">
                  <h3>{item.title}</h3>
                  <RichText as="p" text={item.body} autoLinkKeywords currentPath={pagePath} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <PremiumPageFaq title={content.faqTitle} intro={content.faqIntro} faqs={content.faqs} currentPath={pagePath} />

        <section className="premium-section premium-section--soft" id="get-started">
          <div className="container max-w-3xl">
            <p className="premium-eyebrow">Next step</p>
            <h2 className="premium-section-title">Ready to talk through your options?</h2>
            <p className="premium-section-intro mt-4">
              Tell us what you&apos;re researching and choose how you&apos;d like to connect—no obligation.
            </p>
            <ConsultInterestForm className="mt-8" location={`curated-${content.slug}`} />
          </div>
        </section>

        <section className="premium-final-cta">
          <div className="container premium-final-inner">
            <h2>{content.finalCtaTitle}</h2>
            <RichText
              as="p"
              text="Schedule your complimentary virtual consultation and discover the personalized, concierge experience that sets Tampa Bay Body Sculpting apart."
              autoLinkKeywords currentPath={pagePath}
            />
            <div className="flex flex-wrap gap-3 mt-8 premium-final-actions">
              <TrackedContactLink className="btn btn-dark !bg-black !text-white !px-8" location={`curated-${content.slug}-final`}>
                Request a consult
              </TrackedContactLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
