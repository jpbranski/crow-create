/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // optimizePackageImports is now stable in Next.js 16
  optimizePackageImports: ['@mui/material', '@mui/icons-material'],
}

module.exports = nextConfig
