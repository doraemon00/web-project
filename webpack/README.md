### 1-4 使用 loader

    需要在 module.rules 数组配置规则，告诉webpack在遇到文件时用哪些loader去加载和转换。注意：
    * use 属性的值是由loader名称组成的数组，执行顺序是由后向前
    * 每一个loader都可以通过 url querystring 的方式传入参数，例如 css-loader?minimize 中的minimize 告诉 css-loader 要开启css压缩


#### 安装
    `npm i -D style-loader css-loader`

#### 问题
    报错 `Invalid options object. CSS Loader has been initialised using an options object that does not match the API schema.`
    原因  css-loader 因为版本更新不支持这样写 `css-loader?minimize`



#### 目录结构

```
webpack
├─ .vscode
│  └─ settings.json
├─ dist
│  ├─ bundle.js
│  └─ index.html
├─ package.json
├─ src
│  ├─ main.js
│  └─ show.js
└─ webpack.config.js

```
