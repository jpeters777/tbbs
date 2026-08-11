import { siteConfig } from "@/lib/site";

/** AggregateRating from verified Google reviews only. */
export function buildAggregateRatingSchema() {
  const google = siteConfig.googleReviews;

  if (!google?.ratingValue || !google?.reviewCount || google.reviewCount < 1) {
    return null;
  }

  return {
    "@type": "AggregateRating",
    ratingValue: google.ratingValue,
    reviewCount: google.reviewCount,
    bestRating: 5,
    worstRating: 1,
  };
}

export function buildGoogleReviewLinkSchema() {
  return siteConfig.googleReviews?.profileUrl ?? null;
}
