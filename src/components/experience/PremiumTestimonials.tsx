import { RichText } from "@/components/RichText";
import { patientTestimonials } from "@/content/patient-testimonials";

/** Pull patient initials/name from review text, or fall back to verified label. */
function getAttribution(review: string): string {
  const matches = [
    ...review.matchAll(/\s[-–—]\s+([A-Z][a-zA-Z.]*(?:\s+[A-Z]\.?)?)(?=\.|\s|$)/g),
  ];
  const last = matches.at(-1);
  if (last?.[1]) return last[1];
  return "Verified patient";
}

function Stars() {
  return (
    <div className="premium-testimonial-stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export function PremiumTestimonials() {
  return (
    <section className="premium-testimonials" aria-labelledby="premium-testimonials-title">
      <div className="container">
        <div className="premium-testimonials-head">
          <p className="premium-eyebrow">Patient stories</p>
          <h2 id="premium-testimonials-title" className="premium-section-title">
            Real experiences. Real results.
          </h2>
          <p className="premium-testimonials-intro">
            In their own words—verbatim reviews from Tampa Bay Body Sculpting patients.
          </p>
        </div>

        <div className="premium-testimonials-grid">
          {patientTestimonials.map((review, idx) => {
            const attribution = getAttribution(review);
            return (
              <blockquote key={`review-${idx}`} className="premium-testimonial">
                <Stars />
                <RichText
                  as="p"
                  className="premium-testimonial-quote"
                  text={review}
                  autoLinkKeywords
                />
                <footer className="premium-testimonial-author">— {attribution}</footer>
              </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
}
