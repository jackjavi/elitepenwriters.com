import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        // destination: "http://localhost:8888/api/:path*",
        destination: "https://odd2tips-0f9x.onrender.com/api/:path*",
      },
      {
        source: "/auth/:path*",
        // destination: "http://localhost:8888/auth/:path*",
        destination: "https://odd2tips-0f9x.onrender.com/auth/:path*",
      },

      {
        source: "/sockets/:path*",
        // destination: "http://localhost:8888/:path*",
        destination: "https://odd2tips-0f9x.onrender.com/:path*",
      },
    ];
  },
  images: {
    domains: ["images.pexels.com", "res.cloudinary.com"],
  },
};

export default nextConfig;
