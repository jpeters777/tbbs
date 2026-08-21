import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { TrackedPhoneLink } from "@/components/TrackedPhoneLink";
import { TrackedConsultLink } from "@/components/TrackedConsultLink";

const resourceLinks = [
  { label: "How We Select Providers", href: "/how-we-select-providers" },
  { label: "Financing Options", href: "/financing-options" },
  { label: "Travel Information", href: "/travel-information" },
  { label: "Recovery Guides", href: "/recovery-guides" },
  { label: "Out-of-Town Patient Guide", href: "/out-of-town-patient-guide" },
  { label: "FAQs", href: "/faqs" },
];

const procedureLinks = [
  { label: "Lipo 360", href: "/liposuction-360" },
  { label: "Brazilian Butt Lift (BBL)", href: "/brazilian-butt-lift-bbl" },
  { label: "Feminine Waist Contouring", href: "/feminine-waist-contouring" },
  { label: "Tummy Tuck", href: "/tummy-tuck" },
  { label: "Breast Augmentation", href: "/breast-augmentation" },
  { label: "Women's Procedures", href: "/women" },
  { label: "Men's Body Contouring", href: "/men" },
];

export function Footer() {
  return (
    <footer className="site-footer bg-black text-white border-t border-[var(--color-border)]">
      <div className="container site-footer-main">
        <div className="site-footer-column site-footer-brand-col">
          <p className="site-footer-brand-title">{siteConfig.brand}</p>
          <p className="site-footer-tagline">
            Personalized cosmetic surgery guidance across Tampa Bay and beyond.
          </p>
          <div className="site-footer-contact">
            <TrackedPhoneLink className="site-footer-phone" location="footer" />
            <a href={`mailto:${siteConfig.email}`} className="site-footer-email">
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="site-footer-column">
          <h3 className="site-footer-heading">Procedures</h3>
          <ul className="site-footer-links">
            {procedureLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="site-footer-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer-column">
          <h3 className="site-footer-heading">Resources</h3>
          <ul className="site-footer-links">
            {resourceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="site-footer-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer-column">
          <h3 className="site-footer-heading">Connect</h3>
          <div className="site-footer-connect">
            <a href={siteConfig.paymentUrl} className="site-footer-link" target="_blank" rel="noreferrer">
              Make a payment
            </a>
            <a href={siteConfig.social.instagram} className="site-footer-link" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={siteConfig.social.facebook} className="site-footer-link" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <TrackedConsultLink className="btn btn-primary site-footer-cta" location="footer">
              Start a consultation
            </TrackedConsultLink>
          </div>
        </div>
      </div>
      <div className="site-footer-legal-wrap border-t border-[var(--color-border)]">
        <div className="container site-footer-legal">
          <p className="site-footer-legal-copy">
            Copyright © {new Date().getFullYear()} Tampa Bay Body Sculpting — All Rights Reserved.
          </p>
          <Link href="/privacy-policy" className="site-footer-legal-link">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
