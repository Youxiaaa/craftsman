(function(e){function n(n){for(var r,c,u=n[0],i=n[1],l=n[2],p=0,s=[];p<u.length;p++)c=u[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(s.length)s.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(r=!1)}r&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-189e0146":"a487364a","chunk-1e53160c":"89ac33c3","chunk-2d0af2bb":"317f9721","chunk-2d225006":"efb974a9","chunk-31e48636":"72494e2c","chunk-4ab7716f":"77925d7c","chunk-51839bd1":"3231555d","chunk-5b38b33c":"49fe9b90","chunk-5c1b5bd1":"98a017d3","chunk-6a6491df":"7aed7bd9"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var l=new Error;a=function(n){i.onerror=i.onload=null,clearTimeout(p);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,t[1](l)}o[e]=void 0}};var p=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/craftsman/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var p=0;p<i.length;p++)n(i[p]);var d=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4"),t("4160"),t("b64b"),t("159b"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],c=(t("5c0b"),t("2877")),u={},i=Object(c["a"])(u,o,a,!1,null,null,null),l=i.exports,p=(t("d3b7"),t("8c4f"));r["a"].use(p["a"]);var d=[{path:"/admin",name:"Dashboard",component:function(){return t.e("chunk-2d225006").then(t.bind(null,"e313"))},children:[{path:"products",name:"products",component:function(){return t.e("chunk-6a6491df").then(t.bind(null,"61bc"))},meta:{requiresAuth:!0}}]},{path:"/",name:"Dashboard",component:function(){return t.e("chunk-5c1b5bd1").then(t.bind(null,"8eeb"))},children:[{path:"",name:"Home",component:function(){return t.e("chunk-31e48636").then(t.bind(null,"eae1"))}},{path:"login",name:"Login",component:function(){return t.e("chunk-51839bd1").then(t.bind(null,"aa92"))}},{path:"products",name:"products",component:function(){return t.e("chunk-1e53160c").then(t.bind(null,"81b1"))}},{path:"products/:id",name:"details",component:function(){return t.e("chunk-4ab7716f").then(t.bind(null,"6f83"))}},{path:"checkout",name:"checkout",component:function(){return t.e("chunk-5b38b33c").then(t.bind(null,"b7c8"))}},{path:"payment",name:"payment",component:function(){return t.e("chunk-189e0146").then(t.bind(null,"b275"))}},{path:"completed",name:"completed",component:function(){return t.e("chunk-2d0af2bb").then(t.bind(null,"0cd6"))}}]},{path:"*",redirect:"/"}],s=new p["a"]({routes:d}),h=s,f=p["a"].prototype.push;p["a"].prototype.push=function(e){return f.call(this,e).catch((function(e){return e}))};var b=t("bc3a"),m=t.n(b),v=t("2106"),g=t.n(v),k=(t("a9e3"),t("b680"),t("ac1f"),t("5319"),function(e){var n=Number(e);return"$".concat(n.toFixed(0).replace(/./g,(function(e,n,t){var r=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return r})))}),y=(t("4989"),t("9062")),O=t.n(y),j=(t("e40d"),t("0a63")),w=t.n(j),P=t("73e4"),x=t.n(P);r["a"].prototype.$bus=new r["a"];var _=t("7bb1"),E=t("60d4"),T=t("4c93"),L=t("caf9");r["a"].config.productionTip=!1,r["a"].use(g.a,m.a),r["a"].use(w.a),r["a"].use(x.a,{timeout:1e3,progressBar:!0,layout:"topRight"}),r["a"].use(L["a"],{preLoad:1.3,error:"dist/error.png",loading:"dist/loading.gif",attempt:1}),r["a"].filter("DollarsignFilter",k),r["a"].component("Loading",O.a),new r["a"]({router:h,render:function(e){return e(l)}}).$mount("#app"),Object.keys(T).forEach((function(e){Object(_["d"])(e,T[e])})),Object(_["e"])("zh_TW",E),r["a"].component("ValidationObserver",_["a"]),r["a"].component("ValidationProvider",_["b"]),Object(_["c"])({classes:{valid:"is-valid",invalid:"is-invalid"}}),Object(_["d"])("min",{validate:function(e,n){return e.length>=n.length},params:["length"],message:"長度不夠"}),h.beforeEach((function(e,n,t){if(e.meta.requiresAuth){var r="".concat("https://vue-course-api.hexschool.io","/api/user/check");m.a.post(r).then((function(e){e.data.success?t():t({path:"/login"})}))}else t()}))},"5c0b":function(e,n,t){"use strict";t("9c0c")},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.976f662f.js.map