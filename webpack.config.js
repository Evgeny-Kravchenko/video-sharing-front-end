const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (opts) => {
  opts = Object.assign(
    {
      env: 'dev',
      analyze: false,
    },
    opts
  );
  const isDev = opts.env === 'dev';

  return {
    mode: isDev ? 'development' : 'production',
    context: __dirname,
    entry: './src/index.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          enforce: 'pre',
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.(css|sass|scss)$/,
          exclude: /\.module\.(css|sass|scss)$/,
          use: [
            {
              loader: 'style-loader', // creates style nodes from JS strings
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
            {
              loader: 'sass-loader', // compiles Sass to CSS
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [{ loader: 'url-loader' }, { options: { limit: 8192 } }],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [{ loader: 'url-loader' }],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      contentBase: './dist',
    },
    plugins: ((plugins) => {
      if (!isDev) {
        if (opts.analyze) {
          plugins.push(
            new BundleAnalyzerPlugin({
              generateStatsFile: true,
            })
          );
        }

        plugins.push(
          new HtmlWebpackPlugin({
            template: './index.html',
          })
        );
      }

      return plugins;
    })([]),
  };
};
