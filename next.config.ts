import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Match all requests starting with /api/
        destination: "http://localhost:3000/api/:path*", // Proxy to local backend
      },
    ];
  },
};

export default nextConfig;
