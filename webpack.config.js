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

const targets = ["var", "assign", "this", "window", "self", "global", "commonjs", "commonjs2", "commonjs-module", "amd", "umd", "umd2", "jsonp"]

module.exports = targets.map(config);
