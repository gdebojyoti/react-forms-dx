const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const directory = './'

module.exports = {
  //...
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   exclude: /node_modules/,
      //   use: ['file-loader']
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(directory, 'src/index.html') })
  ],
  // resolve files configuration
  resolve: {
    // file extensions
    extensions: ['.js', '.css'],
    alias: {
      components: path.resolve(directory, 'src/components'),
      pages: path.resolve(directory, 'src/pages')
    }
  },
  devServer: {
    historyApiFallback: true,
    // static: {
    //   directory: path.join(__dirname, 'public'),
    // },
    compress: true,
    port: 8080,
  },
  // output: {
  //   path: path.resolve(directory, 'build-client'),
  //   filename: '[name].js',
  //   publicPath: '/',
  //   clean: true
  // },
}