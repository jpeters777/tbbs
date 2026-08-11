import { RichText } from "@/components/RichText";

export type FaqItem = { q: string; a: string };

export function PremiumFaqAccordion({
  title = "Frequently Asked Questions",
  items,
}: {
  title?: string;
  items: FaqItem[];
}) {
  if (!items.length) return null;

  return (
    <section className="premium-inner-faq" aria-labelledby="page-faq-title">
      <h2 id="page-faq-title" className="premium-inner-title">
        {title}
      </h2>
      <div className="premium-faq-list">
        {items.map((item) => (
          <details key={item.q} className="premium-faq-item">
            <summary className="premium-faq-question">{item.q}</summary>
            <RichText as="p" className="premium-faq-answer" text={item.a} autoLinkKeywords />
          </details>
        ))}
      </div>
    </section>
  );
}
