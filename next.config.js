/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 180, // Hoch auf 3 Minuten
  experimental: {
    // Optional: Falls Cacheprobleme → leer setzen
    incrementalCacheHandlerPath: '',
  },
};

module.exports = nextConfig;
