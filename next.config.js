/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['undici'] // nötig für Firebase/undici
  },
  webpack: (config) => {
    // Mapbox GL Fix: verhindert Probleme mit WebGL im SSR
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      module: false,
      stream: false,
      assert: false
    };
    return config;
  }
};

module.exports = nextConfig;
