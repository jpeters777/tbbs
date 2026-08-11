import Link from "next/link";
import { RichText } from "@/components/RichText";
import { homeFaqs } from "@/content/home-faqs";

/** Crawlable FAQ block (native details/summary) for SEO + AIO. */
export function PremiumHomeFaq() {
  return (
    <section className="premium-section premium-section--faq" id="faq" aria-labelledby="home-faq-title">
      <div className="container">
        <p className="premium-eyebrow">Common Questions</p>
        <h2 id="home-faq-title" className="premium-section-title">
          Cosmetic Surgery FAQs
        </h2>
        <p className="premium-faq-intro">
          Clear answers about procedures, consultations, financing, and travel for patients
          researching cosmetic surgery in Tampa Bay.
        </p>
        <div className="premium-faq-list">
          {homeFaqs.map((faq) => (
            <details key={faq.q} className="premium-faq-item">
              <summary className="premium-faq-question">{faq.q}</summary>
              <RichText
                as="p"
                className="premium-faq-answer"
                text={faq.a}
                links={faq.links}
                autoLinkKeywords
              />
            </details>
          ))}
        </div>
        <Link href="/faqs" className="premium-faq-more inline-link mt-6 inline-block">
          View all FAQs →
        </Link>
      </div>
    </section>
  );
}
