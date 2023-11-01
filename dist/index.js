"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=t(function(d,a){
var o;function u(){var r="";return r+="try {",r+="return this === window;",r+="} catch ( err ) {",r+="return false;",r+="}",new Function(r)()}o=u();a.exports=o
});var s=t(function(g,n){
var c=require('@stdlib/utils-global/dist'),l=require('@stdlib/assert-is-node/dist'),v=i(),w=c();function p(){return l===!1&&typeof window=="object"&&window===w&&v===!0}n.exports=p
});var b=s(),f=b();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
