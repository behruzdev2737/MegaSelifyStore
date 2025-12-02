import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "store.supercell.com",
      },
      {
        protocol:'https',
        hostname:'game-assets.store.supercell.com'
      },
    ],
  },
};

export default nextConfig;
