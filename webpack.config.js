const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    historyApiFallback: true
  },
  output: {
    filename: 'index_bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      // Use this template to get basic responsive meta tags
      template: 'functions/index.ejs',
      templateParameters: {
        renderedHtml: '', // Disabled for dev mode, to test use `npm run serve`
        bundlePath: '' // Disabled for dev mode, to test use `npm run serve`
      },
      // inject details of output file at end of body
      inject: 'body'
    })
  ],
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.elm']
  },
  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: {
          loader: 'elm-webpack-loader',
          options: {}
        }
      }
    ]
  }
}
