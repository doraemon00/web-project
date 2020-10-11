const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name].[hash:5].js",
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
  devServer: {
    port: 8000,
    open: true,
    // index:"index.html",
    proxy: {
      "/api": {
        target: "http://open.duyiedu.com",
        changeOrigin: true, //更改请求头的host和origin
      },
    },
    stats:{
      modules:false,
      colors:true
    }
  },
};
