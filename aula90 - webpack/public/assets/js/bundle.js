/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function rand() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
  var num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function () {
    console.log("f1");
    if (callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(function () {
    console.log("f2");
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function () {
    console.log("f3");
    if (callback) callback();
  }, rand());
}

f1(f1Callback());

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log("Olá, Mundo!");
}
/******/ })()
;
//# sourceMappingURL=bundle.js.map