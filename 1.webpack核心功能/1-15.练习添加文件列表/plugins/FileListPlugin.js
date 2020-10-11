module.exports = class FileListPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("FileListPlugin", (complation) => {
      var fileList = [];
      for (let key in complation.assets) {
        var content = `[${key}]
        大小：${complation.assets[key].size() / 1000}kb`;
        fileList.push(content);
      }
      var str = fileList.join("\n\n");
      complation.assets["filelist.txt"] = {
        source() {
          return str;
        },
        size() {
          return str.length;
        },
      };
    });
  }
};
