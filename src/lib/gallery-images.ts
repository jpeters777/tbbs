type GalleryImage = {
  src: string;
  alt: string;
  localSrc?: string;
};

const SINGLE_RESULT_PATTERN =
  /flexing his arms|posing outdoors|toned male torso with ab definition|black and white photo of a shirtless man flexing/i;

export function resolveGallerySrc(img: GalleryImage) {
  return img.localSrc || img.src;
}

export function normalizeGalleryAlt(alt: string, index: number) {
  const cleaned = alt.replace(/\s+/g, " ").replace(/&#39;/g, "'").trim();
  if (cleaned.length > 12) return cleaned;
  return `Before and after results — case ${String(index + 1).padStart(2, "0")}`;
}

/** Keep side-by-side before/after composites; drop single marketing pose photos. */
export function prepareBeforeAfterGalleryImages(images: GalleryImage[]) {
  return images
    .map((img, index) => ({
      ...img,
      src: resolveGallerySrc(img),
      alt: normalizeGalleryAlt(img.alt, index),
    }))
    .filter((img) => img.src && !img.src.startsWith("data:") && img.src.includes("/images/"))
    .filter((img) => !SINGLE_RESULT_PATTERN.test(img.alt));
}

export function captionFromAlt(alt: string, index: number) {
  const cleaned = alt.replace(/\s+/g, " ").replace(/&#39;/g, "'").trim();
  if (cleaned.length > 12) return cleaned;
  return `Body contouring results — patient case ${index + 1}`;
}
