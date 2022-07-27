"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// /** @type {import('next').NextConfig} */
var nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLEMAPS_API_KEY: process.env.GOOGLEMAPS_API_KEY
  }
};
module.exports = nextConfig;
module.exports = {
  reactStrictMode: true,
  env: {
    GOOGLEMAPS_API_KEY: process.env.GOOGLEMAPS_API_KEY
  },
  future: {
    webpack5: true // by default, if you customize webpack config, they switch back to version 4. 
    // Looks like backward compatibility approach.

  },
  webpack: function webpack(config) {
    config.resolve.fallback = _objectSpread({}, config.resolve.fallback, {
      // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false // the solution

    });
    return config;
  }
};