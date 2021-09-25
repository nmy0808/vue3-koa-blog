const { resolve } = require('path');
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        '@com': resolve(__dirname, './src/components'),
        '@views': resolve(__dirname, './src/views'),
        '@util': resolve(__dirname, './src/util'),
        '@assets': resolve(__dirname, './src/assets'),
        '@blocks': resolve(__dirname, './src/blocks'),
        '@use': resolve(__dirname, './src/use'),
        '@view-provider': resolve(__dirname, './src/view-provider'),
      },
    },
    plugins: [
      new HardSourceWebpackPlugin({
        cacheDirectory: resolve(__dirname, 'cache'),
      }),
    ],
  },
};
