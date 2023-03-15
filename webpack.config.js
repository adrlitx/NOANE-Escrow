const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Set up an alias for "react-native" to resolve to "react-native-web"
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-native$': 'react-native-web',
  };

  // Customize the config further as needed, for example:
  // config.module.rules.push({
  //   test: /\.js$/,
  //   exclude: /node_modules/,
  //   use: {
  //     loader: 'babel-loader',
  //     options: {
  //       presets: ['@babel/preset-env', '@babel/preset-react'],
  //     },
  //   },
  // });

  return config;

};

const path = require('path');

module.exports = {
  // ...
  resolve: {
    // ...
    alias: {
      // ...
      'react-native': 'react-native-web',
    },
  },
  // ...
};
