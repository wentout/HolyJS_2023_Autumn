"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThirdType = exports.SecondType = exports.FirstType = void 0;
var mnemonica_1 = require("mnemonica");
exports.FirstType = (0, mnemonica_1.define)('SomeType', function () {
    this.first = 'FirstType';
});
exports.SecondType = exports.FirstType.define('SecondType', function () {
    this.first = undefined;
    this.second = 'SecondType';
});
exports.ThirdType = exports.SecondType.define('ThirdType', /** @class */ (function () {
    function class_1() {
        this.third = 'ThirdType';
    }
    return class_1;
}()));
