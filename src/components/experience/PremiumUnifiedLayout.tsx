import Link from "next/link";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { GalleryGrid } from "@/components/GalleryGrid";
import { RichText } from "@/components/RichText";
import { PremiumHeroMedia } from "@/components/experience/PremiumHeroMedia";
import { PremiumFinancingCta } from "@/components/experience/PremiumFinancingCta";
import { PremiumContentSections } from "@/components/experience/PremiumContentSections";
import { PremiumPageFaq } from "@/components/experience/PremiumPageFaq";
import { ConsultInterestForm } from "@/components/experience/ConsultInterestForm";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { PremiumTrustStrip } from "@/components/experience/PremiumTrustStrip";
import type { PageContent } from "@/lib/content";
import type { preparePremiumPageData } from "@/lib/premium-page-extractors";
import { normalizeGlanceTitle } from "@/lib/premium-page-extractors";
import { TrackedContactLink } from "@/components/TrackedContactLink";
import { toTitleCase } from "@/lib/text";

function getParentLink(page: PageContent): { href: string; label: string } | null {
  const slug = page.slug;
  if (slug.startsWith("male-") || slug === "adult-circumcision")
    return { href: "/men", label: "Men's procedures" };
  if (
    slug.startsWith("female-") ||
    slug === "labiaplasty" ||
    slug === "mommy-makeover" ||
    slug === "feminine-waist-contouring"
  )
    return { href: "/women", label: "Women's procedures" };
  if (slug.includes("breast") || slug === "breasts")
    return { href: "/breasts", label: "Breast procedures" };
  if (
    slug.includes("lipo") ||
    slug.includes("tummy") ||
    slug.includes("bbl") ||
    slug === "arm-lipo-360----arm-lift"
  )
    return { href: "/liposuction", label: "Liposuction" };
  if (["faqs", "financing", "travel", "recovery", "out-of-town"].some((k) => slug.includes(k)))
    return { href: "/resources", label: "Resources" };
  return null;
}

type UnifiedData = ReturnType<typeof preparePremiumPageData>;

