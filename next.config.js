/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: false, // optional je nach Setup
  },
  webpack: (config) => {
    config.resolve.alias['react'] = require.resolve('react');
    config.resolve.alias['react-dom'] = require.resolve('react-dom');
    return config;
  }
};

module.exports = nextConfig;
