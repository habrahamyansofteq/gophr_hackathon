const {resolve} = require('path');
const AutoExport = require('webpack-auto-export');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [resolve(__dirname, 'src/styles')],
    prependData: `@import "resources.scss";`,
  },
  i18n: {
    locales: ['default', 'en', 'ru'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  async headers() {
    return [
      {
        source: '/fonts/Roboto-Regular.ttf',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/Roboto-Medium.ttf',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/Roboto-Bold.ttf',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.plugins.push(
      new AutoExport({
        extension: '.ts',
        baseDir: './src',
        exportType: 'detect',
        paths: [
          'assets/icons',
          'components',
          'components/forms',
          'components/layouts',
          'components/modals',
          'components/shared',
          'components/views',
          'constants',
          'containers',
          'hooks',
          'services',
          'redux',
          'types',
          'utils',
        ],
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
