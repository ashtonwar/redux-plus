!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["redux-plus"]=t():e["redux-plus"]=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var u=r[n]={exports:{},id:n,loaded:!1};return e[n].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(17);Object.defineProperty(t,"defaultGetter",{enumerable:!0,get:function(){return n.defaultGetter}});var u=r(18);Object.defineProperty(t,"defaultSetter",{enumerable:!0,get:function(){return u.defaultSetter}});var o=r(13);Object.defineProperty(t,"addMetadata",{enumerable:!0,get:function(){return o.addMetadata}}),Object.defineProperty(t,"replaceNode",{enumerable:!0,get:function(){return o.replaceNode}});var a=r(70);Object.defineProperty(t,"createTransformer",{enumerable:!0,get:function(){return a.createTransformer}});var i=r(22);Object.defineProperty(t,"liftEffects",{enumerable:!0,get:function(){return i.liftEffects}});var c=r(28);Object.defineProperty(t,"reduceInteruptable",{enumerable:!0,get:function(){return c.reduceInteruptable}});var f=r(29);Object.defineProperty(t,"topologicalSort",{enumerable:!0,get:function(){return f.topologicalSort}});var l=r(53);Object.defineProperty(t,"transferTo",{enumerable:!0,get:function(){return l.transferTo}});var s=r(52);Object.defineProperty(t,"defaultMemoize",{enumerable:!0,get:function(){return s.defaultMemoize}})},function(e,t){var r=Array.isArray;e.exports=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.createEffect=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;t>n;n++)r[n-1]=arguments[n];var u=[e,r];return u.isEffect=!0,u}},function(e,t){function r(e){return e}e.exports=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getModel=function(e){return e&&e.isEffect?e[0]:e}},function(e,t,r){function n(e,t,r){var n=null==e?void 0:u(e,t);return void 0===n?r:n}var u=r(19);e.exports=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getGenerators=function(e){return e&&e.isEffect?e[1]:[]}},function(e,t,r){function n(e){return u(e)?e:o(e)}var u=r(1),o=r(9);e.exports=n},function(e,t,r){function n(e,t){if(u(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!o(e))||(i.test(e)||!a.test(e)||null!=t&&e in Object(t))}var u=r(1),o=r(11),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;e.exports=n},function(e,t,r){var n=r(20),u=r(21),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g,a=/\\(\\)?/g,i=n(function(e){var t=[];return u(e).replace(o,function(e,r,n,u){t.push(n?u.replace(a,"$1"):r||e)}),t});e.exports=i},function(e,t,r){function n(e){var t=e?e.length:0;return t?u(e,1):[]}var u=r(32);e.exports=n},function(e,t){function r(){return!1}e.exports=r},function(e,t,r){function n(e,t){var r={};return t=o(t,3),u(e,function(e,n,u){r[n]=t(e,n,u)}),r}var u=r(34),o=r(35);e.exports=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.replaceNode=t.addMetadata=void 0;var u=r(45),o=n(u),a=r(12),i=n(a),c=r(5),f=n(c),l=r(16),s=n(l),d=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v=r(17),p=r(18),g=function(e,t){return function(r,n){n=(0,s["default"])(n).filter(function(e){return e});var u=t(r,n[0]);if(1===n.length)return u;var o=(0,f["default"])(e,["children",n,"get"]);return(o||e.meta.get)(u,n.slice(1))}},y=function(e,t,r){return function(n,u,o){if(u=(0,s["default"])(u).filter(function(e){return e}),1===u.length)return r(n,u[0],o);var a=(0,f["default"])(e,["children",u,"set"]),i=(a||e.meta.set)(t(n,u[0]),u.slice(1),o);return r(n,u[0],i)}},m=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(e){var n=e.meta||e;t(n,r),(0,i["default"])(n.children,function(e,n){return e.traverse(t,r.concat(n))})}}},h=t.addMetadata=function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.getter,u=void 0===n?v.defaultGetter:n,a=r.setter,c=void 0===a?p.defaultSetter:a;return e.meta||(e.meta={}),e.meta.reducer=e,e.meta.getter=u,e.meta.setter=c,r.getter||(e.meta.get=g(e,u)),r.setter||(e.meta.set=y(e,u,c)),e.meta.traverse=m(e),e.meta.children=(0,i["default"])(t,function(t,r){return t.meta||b(t),t=(0,o["default"])(t.meta,"parent",e.meta),t.name=r,t}),e};t.replaceNode=function _(e,t,r){t=(0,s["default"])(t);var n=e.meta||e;if(!t.length)return e.meta=r,e;if(1===t.length){var u=d({},n.children);return u[t[0]]=r,h(e,u)}var o=d({},n.children);return e=h(e,o),_(e.children[t[0]],t.slice(1),r),e}},function(e,t){function r(e,t){for(var r=-1,n=e?e.length:0,u=Array(n);++r<n;)u[r]=t(e[r],r,e);return u}e.exports=r},function(e,t){function r(e){return n(Object(e))}var n=Object.keys;e.exports=r},function(e,t,r){function n(e){return a(e)?u(e,f):i(e)?[e]:o(c(e))}var u=r(14),o=r(23),a=r(1),i=r(11),c=r(9),f=r(3);e.exports=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.defaultGetter=function(e,t){return e?e["@@__IMMUTABLE_ITERABLE__@@"]?e.get(t):e[t]:null}},function(e,t){"use strict";function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.defaultSetter=function(e,t,u){return e["@@__IMMUTABLE_ITERABLE__@@"]?e.set(t,u):e instanceof Array?(e=e.slice(),e[t]=u,e):n({},e,r({},t,u))}},function(e,t,r){function n(e,t){t=o(t,e)?[t]:u(t);for(var r=0,n=t.length;null!=e&&n>r;)e=e[a(t[r++])];return r&&r==n?e:void 0}var u=r(7),o=r(8),a=r(3);e.exports=n},function(e,t){function r(e){return e}e.exports=r},function(e,t){function r(e){return e}e.exports=r},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function u(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);e.length>t;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.liftEffects=void 0;var o=r(27),a=n(o),i=r(10),c=n(i),f=r(12),l=n(f),s=r(2),d=r(4),v=r(6);t.liftEffects=function(e){return s.createEffect.apply(void 0,[(0,l["default"])(e,d.getModel)].concat(u((0,c["default"])((0,a["default"])(e).map(v.getGenerators).filter(function(e){return e})))))}},function(e,t){function r(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}e.exports=r},,function(e,t){function r(e,t){return e===t||e!==e&&t!==t}e.exports=r},function(e,t){function r(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}e.exports=r},function(e,t,r){function n(e){return e?u(e,o(e)):[]}var u=r(37),o=r(15);e.exports=n},function(e,t){"use strict";function r(e){this.name="ReduceError",this.message=e||"Default Message",this.stack=Error().stack}Object.defineProperty(t,"__esModule",{value:!0});t.reduceInteruptable=function(e,t,n){var u=n,o=function(e){throw u=e,new r};try{u=e.reduce(function(){for(var e=arguments.length,r=Array(e),n=0;e>n;n++)r[n]=arguments[n];return t.apply(void 0,r.concat([o]))},u)}catch(a){if(a instanceof r)return u;throw a}return u}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){var r={};for(var n in e)t.indexOf(n)<0&&Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);e.length>t;t++)r[t]=e[t];return r}return Array.from(e)}function a(e){this.name="AcyclicError",this.message=e,this.stack=Error().stack}Object.defineProperty(t,"__esModule",{value:!0}),t.topologicalSort=void 0;var i=r(16),c=n(i),f=r(10),l=n(f),s=r(42),d=n(s),v=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.topologicalSort=function(e){var t=(0,d["default"])(e.map(function(e){return[e.path,e]})),r=function n(e,r){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if("active"===r.__status)throw new a("Selector has circular dependency ("+[].concat(o(u),[r.path]).join(" -> ")+")");return"inactive"===r.__status?(r.__status="active",e=(0,l["default"])(r.selector.dependencies.map(function(e){return e.split(".").map(function(e,t,r){return r.slice(0,t+1)}).map(function(e){return e.join(".")})})).map(function(e){return t[e]}).filter(function(e){return e}).reduce(function(){for(var e=arguments.length,t=Array(e),a=0;e>a;a++)t[a]=arguments[a];return n.apply(void 0,t.concat([[].concat(o(u),[(0,c["default"])(r.path).join(".")])]))},e),r.__status="complete",e.concat(r)):e};return e.map(function(e){return v({},e,{__status:"inactive"})}).reduce(r,[]).map(function(e){var t=u(e,["__status"]);return t})}},function(e,t){function r(e,t){for(var r=-1,n=t.length,u=e.length;++r<n;)e[u+r]=t[r];return e}e.exports=r},function(e,t,r){function n(e,t,r){var n=e[t];a.call(e,t)&&u(n,r)&&(void 0!==r||t in e)||(e[t]=r)}var u=r(25),o=Object.prototype,a=o.hasOwnProperty;e.exports=n},function(e,t,r){function n(e,t,r,a,i){var c=-1,f=e.length;for(r||(r=o),i||(i=[]);++c<f;){var l=e[c];t>0&&r(l)?t>1?n(l,t-1,r,a,i):u(i,l):a||(i[i.length]=l)}return i}var u=r(30),o=r(40);e.exports=n},function(e,t,r){var n=r(38),u=n();e.exports=u},function(e,t,r){function n(e,t){return e&&u(e,t,o)}var u=r(33),o=r(15);e.exports=n},function(e,t){function r(e){return e}e.exports=r},function(e,t,r){function n(e,t,r,n){t=i(t,e)?[t]:o(t);for(var l=-1,s=t.length,d=s-1,v=e;null!=v&&++l<s;){var p=f(t[l]);if(c(v)){var g=r;if(l!=d){var y=v[p];g=n?n(y,p,v):void 0,void 0===g&&(g=null==y?a(t[l+1])?[]:{}:y)}u(v,p,g)}v=v[p]}return e}var u=r(31),o=r(7),a=r(41),i=r(8),c=r(26),f=r(3);e.exports=n},function(e,t,r){function n(e,t){return u(t,function(t){return e[t]})}var u=r(14);e.exports=n},function(e,t){function r(e){return function(t,r,n){for(var u=-1,o=Object(t),a=n(t),i=a.length;i--;){var c=a[e?i:++u];if(r(o[c],c,o)===!1)break}return t}}e.exports=r},,function(e,t,r){function n(e){return o(e)||u(e)}var u=r(43),o=r(1);e.exports=n},function(e,t){function r(e,t){return t=null==t?n:t,!!t&&("number"==typeof e||u.test(e))&&e>-1&&e%1==0&&t>e}var n=9007199254740991,u=/^(?:0|[1-9]\d*)$/;e.exports=r},function(e,t){function r(e){for(var t=-1,r=e?e.length:0,n={};++t<r;){var u=e[t];n[u[0]]=u[1]}return n}e.exports=r},function(e,t){function r(){return!1}e.exports=r},,function(e,t,r){function n(e,t,r){return null==e?e:u(e,t,r)}var u=r(36);e.exports=n},,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultMemoize=void 0;var n=r(4);t.defaultMemoize=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r={args:void 0,result:void 0},u=function(){for(var u=arguments.length,o=Array(u),a=0;u>a;a++)o[a]=arguments[a];if(!r.args||o.some(function(e,n){return r.args[n]!==e&&!t[n]})){r.args=o;var i=e.apply(void 0,o);return r.result=(0,n.getModel)(i),i}return r.result};return u.cache=r,u}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.transferTo=void 0;var u=r(5),o=n(u);t.transferTo=function(e,t,r){r="function"==typeof r?r:function(e){return(0,o["default"])(e,r)};var n=t.slice(),u=t.map(r);return e.map(r).forEach(function(t,r){var o=u.findIndex(function(e){return t===e}),a=u[o];t===a&&void 0!==t&&(n[r]=e[o])}),n}},,,,,,,,,,,,,,,,,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.createTransformer=void 0;var u=r(10),o=n(u),a=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(2);t.createTransformer=function(e){return function(t,r){var n=(0,o["default"])((r.type.match(/[\[\(][\w\s,]+[\]\)]/g)||[]).map(function(e){return e.slice(1,-1).split(",")})).map(function(t){return e[t.trim()]});if(!n.length)return t;var u=function(e){return a({},e,{type:r.type.replace(/[\[\]]/g,"").replace(/\([\w\s,]+\)/g,"")})};return n=[u].concat(n),(0,i.createEffect)(t,n.reduce(function(e,t){return t(e)},r))}}}])});
//# sourceMappingURL=helpers.js.map