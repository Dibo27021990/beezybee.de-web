const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n,
  experimental: {
    serverComponentsExternalPackages: ['undici'],
  },
  webpack: (config) => {
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
