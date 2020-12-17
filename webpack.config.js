const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    content_script: './src/content_script.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./build'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/images',
          to: 'images',
        },
        {
          from: './src/manifest.json',
          to: 'manifest.json',
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
