(function(){"use strict";let i;const a=new Array(128).fill(void 0);a.push(void 0,null,!0,!1);function f(e){return a[e]}let g=a.length;function R(e){e<132||(a[e]=g,g=e)}function v(e){const t=f(e);return R(e),t}const E=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&E.decode();let l=null;function y(){return(l===null||l.byteLength===0)&&(l=new Uint8Array(i.memory.buffer)),l}function h(e,t){return e=e>>>0,E.decode(y().subarray(e,e+t))}function d(e){g===a.length&&a.push(a.length+1);const t=g;return g=a[t],a[t]=e,t}function I(e){return e==null}let b=null;function _(){return(b===null||b.buffer.detached===!0||b.buffer.detached===void 0&&b.buffer!==i.memory.buffer)&&(b=new DataView(i.memory.buffer)),b}let A=0;const m=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},W=typeof m.encodeInto=="function"?function(e,t){return m.encodeInto(e,t)}:function(e,t){const n=m.encode(e);return t.set(n),{read:e.length,written:n.length}};function O(e,t,n){if(n===void 0){const c=m.encode(e),u=t(c.length,1)>>>0;return y().subarray(u,u+c.length).set(c),A=c.length,u}let r=e.length,o=t(r,1)>>>0;const w=y();let s=0;for(;s<r;s++){const c=e.charCodeAt(s);if(c>127)break;w[o+s]=c}if(s!==r){s!==0&&(e=e.slice(s)),o=n(o,r,r=s+e.length*3,1)>>>0;const c=y().subarray(o+s,o+r),u=W(e,c);s+=u.written,o=n(o,r,s,1)>>>0}return A=s,o}function x(e,t){try{return e.apply(this,t)}catch(n){i.__wbindgen_exn_store(d(n))}}const T=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>i.__wbg_interpreter_free(e>>>0,1));class j{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,T.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_interpreter_free(t,0)}constructor(){const t=i.interpreter_new();return this.__wbg_ptr=t>>>0,T.register(this,this.__wbg_ptr,this),this}interpret(t,n){try{const w=i.__wbindgen_add_to_stack_pointer(-16),s=O(t,i.__wbindgen_malloc,i.__wbindgen_realloc),c=A;i.interpreter_interpret(w,this.__wbg_ptr,s,c,d(n));var r=_().getInt32(w+4*0,!0),o=_().getInt32(w+4*1,!0);if(o)throw v(r)}finally{i.__wbindgen_add_to_stack_pointer(16)}}out(){let t,n;try{const p=i.__wbindgen_add_to_stack_pointer(-16);i.interpreter_out(p,this.__wbg_ptr);var r=_().getInt32(p+4*0,!0),o=_().getInt32(p+4*1,!0),w=_().getInt32(p+4*2,!0),s=_().getInt32(p+4*3,!0),c=r,u=o;if(s)throw c=0,u=0,v(w);return t=c,n=u,h(c,u)}finally{i.__wbindgen_add_to_stack_pointer(16),i.__wbindgen_free(t,n,1)}}clear(){i.interpreter_clear(this.__wbg_ptr)}}async function D(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}function k(){const e={};return e.wbg={},e.wbg.__wbindgen_object_drop_ref=function(t){v(t)},e.wbg.__wbindgen_string_new=function(t,n){const r=h(t,n);return d(r)},e.wbg.__wbindgen_number_get=function(t,n){const r=f(n),o=typeof r=="number"?r:void 0;_().setFloat64(t+8*1,I(o)?0:o,!0),_().setInt32(t+4*0,!I(o),!0)},e.wbg.__wbindgen_is_function=function(t){return typeof f(t)=="function"},e.wbg.__wbindgen_error_new=function(t,n){const r=new Error(h(t,n));return d(r)},e.wbg.__wbg_get_224d16597dbbfd96=function(){return x(function(t,n){const r=Reflect.get(f(t),f(n));return d(r)},arguments)},e.wbg.__wbg_call_89af060b4e1523f2=function(){return x(function(t,n,r){const o=f(t).call(f(n),f(r));return d(o)},arguments)},e.wbg.__wbg_length_88f3e18ac1dbbb22=function(t){return f(t).length},e.wbg.__wbindgen_throw=function(t,n){throw new Error(h(t,n))},e}function F(e,t){return i=e.exports,M.__wbindgen_wasm_module=t,b=null,l=null,i}async function M(e){if(i!==void 0)return i;typeof e<"u"&&Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead"),typeof e>"u"&&(e=new URL("/unlox/assets/unlox_wasm_bg-D1LMEBJd.wasm",self.location.href));const t=k();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:r}=await D(await e,t);return F(n,r)}class L{write(t){return postMessage({type:"output",output:t}),t.length}flush(){}}self.onmessage=async e=>{await M({});const t=new L;new j().interpret(e.data,t),postMessage({type:"end"})}})();
