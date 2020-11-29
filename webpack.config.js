const path = require('path');
const webpack = require('webpack');
const YAML = require('yaml');
const fs = require('fs');
const liveServer = require("live-server");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = YAML.parse(fs.readFileSync('./app.config.yml', 'utf8'));
const params = {
  port: 9000,
  root: __dirname,
  open: false,
  file: "index.html",
  ignore: __dirname,
  logLevel: 2,
  middleware: [(req, res, next) => { next(); }]
};
let runServe = () => { };
let webSocket = () => { };

const serve = () => {
  if (liveServer.watcher == null) {
    liveServer.start(params);
  }
  liveServer.clients.forEach(function (ws) {
    if (ws)
      webSocket = ws.send;
  });
};

let plugins = env => [
  new HtmlWebpackPlugin({
    title: config.title,
    filename: '../index.html',
    meta: {
      viewport: 'width=device-width, initial-scale=1.0'
    }
  }),
  new CleanWebpackPlugin({
    cleanStaleWebpackAssets: false
  }),
  new MiniCssExtractPlugin({
    filename: 'css/style.bundle-[contenthash].css'
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
  }),
  {
    apply: (compiler) => {
      compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
        runServe();
        webSocket('reload');
      });
    }
  }
];

module.exports = env => {
  runServe = env.preview ? serve : () => { };

  return {
    devtool: 'inline-source-map',
    mode: env.development ? 'development' : 'production',
    entry: ['./src/app/App.ts', './src/sass/main.sass'],
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
      filename: 'js/app.bundle-[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: ''
    },
    plugins: plugins(env)
  }
};