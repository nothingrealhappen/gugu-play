const webpack = require('webpack');
const path = require('path');

const config = {
  context: __dirname,
  entry: [
    './src/App.jsx'
  ],
  output: {
    path: 'dist/',
    filename: 'app.js',
    publicPath: 'dist/'
  },
  resolve: {
    root: [
      path.join(__dirname, 'src/'),
    ],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js|\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ],
  },
  devServer: {
    devtool: true,
    colors: true,
    progress: true,
    host: '0.0.0.0',
    port: 8091
  }
};

module.exports = config;
