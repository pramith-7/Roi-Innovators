/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'standalone' ,
  distDir: 'out'
};

module.exports = nextConfig;