module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
    '@storybook/addon-interactions',
  ],
  features: {
    postcss: false,
  },
  framework: '@storybook/svelte',
  core: {
    builder: '@storybook/builder-webpack4',
  },
};
