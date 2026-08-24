"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RichText } from "@/components/RichText";
import { PremiumHomeFaq } from "@/components/experience/PremiumHomeFaq";
import { PremiumCostSection } from "@/components/experience/PremiumCostSection";
import { PremiumJumpNav } from "@/components/experience/PremiumJumpNav";
import { PremiumTestimonials } from "@/components/experience/PremiumTestimonials";
import { homeAbout, homeExploreProcedures, homeProcedures, homeTravel } from "@/content/home-sections";
import { PremiumTrustStrip } from "@/components/experience/PremiumTrustStrip";
import {
  conciergeSteps,
  procedureCategories,
  homeDifference,
  homeWhyChoose,
  type ProcedureCategoryId,
} from "@/content/premium-home";
import { TrackedContactLink } from "@/components/TrackedContactLink";
import { resolveHeroSrc } from "@/lib/hero-images";
import type { PageContent } from "@/lib/content";

const ConsultInterestForm = dynamic(
  () =>
    import("@/components/experience/ConsultInterestForm").then((mod) => mod.ConsultInterestForm),
  { ssr: false }
);

const HOME_JUMP_LINKS = [
  { href: "#procedures", label: "Procedures" },
  { href: "#cost", label: "Cost & financing" },
  { href: "#faq", label: "FAQ" },
];

