module.exports = {
  context: __dirname + "/",
  entry: "./index",
  output: {
    path: __dirname + "/public",
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
