module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        alias: {
          navigators: './src/navigators',
          components: './src/components',
          screens: './src/screens',
          shared: './src/shared',
          config: './src/config',
          assets: './src/assets',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
