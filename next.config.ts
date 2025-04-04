import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "s.pstatic.net",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
