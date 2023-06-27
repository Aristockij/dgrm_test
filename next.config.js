const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['three']);

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['api.ru'],
  }
};

module.exports = withPlugins([
  withTM
], nextConfig);