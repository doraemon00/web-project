var path = require("path")

module.exports = {
    mode: "development",
    entry: {
        main: './src/index.js', //属性名 chunk的名称 属性值：入口模块
        a: ["./src/a.js",'./src/index.js'] //启动模块有两个

    },
    output: {
        path: path.resolve(__dirname, "target"),
        filename: "[name].[chunkhash:5].js" //配置的合并的js文件规则
    },
    // devtool:"source-map"
}