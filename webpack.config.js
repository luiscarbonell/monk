const path = require("path");

function config(target) {
  return {
    "entry": "./src/index.js",
    "output": {
      "path": path.resolve(__dirname, "dist"),
      "filename": `munk.${target}.js`,
      "library": "Munk",
      "libraryTarget": target
    },
    "mode": "production"
  }
}

module.exports = [
  config("var"),
  config("assign"),
  config("this"),
  config("window"),
  config("self"),
  config("global"),
  config("commonjs"),
  config("commonjs2"),
  config("commonjs-module"),
  config("amd"),
  config("amd-require"),
  config("umd"),
  config("umd2"),
  config("jsonp"),
  config("system")
];
