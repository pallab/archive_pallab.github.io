(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{183:function(e){e.exports=JSON.parse('[{"id":3,"title":"Article Mnp","body":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like","summary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat","date":"2020-01-07"},{"id":2,"title":"Article Abc","body":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like","date":"2020-01-06"},{"id":1,"title":"Article XyZ","body":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like","summary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat","date":"2020-01-05"}]')},186:function(e,t,o){var content=o(196);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(48).default)("3a5051fe",content,!0,{sourceMap:!1})},191:function(e,t,o){"use strict";var n=o(6),r=o(192)(5),l=!0;"find"in[]&&Array(1).find((function(){l=!1})),n(n.P+n.F*l,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o(80)("find")},192:function(e,t,o){var n=o(22),r=o(79),l=o(23),d=o(17),c=o(193);e.exports=function(e,t){var o=1==e,m=2==e,h=3==e,f=4==e,v=6==e,y=5==e||v,w=t||c;return function(t,c,k){for(var x,I,_=l(t),A=r(_),L=n(c,k,3),C=d(A.length),j=0,M=o?w(t,C):m?w(t,0):void 0;C>j;j++)if((y||j in A)&&(I=L(x=A[j],j,_),e))if(o)M[j]=I;else if(I)switch(e){case 3:return!0;case 5:return x;case 6:return j;case 2:M.push(x)}else if(f)return!1;return v?-1:h||f?f:M}}},193:function(e,t,o){var n=o(194);e.exports=function(e,t){return new(n(e))(t)}},194:function(e,t,o){var n=o(10),r=o(117),l=o(2)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),n(t)&&null===(t=t[l])&&(t=void 0)),void 0===t?Array:t}},195:function(e,t,o){"use strict";var n=o(186);o.n(n).a},196:function(e,t,o){(t=o(47)(!1)).push([e.i,".post[data-v-4e63c6c9]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:50px}.post-item[data-v-4e63c6c9]{max-width:1200px;text-align:center;padding-left:30px;padding-right:30px}",""]),e.exports=t},202:function(e,t,o){"use strict";o.r(t);o(191);var n=o(1),r=o(183),l=n.a.extend({name:"Post",computed:{post:function(){var e=parseInt(this.$route.params.id);return r.find((function(t){return t.id===e}))}}}),d=(o(195),o(21)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content post"},[o("h1",{staticClass:"post-item"},[e._v(e._s(e.post.title))]),e._v(" "),o("h6",{staticClass:"post-item"},[e._v(e._s(e.post.date))]),e._v(" "),o("p",{staticClass:"post-item"},[e._v(e._s(e.post.body))])])}),[],!1,null,"4e63c6c9",null);t.default=component.exports}}]);