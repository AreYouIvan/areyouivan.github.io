const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.m?js^$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css|.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 
        'css-loader',
        'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin ({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin ({
      filename: 'assets/styles/styles.css'
    }),
    new CopyPlugin ({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'assets'),
          to: 'assets/images'
        }
      ]
    }),
    new CleanWebpackPlugin(),
  ],

}