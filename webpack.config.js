const path = require('path')
const webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

let cssLoaders = [
  'style-loader',
  { loader: 'css-loader', options: { importLoaders: 1 } },
  {
    loader: 'postcss-loader',
    options: {
      plugins: (loader) => [
        require('autoprefixer')({
          browsers: ['last 2 versions', 'ie > 8']
        })
      ]
    }
  }
]

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
      },
      {
        test: /\.css$/,
        use: cssLoaders
      },
      {
        test: /\.scss$/,
        use: [
          ...cssLoaders,
          'sass-loader'
        ]
      }
    ],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
