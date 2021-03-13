const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const pages = [
  'index',
];


const PagesHTMLPlugins = pages.map(page =>
  new HtmlWebpackPlugin({ template: `./${page}.html`, filename: `${page}.html`}));


module.exports = {
  context: paths.src,
  entry: {
    app: `./scripts/index.js`,
  },
  output: {
    filename: `scripts/[name].js`,
    path: paths.build,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer', 'postcss-flexbugs-fixes'],
              },
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/fonts',
            outputPath: 'fonts',
            name: '[name].[ext]',
          },
        },
      },
      {
        test: /\.(gif|ico|jpe?g|png|svg|webp)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/images',
            outputPath: 'images',
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'scss/[name].css',
    }),
    ...PagesHTMLPlugins
  ],
};
