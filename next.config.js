module.exports = {
  reactStrictMode: true,
serverExternalPackages: ['undici'],
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
