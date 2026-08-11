import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageView } from "@/components/PageView";
import { PremiumPageView } from "@/components/experience/PremiumPageView";
import { SITE_EXPERIENCE } from "@/lib/experience";
import { liposuctionSeo } from "@/lib/seo/liposuction-schema";
import { bblSeo } from "@/lib/seo/bbl-schema";
import { feminineWaistSeo } from "@/lib/seo/feminine-waist-schema";
import { lipo360Seo } from "@/lib/seo/lipo-360-schema";
import { tummyTuckSeo } from "@/lib/seo/tummy-tuck-schema";
import { buildCuratedPageMetadata } from "@/lib/seo/curated-metadata";
import { buildGalleryPageMetadata } from "@/lib/seo/gallery-metadata";
import { buildPageMetadata } from "@/lib/seo/page-schema";
import { getGalleryPage } from "@/content/curated/gallery-registry";
import { getCuratedPage } from "@/content/curated/registry";
import {
  getAllStaticParams,
  getPageBySlug,
  resolvePathToSlug,
} from "@/lib/content";
import { toTitleCase, absoluteSeoTitle } from "@/lib/text";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return getAllStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pathname = `/${slug.join("/")}`;
  const pageSlug = resolvePathToSlug(pathname);
  const page = pageSlug ? getPageBySlug(pageSlug) : null;
  if (!page) return {};
  if (pageSlug === "liposuction") {
    const title = toTitleCase(liposuctionSeo.title);
    return {
      title: absoluteSeoTitle(liposuctionSeo.title),
      description: liposuctionSeo.description,
      alternates: { canonical: liposuctionSeo.canonical },
      openGraph: {
        title,
        description: liposuctionSeo.description,
        url: liposuctionSeo.canonical,
        type: "website",
        locale: "en_US",
        images: [
          {
            url: liposuctionSeo.ogImage,
            width: 1200,
            height: 630,
            alt: "Liposuction and body contouring in Tampa Bay",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: liposuctionSeo.description,
        images: [liposuctionSeo.ogImage],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
      },
    };
  }
  if (pageSlug === "liposuction-360") {
    const title = toTitleCase(lipo360Seo.title);
    const ogImageUrl = lipo360Seo.ogImage.startsWith("http")
      ? lipo360Seo.ogImage
      : `https://tampabaybodysculpting.com${lipo360Seo.ogImage}`;
    return {
      title: absoluteSeoTitle(lipo360Seo.title),
      description: lipo360Seo.description,
      alternates: { canonical: lipo360Seo.canonical },
      openGraph: {
        title,
        description: lipo360Seo.description,
        url: lipo360Seo.canonical,
        type: "website",
        locale: "en_US",
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: "Lipo 360 body contouring in Tampa Bay",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: lipo360Seo.description,
        images: [ogImageUrl],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
      },
    };
  }
  if (pageSlug === "brazilian-butt-lift-bbl") {
    const title = toTitleCase(bblSeo.title);
    const ogImageUrl = bblSeo.ogImage.startsWith("http")
      ? bblSeo.ogImage
      : `https://tampabaybodysculpting.com${bblSeo.ogImage}`;
    return {
      title: absoluteSeoTitle(bblSeo.title),
      description: bblSeo.description,
      alternates: { canonical: bblSeo.canonical },
      openGraph: {
        title,
        description: bblSeo.description,
        url: bblSeo.canonical,
        type: "website",
        locale: "en_US",
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: "Brazilian Butt Lift (BBL) in Tampa Bay",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: bblSeo.description,
        images: [ogImageUrl],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
      },
    };
  }
  if (pageSlug === "feminine-waist-contouring") {
    const title = toTitleCase(feminineWaistSeo.title);
    const ogImageUrl = feminineWaistSeo.ogImage.startsWith("http")
      ? feminineWaistSeo.ogImage
      : `https://tampabaybodysculpting.com${feminineWaistSeo.ogImage}`;
    return {
      title: absoluteSeoTitle(feminineWaistSeo.title),
      description: feminineWaistSeo.description,
      alternates: { canonical: feminineWaistSeo.canonical },
      openGraph: {
        title,
        description: feminineWaistSeo.description,
        url: feminineWaistSeo.canonical,
        type: "website",
        locale: "en_US",
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: "Feminine waist contouring and hourglass sculpting in Tampa Bay",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: feminineWaistSeo.description,
        images: [ogImageUrl],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
      },
    };
  }
  if (pageSlug === "tummy-tuck") {
    const title = toTitleCase(tummyTuckSeo.title);
    const ogImageUrl = tummyTuckSeo.ogImage.startsWith("http")
      ? tummyTuckSeo.ogImage
      : `https://tampabaybodysculpting.com${tummyTuckSeo.ogImage}`;
    return {
      title: absoluteSeoTitle(tummyTuckSeo.title),
      description: tummyTuckSeo.description,
      alternates: { canonical: tummyTuckSeo.canonical },
      openGraph: {
        title,
        description: tummyTuckSeo.description,
        url: tummyTuckSeo.canonical,
        type: "website",
        locale: "en_US",
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: "Tummy tuck abdominoplasty in Tampa Bay",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: tummyTuckSeo.description,
        images: [ogImageUrl],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
      },
    };
  }
  const gallery = pageSlug ? getGalleryPage(pageSlug) : null;
  if (gallery) {
    return buildGalleryPageMetadata(gallery);
  }
  const curated = pageSlug ? getCuratedPage(pageSlug) : null;
  if (curated) {
    return buildCuratedPageMetadata(curated);
  }
  const seo = buildPageMetadata(page);
  const title = seo.title;
  const ogImageUrl = seo.ogImage.startsWith("http")
    ? seo.ogImage
    : `https://tampabaybodysculpting.com${seo.ogImage}`;

  return {
    title: absoluteSeoTitle(seo.title),
    description: seo.description,
    alternates: { canonical: seo.canonical },
    openGraph: {
      title,
      description: seo.description,
      url: seo.canonical,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: seo.description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}

export default async function CmsPage({ params }: Props) {
  const { slug } = await params;
  const pathname = `/${slug.join("/")}`;
  const pageSlug = resolvePathToSlug(pathname);
  const page = pageSlug ? getPageBySlug(pageSlug) : null;
  if (!page || page.slug === "home") notFound();
  if (SITE_EXPERIENCE === "premium") {
    return <PremiumPageView page={page} />;
  }
  return <PageView page={page} />;
}
