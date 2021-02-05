const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  // mode: 'production',
  mode: 'development',
  // 入口文件
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'index.js',
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [".tsx",".ts",".js", ".json", ".jsx",".less",".scss",".css"],
  },
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      { test: /\.js$/, use: [{ loader: 'babel-loader' }] }
    ],
  },
  devServer: {
    contentBase: './dev',
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      title: 'dev',
    }),
  ]
}