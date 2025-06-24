/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    domains: [
      { domain: 'helperbee.de', defaultLocale: 'de' },
      { domain: 'gethelperbee.com', defaultLocale: 'en' }
    ]
  }
};

module.exports = nextConfig;
