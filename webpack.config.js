const path = require('path');
const webpack = require('webpack');
const YAML = require('yaml');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = YAML.parse(fs.readFileSync('./app.config.yml', 'utf8'));

let _plugins = [
  new HtmlWebpackPlugin({
    title: config.title,
    filename: '../../index.html',
    meta: {
      viewport: 'width=device-width, initial-scale=1.0'
    }
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: '../css/style.bundle.css'
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
  }),
  new webpack.DefinePlugin({
    PATH: JSON.stringify({
      IMAGES: 'assets/img'
    }),
    CONFIG: JSON.stringify(config)
  })
];

module.exports = env => {
  return {
    devtool: 'inline-source-map',
    mode: env.development ? 'development' : 'production',
    entry: ['./src/app/App.ts', './src/sass/main.sass'],
    devServer: {
      contentBase: '../../',
      compress: true,
      port: 9000
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader'
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: '../../assets/font'
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: '../../assets/img'
              }
            }
          ]
        }
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.css', '.sass', '.scss'],
    },
    output: {
      filename: 'app.bundle.js',
      path: path.resolve(__dirname, './dist/js'),
      publicPath: ''
    },
    plugins: _plugins
  }
};