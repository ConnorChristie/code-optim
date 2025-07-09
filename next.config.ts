import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Reduce bundle by rewriting imports to deep paths so tree-shaking can drop unused icons.
  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
  experimental: {
    // Leverage Next.js optimizations for third-party packages
    optimizePackageImports: ["react", "chart.js"],
    optimizeCss: true,
  },
};

export default nextConfig;
