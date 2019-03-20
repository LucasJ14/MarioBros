(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return "Hello from " + name;
}
exports.sayHello = sayHello;
function test(k) {
    document.addEventListener('keydown', function (e) {
        var keyName = e.code;
        console.log(keyName);
        if (e.keyCode == 38) {
            alert("lucas encul\xE9\xE9\xE9\xE9\xE9\xE9\xE9\xE9\xE9\xE9\xE9\xE9\xE9\xE9\xE9\xE9\xE9");
            // do not alert when only Control key is pressed.
        }
        if (e.ctrlKey) {
            // Even though event.key is not 'Control' (e.g., 'a' is pressed),
            // event.ctrlKey may be true if Ctrl key is pressed at the same time.
            alert("Combination of ctrlKey + " + keyName);
        } else {
            alert("Key pressed sddx " + keyName);
        }
    }, false);
}
exports.test = test;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
greet_1.test("");

},{"./greet":1}]},{},[2])

//# sourceMappingURL=bundle.js.map
