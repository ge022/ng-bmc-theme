import * as path from 'path';
import * as webpack from 'webpack';
import * as merge from "webpack-merge";
import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import { AngularCompilerPlugin } from '@ngtools/webpack'
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
// var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
import * as CompressionPlugin from 'compression-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import * as ManifestPlugin from 'webpack-manifest-plugin';
const WorkboxPlugin = require('workbox-webpack-plugin');

export default (env: any = 'development') => {
  
  console.log(`Running ${env} build`);
  const isDevBuild: boolean = env == 'development';
  
  const sharedConfig: webpack.Configuration = {
    mode: env,
    resolve: {
      extensions: ['.ts', '.js'],
    },

    module: {
      rules: [
        {
          test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
          loader: '@ngtools/webpack',
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
        {
          test: /\.(png|jpe?g|gif|cur|svg|woff|woff2|ttf|eot|ico)$/,
          loader: 'file-loader?name=assets/[name].[hash].[ext]',
        },
      ]
    },
    
    plugins: [
      new AngularCompilerPlugin({
        tsConfigPath: './tsconfig.json',
        entryModule: './src/app/app.module#AppModule',
        mainPath: './src/main.ts',
      }),
      new webpack.SourceMapDevToolPlugin({
        filename: isDevBuild ? '[name].bundle.js.map' : '[name].bundle.[chunkhash].js.map',
        include: ['app'],
        noSources: isDevBuild ? false : true,
        append: isDevBuild ? "//# sourceMappingURL=[url]" : false,
      }),
      new HtmlWebpackPlugin({
        template: isDevBuild ? 'src/index.html' : 'src/index.php',
        filename: isDevBuild ? 'index.html' : 'index.php', // TODO: [ext]
        excludeChunks: ['runtime~polyfills', 'polyfills'], // conditionally load polyfills in the html file
        // inlineSource: '.()$',
      }),
      // new HtmlWebpackInlineSourcePlugin(),
      new webpack.NamedModulesPlugin(),
      // new BundleAnalyzerPlugin(),

    ],
    
  };

  const devConfig: webpack.Configuration = merge(sharedConfig, {
    entry: {
      app: './src/main',
    },
    output: {
      filename: "[name].bundle.js",
    },
    performance: {
      hints: false,
    },
    devServer: {
      contentBase: path.resolve(__dirname),
      watchContentBase: false,
      hotOnly: true,
      overlay: true,
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
  });

  const prodConfig: webpack.Configuration = merge(sharedConfig, {
    entry: { 
      polyfills: './src/polyfills', 
      app: './src/main', 
    },       
    output: {
      filename: "[name].bundle.[chunkhash].js",
      chunkFilename: "[name].bundle.[chunkhash].js",
      publicPath: '/wp-content/themes/ng-bmc-theme/dist/',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: "initial",
            name: "vendor",
            priority: 10,
            enforce: true
          },
        }
      },
      runtimeChunk: true,
    },

    plugins: [
      new CleanWebpackPlugin(['dist']),
      new ManifestPlugin(),
      new WorkboxPlugin.GenerateSW({
        swDest: 'sw.js',
        clientsClaim: true,
        skipWaiting: true,
        chunks: ['runtime~app', 'vendor', 'app'],
        runtimeCaching: [{
          urlPattern: new RegExp('^http://localhost/$'),
          handler: 'networkFirst',
        }],
      }),
      new CompressionPlugin({
        asset: "[path].gz",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        minRatio: 0.8,
      }),
    ]
  });

  return isDevBuild ? devConfig : prodConfig;
  
};  