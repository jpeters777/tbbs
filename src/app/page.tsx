import type { Metadata } from "next";
import { PremiumHomePage } from "@/components/experience/PremiumHomePage";
import { PremiumHomeHero } from "@/components/experience/PremiumHomeHero";
import { HomeJsonLd } from "@/components/seo/HomeJsonLd";
import { getHomePage } from "@/lib/content";
import { resolveHeroSrc } from "@/lib/hero-images";
import { SITE_URL } from "@/lib/site";
import { toTitleCase, absoluteSeoTitle } from "@/lib/text";

const HOME_HERO = resolveHeroSrc("/images/shutterstock_99994967_801684509466.JPG");

const title = toTitleCase(
  "Tampa Bay Body Sculpting | Body Contouring & Lipo 360 in Tampa"
);
const description =
  "Body sculpting and body contouring in Tampa Bay—Lipo 360, BBL, tummy tuck, breast surgery, and men's procedures. Start your complimentary virtual consult.";

export const metadata: Metadata = {
  title: absoluteSeoTitle(
    "Tampa Bay Body Sculpting | Body Contouring & Lipo 360 in Tampa"
  ),
  description,
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/`,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: HOME_HERO,
        width: 1200,
        height: 630,
        alt: "Cosmetic surgery guidance in Tampa Bay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [HOME_HERO],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "health",
};

export default function Page() {
  const page = getHomePage();
  const featuredQuote =
    page.testimonials[0] ??
    "The team made cosmetic surgery feel manageable—from my first virtual consult through recovery.";

  return (
    <div className="premium-home pb-24">
      <HomeJsonLd />
      <PremiumHomeHero page={page} featuredQuote={featuredQuote} />
      <PremiumHomePage page={page} />
    </div>
  );
}
