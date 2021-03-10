/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const baseConfig = {
  reactStrictMode: true,
  devIndicators: {
    autoPrerender: false,
  },
};

module.exports = withBundleAnalyzer(baseConfig);
