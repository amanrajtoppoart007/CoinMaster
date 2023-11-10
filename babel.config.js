module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@assets': './src/assets',
          '@libs': './src/libs',
          '@state': './src/state',
          '@components': './src/components',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@database': './src/database',
          '@config': './src/config',
          '@navigation': './src/navigation',
          '@storage': './src/storage',
        },
      },
    ],
    'react-native-reanimated/plugin', //must be added in the last
  ],
};
