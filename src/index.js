// const factorial = require("./factorial");
//
// module.exports = { factorial }

// CommonJS & AMD
if (typeof define !== 'undefined' && define.amd) define([], function () { return function factorial(n) {
  if(n > 1) return n * factorial(--n);
  else return 1;
} });

// Node.js
if (typeof module !== 'undefined' && module.exports) module.exports = function factorial(n) {
  if(n > 1) return n * factorial(--n);
  else return 1;
};

// Browser
if (typeof window === 'object') window['factorial'] = function factorial(n) {
  if(n > 1) return n * factorial(--n);
  else return 1;
};
