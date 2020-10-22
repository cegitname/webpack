const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: "development",
  // srouce-map 可查看源文件 
  // inline 把map文件打包到bundle.js中 提错源文件
  // cheap  如果没有cheap会精确到那一行 哪个字符  cheap精确到行  打包性能提升
  // moudle  除了自己的代码 同样检查第三方模块
  // eval 打包速度最快 同意提示源代码 打包文件没有mapUrl  用eval()生成 提示内容不全面
  // 推荐 cheap-module-eavl-source-map 提示全 打包快  dev环境
  // 线上代码  cheap-moudle-source-map 
  devtool:'cheap-module-eavl-source-map ',
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
