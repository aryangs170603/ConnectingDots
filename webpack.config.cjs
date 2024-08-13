const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const { ProvidePlugin } = require('webpack');

// Array of directories where your pages are located
const pageDirs = [
  path.resolve(__dirname, 'src/Homepage'),
  path.resolve(__dirname, 'src/SAP'),
  path.resolve(__dirname, 'src/IT'),
  path.resolve(__dirname, 'src/Data Visual'),
  path.resolve(__dirname, 'src/Digital Marketing'),
  path.resolve(__dirname, 'src/HR')
];

// Object to hold the entry points for Webpack
const entries = {};

// Array to hold the HtmlWebpackPlugin instances
const htmlPlugins = [];

// Function to scan directories and add entries and plugins
pageDirs.forEach((pagesDir) => {
  fs.readdirSync(pagesDir).forEach((page) => {
    const pagePath = path.join(pagesDir, page);
    const entryPath = path.join(pagePath, 'index.jsx');
    const templatePath = path.join(pagePath, 'index.html');

    if (fs.existsSync(entryPath) && fs.existsSync(templatePath)) {
      // Use a unique key for each entry to avoid conflicts
      const entryName = path.basename(pagesDir) + '/' + page;
      entries[entryName] = entryPath;
      htmlPlugins.push(
        new HtmlWebpackPlugin({
          filename: `${entryName}.html`,
          template: templatePath,
          chunks: [entryName],
          minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
          },
        })
      );
    }
  });
});

module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].jsx',
  },
  mode: 'production', // or 'development' depending on your environment
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.json$/,
        type: 'javascript/auto',
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.json5$/,
        loader: 'json5-loader',
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...htmlPlugins,
    new ProvidePlugin({
      jsonData: path.resolve(__dirname, 'public/Jsonfolder/dsHeaderData.json'),
      jsonData: path.resolve(__dirname, 'public/Jsonfolder/Whyds.json'),
      jsonData: path.resolve(__dirname, 'public/Jsonfolder/curriculumdata.json'),
      jsonData: path.resolve(__dirname, 'public/Jsonfolder/indusprodata.json'),
      jsonData: path.resolve(__dirname, 'public/Jsonfolder/faqdata.json'),
      jsonData: path.resolve(__dirname, 'public/Jsonfolder/relateddata.json'),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerWebpackPlugin(),
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    host: '0.0.0.0',
    port: 8081, // Change this to an unused port like 8081
    allowedHosts: 'all',
  },
};
