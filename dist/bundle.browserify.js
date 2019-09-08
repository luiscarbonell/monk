(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function factorial(n) {
  if(n > 1) return n * factorial(--n);
  else return 1;
}

module.exports = factorial;

},{}],2:[function(require,module,exports){
// const factorial = require("./factorial");

// module.exports = { factorial }

function factorial(n) {
  if(n > 1) return n * factorial(--n);
  else return 1;
}

(function (root, factory) {
  if(typeof define === "function" && define.amd) {
    define(["factorial"], factory);
  } else if(typeof module === "object" && module.exports) {
    module.exports = factory(require("./factorial"));
  } else {
    root.myModule = factory(root.factorial);
  }
  root.myModule = factory(root.postal);
}(this, function(factorial) {
  return factorial;
}));

},{"./factorial":1}]},{},[2]);
