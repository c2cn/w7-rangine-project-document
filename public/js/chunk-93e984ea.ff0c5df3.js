(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93e984ea"],{"02f4":function(t,e,n){var r=n("4588"),o=n("be13");t.exports=function(t){return function(e,n){var i,a,c=String(o(e)),u=r(n),s=c.length;return u<0||u>=s?t?"":void 0:(i=c.charCodeAt(u),i<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536)}}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1169:function(t,e,n){var r=n("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"11e9":function(t,e,n){var r=n("52a7"),o=n("4630"),i=n("6821"),a=n("6a99"),c=n("69a8"),u=n("c69a"),s=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?s:function(t,e){if(t=i(t),e=a(e,!0),u)try{return s(t,e)}catch(n){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},"1c4c":function(t,e,n){"use strict";var r=n("9b43"),o=n("5ca1"),i=n("4bf8"),a=n("1fa8"),c=n("33a4"),u=n("9def"),s=n("f1ae"),f=n("27ee");o(o.S+o.F*!n("5cc5")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,l,d=i(t),h="function"==typeof this?this:Array,m=arguments.length,p=m>1?arguments[1]:void 0,b=void 0!==p,y=0,g=f(d);if(b&&(p=r(p,m>2?arguments[2]:void 0,2)),void 0==g||h==Array&&c(g))for(e=u(d.length),n=new h(e);e>y;y++)s(n,y,b?p(d[y],y):d[y]);else for(l=g.call(d),n=new h;!(o=l.next()).done;y++)s(n,y,b?a(l,p,[o.value,y],!0):o.value);return n.length=y,n}})},"2b83":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin-login"},[n("div",{staticClass:"login-box"},[n("h2",[t._v("文档管理系统")]),n("el-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("el-tab-pane",{attrs:{label:"账号登录",name:"account"}},[n("div",{staticClass:"login-form"},[n("el-input",{attrs:{"prefix-icon":"el-icon-user-solid",placeholder:"用户名/手机号"},model:{value:t.formData.username,callback:function(e){t.$set(t.formData,"username",e)},expression:"formData.username"}}),n("el-input",{attrs:{type:"password","prefix-icon":"el-icon-s-goods",placeholder:"输入密码"},model:{value:t.formData.userpass,callback:function(e){t.$set(t.formData,"userpass",e)},expression:"formData.userpass"}}),n("el-input",{staticClass:"code-input",attrs:{"prefix-icon":"el-icon-s-goods",placeholder:"输入图形验证码"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)}},model:{value:t.formData.code,callback:function(e){t.$set(t.formData,"code",e)},expression:"formData.code"}},[n("img",{attrs:{slot:"append",src:t.code,alt:""},on:{click:t.getCode},slot:"append"})])],1),t.thirdPartyList.length?n("div",{staticClass:"login-thirdParty"},[n("span",{staticClass:"title"},[t._v("第三方账号登录")]),n("div",{staticClass:"icon-list"},t._l(t.thirdPartyList,(function(e){return n("img",{key:e.name,staticClass:"icon-block",attrs:{src:e.logo,title:e.name},on:{click:function(n){return t.thirdPartyIconClick(e.redirect_url)}}})})),0)]):t._e(),n("el-button",{staticClass:"login-btn",on:{click:t.login}},[t._v("登录")])],1)],1)],1),t._m(0)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[t._v("\n      Powered by "),n("a",{attrs:{href:"https://www.w7.cc"}},[t._v("微擎云计算©www.w7.cc")])])}],i=(n("ac6a"),n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("7f7f"),n("6b54"),n("1c1e")),a=n("4ec3"),c=n("56d7");function u(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=s(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function s(t,e){if(t){if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var l={name:"adminLoginPage",data:function(){return{autofocus:!1,active:"account",code:"",formData:{username:"",userpass:"",code:"",phone:"",phoneCode:""},thirdPartyList:[]}},beforeRouteEnter:function(t,e,n){var r=t.query.code,o=t.query.redirect_url,s=t.query.app_id;r?i["a"].post("/common/auth/third-party-login",{code:r,app_id:s}).then((function(t){t&&t.is_need_bind?n("/bind"):o?window.open(o,"_self"):n("/admin/document")})).catch((function(){n("/admin-login")})):Object(a["n"])().then((function(t){if(200==t.code){var e,r=u(t.data);try{for(r.s();!(e=r.n()).done;){var o=e.value;1!=o.id||o.enable?1==o.id&&o.enable&&i["a"].post("/common/auth/default-login-url").then((function(t){t.data?window.open(t.data,"_self"):n()})):(c["default"].$router.push({name:"install"}),n())}}catch(a){r.e(a)}finally{r.f()}}})).catch((function(t){}))},created:function(){this.getCode(),this.getThirdParty()},methods:{systemDetection:function(){var t=this;Object(a["n"])().then((function(e){if(200==e.code){var n,r=u(e.data);try{for(r.s();!(n=r.n()).done;){var o=n.value;1!=o.id||o.enable||t.$router.push({name:"install"})}}catch(i){r.e(i)}finally{r.f()}}})).catch((function(t){}))},showFind:function(){this.$message({message:"请联系管理员修改或使用密码找回工具修改"})},getCode:function(){var t=this;this.$post("/common/verifycode/image").then((function(e){200==e.code?t.code=e.data.img:t.$message.error(e.message)}))},login:function(){var t=this;this.$post("/common/auth/login",this.formData).then((function(){var e=t.$message("登录成功");setTimeout((function(){e.close();var n=localStorage.recordHref;n?location.href=n:t.$router.push("/admin/document")}),500)})).catch((function(){t.formData.code="",document.getElementsByClassName("el-input__inner")[2].focus(),t.getCode()}))},getThirdParty:function(){var t=this;this.$post("/common/auth/method",{redirect_url:localStorage.recordHref||this.$route.query.redirect_url}).then((function(e){t.thirdPartyList=e.data||[]}))},thirdPartyIconClick:function(t){window.open(t,"_self")}}},d=l,h=n("2877"),m=Object(h["a"])(d,r,o,!1,null,null,null);e["default"]=m.exports},"37c8":function(t,e,n){e.f=n("2b4c")},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"3a72":function(t,e,n){var r=n("7726"),o=n("8378"),i=n("2d00"),a=n("37c8"),c=n("86cc").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:a.f(t)})}},"4ec3":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"f",(function(){return a})),n.d(e,"m",(function(){return c})),n.d(e,"o",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return f})),n.d(e,"k",(function(){return l})),n.d(e,"l",(function(){return d})),n.d(e,"n",(function(){return h})),n.d(e,"i",(function(){return m})),n.d(e,"j",(function(){return p})),n.d(e,"h",(function(){return b})),n.d(e,"g",(function(){return y})),n.d(e,"e",(function(){return g}));var r=n("1c1e"),o=function(t){return Object(r["a"])({url:"/admin/document/create",data:t,method:"post"})},i=function(t){return Object(r["a"])({url:"/admin/chapter/create",data:t,method:"post"})},a=function(t){return Object(r["a"])({url:"/admin/document/chapterapi/getApiLabel",data:t,method:"get"})},c=function(t){return Object(r["a"])({url:"/admin/chapter/save",data:t,method:"post"})},u=function(t){return Object(r["a"])({url:"/admin/chapter/content",data:t,method:"post"})},s=function(t){return Object(r["a"])({url:"/admin/document/all",data:t,method:"post"})},f=function(t){return Object(r["a"])({url:"/admin/chapter/detail",data:t,method:"post"})},l=function(t){return Object(r["a"])({url:"/common/auth/getlogouturl",data:t,method:"get"})},d=function(t){return Object(r["a"])({url:"/document/chapter/record",data:t,method:"post"})},h=function(t){return Object(r["a"])({url:"/install/systemDetection",data:t,method:"post"})},m=function(t){return Object(r["a"])({url:"/install/install",data:t,method:"post"})},p=function(t){return Object(r["a"])({url:"/install/config",data:t,method:"post"})},b=function(t){return Object(r["a"])({url:"/admin/user/all",data:t,method:"post"})},y=function(t){return Object(r["a"])({url:"/document/chapter/search",data:t,method:"post"})},g=function(t){return Object(r["a"])({url:"/document/detail",data:t,method:"post"})}},"5df3":function(t,e,n){"use strict";var r=n("02f4")(!0);n("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},"67ab":function(t,e,n){var r=n("ca5a")("meta"),o=n("d3f4"),i=n("69a8"),a=n("86cc").f,c=0,u=Object.isExtensible||function(){return!0},s=!n("79e5")((function(){return u(Object.preventExtensions({}))})),f=function(t){a(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!u(t))return"F";if(!e)return"E";f(t)}return t[r].i},d=function(t,e){if(!i(t,r)){if(!u(t))return!0;if(!e)return!1;f(t)}return t[r].w},h=function(t){return s&&m.NEED&&u(t)&&!i(t,r)&&f(t),t},m=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:d,onFreeze:h}},"6b54":function(t,e,n){"use strict";n("3846");var r=n("cb7c"),o=n("0bfb"),i=n("9e1e"),a="toString",c=/./[a],u=function(t){n("2aba")(RegExp.prototype,a,t,!0)};n("79e5")((function(){return"/a/b"!=c.call({source:"a",flags:"b"})}))?u((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)})):c.name!=a&&u((function(){return c.call(this)}))},"7bbc":function(t,e,n){var r=n("6821"),o=n("9093").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(r(t))}},"8a81":function(t,e,n){"use strict";var r=n("7726"),o=n("69a8"),i=n("9e1e"),a=n("5ca1"),c=n("2aba"),u=n("67ab").KEY,s=n("79e5"),f=n("5537"),l=n("7f20"),d=n("ca5a"),h=n("2b4c"),m=n("37c8"),p=n("3a72"),b=n("d4c0"),y=n("1169"),g=n("cb7c"),v=n("d3f4"),S=n("4bf8"),w=n("6821"),O=n("6a99"),j=n("4630"),_=n("2aeb"),L=n("7bbc"),C=n("11e9"),P=n("2621"),k=n("86cc"),x=n("0d58"),E=C.f,D=k.f,A=L.f,T=r.Symbol,$=r.JSON,N=$&&$.stringify,M="prototype",F=h("_hidden"),I=h("toPrimitive"),R={}.propertyIsEnumerable,G=f("symbol-registry"),V=f("symbols"),H=f("op-symbols"),J=Object[M],q="function"==typeof T&&!!P.f,K=r.QObject,W=!K||!K[M]||!K[M].findChild,B=i&&s((function(){return 7!=_(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=E(J,e);r&&delete J[e],D(t,e,n),r&&t!==J&&D(J,e,r)}:D,Y=function(t){var e=V[t]=_(T[M]);return e._k=t,e},z=q&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},Q=function(t,e,n){return t===J&&Q(H,e,n),g(t),e=O(e,!0),g(n),o(V,e)?(n.enumerable?(o(t,F)&&t[F][e]&&(t[F][e]=!1),n=_(n,{enumerable:j(0,!1)})):(o(t,F)||D(t,F,j(1,{})),t[F][e]=!0),B(t,e,n)):D(t,e,n)},U=function(t,e){g(t);var n,r=b(e=w(e)),o=0,i=r.length;while(i>o)Q(t,n=r[o++],e[n]);return t},X=function(t,e){return void 0===e?_(t):U(_(t),e)},Z=function(t){var e=R.call(this,t=O(t,!0));return!(this===J&&o(V,t)&&!o(H,t))&&(!(e||!o(this,t)||!o(V,t)||o(this,F)&&this[F][t])||e)},tt=function(t,e){if(t=w(t),e=O(e,!0),t!==J||!o(V,e)||o(H,e)){var n=E(t,e);return!n||!o(V,e)||o(t,F)&&t[F][e]||(n.enumerable=!0),n}},et=function(t){var e,n=A(w(t)),r=[],i=0;while(n.length>i)o(V,e=n[i++])||e==F||e==u||r.push(e);return r},nt=function(t){var e,n=t===J,r=A(n?H:w(t)),i=[],a=0;while(r.length>a)!o(V,e=r[a++])||n&&!o(J,e)||i.push(V[e]);return i};q||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===J&&e.call(H,n),o(this,F)&&o(this[F],t)&&(this[F][t]=!1),B(this,t,j(1,n))};return i&&W&&B(J,t,{configurable:!0,set:e}),Y(t)},c(T[M],"toString",(function(){return this._k})),C.f=tt,k.f=Q,n("9093").f=L.f=et,n("52a7").f=Z,P.f=nt,i&&!n("2d00")&&c(J,"propertyIsEnumerable",Z,!0),m.f=function(t){return Y(h(t))}),a(a.G+a.W+a.F*!q,{Symbol:T});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ot=0;rt.length>ot;)h(rt[ot++]);for(var it=x(h.store),at=0;it.length>at;)p(it[at++]);a(a.S+a.F*!q,"Symbol",{for:function(t){return o(G,t+="")?G[t]:G[t]=T(t)},keyFor:function(t){if(!z(t))throw TypeError(t+" is not a symbol!");for(var e in G)if(G[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),a(a.S+a.F*!q,"Object",{create:X,defineProperty:Q,defineProperties:U,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:nt});var ct=s((function(){P.f(1)}));a(a.S+a.F*ct,"Object",{getOwnPropertySymbols:function(t){return P.f(S(t))}}),$&&a(a.S+a.F*(!q||s((function(){var t=T();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))}))),"JSON",{stringify:function(t){var e,n,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(n=e=r[1],(v(e)||void 0!==t)&&!z(t))return y(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!z(e))return e}),r[1]=e,N.apply($,r)}}),T[M][I]||n("32e9")(T[M],I,T[M].valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},9093:function(t,e,n){var r=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},ac4d:function(t,e,n){n("3a72")("asyncIterator")},ac6a:function(t,e,n){for(var r=n("cadf"),o=n("0d58"),i=n("2aba"),a=n("7726"),c=n("32e9"),u=n("84f2"),s=n("2b4c"),f=s("iterator"),l=s("toStringTag"),d=u.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=o(h),p=0;p<m.length;p++){var b,y=m[p],g=h[y],v=a[y],S=v&&v.prototype;if(S&&(S[f]||c(S,f,d),S[l]||c(S,l,y),u[y]=d,g))for(b in r)S[b]||i(S,b,r[b],!0)}},d4c0:function(t,e,n){var r=n("0d58"),o=n("2621"),i=n("52a7");t.exports=function(t){var e=r(t),n=o.f;if(n){var a,c=n(t),u=i.f,s=0;while(c.length>s)u.call(t,a=c[s++])&&e.push(a)}return e}},f1ae:function(t,e,n){"use strict";var r=n("86cc"),o=n("4630");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}}}]);