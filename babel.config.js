module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@domain': './src/domain',
          '@brand': './src/brand',
          '@api': './src/api',
          '@types': './src/types',
          '@infra': './src/infra',
          '@services': './src/services',
          '@test': './src/test',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
