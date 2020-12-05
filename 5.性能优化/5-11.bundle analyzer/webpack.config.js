const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const WebapckBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
    mode:'production',
    plugins:[
        new CleanWebpackPlugin(),
        new WebapckBundleAnalyzer()
    ]
}