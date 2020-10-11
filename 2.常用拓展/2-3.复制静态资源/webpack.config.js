const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name].[hash:5].js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CopyPlugin([
      {from:"",to:""}//复制规则
    ])
  ],
};
