const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
    '@storybook/preset-scss',
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  webpackFinal: async (baseConfig) => {
    const nextConfig = require('../next.config.js');

    baseConfig.resolve.modules = [
      ...(baseConfig.resolve.modules || []),
      path.resolve('./src/'),
    ];

    baseConfig.resolve.alias['~'] = path.resolve('./src');

    return { ...baseConfig };
  },
};
