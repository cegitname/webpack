const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry:'./src/index.js',
  module: {
    rules:[
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: "babel-loader" 
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({  template:'src/index.html' }),
  ],
  output: {
    filename: "bunlde.js", 
    path: path.resolve(__dirname, "dist"),
  },
}
