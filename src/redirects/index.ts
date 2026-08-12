import legacyRedirects from "./legacy-redirects.json";

export type RedirectEntry = {
  source: string;
  destination: string;
  permanent: boolean;
};

/** Encoded or special-character paths that need explicit redirect rules. */
export const specialRedirects: RedirectEntry[] = [
  {
    source: "/female-ba-gallery",
    destination: "/",
    permanent: true,
  },
  {
    source: "/breast-surgery-gallery",
    destination: "/",
    permanent: true,
  },
  {
    source: "/male-surgery-gallery",
    destination: "/",
    permanent: true,
  },
  {
    source: "/arm-lipo-360%C2%B0-%2F-arm-lift",
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
    destination: "/",
    permanent: true,
  },
  {
    source: "/female-b&a-gallery",
    destination: "/",
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
];

export const allLegacyRedirects = legacyRedirects as RedirectEntry[];

export function getAllRedirects(): RedirectEntry[] {
  return [...specialRedirects, ...allLegacyRedirects];
}
