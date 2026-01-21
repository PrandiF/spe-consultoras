import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // necesario para cPanel
  trailingSlash: true,
  images: {
    unoptimized: true, // necesario para evitar error de Next/Image
  },
};

export default nextConfig;
