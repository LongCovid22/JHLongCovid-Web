/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLEMAPS_API_KEY: process.env.GOOGLEMAPS_API_KEY,
  },
};

module.exports = nextConfig;
