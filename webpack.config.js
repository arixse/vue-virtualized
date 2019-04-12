const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'test', 'index'),
  watch: true,
  output: {
    path: __dirname + 'dist',
    publicPath: '/dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /.vue?$/,
      include: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'test')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'vue-loader',
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.vue']
  },
  plugins:[
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:path.resolve(__dirname,'./test/index.html')
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join('/dist/'),
    inline: true,
    host: '127.0.0.1',
    port: 5000,
  }
};