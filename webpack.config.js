const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/js/entry.js',
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'), 
  },
  module: {
      rules: [
          {
              test: /\.html$/,
              use: ['html-loader']
          },
          {
              test: /\.(png|svg|mp4|webm|ico|jpe?g|gif)$/,
              type: 'asset/resource',
              generator: {
                  filename: 'img/[name][ext]'
              }
          },
          {
              test: /\.css$/,
              type: 'asset/resource',
              generator: {
                  filename: 'css/[name][ext]'
              }
          }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      }),
      new CopyWebpackPlugin({
        patterns: [
            { from: './src/fonts', to: 'fonts' },
            { from: './src/img', to: 'img' }
        ]
    })      
  ],
  devServer: {
        port: 9000,
        open: true
    },
  performance: {
        maxAssetSize: 5000000
    }
};
