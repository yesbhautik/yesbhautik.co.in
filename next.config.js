/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // Output configuration for Netlify
  output: 'standalone',
  experimental: {
    // This helps with hydration errors in some cases
    esmExternals: 'loose',
  },
  compiler: {
    // This helps with styled-components and stitches
    styledComponents: true,
  },
  // Fix hydration errors with nested anchor tags
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Disable image optimization during build to speed up builds
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 