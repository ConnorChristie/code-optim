/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Reduce bundle by rewriting imports to deep paths so tree-shaking can drop unused icons.
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
  experimental: {
    // Ask Next.js compiler to auto-rewrite barrel-file imports for these libs.
    optimizePackageImports: ['react', 'chart.js'],
    // optimizeCss disabled due to missing critters in build environment
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig; 