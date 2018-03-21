const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'PSDating',

  })],
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, loader: ["style-loader", "css-loader"] },
      { test: /\.(png|svg|jpg|gif)$/, loader: ["file-loader"] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, loader: ["file-loader"] }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  devtool: "cheap-module-source-map"
};
