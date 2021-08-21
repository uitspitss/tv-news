const {
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  NODE_ENV,
  VERCEL_GITHUB_COMMIT_SHA,
  VERCEL_GITLAB_COMMIT_SHA,
  VERCEL_BITBUCKET_COMMIT_SHA,
} = process.env;

const COMMIT_SHA =
  VERCEL_GITHUB_COMMIT_SHA ||
  VERCEL_GITLAB_COMMIT_SHA ||
  VERCEL_BITBUCKET_COMMIT_SHA;

const basePath = '';

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    rootDir: __dirname,
  },
  webpack: (config, options) => {
    // twin.macro
    config.resolve.fallback = {
      fs: false,
      module: false,
    };

    config.module.rules.push({
      test: /\.yml$/,
      type: 'json',
      use: 'yaml-loader',
    });

    return config;
  },
  basePath,
};
