"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mnemonica_1 = require("mnemonica");
debugger;
function decorate(parentClass) {
    const decorator = function (cstr, s) {
        if (parentClass instanceof Object) {
            // @ts-ignore
            return parentClass.define(s.name, cstr);
        }
        return (0, mnemonica_1.define)(s.name, cstr);
    };
    return decorator;
}
;
let MyClass = (() => {
    let _classDecorators = [decorate()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var MyClass = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            MyClass = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        z;
        constructor() {
            this.z = 123;
        }
    };
    return MyClass = _classThis;
})();
let SubClass = (() => {
    let _classDecorators = [decorate(MyClass)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var SubClass = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            SubClass = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        sub;
        constructor() {
            this.sub = 321;
        }
    };
    return SubClass = _classThis;
})();
debugger;
const myInstance = new MyClass;
console.log('myInstance', myInstance); // { z: 123 }
console.log('myInstance.z', myInstance.z); // 123
debugger;
const subInstance = (0, mnemonica_1.apply)(myInstance, SubClass);
console.log('subInstance', subInstance); // { sub: 321 }
console.log('subInstance.z', subInstance.z); // 123
console.log('subInstance.sub', subInstance.sub); // 321
console.log('subInstance.__parent__'
// @ts-ignore
, subInstance.__parent__); // { z: 123 }
debugger;
