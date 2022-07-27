// /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLEMAPS_API_KEY: process.env.GOOGLEMAPS_API_KEY,
  },
};

module.exports = nextConfig;


module.exports = {
  reactStrictMode: true,
  env: {
    GOOGLEMAPS_API_KEY: process.env.GOOGLEMAPS_API_KEY,
  },
  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
      // Looks like backward compatibility approach.
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };

    return config;
  },
};