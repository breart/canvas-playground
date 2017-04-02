var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/main.ts',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};