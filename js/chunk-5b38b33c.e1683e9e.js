(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b38b33c"],{8418:function(t,a,e){"use strict";var s=e("c04e"),r=e("9bf2"),i=e("5c6c");t.exports=function(t,a,e){var l=s(a);l in t?r.f(t,l,i(0,e)):t[l]=e}},"99af":function(t,a,e){"use strict";var s=e("23e7"),r=e("d039"),i=e("e8b5"),l=e("861d"),o=e("7b0b"),c=e("50c4"),n=e("8418"),u=e("65f0"),d=e("1dde"),m=e("b622"),v=e("2d00"),p=m("isConcatSpreadable"),f=9007199254740991,h="Maximum allowed index exceeded",C=v>=51||!r((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),_=d("concat"),k=function(t){if(!l(t))return!1;var a=t[p];return void 0!==a?!!a:i(t)},y=!C||!_;s({target:"Array",proto:!0,forced:y},{concat:function(t){var a,e,s,r,i,l=o(this),d=u(l,0),m=0;for(a=-1,s=arguments.length;a<s;a++)if(i=-1===a?l:arguments[a],k(i)){if(r=c(i.length),m+r>f)throw TypeError(h);for(e=0;e<r;e++,m++)e in i&&n(d,m,i[e])}else{if(m>=f)throw TypeError(h);n(d,m++,i)}return d.length=m,d}})},b7c8:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"checkoutBreadcrumb"},[e("a",{staticClass:"mr-2",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/products"}},[t._v("Cart")])],1),t._v(" > "),e("span",{staticClass:"text-dark h6 mx-2"},[t._v(" Infomation")]),t._v(" > "),e("span",{staticClass:"text-secondary ml-2"},[t._v(" Payment")]),e("div",{staticClass:"row checkoutArea"},[e("div",{staticClass:"col-md-7"},[e("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(a){var s=a.invalid;return[e("form",{staticClass:"mt-3",on:{submit:function(a){return a.preventDefault(),t.toPayment(t.checkoutData)}}},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group mt-3 col-md-12"},[e("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("label",{staticClass:"mb-2 h4",attrs:{for:"email"}},[t._v("Contact information")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.user.email,expression:"checkoutData.user.email"}],staticClass:"form-control p-4",class:r,attrs:{id:"email",type:"email",name:"電子信箱",placeholder:"Email"},domProps:{value:t.checkoutData.user.email},on:{input:function(a){a.target.composing||t.$set(t.checkoutData.user,"email",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(" "+t._s(s[0])+" ")]),e("div",{staticClass:"form-check mt-2"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",value:"",id:"defaultCheck1"}}),e("label",{staticClass:"form-check-label",attrs:{for:"defaultCheck1"}},[t._v(" Keep me up to date on news and special offers ")])])]}}],null,!0)})],1)]),e("label",{staticClass:"mb-2 mt-3 h4",attrs:{for:"name"}},[t._v("Shipping address")]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group mt-3 col-md-6"},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.user.name,expression:"checkoutData.user.name"}],staticClass:"form-control p-4",class:r,attrs:{id:"name",type:"text",name:"Name",placeholder:"Name"},domProps:{value:t.checkoutData.user.name},on:{input:function(a){a.target.composing||t.$set(t.checkoutData.user,"name",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(" "+t._s(s[0])+" ")])]}}],null,!0)})],1),e("div",{staticClass:"form-group mt-3 col-md-6"},[e("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.user.tel,expression:"checkoutData.user.tel"}],staticClass:"form-control p-4",class:r,attrs:{id:"phone",type:"tel",name:"phone",placeholder:"Phone"},domProps:{value:t.checkoutData.user.tel},on:{input:function(a){a.target.composing||t.$set(t.checkoutData.user,"tel",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(" "+t._s(s[0])+" ")])]}}],null,!0)})],1),e("div",{staticClass:"form-group col-md-6"},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("select",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.user.country,expression:"checkoutData.user.country"}],staticClass:"form-control checkoutSelect",class:r,attrs:{name:"country"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.checkoutData.user,"country",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Country/Region")]),e("option",{attrs:{value:"California"}},[t._v("California")])]),e("span",{staticClass:"invalid-feedback"},[t._v(" "+t._s(s[0])+" ")])]}}],null,!0)})],1),e("div",{staticClass:"form-group col-md-6"},[e("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("select",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.user.city,expression:"checkoutData.user.city"}],staticClass:"form-control checkoutSelect",class:r,attrs:{name:"country"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.checkoutData.user,"city",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("City")]),e("option",{attrs:{value:"Los Angeles"}},[t._v("Los Angeles")])]),e("span",{staticClass:"invalid-feedback"},[t._v(" "+t._s(s[0])+" ")])]}}],null,!0)})],1),e("div",{staticClass:"form-group col-md-12"},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.user.address,expression:"checkoutData.user.address"}],staticClass:"form-control p-4",class:r,attrs:{id:"address",type:"text",name:"addr",placeholder:"Address"},domProps:{value:t.checkoutData.user.address},on:{input:function(a){a.target.composing||t.$set(t.checkoutData.user,"address",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(" "+t._s(s[0])+" ")])]}}],null,!0)})],1)]),e("div",{staticClass:"d-flex justify-content-end align-items-center mt-4"},[e("a",{attrs:{href:"#"}},[e("router-link",{attrs:{to:"/products"}},[e("span",{staticClass:"mr-3"},[t._v(" < ")]),t._v(" Return to cart")])],1),e("button",{staticClass:"btn btn-primary text-white mb-3 ml-auto py-3 px-5",attrs:{type:"submit",disabled:s}},[t._v("Continue to payment")])])])]}}])}),e("hr"),t._m(0)],1),e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"cartContent mt-4"},[e("ul",{staticClass:"p-0"},t._l(t.carts,(function(a){return e("li",{key:a.id,staticClass:"d-flex align-items-center my-3"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.product.image,expression:"item.product.image"}],attrs:{alt:"",width:"48px",height:"48px"}}),e("h5",{staticClass:"h5 ml-3"},[t._v(" "+t._s(a.product.title)+" "),e("span",{staticClass:"h6"},[t._v(" x "+t._s(a.qty)+" ")])]),e("h5",{staticClass:"ml-auto"},[t._v(" NT"+t._s(t._f("DollarsignFilter")(a.product.price))+" ")])])})),0),e("hr"),e("ul",{staticClass:"p-0"},[e("li",{staticClass:"d-flex"},[e("h4",{staticClass:"h6"},[t._v("Subtotal")]),e("h5",{staticClass:"ml-auto h6"},[t._v(" NT"+t._s(t._f("DollarsignFilter")(t.countTotal))+" ")])]),e("li",{staticClass:"d-flex"},[e("h4",{staticClass:"h6"},[t._v("Shipping")]),e("h5",{staticClass:"ml-auto h6"},[t._v(" NT"+t._s(t._f("DollarsignFilter")(t.Shipping))+" ")])])]),e("hr"),e("ul",{staticClass:"p-0"},[e("li",{staticClass:"d-flex"},[e("h4",{staticClass:"h4"},[t._v("Total")]),e("h5",{staticClass:"ml-auto h4"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.countTotal+t.Shipping))+" ")])])])])])])]),e("div",{staticClass:"responsiveCheckoutArea"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"responsiveCartContent mt-4"},[e("ul",{staticClass:"pl-0 mb-0"},[e("li",{staticClass:"list-unstyled d-flex justify-content-between align-items-center",on:{click:function(a){t.cartListisOpen=!t.cartListisOpen}}},[e("span",[t._v("Order Summary")]),t.cartListisOpen?t._e():e("h5",{staticClass:"ml-auto mr-4 h5 mb-0"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.countTotal+t.Shipping))+" ")]),t.cartListisOpen?e("i",{staticClass:"fas fa-chevron-up text-primary"}):t._e(),t.cartListisOpen?t._e():e("i",{staticClass:"fas fa-chevron-down text-primary"})])]),e("ul",{staticClass:"p-0 precartListShow mt-5",class:{cartListShow:t.cartListisOpen}},t._l(t.carts,(function(a){return e("li",{key:a.id,staticClass:"d-flex align-items-center my-3"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.product.image,expression:"item.product.image"}],attrs:{alt:"",width:"48px",height:"48px"}}),e("h5",{staticClass:"h5 ml-3"},[t._v(" "+t._s(a.product.title)+" "),e("span",{staticClass:"h6"},[t._v(" x "+t._s(a.qty)+" ")])]),e("h5",{staticClass:"ml-auto"},[t._v(" NT"+t._s(t._f("DollarsignFilter")(a.product.price))+" ")])])})),0),e("hr",{staticClass:"precartListShow",class:{cartListShow:t.cartListisOpen}}),e("ul",{staticClass:"p-0 precartListShow",class:{cartListShow:t.cartListisOpen}},[e("li",{staticClass:"d-flex"},[e("h4",{staticClass:"h6"},[t._v("Subtotal")]),e("h5",{staticClass:"ml-auto h6"},[t._v(" NT"+t._s(t._f("DollarsignFilter")(t.countTotal))+" ")])]),e("li",{staticClass:"d-flex"},[e("h4",{staticClass:"h6"},[t._v("Shipping")]),e("h5",{staticClass:"ml-auto h6"},[t._v(" NT"+t._s(t._f("DollarsignFilter")(t.Shipping))+" ")])])]),e("hr",{staticClass:"precartListShow",class:{cartListShow:t.cartListisOpen}}),e("ul",{staticClass:"p-0 precartListShow",class:{cartListShow:t.cartListisOpen}},[e("li",{staticClass:"d-flex"},[e("h4",{staticClass:"h4"},[t._v("Total")]),e("h5",{staticClass:"ml-auto h4"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.countTotal+t.Shipping))+" ")])])])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 my-5"},[e("a",{staticClass:"mr-2 h5",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/products"}},[t._v("Cart")])],1),t._v(" > "),e("span",{staticClass:"text-dark h5 mx-2"},[t._v(" Infomation")]),t._v(" > "),e("span",{staticClass:"text-secondary ml-2 h5"},[t._v(" Payment")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(a){var s=a.invalid;return[e("form",{on:{submit:function(a){return a.preventDefault(),t.toPayment(t.checkoutData)}}},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-12"},[e("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("label",{staticClass:"mb-2 ml-1 h3",attrs:{for:"email"}},[t._v("Contact information")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.user.email,expression:"checkoutData.user.email"}],staticClass:"form-control p-4",class:r,attrs:{id:"email",type:"email",name:"電子信箱",placeholder:"Email"},domProps:{value:t.checkoutData.user.email},on:{input:function(a){a.target.composing||t.$set(t.checkoutData.user,"email",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(" "+t._s(s[0])+" ")]),e("div",{staticClass:"form-check mt-2 ml-1"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",value:"",id:"defaultCheck1"}}),e("label",{staticClass:"form-check-label text-light",attrs:{for:"defaultCheck1"}},[t._v(" Keep me up to date on news and special offers ")])])]}}],null,!0)}),e("label",{staticClass:"mb-2 mt-3 h4",attrs:{for:"name"}},[t._v("Shipping address")]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-12"},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.user.name,expression:"checkoutData.user.name"}],staticClass:"form-control p-4",class:r,attrs:{id:"name",type:"text",name:"Name",placeholder:"Name"},domProps:{value:t.checkoutData.user.name},on:{input:function(a){a.target.composing||t.$set(t.checkoutData.user,"name",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(" "+t._s(s[0])+" ")])]}}],null,!0)})],1),e("div",{staticClass:"form-group col-12"},[e("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.user.tel,expression:"checkoutData.user.tel"}],staticClass:"form-control p-4",class:r,attrs:{id:"phone",type:"tel",name:"phone",placeholder:"Phone"},domProps:{value:t.checkoutData.user.tel},on:{input:function(a){a.target.composing||t.$set(t.checkoutData.user,"tel",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(" "+t._s(s[0])+" ")])]}}],null,!0)})],1),e("div",{staticClass:"form-group col-12"},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("select",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.user.country,expression:"checkoutData.user.country"}],staticClass:"form-control checkoutSelect",class:r,attrs:{name:"country"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.checkoutData.user,"country",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Country/Region")]),e("option",{attrs:{value:"California"}},[t._v("California")])]),e("span",{staticClass:"invalid-feedback"},[t._v(" "+t._s(s[0])+" ")])]}}],null,!0)})],1),e("div",{staticClass:"form-group col-12"},[e("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("select",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.user.city,expression:"checkoutData.user.city"}],staticClass:"form-control checkoutSelect",class:r,attrs:{name:"country"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.checkoutData.user,"city",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("City")]),e("option",{attrs:{value:"Los Angeles"}},[t._v("Los Angeles")])]),e("span",{staticClass:"invalid-feedback"},[t._v(" "+t._s(s[0])+" ")])]}}],null,!0)})],1),e("div",{staticClass:"form-group col-12"},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.user.address,expression:"checkoutData.user.address"}],staticClass:"form-control p-4",class:r,attrs:{id:"address",type:"text",name:"addr",placeholder:"Address"},domProps:{value:t.checkoutData.user.address},on:{input:function(a){a.target.composing||t.$set(t.checkoutData.user,"address",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(" "+t._s(s[0])+" ")])]}}],null,!0)})],1)])],1)]),e("div",{staticClass:"d-flex flex-column justify-content-center"},[e("button",{staticClass:"btn btn-primary text-white submitBtn",attrs:{type:"submit",disabled:s}},[t._v("Continue to payment")]),e("a",{staticClass:"mx-auto my-4 h5",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/products"}},[e("span",{staticClass:"mr-2"},[t._v(" < ")]),t._v(" Return to cart")])],1)]),e("hr"),e("ul",{staticClass:"pl-0"},[e("li",{staticClass:"list-unstyled"},[e("a",{staticClass:"text-light",attrs:{href:"#"}},[t._v("Purchase Policy")])]),e("li",{staticClass:"list-unstyled my-4"},[e("a",{staticClass:"text-light",attrs:{href:"#"}},[t._v("Privacy Policy")])]),e("li",{staticClass:"list-unstyled"},[e("a",{staticClass:"text-light",attrs:{href:"#"}},[t._v("Terms & Conditions")])])])])]}}])})],1)])])],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex justify-content-start mb-5"},[e("a",{staticClass:"text-secondary",attrs:{href:"#"}},[t._v("Purchase Policy")]),e("a",{staticClass:"text-secondary mx-5",attrs:{href:"#"}},[t._v("Privacy Policy")]),e("a",{staticClass:"text-secondary",attrs:{href:"#"}},[t._v("Terms & Conditions")])])}],i=(e("99af"),e("4160"),e("159b"),{data:function(){return{isLoading:!1,checkoutData:{user:{name:"",email:"",tel:"",country:"",city:"",address:""},message:""},carts:[],Shipping:80,cartListisOpen:!1}},methods:{toPayment:function(t){var a=this;a.$router.push("/payment"),setTimeout((function(){a.$bus.$emit("getInfomation",t)}),50)}},computed:{countTotal:function(){var t=this,a=0;return t.carts.forEach((function(t){a+=t.total})),a}},created:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("youxiaaa2","/cart");document.documentElement.scrollTop=0,t.$bus.$emit("getPageName","checkout"),t.isLoading=!0,t.$http.get(a).then((function(a){a.data.success&&(t.isLoading=!1,t.carts=a.data.data.carts,document.querySelector(".checkoutArea").classList.add("fadeIn"),document.querySelector(".responsiveCheckoutArea").classList.add("fadeIn"))})),setTimeout((function(){t.$bus.$emit("responsiveCheckoutArea","checkout")}),50)}}),l=i,o=e("2877"),c=Object(o["a"])(l,s,r,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-5b38b33c.e1683e9e.js.map