const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "./dist/bundle.js",
  },

  // Включить карты кода для отладки вывода webpack
  devtool: "source-map",

  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    alias: {
      // __mocks__: path.resolve(__dirname, "src/__mocks__/"),
      // app: path.resolve(__dirname, "src/app/"),
      // assets: path.resolve(__dirname, "src/assets/"),
      // constants: path.resolve(__dirname, "src/constants/"),
      // routes: path.resolve(__dirname, "src/routes/"),
      components: path.resolve(__dirname, "src/components/"),
      // domains: path.resolve(__dirname, "src/domains/"),
      // helpers: path.resolve(__dirname, "src/helpers/"),
      // modules: path.resolve(__dirname, "src/modules/"),
      // pages: path.resolve(__dirname, "src/pages/"),
      // http: path.resolve(__dirname, "src/http/"),
    },
  },

  module: {
    loaders: [
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
