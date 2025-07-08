/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Das verhindert, dass Vercel ewig lang an jeder Route rumnagt
    incrementalCacheHandlerPath: '',
  },
  staticPageGenerationTimeout: 120, // default ist 60 → auf 120 hochsetzen
};

module.exports = nextConfig;
