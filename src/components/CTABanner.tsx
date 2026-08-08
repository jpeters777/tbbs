import { CONSULT_URL, siteConfig } from "@/lib/site";

export function CTABanner({
  title = "Your Cosmetic Surgery Journey Starts Here",
  body = "Schedule your complimentary virtual consultation and discover the personalized, concierge experience that sets Tampa Bay Body Sculpting apart.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section section-accent">
      <div className="container flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="section-title">{title}</h2>
          <p className="section-lead">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={CONSULT_URL} className="btn btn-primary" target="_blank" rel="noreferrer">
            Start a consultation
          </a>
          <a href={siteConfig.phoneHref} className="btn btn-outline text-white border-white/60">
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
