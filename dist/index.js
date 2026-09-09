"use strict";var t=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var i=t(function(g,a){
var o;function c(){var r="";return r+="try {",r+="return this === window;",r+="} catch ( err ) {",r+="return false;",r+="}",new Function(r)()}o=c();a.exports=o
});var s=t(function(x,n){
var l=require('@stdlib/utils-global/dist'),v=require('@stdlib/assert-is-node/dist'),w=i(),p=l();function b(){return v===!1&&typeof window=="object"&&window===p&&w===!0}n.exports=b
});var f=s(),q=f();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
