(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ab7716f"],{"538c":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"computerSubBanner"},[a("div",{staticClass:"row h-100 mx-0"},[a("div",{staticClass:"col-md-6 d-flex flex-column justify-content-center align-items-center"},[a("h3",{staticClass:"text-white h1 mb-4"},[t._v(" Subscribe for news "),a("br"),t._v(" and special offers! ")]),a("div",{staticClass:"input-group justify-content-center mt-5 subInput"},[a("div",{staticClass:"input-group-prepend"},[a("input",{staticClass:"pl-3 text-white",attrs:{type:"email",placeholder:"Your email address"}})]),a("button",{staticClass:"text-white btn btn-primary py-2 px-4",attrs:{type:"button"}},[t._v("Subscribe")])])])])]),a("div",{staticClass:"responsiveSubBanner"},[a("div",{staticClass:"responsiveSubBannerBg d-flex"},[a("div",{staticClass:"subTitle"},[a("h2",{staticClass:"text-white h1"},[a("span",[t._v("Subscribe for news")]),a("br"),a("span",[t._v("and special offers!")])]),a("div",{staticClass:"input-group mt-4 subInput"},[a("div",{staticClass:"input-group-prepend"},[a("input",{staticClass:"pl-3 py-4 text-white",attrs:{type:"email",placeholder:"Your email address"}})]),a("button",{staticClass:"text-white btn btn-primary py-2 px-3",attrs:{type:"button"}},[t._v("Subscribe")])])])])])])}],c=a("2877"),r={},d=Object(c["a"])(r,i,e,!1,null,null,null);s["a"]=d.exports},"6f83":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),a("div",{staticClass:"container productDetail"},[a("div",{staticClass:"row detailArea"},[a("div",{staticClass:"col-md-7"},[a("img",{staticClass:"detailImg",attrs:{src:t.product.image,alt:"",width:"100%"}})]),a("div",{staticClass:"col-md-5"},[a("div",{staticClass:"detailCard"},[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb bg-white p-0"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{staticClass:"text-secondary",attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"breadcrumb-item"},[a("router-link",{staticClass:"text-secondary",attrs:{to:"/products"}},[t._v("Product")])],1),a("li",{staticClass:"breadcrumb-item active text-secondary",attrs:{"aria-current":"page"}},[t._v(" "+t._s(t.product.category)+" ")])])]),a("h3",{staticClass:"text-dark mt-3 h1"},[t._v(" "+t._s(t.product.title)+" ")]),a("p",{staticClass:"text-right"},[t.product.origin_price?a("del",{staticClass:"h6 text-secondary"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.product.origin_price))+" ")]):t._e(),a("br"),a("span",{staticClass:"h4 text-dark"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.product.price*t.productQty))+" ")])]),a("div",{staticClass:"d-flex"},[a("div",{staticClass:"btn-group mr-2 addBtn",attrs:{role:"group","aria-label":"Second group"}},[a("button",{staticClass:"btn bg-weak",class:{pageDisabled:1===t.productQty},attrs:{type:"button"},on:{click:function(s){t.productQty-=1}}},[a("span",{staticClass:"h4"},[t._v("-")])]),a("input",{staticClass:"text-center bg-weak",attrs:{type:"number",min:"1",max:"10",disabled:""},domProps:{value:t.productQty}}),a("button",{staticClass:"btn bg-weak",class:{pageDisabled:10===t.productQty},attrs:{type:"button"},on:{click:function(s){t.productQty+=1}}},[a("span",{staticClass:"h4"},[t._v("+")])])]),a("button",{staticClass:"btn btn-primary form-control py-4 d-flex justify-content-center align-items-center",class:{pageDisabled:t.addBtn},attrs:{type:"button"},on:{click:t.addtoCart}},[a("span",[t._v("Add to cart")])])])])])]),a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-md-7"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-md-4"},[a("p",{staticClass:"h6 text-secondary"},[t._v(" "+t._s(t.product.description)+" ")])])])])]),a("div",{staticClass:"row mt-5 px-3"})]),a("div",{staticClass:"reponsiveDetail mt-3"},[a("div",{staticClass:"row m-0"},[a("div",{staticClass:"col-12 p-0"},[a("img",{attrs:{src:t.product.image,alt:"",width:"100%"}})])]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body d-flex flex-column"},[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb bg-white p-0"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{staticClass:"text-secondary h5",attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"breadcrumb-item"},[a("router-link",{staticClass:"text-secondary h5",attrs:{to:"/products"}},[t._v("Product")])],1),a("li",{staticClass:"breadcrumb-item active text-secondary h5",attrs:{"aria-current":"page"}},[t._v(" "+t._s(t.product.category)+" ")])])]),a("h3",{staticClass:"h1"},[t._v(" "+t._s(t.product.title)+" ")]),a("div",{staticClass:"d-flex justify-content-between mt-3"},[a("div",{staticClass:"btn-group mr-2 addBtn",attrs:{role:"group","aria-label":"Second group"}},[a("button",{staticClass:"btn bg-weak",class:{pageDisabled:1===t.productQty},attrs:{type:"button"},on:{click:function(s){t.productQty-=1}}},[a("span",{staticClass:"h4"},[t._v("-")])]),a("input",{staticClass:"text-center bg-weak py-4 px-4",attrs:{type:"number",min:"1",max:"10",disabled:""},domProps:{value:t.productQty}}),a("button",{staticClass:"btn bg-weak",class:{pageDisabled:10===t.productQty},attrs:{type:"button"},on:{click:function(s){t.productQty+=1}}},[a("span",{staticClass:"h4"},[t._v("+")])])]),a("div",{staticClass:"d-flex flex-column"},[a("del",{staticClass:"text-right h5 text-light"},[t._v(" NT"+t._s(t._f("DollarsignFilter")(t.product.origin_price))+" ")]),a("span",{staticClass:"h3"},[t._v(" NT"+t._s(t._f("DollarsignFilter")(t.product.price))+" ")])])]),a("button",{staticClass:"btn btn-primary form-control d-flex justify-content-center align-items-center mt-4 addtoCartBtn",class:{pageDisabled:t.addBtn},attrs:{type:"button"},on:{click:t.addtoCart}},[a("span",{staticClass:"h4 my-3"},[t._v("Add to cart")])])])]),t._m(1)]),a("h3",{staticClass:"h2 text-dark px-5 ml-4 carouselTitle"},[t._v("You might also like…")]),a("h3",{staticClass:"responsiveCarouselTitle"},[t._v("You might also like…")]),a("ProductsCarousel",{staticClass:"mt-5"}),a("SubBanner")],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-8"},[a("h3",{staticClass:"h5 text-dark"},[t._v(" This beautiful light grey cup comes from Taiwan. Add some minimalist scenes to your lifetime and use this cup for tea, coffee, dessert, or to place small items as a dish tray. ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card p-0 mt-4"},[a("p",{staticClass:"text-secondary h5"},[a("span",[t._v("This beautiful light grey cup comes from")]),a("span",[t._v(" Taiwan. Add some minimalist scenes to your")]),a("span",[t._v(" lifetime and use this cup for tea, coffee,")]),a("span",[t._v(" dessert, or to place small items as a dish tray.")])]),a("p",{staticClass:"text-light my-4"},[a("span",[t._v("Made in Taiwan")]),a("br"),a("span",[t._v("8 x 8 x 6 cm")]),a("br"),a("span",[t._v("Dishwasher and Microwave-safe")])])])}],c=(a("99af"),a("4160"),a("c975"),a("baa5"),a("a434"),a("ac1f"),a("5319"),a("159b"),a("cbb6")),r=a("538c"),d={components:{ProductsCarousel:c["a"],SubBanner:r["a"]},data:function(){return{isLoading:!1,cacheId:"",product:{},productQty:1,cartData:JSON.parse(localStorage.getItem("cartData"))||[],addBtn:!1}},watch:{cacheId:function(){var t=this,s=window.location.href.replace(/^http:\/\/[^/]+/,""),a=s.substr(s.lastIndexOf("/",s.lastIndexOf("/")-1)+1),i=a.lastIndexOf("/"),e=decodeURI(a.substring(i+1,a.length));t.cacheId=e,t.isLoading=!0,document.documentElement.scrollTop=0;var c="".concat("https://vue-course-api.hexschool.io","/api/").concat("youxiaaa2","/product/").concat(t.cacheId);t.$http.get(c).then((function(s){s.data.success?(t.isLoading=!1,t.product=s.data.product):t.isLoading=!1}))}},methods:{addtoCart:function(){var t=this,s=[];if(!t.addBtn)if(t.addBtn=!0,setTimeout((function(){t.addBtn=!t.addBtn}),1500),t.cartData.forEach((function(t){s.push(t.id)})),-1===s.indexOf(t.product.id)){var a={id:t.product.id,title:t.product.title,origin_price:t.product.origin_price,price:t.product.price,qty:t.productQty,image:t.product.image};t.cartData.push(a),localStorage.setItem("cartData",JSON.stringify(t.cartData)),t.$bus.$emit("updateCart",t.cartData),t.$bus.$emit("updatecartLen",t.cartData),t.$noty.show("".concat(t.product.title," 已加入購物車"))}else t.cartData.forEach((function(s,a){if(s.id===t.product.id){var i=s.qty,e={id:t.product.id,title:t.product.title,origin_price:t.product.origin_price,price:t.product.price,qty:i+=t.productQty,image:t.product.image};t.cartData.splice(a,1),t.cartData.push(e),localStorage.setItem("cartData",JSON.stringify(t.cartData)),t.$bus.$emit("updateCart",t.cartData),t.$bus.$emit("updatecartLen",t.cartData),t.$noty.show("".concat(t.product.title," 已加入購物車"))}}))}},created:function(){var t=this;t.isLoading=!0;var s=window.location.href.replace(/^http:\/\/[^/]+/,""),a=s.substr(s.lastIndexOf("/",s.lastIndexOf("/")-1)+1),i=a.lastIndexOf("/"),e=decodeURI(a.substring(i+1,a.length));t.cacheId=e,setTimeout((function(){if(t.cacheId){var s="".concat("https://vue-course-api.hexschool.io","/api/").concat("youxiaaa2","/product/").concat(t.cacheId);t.$http.get(s).then((function(s){document.documentElement.scrollTop=0,s.data.success?(t.product=s.data.product,document.querySelector(".productDetail").classList.add("fadeIn"),document.querySelector(".reponsiveDetail").classList.add("fadeIn"),t.isLoading=!1):t.isLoading=!1}))}}),10),setTimeout((function(){t.$bus.$emit("getPageLocation","products")}),10),t.$bus.$on("getProductId",(function(s){t.cacheId=s,t.productQty=1}))}},o=d,l=a("2877"),n=Object(l["a"])(o,i,e,!1,null,null,null);s["default"]=n.exports},8418:function(t,s,a){"use strict";var i=a("c04e"),e=a("9bf2"),c=a("5c6c");t.exports=function(t,s,a){var r=i(s);r in t?e.f(t,r,c(0,a)):t[r]=a}},"99af":function(t,s,a){"use strict";var i=a("23e7"),e=a("d039"),c=a("e8b5"),r=a("861d"),d=a("7b0b"),o=a("50c4"),l=a("8418"),n=a("65f0"),u=a("1dde"),p=a("b622"),f=a("2d00"),v=p("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",g=f>=51||!e((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),C=u("concat"),_=function(t){if(!r(t))return!1;var s=t[v];return void 0!==s?!!s:c(t)},b=!g||!C;i({target:"Array",proto:!0,forced:b},{concat:function(t){var s,a,i,e,c,r=d(this),u=n(r,0),p=0;for(s=-1,i=arguments.length;s<i;s++)if(c=-1===s?r:arguments[s],_(c)){if(e=o(c.length),p+e>h)throw TypeError(m);for(a=0;a<e;a++,p++)a in c&&l(u,p,c[a])}else{if(p>=h)throw TypeError(m);l(u,p++,c)}return u.length=p,u}})},a434:function(t,s,a){"use strict";var i=a("23e7"),e=a("23cb"),c=a("a691"),r=a("50c4"),d=a("7b0b"),o=a("65f0"),l=a("8418"),n=a("1dde"),u=a("ae40"),p=n("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,h=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,s){var a,i,n,u,p,f,C=d(this),_=r(C.length),b=e(t,_),x=arguments.length;if(0===x?a=i=0:1===x?(a=0,i=_-b):(a=x-2,i=h(v(c(s),0),_-b)),_+a-i>m)throw TypeError(g);for(n=o(C,i),u=0;u<i;u++)p=b+u,p in C&&l(n,u,C[p]);if(n.length=i,a<i){for(u=b;u<_-i;u++)p=u+i,f=u+a,p in C?C[f]=C[p]:delete C[f];for(u=_;u>_-i+a;u--)delete C[u-1]}else if(a>i)for(u=_-i;u>b;u--)p=u+i-1,f=u+a-1,p in C?C[f]=C[p]:delete C[f];for(u=0;u<a;u++)C[u+b]=arguments[u+2];return C.length=_-i+a,n}})},baa5:function(t,s,a){var i=a("23e7"),e=a("e58c");i({target:"Array",proto:!0,forced:e!==[].lastIndexOf},{lastIndexOf:e})},c975:function(t,s,a){"use strict";var i=a("23e7"),e=a("4d64").indexOf,c=a("a640"),r=a("ae40"),d=[].indexOf,o=!!d&&1/[1].indexOf(1,-0)<0,l=c("indexOf"),n=r("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:o||!l||!n},{indexOf:function(t){return o?d.apply(this,arguments)||0:e(this,t,arguments.length>1?arguments[1]:void 0)}})},cbb6:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"row m-0"},[a("div",{staticClass:"col carouselPrefade"},[a("carousel",{attrs:{"per-page":1,"navigate-to":t.someLocalProperty,"mouse-drag":!1}},[a("slide",[a("div",{staticClass:"row px-5 mx-0"},[a("div",{staticClass:"col-md-3 d-flex justify-content-center"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header p-0"},[a("img",{attrs:{src:t.products[0].image,alt:"",width:"100%",height:"280px"},on:{click:function(s){return t.checkDetail(t.products[0].id)}}})]),a("div",{staticClass:"card-body"},[a("h3",{staticClass:"h5"},[t._v(" "+t._s(t.products[0].title)+" ")]),a("div",{staticClass:"d-flex"},[a("span",{staticClass:"text-dark mr-2"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.products[0].price))+" ")]),t.products[0].origin_price?a("del",{staticClass:"text-secondary"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.products[0].origin_price))+" ")]):t._e()])])])]),a("div",{staticClass:"col-md-3 d-flex justify-content-center"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header p-0"},[a("img",{attrs:{src:t.products[1].image,alt:"",width:"100%",height:"280px"},on:{click:function(s){return t.checkDetail(t.products[1].id)}}})]),a("div",{staticClass:"card-body"},[a("h3",{staticClass:"h5"},[t._v(" "+t._s(t.products[1].title)+" ")]),a("div",{staticClass:"d-flex"},[a("span",{staticClass:"text-dark mr-2"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.products[1].price))+" ")]),t.products[1].origin_price?a("del",{staticClass:"text-secondary"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.products[1].origin_price))+" ")]):t._e()])])])]),a("div",{staticClass:"col-md-3 d-flex justify-content-center"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header p-0"},[a("img",{attrs:{src:t.products[2].image,alt:"",width:"100%",height:"280px"},on:{click:function(s){return t.checkDetail(t.products[2].id)}}})]),a("div",{staticClass:"card-body"},[a("h3",{staticClass:"h5"},[t._v(" "+t._s(t.products[2].title)+" ")]),a("div",{staticClass:"d-flex"},[a("span",{staticClass:"text-dark mr-2"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.products[2].price))+" ")]),t.products[2].origin_price?a("del",{staticClass:"text-secondary"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.products[2].origin_price))+" ")]):t._e()])])])]),a("div",{staticClass:"col-md-3 d-flex justify-content-center"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header p-0"},[a("img",{attrs:{src:t.products[3].image,alt:"",width:"100%",height:"280px"},on:{click:function(s){return t.checkDetail(t.products[3].id)}}})]),a("div",{staticClass:"card-body"},[a("h3",{staticClass:"h5"},[t._v(" "+t._s(t.products[3].title)+" ")]),a("div",{staticClass:"d-flex"},[a("span",{staticClass:"text-dark mr-2"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.products[3].price))+" ")]),t.products[3].origin_price?a("del",{staticClass:"text-secondary"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.products[3].origin_price))+" ")]):t._e()])])])])])]),a("slide",[a("div",{staticClass:"row px-5"},[a("div",{staticClass:"col-md-3 d-flex justify-content-center"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header p-0"},[a("img",{attrs:{src:t.products[4].image,alt:"",width:"100%",height:"280px"},on:{click:function(s){return t.checkDetail(t.products[4].id)}}})]),a("div",{staticClass:"card-body"},[a("h3",{staticClass:"h5"},[t._v(" "+t._s(t.products[4].title)+" ")]),a("div",{staticClass:"d-flex"},[a("span",{staticClass:"text-dark mr-2"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.products[4].price))+" ")]),t.products[4].origin_price?a("del",{staticClass:"text-secondary"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.products[4].origin_price))+" ")]):t._e()])])])]),a("div",{staticClass:"col-md-3 d-flex justify-content-center"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header p-0"},[a("img",{attrs:{src:t.products[5].image,alt:"",width:"100%",height:"280px"},on:{click:function(s){return t.checkDetail(t.products[5].id)}}})]),a("div",{staticClass:"card-body"},[a("h3",{staticClass:"h5"},[t._v(" "+t._s(t.products[5].title)+" ")]),a("div",{staticClass:"d-flex"},[a("span",{staticClass:"text-dark mr-2"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.products[5].price))+" ")]),t.products[5].origin_price?a("del",{staticClass:"text-secondary"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.products[5].origin_price))+" ")]):t._e()])])])]),a("div",{staticClass:"col-md-3 d-flex justify-content-center"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header p-0"},[a("img",{attrs:{src:t.products[6].image,alt:"",width:"100%",height:"280px"},on:{click:function(s){return t.checkDetail(t.products[6].id)}}})]),a("div",{staticClass:"card-body"},[a("h3",{staticClass:"h5"},[t._v(" "+t._s(t.products[6].title)+" ")]),a("div",{staticClass:"d-flex"},[a("span",{staticClass:"text-dark mr-2"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.products[6].price))+" ")]),t.products[6].origin_price?a("del",{staticClass:"text-secondary"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.products[6].origin_price))+" ")]):t._e()])])])]),a("div",{staticClass:"col-md-3 d-flex justify-content-center"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header p-0"},[a("img",{attrs:{src:t.products[7].image,alt:"",width:"100%",height:"280px"},on:{click:function(s){return t.checkDetail(t.products[7].id)}}})]),a("div",{staticClass:"card-body"},[a("h3",{staticClass:"h5"},[t._v(" "+t._s(t.products[7].title)+" ")]),a("div",{staticClass:"d-flex"},[a("span",{staticClass:"text-dark mr-2"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.products[7].price))+" ")]),t.products[7].origin_price?a("del",{staticClass:"text-secondary"},[t._v(" "+t._s(t._f("DollarsignFilter")(t.products[7].origin_price))+" ")]):t._e()])])])])])])],1)],1),a("div",{staticClass:"col responsiveCarouselPrefade"},[a("carousel",{attrs:{"per-page":1,"navigate-to":t.someLocalProperty,"mouse-drag":!1}},t._l(t.products,(function(s){return a("slide",{key:s.id},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header p-0"},[a("img",{attrs:{src:s.image,alt:"",width:"100%"},on:{click:function(a){return t.checkDetail(s.id)}}})]),a("div",{staticClass:"card-body"},[a("h3",[t._v(" "+t._s(s.title)+" ")]),a("span",{staticClass:"h5"},[t._v(" "+t._s(t._f("DollarsignFilter")(s.price))+" ")]),t._v(" "),a("del",{staticClass:"text-light"},[t._v(" "+t._s(t._f("DollarsignFilter")(s.origin_price))+" ")])])])])})),1)],1)])])},e=[],c=(a("99af"),{data:function(){return{products:[]}},methods:{checkDetail:function(t){var s=this;s.$router.push("/products/".concat(t)),setTimeout((function(){s.$bus.$emit("getProductId",t)}),50)}},created:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("youxiaaa2","/products/all");t.$http.get(s).then((function(s){s.data.success&&(t.products=s.data.products,document.querySelector(".carouselPrefade").classList.add("fadeIn"))}))}}),r=c,d=a("2877"),o=Object(d["a"])(r,i,e,!1,null,null,null);s["a"]=o.exports},e58c:function(t,s,a){"use strict";var i=a("fc6a"),e=a("a691"),c=a("50c4"),r=a("a640"),d=a("ae40"),o=Math.min,l=[].lastIndexOf,n=!!l&&1/[1].lastIndexOf(1,-0)<0,u=r("lastIndexOf"),p=d("indexOf",{ACCESSORS:!0,1:0}),f=n||!u||!p;t.exports=f?function(t){if(n)return l.apply(this,arguments)||0;var s=i(this),a=c(s.length),r=a-1;for(arguments.length>1&&(r=o(r,e(arguments[1]))),r<0&&(r=a+r);r>=0;r--)if(r in s&&s[r]===t)return r||0;return-1}:l}}]);
//# sourceMappingURL=chunk-4ab7716f.1cf4634f.js.map