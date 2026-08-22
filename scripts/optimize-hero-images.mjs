/**
 * Generates width-capped WebP hero assets for faster LCP.
 * Run: node scripts/optimize-hero-images.mjs
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "public/images/heroes");
const DESKTOP_WIDTH = 1400;
const MOBILE_WIDTH = 640;
const DESKTOP_QUALITY = 72;
const MOBILE_QUALITY = 68;

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

async function writeWebp(inputPath, outputPath, width, quality) {
  await sharp(inputPath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toFile(outputPath);
  return fs.statSync(outputPath).size;
}

for (const [srcUrl, outName] of Object.entries(HERO_SOURCES)) {
  const inputPath = path.join(ROOT, "public", srcUrl.replace(/^\//, ""));
  const outputPath = path.join(OUT_DIR, outName);
  const mobileName = outName.replace(/\.webp$/, "-640.webp");
  const mobilePath = path.join(OUT_DIR, mobileName);

  if (!fs.existsSync(inputPath)) {
    console.warn("Skip missing:", inputPath);
    continue;
  }

  const before = fs.statSync(inputPath).size;
  const desktopBytes = await writeWebp(inputPath, outputPath, DESKTOP_WIDTH, DESKTOP_QUALITY);
  const mobileBytes = await writeWebp(inputPath, mobilePath, MOBILE_WIDTH, MOBILE_QUALITY);

  totalBefore += before;
  totalAfter += desktopBytes + mobileBytes;
  console.log(
    `${outName}: ${Math.round(before / 1024)}KB → desktop ${Math.round(desktopBytes / 1024)}KB, mobile ${Math.round(mobileBytes / 1024)}KB`
  );
}

console.log(`\nTotal sources: ${Math.round(totalBefore / 1024)}KB → variants ${Math.round(totalAfter / 1024)}KB`);
