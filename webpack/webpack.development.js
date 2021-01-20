'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

const development = {
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: 'index.html',
    //   filename: 'index.html'
    // }),
    // new HtmlWebpackPlugin({
    //   template: 'about.html',
    //   filename: 'about.html'
    // }),
  ],
  devtool: 'inline-source-map',
};

module.exports = development;
