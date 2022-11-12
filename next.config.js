/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    BASE_URL: 'https://utec-timestamp-rebuild.onrender.com',
  },
  
}

module.exports = nextConfig
