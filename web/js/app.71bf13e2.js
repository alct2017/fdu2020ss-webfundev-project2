(function(t){function e(e){for(var i,a,o=e[0],l=e[1],c=e[2],p=0,m=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&m.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("1d50")},"15b6":function(t,e,n){},1972:function(t,e,n){"use strict";var i=n("be3e"),s=n.n(i);s.a},"1d50":function(t,e,n){"use strict";n.r(e);n("789a"),n("d38f"),n("93e1"),n("8188");var i=n("2b0e"),s=n("5f5b"),r=n("b1e0"),a=n("8c4f"),o=(n("f9e3"),n("2dd8"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")}),l=[],c={created:function(){sessionStorage.getItem("token")&&sessionStorage.getItem("id")&&this.$store.dispatch("login",{token:sessionStorage.getItem("token"),id:sessionStorage.getItem("id")})}},u=c,p=n("f08f"),m=Object(p["a"])(u,o,l,!1,null,"478d0b50",null),d=m.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p-header"),n("router-view",{staticClass:"main"}),n("p-footer")],1)},h=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[n("b-navbar-brand",{attrs:{href:"#"}},[t._v("Hello,World!")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("items"),n("user")],1)],1)],1)},g=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar-nav",t._l(t.items,(function(e,i){return n("b-nav-item",{key:i,attrs:{to:e.href,active:t.isActive(e)}},[t._v(t._s(e.name))])})),1)},w=[],y=(n("9c36"),{data:function(){return{items:[{name:"Home",href:"/"},{name:"Browser",href:"/browser"},{name:"Search",href:"/search"}]}},methods:{isActive:function(t){var e=this.$route.name.toLowerCase(),n=t.name.toLowerCase();return e==n}}}),_=y,k=Object(p["a"])(_,v,w,!1,null,null,null),C=k.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar-nav",{staticClass:"ml-auto"},[this.$store.getters.isLogin?n("b-nav-item-dropdown",{attrs:{text:this.$store.getters.getUsername,right:""}},[n("b-dropdown-item",{attrs:{to:{name:"upload"}}},[t._v("Upload")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Image")]),n("b-dropdown-item",{attrs:{to:{name:"favor"}}},[t._v("Favor")]),n("b-dropdown-item",{on:{click:t.logout}},[t._v("Log out")])],1):n("b-button",{attrs:{variant:"outline-primary",to:{name:"login"}}},[t._v("Login")])],1)},P=[],O={methods:{logout:function(){this.$store.dispatch("logout")}}},$=O,L=Object(p["a"])($,x,P,!1,null,null,null),E=L.exports,S={data:function(){return{current:"Home"}},components:{items:C,user:E}},I=S,j=Object(p["a"])(I,b,g,!1,null,null,null),F=j.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"blog-footer"},[n("p",[t._v(" This website is a lesson project by "),n("a",{attrs:{href:"https://github.com/alct2017"}},[t._v("@alct2017")])])])}],V={},q=V,G=(n("f2ae"),Object(p["a"])(q,R,U,!1,null,"b803ccc6",null)),M=G.exports,H={components:{"p-header":F,"p-footer":M}},A=H,B=(n("d2a0"),Object(p["a"])(A,f,h,!1,null,"2089fbe4",null)),T=B.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("carousel"),n("cardgroup"),n("sidebutton")],1)},D=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[n("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/1024/480/?image=52"}}),n("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=54"}},[n("h1",[t._v("Hello world!")])]),n("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=58"}}),n("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[n("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"480",src:"https://picsum.photos/1024/480/?image=55",alt:"image slot"}})]},proxy:!0}])}),n("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}},[n("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum. ")])])],1)],1)},J=[],W={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},Z=W,K=Object(p["a"])(Z,N,J,!1,null,null,null),Y=K.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-5"},[n("div",{staticClass:"container"},[n("b-card-group",{attrs:{columns:""}},t._l(t.imageList,(function(e,i){return n("b-card",{key:i,staticClass:"mb-4 shadow-sm",attrs:{title:e.title,"img-src":e.largePath,"img-top":"",tag:"article","align-self":"stretch"}},[n("b-card-text",{staticClass:"brief"},[t._v(t._s(e.description))]),n("b-button-group",[n("b-button",{attrs:{variant:"outline-primary",to:{name:"detail",params:{id:e.id}}}},[t._v("View")]),n("b-button",{class:{active:t.isFavor(e.id)},attrs:{variant:"outline-success"},on:{click:function(n){t.isFavor(e.id)?t.unlike(e.id):t.like(e.id)}}},[t._v(t._s(e.favorCount)+" Like")])],1)],1)})),1)],1)])},X=[],tt=(n("f0ce"),n("2f5c"),n("b8eb"),n("bc3a")),et=n.n(tt),nt={data:function(){return{idList:[],imageList:[]}},computed:{favorList:function(){return this.$store.getters.getFavorList}},created:function(){this.getList().then(this.getImage)["catch"]((function(t){return console.log(t)}))},methods:{getList:function(){var t=this;return new Promise((function(e,n){et.a.get("../api/GetHomeList.php").then((function(n){t.idList=n.data,e()}))["catch"]((function(t){return n(t)}))}))},getImage:function(){var t=this;return new Promise((function(e,n){et.a.get("../api/GetImage.php",{params:{list:t.idList}}).then((function(n){t.imageList=n.data,e()}))["catch"]((function(t){return n(t)}))}))},isFavor:function(t){return this.favorList.includes(t+"")},like:function(t){this.$store.getters.isLogin?this.$store.dispatch("like",{imageid:t}).then(this.getImage)["catch"]((function(t){return console.log(t)})):this.$router.push({name:"login"})},unlike:function(t){this.$store.dispatch("unlike",{imageid:t}).then(this.getImage)["catch"]((function(t){return console.log(t)}))}}},it=nt,st=(n("5572"),Object(p["a"])(it,Q,X,!1,null,null,null)),rt=st.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"side-button-group"}},[n("b-button-group",{attrs:{vertical:""}},[n("b-button",{attrs:{variant:"outline-secondary"}},[n("b-icon",{attrs:{icon:"arrow-clockwise","aria-hidden":"true"}})],1),n("b-button",{attrs:{variant:"outline-secondary"}},[n("b-icon",{attrs:{icon:"chevron-bar-up","aria-hidden":"true"}})],1)],1)],1)},ot=[],lt={},ct=lt,ut=(n("b906"),Object(p["a"])(ct,at,ot,!1,null,null,null)),pt=ut.exports,mt={components:{carousel:Y,cardgroup:rt,sidebutton:pt}},dt=mt,ft=Object(p["a"])(dt,z,D,!1,null,null,null),ht=ft.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-5"},[n("div",{staticClass:"container"},[n("b-row",[n("b-col",{attrs:{md:"3"}},[n("item-sidebar",{on:{filter:t.getFilterResult}})],1),n("b-col",{attrs:{md:"9"}},[n("b-card",{staticClass:"my-4",attrs:{"no-body":"",header:"Filter"}},[n("b-list-group",{attrs:{flush:""}},[n("item-filter",{on:{filter:t.getFilterResult}}),n("filter-result",{attrs:{result:t.result}})],1)],1)],1)],1)],1)])},gt=[],vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-list-group-item",[n("b-form",{staticClass:"m-0"},[n("b-row",[n("b-col",{attrs:{col:"3","col-md":"6","col-sm":"12"}},[n("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{options:t.contentOptions},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),n("b-col",{attrs:{col:"3","col-md":"6","col-sm":"12"}},[n("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{options:t.countryOptions},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1),n("b-col",{attrs:{col:"3","col-md":"6","col-sm":"12"}},[n("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{options:t.cityOptions},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),n("b-col",{attrs:{col:"3","col-md":"6","col-sm":"12"}},[n("b-button",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{variant:"outline-success"},on:{click:t.filter}},[t._v("Filter")])],1)],1)],1)],1)},wt=[],yt=(n("0f41"),n("006e"),{data:function(){return{contentOptions:[],countryOptions:[],cityOptions:[],city:null,country:null,content:null}},watch:{country:function(){var t=this;this.city=null,this.cityOptions=[{value:null,text:"Filter by City"}],et.a.get("../api/GetCityOptions.php",{params:{country:this.country}}).then((function(e){e.data.forEach((function(e){t.cityOptions.push({value:e,text:e})}))}))["catch"]((function(t){return console.log(t)}))}},created:function(){this.initContentOptions(),this.initCountryOptions(),this.initCityOptions()},methods:{initContentOptions:function(){var t=this;this.contentOptions=[{value:null,text:"Filter by Content"}],et.a.get("../api/GetContentOptions.php").then((function(e){e.data.forEach((function(e){t.contentOptions.push({value:e,text:e})}))}))["catch"]((function(t){console.log(t)}))},initCountryOptions:function(){var t=this;this.countryOptions=[{value:null,text:"Filter by Country"}],et.a.get("../api/GetCountryOptions.php").then((function(e){e.data.forEach((function(e){t.countryOptions.push({value:e,text:e})}))}))["catch"]((function(t){console.log(t)}))},initCityOptions:function(){var t=this;this.cityOptions=[{value:null,text:"Filter by City"}],et.a.get("../api/GetCityOptions.php").then((function(e){e.data.forEach((function(e){t.cityOptions.push({value:e,text:e})}))}))["catch"]((function(t){return console.log(t)}))},filter:function(){var t={city:this.city,country:this.country,content:this.content};this.$emit("filter",t)}}}),_t=yt,kt=Object(p["a"])(_t,vt,wt,!1,null,null,null),Ct=kt.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-input-group",{staticClass:"my-4"},[n("b-form-input",{staticClass:"rounded-left",attrs:{placeholder:"Search by Title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("b-input-group-append",[n("b-button",{staticClass:"rounded-right",attrs:{variant:"outline-success"},on:{click:function(e){return t.filter("title",t.title)}}},[t._v("Search")])],1)],1),t._l(t.hotItems,(function(e,i,s){return n("b-card",{key:s,staticClass:"my-4",attrs:{"no-body":"",header:i}},[n("b-list-group",{attrs:{flush:""}},t._l(e,(function(e,s){return n("b-list-group-item",{key:s,attrs:{button:""},on:{click:function(n){return t.filter(i,e)}}},[t._v(t._s(e))])})),1)],1)}))],2)},Pt=[],Ot={data:function(){return{title:"",hotItems:{content:[],country:[],city:[]}}},created:function(){this.getHotItems()},methods:{getHotItems:function(){var t=this,e=function(e){et.a.get("../api/GetHotItems.php",{params:{item:e}}).then((function(n){t.hotItems[e]=n.data}))["catch"]((function(t){return console.log(t)}))};for(var n in this.hotItems)e(n)},filter:function(t,e){var n={};n[t]=e,this.$emit("filter",n)}}},$t=Ot,Lt=Object(p["a"])($t,xt,Pt,!1,null,null,null),Et=Lt.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.rows?n("b-list-group-item",[Boolean(t.result)?[n("b-row",[t._l(t.perPage,(function(e){return[t.firstRow+e<=t.rows?n("b-col",{key:e,staticClass:"py-3",attrs:{sm:"12",md:"12",lg:"4"}},[n("b-link",{attrs:{to:"/detail/"+t.result[t.firstRow+e-1].id}},[n("b-img",{attrs:{src:t.result[t.firstRow+e-1].squareMediumPath,"fluid-grow":""}})],1)],1):t._e()]}))],2),t.rows>t.perPage?n("b-pagination",{staticClass:"mt-3",attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-number":"","last-number":"","prev-text":"<","next-text":">","ellipsis-text":"...",align:"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()]:[t._v("No Image Found")]],2):t._e()},It=[],jt={data:function(){return{perPage:12,currentPage:1}},props:{result:Array},computed:{rows:function(){return this.result?this.result.length:1},firstRow:function(){return(this.currentPage-1)*this.perPage}}},Ft=jt,Rt=Object(p["a"])(Ft,St,It,!1,null,null,null),Ut=Rt.exports,Vt={data:function(){return{result:[]}},created:function(){},watch:{},methods:{getFilterResult:function(t){var e=this;et.a.get("../api/SearchImage.php",{params:t}).then((function(t){e.result=t.data}))["catch"]((function(t){return console.log(t)}))}},components:{"item-filter":Ct,"item-sidebar":Et,"filter-result":Ut}},qt=Vt,Gt=Object(p["a"])(qt,bt,gt,!1,null,null,null),Mt=Gt.exports,Ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-5"},[n("div",{staticClass:"container"},[n("b-card",{staticClass:"my-4",attrs:{"no-body":"",header:"Search"}},[n("b-list-group",{attrs:{flush:""}},[n("b-list-group-item",[n("div",{staticClass:"container"},[n("b-input-group",{staticClass:"mb-2",attrs:{prepend:"Title"}},[n("b-form-input",{attrs:{placeholder:"Search by Title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.search("title",t.title)}}},[t._v("Search")])],1)],1),n("b-input-group",{staticClass:"mb-2",attrs:{prepend:"Description"}},[n("b-form-textarea",{attrs:{placeholder:"Search by Description","no-resize":""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.search("description",t.description)}}},[t._v("Search")])],1)],1)],1)])],1)],1),n("search-result",{attrs:{result:t.result}})],1)])},At=[],Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.rows?n("b-card",{staticClass:"my-4",attrs:{"no-body":Boolean(t.result),header:"Result"}},[t.result?n("b-list-group",{attrs:{flush:""}},[t._l(t.perPage,(function(e){return[t.firstRows+e<=t.rows?n("b-row",{key:e,staticClass:"py-2 px-3 border-bottom",attrs:{"no-gutters":""}},[n("b-col",{attrs:{md:"4"}},[n("b-link",{attrs:{to:"/detail/"+t.result[t.firstRows+e-1].id}},[n("b-card-img",{staticClass:"rounded-0",attrs:{src:t.result[t.firstRows+e-1].squareMediumPath,alt:"Image"}})],1)],1),n("b-col",{attrs:{md:"8"}},[n("b-card-body",{attrs:{title:t.result[t.firstRows+e-1].title}},[n("b-card-text",[t._v(t._s(t.result[t.firstRows+e-1].description))])],1)],1)],1):t._e()]})),t.rows>t.perPage?n("b-pagination",{staticClass:"mt-3",attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-number":"","last-number":"","prev-text":"<","next-text":">","ellipsis-text":"...",align:"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],2):n("b-card-title",[t._v("No Image Found")])],1):t._e()},Tt=[],zt={data:function(){return{currentPage:1,perPage:3,firstRows:0}},props:{result:Array},computed:{rows:function(){return this.result?this.result.length:1}},watch:{currentPage:function(){this.firstRows=(this.currentPage-1)*this.perPage}}},Dt=zt,Nt=Object(p["a"])(Dt,Bt,Tt,!1,null,null,null),Jt=Nt.exports,Wt={data:function(){return{title:null,description:null,result:[]}},components:{"search-result":Jt},methods:{search:function(t,e){var n=this,i={};i[t]=e,et.a.get("../api/SearchImage.php",{params:i}).then((function(t){n.result=t.data}))["catch"]((function(t){return console.log(t)}))}}},Zt=Wt,Kt=Object(p["a"])(Zt,Ht,At,!1,null,null,null),Yt=Kt.exports,Qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-5"},[n("div",{staticClass:"container"},[n("b-card",{staticClass:"my-4",attrs:{"no-body":"",header:"Upload"}},[n("b-list-group",{attrs:{flush:""}},[n("b-list-group-item",[n("div",{staticClass:"container"},[n("b-form-file",{attrs:{state:Boolean(t.file),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),n("b-form",{attrs:{inline:""}},[n("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"Title"}},[n("b-input",{attrs:{placeholder:""}})],1),n("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"Country"}},[n("b-form-input",{attrs:{list:"input-list"}}),n("b-form-datalist",{attrs:{id:"input-list",options:t.options}})],1),n("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"City"}},[n("b-form-input",{attrs:{list:"input-list"}}),n("b-form-datalist",{attrs:{id:"input-list",options:t.options}})],1)],1)],1)])],1)],1)],1)])},Xt=[],te={data:function(){return{file:null,options:["Apple","Banana","Grape","Kiwi","Orange"]}}},ee=te,ne=Object(p["a"])(ee,Qt,Xt,!1,null,null,null),ie=ne.exports,se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-5"},[n("div",{staticClass:"container"},[n("b-card",{staticClass:"mb-2",attrs:{title:t.image.title,"sub-title":(t.image.city?t.image.city+" ":"")+t.image.country,"img-src":t.image.largePath,"img-top":""}},[n("b-card-text",[t._v(t._s(t.image.description))]),n("b-button",{class:{active:t.isFavor(t.image.id)},attrs:{variant:"outline-success"},on:{click:function(e){t.isFavor(t.image.id)?t.unlike(t.image.id):t.like(t.image.id)}}},[t._v(t._s(t.image.favorCount)+" Like")])],1)],1)])},re=[],ae={data:function(){return{image:{}}},computed:{favorList:function(){return this.$store.getters.getFavorList}},created:function(){this.getImage()},methods:{getImage:function(){var t=this;et.a.get("../api/GetImage.php",{params:{id:this.$route.params.id}}).then((function(e){t.image=e.data}))["catch"]((function(t){console.log(t)}))},isFavor:function(t){return this.favorList.includes(t+"")},like:function(t){this.$store.getters.isLogin?this.$store.dispatch("like",{imageid:t}).then(this.getImage)["catch"]((function(t){return console.log(t)})):this.$router.push({name:"login"})},unlike:function(t){this.$store.dispatch("unlike",{imageid:t}).then(this.getImage)["catch"]((function(t){return console.log(t)}))}}},oe=ae,le=Object(p["a"])(oe,se,re,!1,null,null,null),ce=le.exports,ue=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[n("div",{staticClass:"login-form"},[n("b-form",{on:{submit:t.login}},[n("b-form-group",{attrs:{label:"Email:","label-for":"input-1"}},[n("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),n("b-form-group",{attrs:{label:"Password:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",type:"password",required:"",placeholder:"Enter password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),n("b-form-checkbox",{model:{value:t.form.remember,callback:function(e){t.$set(t.form,"remember",e)},expression:"form.remember"}},[t._v("Remember Me")]),n("b-button",{attrs:{block:"",variant:"outline-success",type:"submit"}},[t._v("Login")])],1),n("b-link",{attrs:{to:{name:"signup"}}},[t._v("Sign up")])],1)])},pe=[],me={data:function(){return{form:{email:"",password:"",remember:!1}}},methods:{login:function(){var t=this;this.$store.dispatch("login",this.form).then((function(){t.$router.push("/")}))["catch"]((function(t){console.log(t)}))}}},de=me,fe=(n("f0ac"),Object(p["a"])(de,ue,pe,!1,null,"1c112432",null)),he=fe.exports,be=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[n("div",{staticClass:"login-form"},[n("div",{staticClass:"text-center mb-4"},[n("p",[t._v("Sign up for")]),n("b-link",{attrs:{to:{name:"home"}}},[n("h3",[t._v("Hello,World!")])])],1),n("b-form",{on:{submit:t.signup}},[n("b-form-group",{attrs:{label:"Email:","label-for":"input-1"}},[n("b-form-input",{attrs:{id:"input-1",type:"email",required:"",state:t.isValidEmail,placeholder:"Enter email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("b-form-group",{attrs:{label:"Username:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",type:"text",required:"",state:t.isValidUsername,placeholder:"Enter username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("b-form-text",[t._v("Username only consist of numbers, letters, underscores(_) and dashes(-). Make sure it's at least 5 characters.")])],1),n("b-form-group",{attrs:{label:"Password:","label-for":"input-3"}},[n("b-form-input",{attrs:{id:"input-3",type:"password",required:"",state:t.isValidPassword,placeholder:"Enter password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("b-form-text",[t._v("Make sure it's at least 15 characters.")])],1),n("b-form-group",{attrs:{label:"Password Again:","label-for":"input-4"}},[n("b-form-input",{attrs:{id:"input-4",type:"password",required:"",state:t.isValidPasswordCheck,placeholder:"Repeat password"},model:{value:t.passwordCheck,callback:function(e){t.passwordCheck=e},expression:"passwordCheck"}})],1),n("b-button",{attrs:{block:"",variant:"outline-success",type:"submit"}},[t._v("Sign up")])],1)],1)])},ge=[],ve={data:function(){return{email:"",isValidEmail:null,username:"",isValidUsername:null,password:"",isValidPassword:null,passwordCheck:"",isValidPasswordCheck:null}},watch:{email:function(){this.checkEmail()},username:function(){this.checkUsername()},password:function(){this.checkPassword()},passwordCheck:function(){this.checkPasswordCheck()}},methods:{signup:function(){var t=this;this.isValidEmail&&this.isValidUsername&&this.isValidPassword&&this.isValidPasswordCheck&&this.$store.dispatch("signup",{email:this.email,username:this.username,password:this.password}).then((function(){t.$router.push({name:"home"})}))["catch"]((function(t){console.log(t)}))},checkEmail:function(){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;this.isValidEmail=t.test(this.email)},checkUsername:function(){var t=/^[a-z][a-z0-9-_]{5,17}$/i;this.isValidUsername=t.test(this.username)},checkPassword:function(){var t=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]{8,32}$/i;this.isValidPassword=t.test(this.password)},checkPasswordCheck:function(){this.isValidPasswordCheck=this.password==this.passwordCheck}}},we=ve,ye=(n("1972"),Object(p["a"])(we,be,ge,!1,null,"5300d8e8",null)),_e=ye.exports,ke=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-5"},[n("div",{staticClass:"container"},[t.rows?n("b-card",{staticClass:"my-4",attrs:{"no-body":Boolean(t.imageList),header:"My Favor"}},[t.imageList?n("b-list-group",{attrs:{flush:""}},[t._l(t.perPage,(function(e){return[t.firstRows+e<=t.rows?n("b-row",{key:e,staticClass:"py-2 px-3 border-bottom",attrs:{"no-gutters":""}},[n("b-col",{attrs:{md:"4"}},[n("b-link",{attrs:{to:{name:"detail",params:{id:t.imageList[t.firstRows+e-1].id}}}},[n("b-card-img",{staticClass:"rounded-0",attrs:{src:t.imageList[t.firstRows+e-1].squareMediumPath,alt:"Image"}})],1)],1),n("b-col",{attrs:{md:"8"}},[n("b-card-body",{attrs:{title:t.imageList[t.firstRows+e-1].title}},[n("b-card-text",[t._v(t._s(t.imageList[t.firstRows+e-1].description))])],1),n("b-button",{class:t.active,attrs:{variant:"outline-success"},on:{click:function(e){return t.unlike(t.image.id)}}},[t._v(t._s(t.image.favorCount)+" Like")])],1)],1):t._e()]})),t.rows>t.perPage?n("b-pagination",{staticClass:"mt-3",attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-number":"","last-number":"","prev-text":"<","next-text":">","ellipsis-text":"...",align:"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],2):n("b-card-title",[t._v("You have no favor image yet. Go find some!")])],1):t._e()],1)])},Ce=[],xe={data:function(){return{currentPage:1,perPage:3,imageList:[]}},computed:{idList:function(){return this.$store.getters.getFavorList},firstRows:function(){return(this.currentPage-1)*this.perPage},rows:function(){return this.imageList.length}},created:function(){this.$store.getters.isLogin?this.getImage():this.$router.push({name:"login"})},methods:{getImage:function(){var t=this;return new Promise((function(e,n){et.a.get("../api/GetImage.php",{params:{list:t.idList}}).then((function(n){t.imageList=n.data,e()}))["catch"]((function(t){return n(t)}))}))},unlike:function(t){this.$store.dispatch("unlike",{imageid:t}).then(this.getImage)["catch"]((function(t){return console.log(t)}))}}},Pe=xe,Oe=Object(p["a"])(Pe,ke,Ce,!1,null,null,null),$e=Oe.exports,Le=n("1187"),Ee=n("2f62");i["default"].use(Ee["a"]);var Se=new Ee["a"].Store({state:{login:!1,id:"",email:"",name:"",favor:[],image:[]},getters:{isLogin:function(t){return t.login},getUID:function(t,e){return e.isLogin?t.id:null},getUsername:function(t,e){return e.isLogin?t.name:null},getFavorList:function(t){return t.favor?t.favor:[]}},mutations:{setUserinfo:function(t,e){for(var n in t)e.hasOwnProperty(n)&&(t[n]=e[n]);e["token"]&&(sessionStorage.setItem("token",e["token"]),sessionStorage.setItem("id",e["id"])),t.login=!0},clearUserinfo:function(t){for(var e in t)t[e]=null;sessionStorage.clear(),t.login=!1}},actions:{request:function(t,e){var n=this,i=Object(Le["a"])(e,2),s=i[0],r=i[1];return new Promise((function(t,e){et.a.post(s,r).then((function(i){var s=i.data;s["actionState"]?(n.commit("setUserinfo",s),t()):e(s["error"])}))["catch"]((function(t){return e(t)}))}))},login:function(t,e){var n=e.email,i=e.password,s=e.remember,r=e.token,a=e.id;return this.dispatch("request",["./api/Login.php",{email:n,password:i,remember:s,token:r,id:a}])},logout:function(t){t.commit("clearUserinfo")},signup:function(t,e){var n=e.email,i=e.username,s=e.password;return this.dispatch("request",["../api/Signup.php",{email:n,username:i,password:s}])},like:function(t,e){var n=e.imageid;return this.dispatch("request",["../api/Like.php",{id:t.state.id,imageid:n}])},unlike:function(t,e){var n=e.imageid;return this.dispatch("request",["../api/Unlike.php",{id:t.state.id,imageid:n}])},upload:function(){},delete:function(){},modify:function(){}}});i["default"].use(s["a"]),i["default"].use(r["a"]),i["default"].use(a["a"]);var Ie=new a["a"]({routes:[{path:"",component:d,children:[{path:"",component:T,children:[{name:"home",path:"",component:ht},{name:"browser",path:"browser",component:Mt},{name:"search",path:"search",component:Yt},{name:"upload",path:"upload",component:ie},{name:"detail",path:"detail/:id",component:ce},{name:"favor",path:"favor",component:$e}]},{name:"login",path:"login",component:he},{name:"signup",path:"signup",component:_e}]}]});new i["default"]({render:function(t){return t(d)},store:Se,router:Ie}).$mount("#app")},"25ab":function(t,e,n){},5572:function(t,e,n){"use strict";var i=n("25ab"),s=n.n(i);s.a},"5b92":function(t,e,n){},"5e68":function(t,e,n){},a5b8:function(t,e,n){},b906:function(t,e,n){"use strict";var i=n("5b92"),s=n.n(i);s.a},be3e:function(t,e,n){},d2a0:function(t,e,n){"use strict";var i=n("a5b8"),s=n.n(i);s.a},f0ac:function(t,e,n){"use strict";var i=n("5e68"),s=n.n(i);s.a},f2ae:function(t,e,n){"use strict";var i=n("15b6"),s=n.n(i);s.a}});
//# sourceMappingURL=app.71bf13e2.js.map