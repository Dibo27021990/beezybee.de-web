// next.config.js
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: [], // Wenn du externe Bilder verwendest, hier Domains eintragen
  },
  experimental: {
    appDir: true, // Falls du App Router nutzt
  },
};

module.exports = nextConfig;
