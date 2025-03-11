/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // Disable the export command since it's deprecated in Next.js 14
  // and replace with 'output: "export"' if you need static exports
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
}

module.exports = nextConfig 