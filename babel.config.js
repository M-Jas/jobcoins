const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['./src'],
      alias: {
        '@app': './src/app',
        '@components': './src/components',
        '@contexts': './src/contexts',
        '@navigation': './src/navigation',
        '@providers': './src/providers',
        '@screens': './src/screens',
        '@styles': './src/styles',
        '@test': './src/test',
        '@types': './src/types',
      },
    },
  ],
];

module.exports = {
  plugins,
  presets: ['module:metro-react-native-babel-preset'],
};
