// const factorial = require("./factorial");
//
// module.exports = { factorial }

function factorial(n) {
  if(n > 1) return n * factorial(--n);
  else return 1;
}

// CommonJS & AMD
if (typeof define !== 'undefined' && define.amd) define([], function () { return factorial; });

// Node.js
if (typeof module !== 'undefined' && module.exports) module.exports = factorial;

// Browser
if (typeof window === 'object') window['factorial'] = factorial;
