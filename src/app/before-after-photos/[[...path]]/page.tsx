import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PremiumGalleryPage } from "@/components/experience/PremiumGalleryPage";
import {
  getPhotoCategoryByPath,
  getPhotoCategoryStaticParams,
} from "@/content/photo-categories";
import { buildGalleryPageMetadata } from "@/lib/seo/gallery-metadata";

type Props = {
  params: Promise<{ path?: string[] }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPhotoCategoryStaticParams();
}

function pathFromParams(path?: string[]) {
  if (!path?.length) return "/before-after-photos";
  return `/before-after-photos/${path.join("/")}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { path } = await params;
  const content = getPhotoCategoryByPath(pathFromParams(path));
  if (!content) return {};
  return buildGalleryPageMetadata(content);
}

export default async function PhotoCategoryPage({ params }: Props) {
  const { path } = await params;
  const content = getPhotoCategoryByPath(pathFromParams(path));
  if (!content) notFound();
  return <PremiumGalleryPage content={content} />;
}
