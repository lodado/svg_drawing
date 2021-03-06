const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const tsConfigPath = path.resolve(__dirname, './tsconfig.json');

module.exports = {
  entry: './src/index.tsx',

  mode: 'development',
  target: 'web', // only for develomplent
  devtool: 'inline-source-map',

  devServer: {
    host: '0.0.0.0',
    port: '3000',
    hot: true,
    open: true,
    historyApiFallback: true,
  },

  output: {
    path: path.join(__dirname, 'bundle'),
    clean: true,
    filename: '[name].[chunkhash].js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      cache: false,
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: tsConfigPath })],
  },
};
