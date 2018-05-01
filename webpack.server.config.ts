const path = require('path');
const webpack = require('webpack');
import { AngularCompilerPlugin, PLATFORM } from '@ngtools/webpack'

module.exports = {
  entry: { 
    main: './src/main.server.ts',
  },
  resolve: { extensions: ['.ts', '.js'] },
  target: 'node',
  // this makes sure we include node_modules and other 3rd party libraries
  externals: [/(node_modules|main\..*\.js)/],
  output: {
    path: path.join(__dirname, 'dist/server'),
    filename: '[name].js'
  },
  devtool: 'none',
  
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
    ]
  },
  
  plugins: [
    new AngularCompilerPlugin({
      tsConfigPath: './src/tsconfig.server.json',
      mainPath: './src/main.server.ts',
      entryModule: './src/app/app.server.module#AppServerModule',
      platform: PLATFORM.Server,
    }),
  ]
};