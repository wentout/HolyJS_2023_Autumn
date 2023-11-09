"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErroredType = void 0;
var mnemonica_1 = require("mnemonica");
var init_1 = require("./init");
init_1.FirstType.registerHook('preCreation', function (opts) {
    console.dir('opts', opts);
});
init_1.FirstType.registerHook('preCreation', function (_a) {
    var existentInstance = _a.existentInstance, inheritedInstance = _a.inheritedInstance;
    console.log('pre', existentInstance, inheritedInstance);
});
init_1.FirstType.registerHook('postCreation', function (_a) {
    var existentInstance = _a.existentInstance, inheritedInstance = _a.inheritedInstance;
    console.log('post', existentInstance, inheritedInstance);
});
init_1.SecondType.registerHook('preCreation', function (_a) {
    var existentInstance = _a.existentInstance, inheritedInstance = _a.inheritedInstance;
    console.log('pre', existentInstance, inheritedInstance);
});
init_1.SecondType.registerHook('postCreation', function (_a) {
    var existentInstance = _a.existentInstance, inheritedInstance = _a.inheritedInstance;
    console.log('post', existentInstance, inheritedInstance);
});
init_1.ThirdType.registerHook('preCreation', function (_a) {
    var existentInstance = _a.existentInstance, inheritedInstance = _a.inheritedInstance;
    console.log('pre', existentInstance, inheritedInstance);
});
init_1.ThirdType.registerHook('postCreation', function (_a) {
    var existentInstance = _a.existentInstance, inheritedInstance = _a.inheritedInstance;
    console.log('post', existentInstance, inheritedInstance);
});
debugger;
var first = new init_1.FirstType();
// { first: undefined, second: string }
debugger;
var second = (0, mnemonica_1.apply)(first, init_1.SecondType);
console.log(second);
debugger;
var third = (0, mnemonica_1.apply)(second, init_1.ThirdType);
console.log(third);
debugger;
exports.ErroredType = (0, mnemonica_1.define)('ErroredType', function () {
    this.errored = 'ErroredType';
    throw new Error('Special DEMO Error');
});
exports.ErroredType.registerHook('creationError', function (_a) {
    var inheritedInstance = _a.inheritedInstance;
    debugger;
    console.log('post', inheritedInstance);
});
exports.ErroredType.registerHook('preCreation', function (_a) {
    var existentInstance = _a.existentInstance;
    console.log('pre', existentInstance);
});
exports.ErroredType.registerHook('postCreation', function (_a) {
    var inheritedInstance = _a.inheritedInstance;
    console.log('post', inheritedInstance);
});
console.log(new exports.ErroredType);
