const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: "none",
  /*
    entry 入口文件 
    ***********************
    默认值：默认打包生成的文件为main.js
    entry:{
      main:"./src/index.js"
    }
    ***********************
    entry:'./src/index.js'
    ***********************
    打包生成2个文件 第一次为main 第二次为sub
    entry:{
      main:'./src/index.js',
      sub:'./src/index.js'
    },
  */
  entry:{
    main:'./src/index.js',
    sub:'./src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name]_[hash]",
            outputPath: "images/",
            limit: 10240,
          },
        },
      },
      {
        test: /\.less$/, //遇到 less结尾的文件 执行use里的loader
        use: ['style-loader','css-loader','postcss-loader','less-loader'], //执行顺序 从右到左
      },
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'src/index.html'
    }),
    // 打包之前 删除bundle目录下的所有内容
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns:['bundle']
    })
  ],
  output: {
    // publicPath 打包生成的文件前添加cdn 
    publicPath:'http://cnd.com.cn',
    // filename: "[name].js", 打包生成的文件名为bundle.js，如果未配置filename ,默认为main.js
    // [name] 指 entry配置的key值  main 和 sub
    filename: "[name].js", 
    // 打包到名为bundle的文件夹下
    path: path.resolve(__dirname, "bundle"),
  },
};
