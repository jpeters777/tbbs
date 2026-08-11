import Link from "next/link";
import type { KeywordLink } from "@/lib/keyword-links";
import { RichText } from "@/components/RichText";

export function PremiumPageFaq({
  title = "Frequently Asked Questions",
  intro,
  faqs,
  currentPath,
}: {
  title?: string;
  intro?: string;
  faqs: { q: string; a: string; links?: KeywordLink[] }[];
  currentPath?: string;
}) {
  if (!faqs.length) return null;

  return (
    <section className="premium-section premium-section--faq" id="faq" aria-labelledby="page-faq-title">
      <div className="container">
        <p className="premium-eyebrow">Common questions</p>
        <h2 id="page-faq-title" className="premium-section-title">
          {title}
        </h2>
        {intro ? (
          <RichText as="p" className="premium-faq-intro" text={intro} autoLinkKeywords currentPath={currentPath} />
        ) : null}
        <div className="premium-faq-list">
          {faqs.map((faq) => (
            <details key={faq.q} className="premium-faq-item">
              <summary className="premium-faq-question">{faq.q}</summary>
              <RichText
                as="p"
                className="premium-faq-answer"
                text={faq.a}
                links={faq.links}
                autoLinkKeywords
                currentPath={currentPath}
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
