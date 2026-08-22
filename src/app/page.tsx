import type { Metadata } from "next";
import { PremiumHomePage } from "@/components/experience/PremiumHomePage";
import { HomeJsonLd } from "@/components/seo/HomeJsonLd";
import { getHomePage } from "@/lib/content";
import { resolveHeroSrc } from "@/lib/hero-images";
import { SITE_URL } from "@/lib/site";
import { toTitleCase, absoluteSeoTitle } from "@/lib/text";

const HOME_HERO = resolveHeroSrc("/images/shutterstock_99994967_801684509466.JPG");

const title = toTitleCase(
  "Tampa Bay Body Sculpting | Cosmetic Surgery, Lipo 360 & Tummy Tuck"
);
const description =
  "Considering cosmetic surgery in Tampa? Explore Lipo 360, tummy tuck, breast surgery, body contouring, and male body sculpting. Schedule your free consultation.";

export const metadata: Metadata = {
  title: absoluteSeoTitle(
    "Tampa Bay Body Sculpting | Cosmetic Surgery, Lipo 360 & Tummy Tuck"
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
  return (
    <>
      <link rel="preload" as="image" href={HOME_HERO} fetchPriority="high" />
      <HomeJsonLd />
      <PremiumHomePage page={page} />
    </>
  );
}
