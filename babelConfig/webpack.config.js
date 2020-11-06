const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: "development",
  devtool:'cheap-module-eavl-source-map ',
  entry:'./src/index.js',
  devServer:{
    // contentBase 服务器要在哪个文件夹下启动
    contentBase:'./dist',
    // 自动打开浏览器
    open:true,
    // 浏览器不自动更新
    hot:true,
    hotOnly:true
  },
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
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "bunlde.js", 
    path: path.resolve(__dirname, "dist"),
  },
};
