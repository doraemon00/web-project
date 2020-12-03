const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:"development",
    devtool: "source-map",
    devServer:{
        open:true,
        hot:true
    },
    plugins:[new HtmlWebpackPlugin({
        template:"./public/index.html"
    })]
}