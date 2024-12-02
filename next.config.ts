import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enables static export
  trailingSlash: true,  // Ensures URLs end with a slash (important for GitHub Pages)
  images: {
    unoptimized: true, // Disables image optimization for static exports
  },
};

export default nextConfig;
