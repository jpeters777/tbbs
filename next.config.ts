import type { NextConfig } from "next";
import { getAllRedirects } from "./src/redirects";

const nextConfig: NextConfig = {
  agentRules: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1400],
    imageSizes: [256, 384, 480, 640, 720],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img1.wsimg.com",
      },
    ],
  },
  async redirects() {
    return getAllRedirects();
  },
};

export default nextConfig;
