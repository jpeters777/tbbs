import legacyRedirects from "./legacy-redirects.json";
import { PHOTO_CATEGORY_CASE_ROOTS } from "../lib/photo-category-paths";

export type RedirectEntry = {
  source: string;
  destination: string;
  permanent: boolean;
};

function photoCategoryCaseRedirects(): RedirectEntry[] {
  return PHOTO_CATEGORY_CASE_ROOTS.flatMap((root) => [
    {
      source: `${root}/tampa-fl/:id(\\d+)`,
      destination: root,
      permanent: true,
    },
    {
      source: `${root}/tampa-fl`,
      destination: root,
      permanent: true,
    },
    {
      source: `${root}/:id(\\d+)`,
      destination: root,
      permanent: true,
    },
  ]);
}

/** Encoded or special-character paths that need explicit redirect rules. */
export const specialRedirects: RedirectEntry[] = [
  ...photoCategoryCaseRedirects(),
  {
    // GMB / local search still links here; child /services/* paths already redirect.
    source: "/services",
    destination: "/",
    permanent: true,
  },
  {
    source: "/before-after-photos/body",
    destination: "/before-after-photos",
    permanent: true,
  },
  {
    source: "/before-after-photos/face",
    destination: "/before-after-photos/face/chin-and-neck-liposuction",
    permanent: true,
  },
  {
    source: "/arm-lipo-360%C2%B0-%2F-arm-lift",
    destination: "/arm-lipo-360-arm-lift",
    permanent: true,
  },
  {
    // GSC still shows degree-symbol slug without the slash variants below.
    source: "/arm-lipo%C2%B0-360%C2%B0-arm-lift",
    destination: "/arm-lipo-360-arm-lift",
    permanent: true,
  },
  {
    source: "/arm-lipo°-360°-arm-lift",
    destination: "/arm-lipo-360-arm-lift",
    permanent: true,
  },
  {
    source: "/arm-lipo-360°-/arm-lift",
    destination: "/arm-lipo-360-arm-lift",
    permanent: true,
  },
  {
    source: "/arm-lipo-360°-/-arm-lift",
    destination: "/arm-lipo-360-arm-lift",
    permanent: true,
  },
  {
    source: "/female-b%26a-gallery",
    destination: "/female-ba-gallery",
    permanent: true,
  },
  {
    source: "/female-b&a-gallery",
    destination: "/female-ba-gallery",
    permanent: true,
  },
  {
    source: "/male-liposuction-360-1",
    destination: "/male-liposuction-360",
    permanent: true,
  },
  {
    source: "/male-tummy-tuck-1",
    destination: "/male-tummy-tuck",
    permanent: true,
  },
  {
    source: "/liposuction-360-bbl",
    destination: "/lipo-360-bbl",
    permanent: true,
  },
];

export const allLegacyRedirects = legacyRedirects as RedirectEntry[];

export function getAllRedirects(): RedirectEntry[] {
  return [...specialRedirects, ...allLegacyRedirects];
}
