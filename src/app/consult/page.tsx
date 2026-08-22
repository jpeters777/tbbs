import type { Metadata } from "next";
import Link from "next/link";
import { JotformEmbed } from "@/components/experience/JotformEmbed";
import { TrackedPhoneLink } from "@/components/TrackedPhoneLink";
import { siteConfig, SITE_URL } from "@/lib/site";
import { absoluteSeoTitle, toTitleCase } from "@/lib/text";

type ConsultPageProps = {
  searchParams: Promise<{ procedureInterest?: string }>;
};

const title = "Free Virtual Consultation";
const description =
  "Book a complimentary virtual consultation with Tampa Bay Body Sculpting. Concierge guidance, board-certified provider network, no obligation.";

export const metadata: Metadata = {
  title: absoluteSeoTitle(title),
  description,
  alternates: { canonical: `${SITE_URL}/consult` },
  openGraph: {
    title: toTitleCase(title),
    description,
    url: `${SITE_URL}/consult`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default async function ConsultPage({ searchParams }: ConsultPageProps) {
  const { procedureInterest } = await searchParams;
  const hasProcedure = Boolean(procedureInterest?.trim());

  return (
    <div className="premium-lipo-page pb-16">
      <section className="premium-section premium-section--compact">
        <div className="container max-w-3xl consult-page-intro">
          <nav className="premium-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">← Home</Link>
          </nav>
          <p className="premium-eyebrow">Get started</p>
          <h1 className="premium-section-title consult-page-title">Free virtual consultation</h1>
          <p className="premium-section-lead consult-page-lead">
            {hasProcedure ? (
              <>
                Complete the virtual consultation form below for <strong>{procedureInterest}</strong>. Our Tampa
                Bay concierge team uses your answers to provide personalized guidance. There is no obligation.
              </>
            ) : (
              <>
                Complete the virtual consultation form below. Our Tampa Bay concierge team uses your answers to provide
                personalized guidance on procedures, candidacy, and next steps. There is no obligation.
              </>
            )}
          </p>
          <p className="consult-page-alt-contact">
            Prefer to talk now?{" "}
            <TrackedPhoneLink className="inline-link" location="consult-page">
              Call {siteConfig.phone}
            </TrackedPhoneLink>
          </p>
        </div>
      </section>

      <section className="premium-section pt-0">
        <div className="container consult-page-form">
          <JotformEmbed form="virtual-consult" procedureInterest={procedureInterest} />
        </div>
      </section>
    </div>
  );
}