export function PremiumUnifiedLayout({ data }: { data: UnifiedData }) {
  const {
    page,
    heroTitle,
    eyebrow,
    heroImage,
    heroAlt,
    heroLead,
    shortTitle,
    intro,
    glance,
    comparison,
    combinations,
    recovery,
    procedureDirectory,
    contentSections,
    related,
    whyChoose,
    faqs,
    isFemaleBaGallery,
    isGallery,
    gallerySectionHeading,
    finalCtaTitle,
  } = data;

  const parent = getParentLink(page);
  let relatedIndex = 0;
  let directoryIndex = 0;

  const secondaryCta = glance
    ? { href: "#at-a-glance", label: "At a glance" }
    : related.length > 0
      ? { href: "#related", label: "Related procedures" }
      : faqs.length > 0
        ? { href: "#faq", label: "Common questions" }
        : { href: "/liposuction", label: "Explore procedures" };

  const jumpLinks = [
    glance ? { href: "#at-a-glance", label: "At a glance" } : null,
    procedureDirectory && procedureDirectory.items.length > 0
      ? { href: "#procedures", label: "Procedures" }
      : null,
    recovery ? { href: "#recovery", label: "Recovery" } : null,
    related.length > 0 ? { href: "#related", label: "Related" } : null,
    faqs.length > 0 ? { href: "#faq", label: "FAQ" } : null,
    { href: "#get-started", label: "Get started" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <>
      <PageJsonLd page={page} />
      <div className="premium-lipo-page pb-24">
        <section className="premium-hero premium-hero--page premium-hero--lipo">
          <div className="premium-hero-media">
            <PremiumHeroMedia src={heroImage} alt={heroAlt} />
            <div className="premium-hero-scrim" />
          </div>
          <div className="container premium-hero-content">
            <div className="premium-hero-copy">
              <nav className="premium-breadcrumb premium-breadcrumb--hero" aria-label="Breadcrumb">
                <Link href="/">← Home</Link>
                {parent ? (
                  <>
                    <span aria-hidden="true"> · </span>
                    <Link href={parent.href}>{parent.label}</Link>
                  </>
                ) : null}
              </nav>
              <p className="premium-eyebrow">{eyebrow}</p>
              <h1 className="premium-hero-title">{heroTitle}</h1>
              <RichText as="p" className="premium-hero-lead" text={heroLead} autoLinkKeywords />
              <div className="premium-hero-cta">
                <TrackedContactLink className="btn btn-primary premium-btn-glow" location={`unified-${page.slug}-hero`}>
                  Request a consult
                </TrackedContactLink>
                <Link href={secondaryCta.href} className="btn btn-outline !border-white/30 !text-white">
                  {secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <PremiumTrustStrip />

        {jumpLinks.length > 0 ? (
          <nav className="premium-jump-nav" aria-label="On this page">
            <div className="container premium-jump-nav-scroller">
              {jumpLinks.map((link) => (
                <a key={link.href} href={link.href} className="premium-jump-nav-link">
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        ) : null}

        {intro.paragraphs.length > 0 ? (
          <section className="premium-section">
            <div className="container max-w-3xl">
              <p className="premium-eyebrow">{intro.eyebrow}</p>
              <h2 className="premium-section-title">{intro.title}</h2>
              <div className="premium-prose stack-4 mt-6">
                {intro.paragraphs.map((text) => (
                  <RichText key={text.slice(0, 48)} text={text} autoLinkKeywords />
                ))}
              </div>
              <TrackedContactLink
                className="inline-link mt-6 inline-block font-ui text-sm uppercase tracking-wider"
                location={`unified-${page.slug}-intro`}
              >
                Get in touch →
              </TrackedContactLink>
            </div>
          </section>
        ) : null}

        {isFemaleBaGallery ? (
          <BeforeAfterGallery title={gallerySectionHeading} intro={page.description} images={page.images} />
        ) : null}

        {glance ? (
          <section className="premium-section premium-section--soft" id="at-a-glance">
            <div className="container">
              <p className="premium-eyebrow">Quick reference</p>
              <h2 className="premium-section-title">{toTitleCase(glance.sectionTitle)}</h2>
              <div className="premium-glance-grid">
                {glance.groups.map((group) => {
                  const title = normalizeGlanceTitle(group.title);
                  if (!title) return null;
                  return (
                    <article key={title} className="premium-glance-card">
                      <h3 className="premium-glance-title">{title}</h3>
                      <ul className="premium-checklist">
                        {group.items.map((item) => (
                          <li key={item}>
                            <RichText as="span" text={item} autoLinkKeywords />
                          </li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        ) : null}

        {procedureDirectory && procedureDirectory.items.length > 0 ? (
          <section className="premium-section premium-section--soft" id="procedures">
            <div className="container">
              <div className="premium-procedures-intro">
                <p className="premium-eyebrow">Procedure directory</p>
                <h2 className="premium-section-title">{toTitleCase(procedureDirectory.title)}</h2>
                <p className="premium-filter-intro">{procedureDirectory.intro}</p>
              </div>
              <ul className="premium-lipo-directory-list">
                {procedureDirectory.items.map((item) => {
                  directoryIndex += 1;
                  const href = item.href || item.links?.[0]?.href;
                  return (
                    <li key={`${item.title}-${directoryIndex}`}>
                      <article className="premium-lipo-directory-item">
                        <span className="premium-lipo-directory-num">
                          {String(directoryIndex).padStart(2, "0")}
                        </span>
                        <div className="premium-lipo-directory-copy">
                          <h3 className="premium-lipo-directory-title">
                            {href ? <Link href={href}>{toTitleCase(item.title)}</Link> : toTitleCase(item.title)}
                          </h3>
                          <RichText
                            as="p"
                            className="premium-lipo-directory-body"
                            text={item.body}
                            links={item.links}
                            autoLinkKeywords
                          />
                        </div>
                        {href ? (
                          <Link href={href} className="premium-lipo-directory-link" aria-label={`View ${item.title}`}>
                            →
                          </Link>
                        ) : null}
                      </article>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        ) : null}

        {contentSections.length > 0 ? (
          <PremiumContentSections sections={contentSections} layout="page" />
        ) : null}

        {comparison ? (
          <section className="premium-section premium-section--difference">
            <div className="container">
              <div className="premium-difference-header">
                <p className="premium-eyebrow">Compare options</p>
                <h2 className="premium-section-title">{toTitleCase(comparison.title)}</h2>
                <p className="premium-difference-lead">{comparison.intro}</p>
              </div>
              <div className="premium-difference-cards premium-difference-cards--two">
                {comparison.columns.map((col, index) => (
                  <article key={col.title} className="premium-difference-card">
                    <span className="premium-difference-card-num">{String(index + 1).padStart(2, "0")}</span>
                    <h3>{col.title}</h3>
                    <RichText as="p" text={col.body} autoLinkKeywords />
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="premium-section premium-section--explore">
          <div className="container">
            <p className="premium-eyebrow">Combined procedures</p>
            <h2 className="premium-section-title">{combinations.title}</h2>
            <RichText as="p" className="premium-explore-intro" text={combinations.intro} autoLinkKeywords />
            <div className="premium-lipo-combo-grid">
              {combinations.groups.map((group) => (
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

        {recovery ? (
          <section className="premium-section premium-section--soft" id="recovery">
            <div className="container">
              <p className="premium-eyebrow">Recovery</p>
              <h2 className="premium-section-title max-w-2xl">
                {toTitleCase(recovery.title.replace(/\(pdf\)/gi, "").trim()) || `What To Expect After ${shortTitle}`}
              </h2>
              <RichText as="p" className="premium-section-intro max-w-2xl" text={recovery.intro} autoLinkKeywords />
              <ol className="premium-journey mt-10">
                {recovery.steps.map((step) => (
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
                  {recovery.tips.map((tip) => (
                    <li key={tip}>
                      <RichText as="span" text={tip} autoLinkKeywords />
                    </li>
                  ))}
                </ul>
                <Link href="/recovery-guides" className="inline-link mt-6 inline-block">
                  Read full recovery guides →
                </Link>
              </div>
              <PremiumFinancingCta location={`${page.slug}-recovery`} />
            </div>
          </section>
        ) : null}

        {related.length > 0 ? (
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
                {related.map((item) => {
                  relatedIndex += 1;
                  return (
                    <li key={item.href}>
                      <article className="premium-lipo-directory-item">
                        <span className="premium-lipo-directory-num">
                          {String(relatedIndex).padStart(2, "0")}
                        </span>
                        <div className="premium-lipo-directory-copy">
                          <h3 className="premium-lipo-directory-title">
                            <Link href={item.href}>{toTitleCase(item.title)}</Link>
                          </h3>
                          {item.description ? (
                            <RichText
                              as="p"
                              className="premium-lipo-directory-body"
                              text={item.description}
                              autoLinkKeywords
                            />
                          ) : null}
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
        ) : null}

        <section className="premium-section premium-section--why-choose">
          <div className="container">
            <div className="premium-why-choose-header">
              <h2 className="premium-section-title">{whyChoose.title}</h2>
              <RichText as="p" className="premium-section-intro max-w-2xl" text={whyChoose.intro} autoLinkKeywords />
            </div>
            <div className="premium-benefits">
              {whyChoose.items.map((item) => (
                <div key={item.title} className="premium-benefit">
                  <h3>{item.title}</h3>
                  <RichText as="p" text={item.body} autoLinkKeywords />
                </div>
              ))}
            </div>
          </div>
        </section>

        {faqs.length > 0 ? (
          <PremiumPageFaq
            title={`${shortTitle} FAQs`}
            intro={`Clear answers about ${shortTitle.toLowerCase()}—candidacy, recovery, and what to expect in Tampa Bay.`}
            faqs={faqs}
          />
        ) : null}

        {!isFemaleBaGallery && (isGallery || page.images.length > 4) ? (
          <section className="premium-section">
            <div className="container">
              <GalleryGrid
                title={isGallery ? heroTitle : "Before & after inspiration"}
                images={page.images}
                variant="premium"
              />
            </div>
          </section>
        ) : null}

        <section className="premium-section premium-section--soft" id="get-started">
          <div className="container max-w-3xl">
            <p className="premium-eyebrow">Next step</p>
            <h2 className="premium-section-title">Ready to talk through your options?</h2>
            <p className="premium-section-intro mt-4">
              Tell us what you&apos;re researching and choose how you&apos;d like to connect—no obligation.
            </p>
            <ConsultInterestForm className="mt-8" location={`unified-${page.slug}`} />
          </div>
        </section>

        <section className="premium-final-cta">
          <div className="container premium-final-inner">
            <h2>{finalCtaTitle}</h2>
            <RichText
              as="p"
              text="Schedule your complimentary virtual consultation and discover the personalized, concierge experience that sets Tampa Bay Body Sculpting apart."
              autoLinkKeywords
            />
            <div className="flex flex-wrap gap-3 mt-8 premium-final-actions">
              <TrackedContactLink className="btn btn-dark !bg-black !text-white !px-8" location={`unified-${page.slug}-final`}>
                Request a consult
              </TrackedContactLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
