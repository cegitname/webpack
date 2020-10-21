const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: "development",
  devtool:'none',
  entry:'./src/index.js',
  module: {
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'src/index.html'
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns:['bundle']
    })
  ],
  output: {
    filename: "bunlde.js", 
    path: path.resolve(__dirname, "dist"),
  },
};
