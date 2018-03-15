const path = require('path')
const webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: './js/index.js',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 9000
  },
  
  module: {
    rules: [{
      test: /\.html$/,
      loader: 'raw-loader'
      }],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
