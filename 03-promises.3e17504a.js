!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=r);var i,a,u,l=r("iU1Pc");function c(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector("form").addEventListener("submit",(function(){event.preventDefault(),a=Number(event.target[0].value),u=Number(event.target[1].value),i=Number(event.target[2].value);for(var n=1;n<=i;n+=1)c(n,a).then((function(n){var t=n.position,o=n.delay;e(l).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(l).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),a+=u}))}();
//# sourceMappingURL=03-promises.3e17504a.js.map
