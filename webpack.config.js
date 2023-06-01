const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name]/bundle.js",
  },

  // Включить карты кода для отладки вывода webpack
  devtool: "source-map",

  resolve: {
    extensions: [
      ".webpack.js",
      ".web.js",
      ".ts",
      ".tsx",
      ".js",
      ".png",
      ".jpeg",
      ".svg",
    ],
  },

  module: {
    rules: [
      { test: /\.ts?$/, loader: "ts-loader" },
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.css$/, use: "css-loader" },
    ],

    preLoaders: [{ test: /\.js$/, loader: "source-map-loader" }],
  },
  mode: "development",
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
