(function(e){function t(t){for(var r,u,c=t[0],a=t[1],l=t[2],s=0,p=[];s<c.length;s++)u=c[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"80b0f367"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.src=u(e);var l=new Error;i=function(t){a.onerror=a.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:a})}),12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],u=(n("034f"),n("2877")),c={},a=Object(u["a"])(c,o,i,!1,null,null,null),l=a.exports,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"menu",style:{width:e.wit}},[n("ul",[n("li",{on:{mouseover:function(t){e.who="index1"}}},[e._v(e._s("64px"==e.wit?"1":"首页1"))]),n("li",{on:{mouseover:function(t){e.who="index2"}}},[e._v(e._s("64px"==e.wit?"2":"首页2"))]),n("li",{on:{mouseover:function(t){e.who="index3"}}},[e._v(e._s("64px"==e.wit?"3":"首页3"))]),n("li",{on:{mouseover:function(t){e.who="index4"}}},[e._v(e._s("64px"==e.wit?"4":"首页4"))])])]),n("div",{staticClass:"main"},[n("div",{staticClass:"top"},[n("div",[n("button",{on:{click:e.witfn}},[e._v("控制菜单")]),e._l(e.navs,(function(t){return t.url==e.who?n("span",{staticStyle:{display:"inline-block"}},[e._v(e._s(t.title))]):e._e()}))],2),n("button",[e._v("用户名")])]),n("div",{staticClass:"content"},[n(e.who,{tag:"component"})],1)])])},p=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("首页内容1")])},v=[],h={},m=h,b=Object(u["a"])(m,d,v,!1,null,"46d0aeaa",null),_=b.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("首页内容2")])},x=[],y={},g=y,j=Object(u["a"])(g,w,x,!1,null,"05d04f0a",null),O=j.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("首页内容3")])},P=[],k={},C=k,$=Object(u["a"])(C,E,P,!1,null,"7660212c",null),S=$.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("首页内容4")])},M=[],A={},H=A,J=Object(u["a"])(H,T,M,!1,null,"f860e06c",null),L=J.exports,q={name:"Home",data:function(){return{wit:"200px",who:"index1",navs:[{url:"index1",title:"首页1"},{url:"index2",title:"首页2"},{url:"index3",title:"首页3"},{url:"index4",title:"首页4"}]}},methods:{witfn:function(){this.wit="200px"==this.wit?"64px":"200px"}},components:{index1:_,index2:O,index3:S,index4:L}},z=q,B=(n("cccb"),Object(u["a"])(z,f,p,!1,null,null,null)),D=B.exports;r["a"].use(s["a"]);var F=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],G=new s["a"]({routes:F}),I=G;r["a"].config.productionTip=!1,new r["a"]({router:I,render:function(e){return e(l)}}).$mount("#app")},"5ced":function(e,t,n){},"85ec":function(e,t,n){},cccb:function(e,t,n){"use strict";n("5ced")}});
//# sourceMappingURL=app.d122b6f9.js.map