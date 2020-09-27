module.exports = {
    mode: "development",
    module: {
        rules: [{
            test: /index\.js/, //正则表达式匹配模块路径
            use: [{
                    loader: "./loaders/test-loader.js"
                } //每个加载器的使用是一个对象
            ] //匹配之后，使用哪些加载器
        }], //模块匹配规则
    }
}