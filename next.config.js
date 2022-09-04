/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    BASE_URL: 'https://backend-utec-timestamp.herokuapp.com',
  },
  
}

module.exports = nextConfig
