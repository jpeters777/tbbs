import { CookieConsent } from "@/components/CookieConsent";
import { SiteAnalytics } from "@/components/SiteAnalytics";
import type { Metadata, Viewport } from "next";
import { DM_Sans, Cormorant_Garamond, Cantarell } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileChromeProvider } from "@/components/MobileChromeProvider";
import { StickyConsultBar } from "@/components/experience/StickyConsultBar";
import { siteConfig, SITE_URL } from "@/lib/site";
import { toTitleCase } from "@/lib/text";
import "./globals.css";
import "./premium.css";
import "./ba-gallery.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
});

const cantarell = Cantarell({
  variable: "--font-cantarell",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: toTitleCase(
      "Tampa Bay Body Sculpting | Cosmetic Surgery, Lipo 360 & Tummy Tuck"
    ),
    template: `%s | ${toTitleCase("Tampa Bay Body Sculpting")}`,
  },
  description:
    "Lipo 360, Tummy Tuck, Breast Procedures, Arm and Thigh Liposuction, and Male Body Sculpting.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: siteConfig.brand,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#65ebc9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`experience-premium ${dmSans.variable} ${cormorant.variable} ${cantarell.variable} antialiased`}
      >
        <SiteAnalytics />
        <MobileChromeProvider>
          <Header premium />
          <main>{children}</main>
          <Footer />
          <StickyConsultBar />
          <CookieConsent />
        </MobileChromeProvider>
      </body>
    </html>
  );
}
