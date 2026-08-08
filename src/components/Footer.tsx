import Link from "next/link";
import { siteConfig } from "@/lib/site";

const resourceLinks = [
  { label: "Financing Options", href: "/financing-options" },
  { label: "Travel Information", href: "/travel-information" },
  { label: "Recovery Guides", href: "/recovery-guides" },
  { label: "Out-of-Town Patient Guide", href: "/out-of-town-patient-guide" },
  { label: "FAQs", href: "/faqs" },
];

const procedureLinks = [
  { label: "Lipo 360", href: "/liposuction-360" },
  { label: "Tummy Tuck", href: "/tummy-tuck" },
  { label: "Breast Augmentation", href: "/breast-augmentation" },
  { label: "Brazilian Butt Lift", href: "/brazilian-butt-lift-bbl" },
  { label: "Male Body Contouring", href: "/men" },
];

export function Footer() {
  return (
    <footer className="site-footer bg-black text-white border-t border-[var(--color-border)]">
      <div className="container site-footer-main">
        <div className="site-footer-brand">
          <p className="site-footer-brand-title">{siteConfig.brand}</p>
          <p className="site-footer-tagline">
            Personalized cosmetic surgery guidance across Tampa Bay and beyond.
          </p>
          <div className="site-footer-contact">
            <a href={siteConfig.phoneHref} className="site-footer-phone">
              {siteConfig.phone}
            </a>
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
            <a href={siteConfig.consultUrl} className="btn btn-primary site-footer-cta" target="_blank" rel="noreferrer">
              Start a consultation
            </a>
          </div>
        </div>
      </div>
      <div className="site-footer-legal-wrap border-t border-[var(--color-border)]">
        <div className="container site-footer-legal">
          <span>Copyright © {new Date().getFullYear()} Tampa Bay Body Sculpting — All Rights Reserved.</span>
          <span>Prototype recreation for development.</span>
        </div>
      </div>
    </footer>
  );
}
