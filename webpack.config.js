const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: "development",
  entry: './src/js/index.js',
  module: {
    rules: [
      // JS loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      // HTML loader
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader?minimize=false",
          }
        ]
      },

      // ASSETS loader
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img'
        },
      },

      // STYLES loader
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),

    new MiniCssExtractPlugin()
  ],
  // devtool: "source-map"
};
