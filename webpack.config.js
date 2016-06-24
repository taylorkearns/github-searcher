const path = require("path");

module.exports = {
  entry: "./index",
  output: {
    path: path.join(__dirname, "public"),
    filename: "browser-bundle.js",
    publicPath: "/public/"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      },
    ]
  }
};