export function PremiumHomePage({ page }: { page: PageContent }) {
  const [filter, setFilter] = useState<ProcedureCategoryId>("all");

  const filteredProcedures = useMemo(() => {
    if (filter === "all") return homeProcedures.items;
    return homeProcedures.items.filter(
      (p) => p.category === filter || p.alsoInCategories?.includes(filter)
    );
  }, [filter]);

  return (
    <>
      <PremiumTrustStrip />
      <PremiumJumpNav links={HOME_JUMP_LINKS} />

      {/* About */}
      <section className="premium-section">
        <div className="container premium-split">
          <div className="premium-split-media">
            <Image
              src={resolveHeroSrc(homeAbout.image.src)}
              alt={homeAbout.image.alt}
              width={720}
              height={720}
              loading="lazy"
              unoptimized
              sizes="(max-width: 768px) 100vw, 720px"
              className="premium-split-image"
            />
          </div>
          <div>
            <p className="premium-eyebrow">{homeAbout.title}</p>
            <h2 className="premium-section-title">{homeAbout.subtitle}</h2>
            {"stats" in homeAbout && homeAbout.stats ? (
              <ul className="premium-about-stats">
                {homeAbout.stats.map((stat) => (
                  <li key={stat.label}>
                    <span className="premium-about-stat-value">{stat.value}</span>
                    <span className="premium-about-stat-label">{stat.label}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="premium-prose stack-4 mt-6">
              {homeAbout.paragraphs.map((p) => (
                <RichText
                  key={p.text.slice(0, 48)}
                  text={p.text}
                  links={p.links}
                  autoLinkKeywords
                />
              ))}
            </div>
            <TrackedContactLink className="inline-link mt-6 inline-block font-ui text-sm uppercase tracking-wider" location="homepage-about-link">
              Get in touch →
            </TrackedContactLink>
          </div>
        </div>
        <div className="container mt-12 max-w-3xl">
          <ConsultInterestForm location="homepage-about" />
        </div>
      </section>

      {/* Procedures */}
      <section className="premium-section premium-section--soft" id="procedures">
        <div className="container">
          <div className="premium-procedures-intro">
            <p className="premium-eyebrow">Procedures</p>
            <h2 className="premium-section-title">{homeProcedures.title}</h2>
            <p className="premium-filter-intro">
              Filter by what you&apos;re exploring. Every path leads to the same thing:{" "}
              <span className="premium-filter-intro-accent">clarity before you commit.</span>
            </p>
          </div>
          <div className="premium-filter" role="tablist" aria-label="Filter procedures">
            {procedureCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={filter === cat.id}
                className={`premium-filter-btn ${filter === cat.id ? "is-active" : ""}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="premium-procedure-grid">
            {filteredProcedures.map((item) => {
              const cardSrc = resolveHeroSrc(item.image);
              return (
              <article key={item.title} className="premium-procedure-card">
                <Link
                  href={item.href}
                  className={`premium-procedure-media${item.imageMediaClass ? ` ${item.imageMediaClass}` : ""}`}
                >
                  <Image
                    src={cardSrc}
                    alt={item.imageAlt}
                    width={640}
                    height={480}
                    loading="lazy"
                    unoptimized={cardSrc.endsWith(".webp")}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
                    className={`premium-procedure-image${item.imageClass ? ` ${item.imageClass}` : ""}`}
                  />
                </Link>
                <div className="premium-procedure-body">
                  <h3 className="premium-procedure-title">
                    <Link href={item.href}>{item.title}</Link>
                  </h3>
                  <RichText
                    text={item.body}
                    links={item.links}
                    autoLinkKeywords
                    className="premium-procedure-copy !text-left !text-[0.95rem]"
                  />
                  <Link href={item.href} className="premium-card-link">
                    Learn about {item.learnAboutLabel ?? item.title} →
                  </Link>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Concierge journey */}
      <section className="premium-section premium-section--compact-bottom">
        <div className="container">
          <p className="premium-eyebrow">How it works</p>
          <h2 className="premium-section-title max-w-2xl">
            A concierge path from curiosity to consultation
          </h2>
          <ol className="premium-journey">
            {conciergeSteps.map((step) => (
              <li key={step.step} className="premium-journey-step">
                <span className="premium-journey-num">{step.step}</span>
                <h3>{step.title}</h3>
                <RichText as="p" text={step.body} autoLinkKeywords />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Difference */}
      <section className="premium-section premium-section--soft premium-section--difference">
        <div className="container">
          <div className="premium-difference-header">
            <p className="premium-eyebrow">{homeDifference.title}</p>
            <h2 className="premium-section-title">{homeDifference.introTitle}</h2>
            <p className="premium-difference-lead">{homeDifference.intro}</p>
          </div>
          <div className="premium-difference-cards">
            {homeDifference.columns.map((col, index) => (
              <article key={col.title} className="premium-difference-card">
                <span className="premium-difference-card-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{col.title}</h3>
                <RichText as="p" text={col.body} autoLinkKeywords />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="premium-section premium-section--why-choose">
        <div className="container">
          <div className="premium-why-choose-header">
            <h2 className="premium-section-title">{homeWhyChoose.title}</h2>
          </div>
          <div className="premium-benefits">
            {homeWhyChoose.items.map((item) => (
              <div key={item.title} className="premium-benefit">
                <h3>{item.title}</h3>
                <RichText as="p" text={item.body} autoLinkKeywords />
              </div>
            ))}
          </div>
        </div>
      </section>

      {page.testimonials.length > 0 ? (
        <div className="premium-section premium-section--soft premium-section--testimonials">
          <PremiumTestimonials />
        </div>
      ) : null}

      {/* Explore procedures — internal link hub for SEO */}
      <section className="premium-section premium-section--explore">
        <div className="container">
          <p className="premium-eyebrow">Procedure guides</p>
          <h2 className="premium-section-title">{homeExploreProcedures.title}</h2>
          <p className="premium-explore-intro">{homeExploreProcedures.intro}</p>
          <ul className="premium-explore-links">
            {homeExploreProcedures.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="premium-explore-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Travel */}
      <section className="premium-section">
        <div className="container premium-split premium-split--reverse">
          <div>
            <p className="premium-eyebrow">{homeTravel.subtitle}</p>
            <h2 className="premium-section-title">{homeTravel.title}</h2>
            <div className="premium-prose mt-4">
              <RichText text={homeTravel.body} autoLinkKeywords />
            </div>
            <ul className="premium-checklist mt-6">
              {homeTravel.bullets.map((b) => (
                <li key={b}>
                  <RichText as="span" text={b} autoLinkKeywords />
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/travel-information" className="btn btn-outline !border-white/25 !text-white">
                Travel information
              </Link>
              <Link href="/out-of-town-patient-guide" className="inline-link self-center">
                Out-of-town guide →
              </Link>
            </div>
          </div>
          <div className="premium-split-media">
            <Image
              src={resolveHeroSrc(homeTravel.image)}
              alt="Travel to Tampa Bay for cosmetic surgery"
              width={800}
              height={600}
              loading="lazy"
              unoptimized
              sizes="(max-width: 768px) 100vw, 800px"
              className="premium-split-image"
            />
          </div>
        </div>
      </section>

      <PremiumCostSection
        procedureLabel="Cosmetic surgery"
        location="home-cost"
        detail="Every plan is personalized—cost depends on the procedure, combinations, surgeon, facility, and anesthesia. We review clear pricing on your complimentary virtual consultation so you know what is included before you decide."
      />

      <PremiumHomeFaq />

      {/* Final CTA */}
      <section className="premium-final-cta">
        <div className="container premium-final-inner">
          <h2>Your cosmetic surgery journey starts here</h2>
          <RichText
            as="p"
            text="Schedule your complimentary virtual consultation and discover the personalized, concierge experience that sets Tampa Bay Body Sculpting apart."
            autoLinkKeywords
          />
          <div className="flex flex-wrap gap-3 mt-8 premium-final-actions">
            <TrackedContactLink className="btn btn-dark !bg-black !text-white !px-8" location="homepage-final">
              Request a consult
            </TrackedContactLink>
          </div>
        </div>
      </section>
    </>
  );
}
