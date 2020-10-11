const path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
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
        test: /\.less$/,
        use: ['style-loader','css-loader','postcss-loader','less-loader'],
      },
    ],
  },
  output: {
    filename: "bsundle.js",
    path: path.resolve(__dirname, "bundle"),
  },
};
