import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.api.playstation.com',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
