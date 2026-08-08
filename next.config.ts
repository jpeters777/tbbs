import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img1.wsimg.com",
      },
    ],
  },
  async redirects() {
    return [
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
    ];
  },
};

export default nextConfig;
