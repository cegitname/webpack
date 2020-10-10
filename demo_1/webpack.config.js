const path = require('path')

module.exports = {
  mode:"none",
  entry: "./src/index.js",
  module:{
    rules:[{
      test:/\.jpg$/,
      use:{
        loader:'file-loader'
      }
    }]
  },
  output: {
    filename: "bsundle.js",
    path: path.resolve(__dirname, "bundle")
  }
}
