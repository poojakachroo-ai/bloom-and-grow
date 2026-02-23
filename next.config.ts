import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
