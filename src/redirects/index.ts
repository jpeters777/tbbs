import legacyRedirects from "./legacy-redirects.json";

export type RedirectEntry = {
  source: string;
  destination: string;
  permanent: boolean;
};

/** Encoded or special-character paths that need explicit redirect rules. */
export const specialRedirects: RedirectEntry[] = [
  {
    source: "/before-after-photos/body/arms/:path*",
    destination: "/female-ba-gallery",
    permanent: true,
  },
  {
    source: "/before-after-photos/body/lipo-360/:path*",
    destination: "/female-ba-gallery",
    permanent: true,
  },
  {
    source: "/before-after-photos/body/brazilian-butt-lift/:path*",
    destination: "/female-ba-gallery",
    permanent: true,
  },
  {
    source: "/before-after-photos/body/thighs/:path*",
    destination: "/female-ba-gallery",
    permanent: true,
  },
  {
    source: "/before-after-photos/body/body-contouring/:path*",
    destination: "/female-ba-gallery",
    permanent: true,
  },
  {
    source: "/before-after-photos/face/chin-and-neck-liposuction/:path*",
    destination: "/female-ba-gallery",
    permanent: true,
  },
  {
    source: "/before-after-photos/male/:path*",
    destination: "/male-surgery-gallery",
    permanent: true,
  },
  {
    source: "/before-after-photos/breast/:path*",
    destination: "/breast-surgery-gallery",
    permanent: true,
  },
  {
    source: "/before-after-photos/:path*",
    destination: "/female-ba-gallery",
    permanent: true,
  },
  {
    source: "/before-after-photos",
    destination: "/female-ba-gallery",
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
];

export const allLegacyRedirects = legacyRedirects as RedirectEntry[];

export function getAllRedirects(): RedirectEntry[] {
  return [...specialRedirects, ...allLegacyRedirects];
}
