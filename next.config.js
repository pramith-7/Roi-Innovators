/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  basePath: '/pages',
  output: "export",
  reactStrictMode: true
};

module.exports = nextConfig;