import Link from "next/link";
import { PremiumHeroMedia } from "@/components/experience/PremiumHeroMedia";
import { privacyPolicyContent } from "@/content/privacy-policy-content";
import { resolveHeroSrc } from "@/lib/hero-images";
import { siteConfig } from "@/lib/site";

export function PremiumLegalPage() {
  const { hero, intro, lastUpdated, sections } = privacyPolicyContent;

  return (
    <div className="premium-lipo-page pb-24">
      <section className="premium-hero premium-hero--page premium-hero--lipo">
        <div className="premium-hero-media">
          <PremiumHeroMedia src={resolveHeroSrc(hero.src)} alt={hero.alt} />
          <div className="premium-hero-scrim" />
        </div>
        <div className="container premium-hero-content">
          <div className="premium-hero-copy">
            <nav className="premium-breadcrumb premium-breadcrumb--hero" aria-label="Breadcrumb">
              <Link href="/">← Home</Link>
            </nav>
            <p className="premium-eyebrow">Legal</p>
            <h1 className="premium-hero-title">Privacy Policy</h1>
            <p className="premium-hero-lead">{intro}</p>
            <p className="premium-hero-meta">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="container max-w-3xl">
          <nav className="premium-legal-jump" aria-label="Privacy policy sections">
            <ul className="premium-legal-jump-list">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="inline-link text-sm">
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="premium-legal-sections stack-8 mt-10">
            {sections.map((section) => (
              <article key={section.id} id={section.id} className="premium-legal-section">
                <h2 className="premium-section-title">{section.title}</h2>
                <div className="premium-prose stack-4 mt-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="premium-legal-contact mt-12">
            <h2 className="premium-section-title">Contact Us</h2>
            <p className="premium-prose mt-4">
              Questions about this Privacy Policy? Email{" "}
              <a href={`mailto:${siteConfig.email}`} className="inline-link">
                {siteConfig.email}
              </a>{" "}
              or call{" "}
              <a href={siteConfig.phoneHref} className="inline-link">
                {siteConfig.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
