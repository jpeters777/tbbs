/**
 * Generates width-capped WebP hero assets for faster LCP.
 * Run: node scripts/optimize-hero-images.mjs
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "public/images/heroes");
const MAX_WIDTH = 1400;
const QUALITY = 78;

/** Source path (public URL) → output filename (without dir) */
const HERO_SOURCES = {
  "/images/shutterstock_99994967_801684509466.JPG": "home.webp",
  "/images/shutterstock_263340653-b2373a9.jpg": "liposuction-hub.webp",
  "/images/shutterstock_359476844_801685051614.JPG": "recovery-resources.webp",
  "/images/shutterstock_125481776.jpg": "male-gallery.webp",
  "/images/blob-10293ad.png": "lipo-360.webp",
  "/images/blob-2294999.png": "bbl.webp",
  "/images/blob-8f7eab9.png": "tummy-tuck.webp",
  "/images/blob-b4cdcb1.png": "liposuction-secondary.webp",
  "/images/blob-d88ea83.png": "home-about.webp",
  "/images/17-6f8c86a.png": "travel.webp",
  "/images/blob-504fd1c.png": "financing.webp",
  "/images/blob-0773ab0.png": "mommy-makeover.webp",
  "/images/blob-71f8471.png": "breast-augmentation.webp",
  "/images/blob-e67c52e.png": "breasts.webp",
  "/images/blob-1a6bc00.png": "female-chin-lipo.webp",
  "/images/blob-832e2e0.png": "labiaplasty.webp",
  "/images/blob-f945845.png": "thigh-lipo.webp",
  "/images/blob-ab62aae.png": "arm-lipo.webp",
  "/images/blob-5c35b08.png": "breast-lift.webp",
  "/images/blob-4202c05.png": "breast-reduction.webp",
  "/images/blob-d9d6b23.png": "breast-rejuvenation.webp",
  "/images/blob-2412f2d.png": "breast-revision.webp",
  "/images/blob-0205933.png": "breast-implant-exchange.webp",
};

fs.mkdirSync(OUT_DIR, { recursive: true });

let totalBefore = 0;
let totalAfter = 0;

for (const [srcUrl, outName] of Object.entries(HERO_SOURCES)) {
  const inputPath = path.join(ROOT, "public", srcUrl.replace(/^\//, ""));
  const outputPath = path.join(OUT_DIR, outName);

  if (!fs.existsSync(inputPath)) {
    console.warn("Skip missing:", inputPath);
    continue;
  }

  const before = fs.statSync(inputPath).size;
  await sharp(inputPath)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 4 })
    .toFile(outputPath);

  const after = fs.statSync(outputPath).size;
  totalBefore += before;
  totalAfter += after;
  console.log(`${outName}: ${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB`);
}

console.log(`\nTotal: ${Math.round(totalBefore / 1024)}KB → ${Math.round(totalAfter / 1024)}KB`);
