import type { NextConfig } from "next";
import { getAllRedirects } from "./src/redirects";

const nextConfig: NextConfig = {
  agentRules: false,
  images: {
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
