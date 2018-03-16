const path = require('path')
const webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const dev = process.env.NODE_ENV === 'dev'

let cssLoaders = [
  { loader: 'css-loader', options: { importLoaders: 1, minimize: !dev } },
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
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: cssLoaders
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [...cssLoaders, 'sass-loader']
        })
      },
    ],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      links:[
        {
          href: 'main.css',
          rel: 'stylesheet'
        }
      ]

    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: dev
    })
  ]
}
