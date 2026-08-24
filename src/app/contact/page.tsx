import type { Metadata } from "next";
import Link from "next/link";
import { JotformEmbed } from "@/components/experience/JotformEmbed";
import { TrackedPhoneLink } from "@/components/TrackedPhoneLink";
import { siteConfig, SITE_URL } from "@/lib/site";
import { absoluteSeoTitle, toTitleCase } from "@/lib/text";

const title = "Contact Us";
const description =
  "Contact Tampa Bay Body Sculpting with a quick form. Our concierge team responds about procedures, consultations, and next steps.";
const ogImage = `${SITE_URL}${siteConfig.logo}`;

export const metadata: Metadata = {
  title: absoluteSeoTitle(title),
  description,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: toTitleCase(title),
    description,
    url: `${SITE_URL}/contact`,
    type: "website",
    locale: "en_US",
    images: [{ url: ogImage, width: 512, height: 512, alt: siteConfig.brand }],
  },
  twitter: {
    card: "summary",
    title: toTitleCase(title),
    description,
    images: [ogImage],
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <div className="premium-lipo-page pb-16">
      <section className="premium-section premium-section--compact">
        <div className="container max-w-3xl consult-page-intro">
          <nav className="premium-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">← Home</Link>
          </nav>
          <p className="premium-eyebrow">Fall 2026 · Limited time</p>
          <h1 className="premium-section-title consult-page-title">Get in touch</h1>
          <p className="contact-page-promo">
            Fall consult special: submit the short form below to claim <strong>$500 toward your procedure</strong> when
            you complete your complimentary virtual consult by October 31, 2026.
          </p>
          <p className="premium-section-lead consult-page-lead">
            Have a quick question or want our team to reach out? Complete the short form below. For a full surgical
            intake with medical history and photos, use our{" "}
            <Link href="/consult" className="inline-link">
              free virtual consultation form
            </Link>
            .
          </p>
          <p className="consult-page-alt-contact">
            Prefer to talk now?{" "}
            <TrackedPhoneLink className="inline-link" location="contact-page">
              Call {siteConfig.phone}
            </TrackedPhoneLink>
          </p>
        </div>
      </section>

      <section className="premium-section pt-0">
        <div className="container consult-page-form">
          <JotformEmbed form="contact" />
        </div>
      </section>
    </div>
  );
}
