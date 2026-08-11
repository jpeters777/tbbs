import { RichText } from "@/components/RichText";

export function Testimonials({
  items,
  variant = "default",
}: {
  items: string[];
  variant?: "default" | "premium";
}) {
  if (!items.length) return null;

  if (variant === "premium") {
    return (
      <section className="premium-inner-testimonials">
        <h2 className="premium-inner-title">Patient Testimonials</h2>
        <ul className="premium-inner-testimonial-grid">
          {items.map((item, idx) => (
            <li key={`testimonial-${idx}`}>
              <blockquote className="premium-inner-testimonial-card">
                <p className="premium-inner-testimonial-stars" aria-hidden="true">
                  ★★★★★
                </p>
                <RichText as="p" className="premium-inner-testimonial-quote" text={item} autoLinkKeywords />
              </blockquote>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Patient Testimonials</h2>
        <div className="testimonials-grid mt-6">
          {items.map((item, idx) => (
            <blockquote
              key={`testimonial-${idx}`}
              className="border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 leading-relaxed text-[var(--color-text-body)]"
            >
              <p className="text-[var(--color-heading-soft)] mb-3 tracking-[0.2em] text-sm font-ui">★★★★★</p>
              <RichText as="p" className="text-base" text={item} autoLinkKeywords />
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
