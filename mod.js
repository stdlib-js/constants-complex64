// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,r=Object.defineProperty,o=Object.prototype,a=o.toString,n=o.__defineGetter__,l=o.__defineSetter__,i=o.__lookupGetter__,_=o.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var u,c,p,b;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(i.call(e,t)||_.call(e,t)?(u=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=u):e[t]=r.value),p="get"in r,b="set"in r,c&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&n&&n.call(e,t,r.get),b&&l&&l.call(e,t,r.set),e};var u=8,c={};t(c,"NUM_BYTES",{configurable:!1,enumerable:!0,writable:!1,value:8});export{u as NUM_BYTES,c as default};
//# sourceMappingURL=mod.js.map
