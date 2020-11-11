const {merge} = require('webpack-merge')
const webpack = require('webpack')
const commonConfig = require('./webpack.common')
const devConfig  = {
  mode: "development",
  devtool:'cheap-module-eavl-source-map ',
  devServer:{
    // contentBase 服务器要在哪个文件夹下启动
    contentBase:'./dist',
    // 自动打开浏览器
    open:true,
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
};

module.exports=merge(commonConfig,devConfig) 
