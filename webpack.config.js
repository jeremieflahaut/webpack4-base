const path = require('path')
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: './js/index.js',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 9000
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
