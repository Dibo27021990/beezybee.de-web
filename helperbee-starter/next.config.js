/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    domains: [
      { domain: 'gethelperbee.com', defaultLocale: 'en' },
      { domain: 'helperbee.de', defaultLocale: 'de' },
    ],
  },
};

module.exports = nextConfig;