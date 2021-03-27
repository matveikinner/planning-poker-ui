import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import DotenvWebpackPlugin from 'dotenv-webpack';

/**
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/27570#issuecomment-474628163
 */
interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const rootDir = path.resolve(__dirname, '..', '..');

const devServer: WebpackDevServerConfiguration = {
  hot: true,
  https: false,
  liveReload: true,
  open: true,
  port: 8080,
};

const webpackConfig = (): Configuration => ({
  mode: 'development',
  entry: path.resolve(rootDir, 'core', 'presentation', 'index.tsx'),
  context: rootDir,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@core': path.resolve(rootDir, 'core'),
    },
  },
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(rootDir, 'public', 'index.html') }),
    new DotenvWebpackPlugin({ path: path.resolve(rootDir, 'configs', 'environments', '.env.development') }),
  ],
  devServer,
});

export default webpackConfig;
