(function(t){function e(e){for(var n,a,o=e[0],l=e[1],c=e[2],p=0,m=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&m.push(s[a][0]),s[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={app:0},r=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("1d50")},"15b6":function(t,e,i){},1972:function(t,e,i){"use strict";var n=i("be3e"),s=i.n(n);s.a},"1d50":function(t,e,i){"use strict";i.r(e);i("789a"),i("d38f"),i("93e1"),i("8188");var n=i("2b0e"),s=i("5f5b"),r=i("b1e0"),a=i("8c4f"),o=(i("f9e3"),i("2dd8"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-view")}),l=[],c={created:function(){sessionStorage.getItem("token")&&sessionStorage.getItem("id")&&this.$store.dispatch("login",{token:sessionStorage.getItem("token"),id:sessionStorage.getItem("id")})}},u=c,p=i("f08f"),m=Object(p["a"])(u,o,l,!1,null,"478d0b50",null),d=m.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p-header"),i("router-view",{staticClass:"main"}),i("p-footer")],1)},h=[],b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[i("b-navbar-brand",{attrs:{href:"#"}},[t._v("Hello,World!")]),i("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),i("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[i("items"),i("user")],1)],1)],1)},g=[],v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-navbar-nav",t._l(t.items,(function(e,n){return i("b-nav-item",{key:n,attrs:{to:e.href,active:t.isActive(e)}},[t._v(t._s(e.name))])})),1)},w=[],y=(i("9c36"),{data:function(){return{items:[{name:"Home",href:"/"},{name:"Browser",href:"/browser"},{name:"Search",href:"/search"}]}},methods:{isActive:function(t){var e=this.$route.name.toLowerCase(),i=t.name.toLowerCase();return e==i}}}),_=y,k=Object(p["a"])(_,v,w,!1,null,null,null),C=k.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-navbar-nav",{staticClass:"ml-auto"},[this.$store.getters.isLogin?i("b-nav-item-dropdown",{attrs:{text:this.$store.getters.getUsername,right:""}},[i("b-dropdown-item",{attrs:{to:{name:"upload"}}},[t._v("Upload")]),i("b-dropdown-item",{attrs:{href:"#"}},[t._v("Image")]),i("b-dropdown-item",{attrs:{to:{name:"favor"}}},[t._v("Favor")]),i("b-dropdown-item",{on:{click:t.logout}},[t._v("Log out")])],1):i("b-button",{attrs:{variant:"outline-primary",to:{name:"login"}}},[t._v("Login")])],1)},P=[],O={methods:{logout:function(){this.$store.dispatch("logout")}}},$=O,L=Object(p["a"])($,x,P,!1,null,null,null),E=L.exports,S={data:function(){return{current:"Home"}},components:{items:C,user:E}},I=S,j=Object(p["a"])(I,b,g,!1,null,null,null),R=j.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"blog-footer"},[i("p",[t._v(" This website is a lesson project by "),i("a",{attrs:{href:"https://github.com/alct2017"}},[t._v("@alct2017")])])])}],V={},q=V,G=(i("f2ae"),Object(p["a"])(q,F,U,!1,null,"b803ccc6",null)),M=G.exports,H={components:{"p-header":R,"p-footer":M}},A=H,B=(i("d2a0"),Object(p["a"])(A,f,h,!1,null,"2089fbe4",null)),z=B.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("carousel"),i("cardgroup"),i("sidebutton")],1)},D=[],N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[i("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/1024/480/?image=52"}}),i("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=54"}},[i("h1",[t._v("Hello world!")])]),i("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=58"}}),i("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[i("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"480",src:"https://picsum.photos/1024/480/?image=55",alt:"image slot"}})]},proxy:!0}])}),i("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}},[i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum. ")])])],1)],1)},J=[],W={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},Z=W,K=Object(p["a"])(Z,N,J,!1,null,null,null),Y=K.exports,Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"py-5"},[i("div",{staticClass:"container"},[i("b-card-group",{attrs:{columns:""}},t._l(t.imageList,(function(e,n){return i("b-card",{key:n,staticClass:"mb-4 shadow-sm",attrs:{title:e.title,"img-src":e.largePath,"img-top":"",tag:"article","align-self":"stretch"}},[i("b-card-text",{staticClass:"brief"},[t._v(t._s(e.description))]),i("b-button-group",[i("b-button",{attrs:{variant:"outline-primary",to:{name:"detail",params:{id:e.id}}}},[t._v("View")]),i("b-button",{class:{active:t.isFavor(e.id)},attrs:{variant:"outline-success"},on:{click:function(i){t.isFavor(e.id)?t.unlike(e.id):t.like(e.id)}}},[t._v(t._s(e.favorCount)+" Like")])],1)],1)})),1)],1)])},X=[],tt=(i("f0ce"),i("2f5c"),i("b8eb"),i("bc3a")),et=i.n(tt),it={data:function(){return{idList:[],imageList:[]}},computed:{favorList:function(){return this.$store.getters.getFavorList}},created:function(){this.getList().then(this.getImage)["catch"]((function(t){return console.log(t)}))},methods:{getList:function(){var t=this;return new Promise((function(e,i){et.a.get("../api/GetHomeList.php").then((function(i){t.idList=i.data,e()}))["catch"]((function(t){return i(t)}))}))},getImage:function(){var t=this;return new Promise((function(e,i){et.a.get("../api/GetImage.php",{params:{list:t.idList}}).then((function(i){t.imageList=i.data,e()}))["catch"]((function(t){return i(t)}))}))},isFavor:function(t){return this.favorList.includes(t+"")},like:function(t){this.$store.getters.isLogin?this.$store.dispatch("like",{imageid:t}).then(this.getImage)["catch"]((function(t){return console.log(t)})):this.$router.push({name:"login"})},unlike:function(t){this.$store.dispatch("unlike",{imageid:t}).then(this.getImage)["catch"]((function(t){return console.log(t)}))}}},nt=it,st=(i("5572"),Object(p["a"])(nt,Q,X,!1,null,null,null)),rt=st.exports,at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"side-button-group"}},[i("b-button-group",{attrs:{vertical:""}},[i("b-button",{attrs:{variant:"outline-secondary"}},[i("b-icon",{attrs:{icon:"arrow-clockwise","aria-hidden":"true"}})],1),i("b-button",{attrs:{variant:"outline-secondary"}},[i("b-icon",{attrs:{icon:"chevron-bar-up","aria-hidden":"true"}})],1)],1)],1)},ot=[],lt={},ct=lt,ut=(i("b906"),Object(p["a"])(ct,at,ot,!1,null,null,null)),pt=ut.exports,mt={components:{carousel:Y,cardgroup:rt,sidebutton:pt}},dt=mt,ft=Object(p["a"])(dt,T,D,!1,null,null,null),ht=ft.exports,bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"py-5"},[i("div",{staticClass:"container"},[i("b-row",[i("b-col",{attrs:{md:"3"}},[i("item-sidebar",{on:{filter:t.getFilterResult}})],1),i("b-col",{attrs:{md:"9"}},[i("b-card",{staticClass:"my-4",attrs:{"no-body":"",header:"Filter"}},[i("b-list-group",{attrs:{flush:""}},[i("item-filter",{on:{filter:t.getFilterResult}}),i("filter-result",{attrs:{result:t.result}})],1)],1)],1)],1)],1)])},gt=[],vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-list-group-item",[i("b-form",{staticClass:"m-0"},[i("b-row",[i("b-col",{attrs:{col:"3","col-md":"6","col-sm":"12"}},[i("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{options:t.contentOptions},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),i("b-col",{attrs:{col:"3","col-md":"6","col-sm":"12"}},[i("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{options:t.countryOptions},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1),i("b-col",{attrs:{col:"3","col-md":"6","col-sm":"12"}},[i("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{options:t.cityOptions},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),i("b-col",{attrs:{col:"3","col-md":"6","col-sm":"12"}},[i("b-button",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{variant:"outline-success"},on:{click:t.filter}},[t._v("Filter")])],1)],1)],1)],1)},wt=[],yt=(i("0f41"),i("006e"),{data:function(){return{contentOptions:[],countryOptions:[],cityOptions:[],city:null,country:null,content:null}},watch:{country:function(){var t=this;this.city=null,this.cityOptions=[{value:null,text:"Filter by City"}],et.a.get("../api/GetCityOptions.php",{params:{country:this.country}}).then((function(e){e.data.forEach((function(e){t.cityOptions.push({value:e,text:e})}))}))["catch"]((function(t){return console.log(t)}))}},created:function(){this.initContentOptions(),this.initCountryOptions(),this.initCityOptions()},methods:{initContentOptions:function(){var t=this;this.contentOptions=[{value:null,text:"Filter by Content"}],et.a.get("../api/GetContentOptions.php").then((function(e){e.data.forEach((function(e){t.contentOptions.push({value:e,text:e})}))}))["catch"]((function(t){console.log(t)}))},initCountryOptions:function(){var t=this;this.countryOptions=[{value:null,text:"Filter by Country"}],et.a.get("../api/GetCountryOptions.php").then((function(e){e.data.forEach((function(e){t.countryOptions.push({value:e,text:e})}))}))["catch"]((function(t){console.log(t)}))},initCityOptions:function(){var t=this;this.cityOptions=[{value:null,text:"Filter by City"}],et.a.get("../api/GetCityOptions.php").then((function(e){e.data.forEach((function(e){t.cityOptions.push({value:e,text:e})}))}))["catch"]((function(t){return console.log(t)}))},filter:function(){var t={city:this.city,country:this.country,content:this.content};this.$emit("filter",t)}}}),_t=yt,kt=Object(p["a"])(_t,vt,wt,!1,null,null,null),Ct=kt.exports,xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-input-group",{staticClass:"my-4"},[i("b-form-input",{staticClass:"rounded-left",attrs:{placeholder:"Search by Title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),i("b-input-group-append",[i("b-button",{staticClass:"rounded-right",attrs:{variant:"outline-success"},on:{click:function(e){return t.filter("title",t.title)}}},[t._v("Search")])],1)],1),t._l(t.hotItems,(function(e,n,s){return i("b-card",{key:s,staticClass:"my-4",attrs:{"no-body":"",header:n}},[i("b-list-group",{attrs:{flush:""}},t._l(e,(function(e,s){return i("b-list-group-item",{key:s,attrs:{button:""},on:{click:function(i){return t.filter(n,e)}}},[t._v(t._s(e))])})),1)],1)}))],2)},Pt=[],Ot={data:function(){return{title:"",hotItems:{content:[],country:[],city:[]}}},created:function(){this.getHotItems()},methods:{getHotItems:function(){var t=this,e=function(e){et.a.get("../api/GetHotItems.php",{params:{item:e}}).then((function(i){t.hotItems[e]=i.data}))["catch"]((function(t){return console.log(t)}))};for(var i in this.hotItems)e(i)},filter:function(t,e){var i={};i[t]=e,this.$emit("filter",i)}}},$t=Ot,Lt=Object(p["a"])($t,xt,Pt,!1,null,null,null),Et=Lt.exports,St=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.rows?i("b-list-group-item",[Boolean(t.result)?[i("b-row",[t._l(t.perPage,(function(e){return[t.firstRow+e<=t.rows?i("b-col",{key:e,staticClass:"py-3",attrs:{sm:"12",md:"12",lg:"4"}},[i("b-link",{attrs:{to:"/detail/"+t.result[t.firstRow+e-1].id}},[i("b-img",{attrs:{src:t.result[t.firstRow+e-1].squareMediumPath,"fluid-grow":""}})],1)],1):t._e()]}))],2),t.rows>t.perPage?i("b-pagination",{staticClass:"mt-3",attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-number":"","last-number":"","prev-text":"<","next-text":">","ellipsis-text":"...",align:"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()]:[t._v("No Image Found")]],2):t._e()},It=[],jt={data:function(){return{perPage:12,currentPage:1}},props:{result:Array},computed:{rows:function(){return this.result?this.result.length:1},firstRow:function(){return(this.currentPage-1)*this.perPage}}},Rt=jt,Ft=Object(p["a"])(Rt,St,It,!1,null,null,null),Ut=Ft.exports,Vt={data:function(){return{result:[]}},created:function(){},watch:{},methods:{getFilterResult:function(t){var e=this;et.a.get("../api/SearchImage.php",{params:t}).then((function(t){e.result=t.data}))["catch"]((function(t){return console.log(t)}))}},components:{"item-filter":Ct,"item-sidebar":Et,"filter-result":Ut}},qt=Vt,Gt=Object(p["a"])(qt,bt,gt,!1,null,null,null),Mt=Gt.exports,Ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"py-5"},[i("div",{staticClass:"container"},[i("b-card",{staticClass:"my-4",attrs:{"no-body":"",header:"Search"}},[i("b-list-group",{attrs:{flush:""}},[i("b-list-group-item",[i("div",{staticClass:"container"},[i("b-input-group",{staticClass:"mb-2",attrs:{prepend:"Title"}},[i("b-form-input",{attrs:{placeholder:"Search by Title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),i("b-input-group-append",[i("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.search("title",t.title)}}},[t._v("Search")])],1)],1),i("b-input-group",{staticClass:"mb-2",attrs:{prepend:"Description"}},[i("b-form-textarea",{attrs:{placeholder:"Search by Description","no-resize":""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),i("b-input-group-append",[i("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.search("description",t.description)}}},[t._v("Search")])],1)],1)],1)])],1)],1),i("search-result",{attrs:{result:t.result}})],1)])},At=[],Bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.rows?i("b-card",{staticClass:"my-4",attrs:{"no-body":Boolean(t.result),header:"Result"}},[t.result?i("b-list-group",{attrs:{flush:""}},[t._l(t.perPage,(function(e){return[t.firstRows+e<=t.rows?i("b-row",{key:e,staticClass:"py-2 px-3 border-bottom",attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"4"}},[i("b-link",{attrs:{to:"/detail/"+t.result[t.firstRows+e-1].id}},[i("b-card-img",{staticClass:"rounded-0",attrs:{src:t.result[t.firstRows+e-1].squareMediumPath,alt:"Image"}})],1)],1),i("b-col",{attrs:{md:"8"}},[i("b-card-body",{attrs:{title:t.result[t.firstRows+e-1].title}},[i("b-card-text",[t._v(t._s(t.result[t.firstRows+e-1].description))])],1)],1)],1):t._e()]})),t.rows>t.perPage?i("b-pagination",{staticClass:"mt-3",attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-number":"","last-number":"","prev-text":"<","next-text":">","ellipsis-text":"...",align:"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],2):i("b-card-title",[t._v("No Image Found")])],1):t._e()},zt=[],Tt={data:function(){return{currentPage:1,perPage:3,firstRows:0}},props:{result:Array},computed:{rows:function(){return this.result?this.result.length:1}},watch:{currentPage:function(){this.firstRows=(this.currentPage-1)*this.perPage}}},Dt=Tt,Nt=Object(p["a"])(Dt,Bt,zt,!1,null,null,null),Jt=Nt.exports,Wt={data:function(){return{title:null,description:null,result:[]}},components:{"search-result":Jt},methods:{search:function(t,e){var i=this,n={};n[t]=e,et.a.get("../api/SearchImage.php",{params:n}).then((function(t){i.result=t.data}))["catch"]((function(t){return console.log(t)}))}}},Zt=Wt,Kt=Object(p["a"])(Zt,Ht,At,!1,null,null,null),Yt=Kt.exports,Qt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"py-5"},[i("div",{staticClass:"container"},[i("b-card",{staticClass:"my-4",attrs:{"no-body":"",header:"Upload"}},[i("b-list-group",{attrs:{flush:""}},[i("b-list-group-item",[i("div",{staticClass:"container"},[i("b-form",[i("b-form-file",{staticClass:"mb-2",attrs:{state:Boolean(t.file),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),i("b-row",[i("b-col",{staticClass:"mb-2",attrs:{lg:"3",md:"6",sm:"12"}},[i("b-input-group",{attrs:{prepend:"Title"}},[i("b-input",{attrs:{placeholder:""}})],1)],1),i("b-col",{staticClass:"mb-2",attrs:{lg:"3",md:"6",sm:"12"}},[i("b-input-group",{attrs:{prepend:"Country"}},[i("b-form-input",{attrs:{list:"input-list"}}),i("b-form-datalist",{attrs:{id:"input-list",options:t.options}})],1)],1),i("b-col",{staticClass:"mb-2",attrs:{lg:"3",md:"6",sm:"12"}},[i("b-input-group",{attrs:{prepend:"City"}},[i("b-form-input",{attrs:{list:"input-list"}}),i("b-form-datalist",{attrs:{id:"input-list",options:t.options}})],1)],1),i("b-col",{staticClass:"mb-2",attrs:{lg:"3",md:"6",sm:"12"}},[i("b-input-group",{attrs:{prepend:"Content"}},[i("b-form-input",{attrs:{list:"input-list"}}),i("b-form-datalist",{attrs:{id:"input-list",options:t.options}})],1)],1)],1),i("b-input-group",{staticClass:"mb-2",attrs:{prepend:"Description"}},[i("b-form-textarea",{attrs:{placeholder:"Search by Description","no-resize":""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1)],1)])],1)],1)],1)])},Xt=[],te={data:function(){return{file:null,options:["Apple","Banana","Grape","Kiwi","Orange"]}}},ee=te,ie=Object(p["a"])(ee,Qt,Xt,!1,null,null,null),ne=ie.exports,se=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"py-5"},[i("div",{staticClass:"container"},[i("b-card",{staticClass:"mb-2",attrs:{title:t.image.title,"sub-title":(t.image.city?t.image.city+" ":"")+t.image.country,"img-src":t.image.largePath,"img-top":""}},[i("b-card-text",[t._v(t._s(t.image.description))]),i("b-button",{class:{active:t.isFavor(t.image.id)},attrs:{variant:"outline-success"},on:{click:function(e){t.isFavor(t.image.id)?t.unlike(t.image.id):t.like(t.image.id)}}},[t._v(t._s(t.image.favorCount)+" Like")])],1)],1)])},re=[],ae={data:function(){return{image:{}}},computed:{favorList:function(){return this.$store.getters.getFavorList}},created:function(){this.getImage()},methods:{getImage:function(){var t=this;et.a.get("../api/GetImage.php",{params:{id:this.$route.params.id}}).then((function(e){t.image=e.data}))["catch"]((function(t){console.log(t)}))},isFavor:function(t){return this.favorList.includes(t+"")},like:function(t){this.$store.getters.isLogin?this.$store.dispatch("like",{imageid:t}).then(this.getImage)["catch"]((function(t){return console.log(t)})):this.$router.push({name:"login"})},unlike:function(t){this.$store.dispatch("unlike",{imageid:t}).then(this.getImage)["catch"]((function(t){return console.log(t)}))}}},oe=ae,le=Object(p["a"])(oe,se,re,!1,null,null,null),ce=le.exports,ue=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body"},[i("div",{staticClass:"login-form"},[i("b-form",{on:{submit:t.login}},[i("b-form-group",{attrs:{label:"Email:","label-for":"input-1"}},[i("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),i("b-form-group",{attrs:{label:"Password:","label-for":"input-2"}},[i("b-form-input",{attrs:{id:"input-2",type:"password",required:"",placeholder:"Enter password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),i("b-form-checkbox",{model:{value:t.form.remember,callback:function(e){t.$set(t.form,"remember",e)},expression:"form.remember"}},[t._v("Remember Me")]),i("b-button",{attrs:{block:"",variant:"outline-success",type:"submit"}},[t._v("Login")])],1),i("b-link",{attrs:{to:{name:"signup"}}},[t._v("Sign up")])],1)])},pe=[],me={data:function(){return{form:{email:"",password:"",remember:!1}}},methods:{login:function(){var t=this;this.$store.dispatch("login",this.form).then((function(){t.$router.push("/")}))["catch"]((function(t){console.log(t)}))}}},de=me,fe=(i("f0ac"),Object(p["a"])(de,ue,pe,!1,null,"1c112432",null)),he=fe.exports,be=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body"},[i("div",{staticClass:"login-form"},[i("div",{staticClass:"text-center mb-4"},[i("p",[t._v("Sign up for")]),i("b-link",{attrs:{to:{name:"home"}}},[i("h3",[t._v("Hello,World!")])])],1),i("b-form",{on:{submit:t.signup}},[i("b-form-group",{attrs:{label:"Email:","label-for":"input-1"}},[i("b-form-input",{attrs:{id:"input-1",type:"email",required:"",state:t.isValidEmail,placeholder:"Enter email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),i("b-form-group",{attrs:{label:"Username:","label-for":"input-2"}},[i("b-form-input",{attrs:{id:"input-2",type:"text",required:"",state:t.isValidUsername,placeholder:"Enter username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),i("b-form-text",[t._v("Username only consist of numbers, letters, underscores(_) and dashes(-). Make sure it's at least 5 characters.")])],1),i("b-form-group",{attrs:{label:"Password:","label-for":"input-3"}},[i("b-form-input",{attrs:{id:"input-3",type:"password",required:"",state:t.isValidPassword,placeholder:"Enter password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),i("b-form-text",[t._v("Make sure it's at least 15 characters.")])],1),i("b-form-group",{attrs:{label:"Password Again:","label-for":"input-4"}},[i("b-form-input",{attrs:{id:"input-4",type:"password",required:"",state:t.isValidPasswordCheck,placeholder:"Repeat password"},model:{value:t.passwordCheck,callback:function(e){t.passwordCheck=e},expression:"passwordCheck"}})],1),i("b-button",{attrs:{block:"",variant:"outline-success",type:"submit"}},[t._v("Sign up")])],1)],1)])},ge=[],ve={data:function(){return{email:"",isValidEmail:null,username:"",isValidUsername:null,password:"",isValidPassword:null,passwordCheck:"",isValidPasswordCheck:null}},watch:{email:function(){this.checkEmail()},username:function(){this.checkUsername()},password:function(){this.checkPassword()},passwordCheck:function(){this.checkPasswordCheck()}},methods:{signup:function(){var t=this;this.isValidEmail&&this.isValidUsername&&this.isValidPassword&&this.isValidPasswordCheck&&this.$store.dispatch("signup",{email:this.email,username:this.username,password:this.password}).then((function(){t.$router.push({name:"home"})}))["catch"]((function(t){console.log(t)}))},checkEmail:function(){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;this.isValidEmail=t.test(this.email)},checkUsername:function(){var t=/^[a-z][a-z0-9-_]{5,17}$/i;this.isValidUsername=t.test(this.username)},checkPassword:function(){var t=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]{8,32}$/i;this.isValidPassword=t.test(this.password)},checkPasswordCheck:function(){this.isValidPasswordCheck=this.password==this.passwordCheck}}},we=ve,ye=(i("1972"),Object(p["a"])(we,be,ge,!1,null,"5300d8e8",null)),_e=ye.exports,ke=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"py-5"},[i("div",{staticClass:"container"},[i("b-card",{staticClass:"my-4",attrs:{"no-body":Boolean(t.imageList),header:"My Favor"}},[t.imageList?i("b-list-group",{attrs:{flush:""}},[t._l(t.perPage,(function(e){return[t.firstRows+e<=t.rows?i("b-row",{key:e,staticClass:"py-2 px-3 border-bottom",attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"4"}},[i("b-link",{attrs:{to:{name:"detail",params:{id:t.imageList[t.firstRows+e-1].id}}}},[i("b-card-img",{staticClass:"rounded-0",attrs:{src:t.imageList[t.firstRows+e-1].squareMediumPath,alt:"Image"}})],1)],1),i("b-col",{attrs:{md:"8"}},[i("b-card-body",{attrs:{title:t.imageList[t.firstRows+e-1].title}},[i("b-card-text",[t._v(t._s(t.imageList[t.firstRows+e-1].description))]),i("b-button",{staticClass:"active",attrs:{variant:"outline-success"},on:{click:function(i){return t.unlike(t.imageList[t.firstRows+e-1].id)}}},[t._v(t._s(t.imageList[t.firstRows+e-1].favorCount)+" Like")])],1)],1)],1):t._e()]})),t.rows>t.perPage?i("b-pagination",{staticClass:"mt-3",attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-number":"","last-number":"","prev-text":"<","next-text":">","ellipsis-text":"...",align:"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],2):i("b-card-title",[t._v("You have no favor image yet. Go find some!")])],1)],1)])},Ce=[],xe={data:function(){return{currentPage:1,perPage:3,imageList:[]}},computed:{idList:function(){return this.$store.getters.getFavorList},firstRows:function(){return(this.currentPage-1)*this.perPage},rows:function(){return this.imageList?this.imageList.length:0}},created:function(){this.$store.getters.isLogin?this.getImage():this.$router.push({name:"login"})},methods:{getImage:function(){var t=this;return new Promise((function(e,i){et.a.get("../api/GetImage.php",{params:{list:t.idList}}).then((function(i){t.imageList=i.data,e()}))["catch"]((function(t){return i(t)}))}))},unlike:function(t){this.$store.dispatch("unlike",{imageid:t}).then(this.getImage)["catch"]((function(t){return console.log(t)}))}}},Pe=xe,Oe=Object(p["a"])(Pe,ke,Ce,!1,null,null,null),$e=Oe.exports,Le=i("1187"),Ee=i("2f62");n["default"].use(Ee["a"]);var Se=new Ee["a"].Store({state:{login:!1,id:"",email:"",name:"",favor:[],image:[]},getters:{isLogin:function(t){return t.login},getUID:function(t,e){return e.isLogin?t.id:null},getUsername:function(t,e){return e.isLogin?t.name:null},getFavorList:function(t){return t.favor?t.favor:[]}},mutations:{setUserinfo:function(t,e){for(var i in t)e.hasOwnProperty(i)&&(t[i]=e[i]);e["token"]&&(sessionStorage.setItem("token",e["token"]),sessionStorage.setItem("id",e["id"])),t.login=!0},clearUserinfo:function(t){for(var e in t)t[e]=null;sessionStorage.clear(),t.login=!1}},actions:{request:function(t,e){var i=this,n=Object(Le["a"])(e,2),s=n[0],r=n[1];return new Promise((function(t,e){et.a.post(s,r).then((function(n){var s=n.data;s["actionState"]?(i.commit("setUserinfo",s),t()):e(s["error"])}))["catch"]((function(t){return e(t)}))}))},login:function(t,e){var i=e.email,n=e.password,s=e.remember,r=e.token,a=e.id;return this.dispatch("request",["./api/Login.php",{email:i,password:n,remember:s,token:r,id:a}])},logout:function(t){t.commit("clearUserinfo")},signup:function(t,e){var i=e.email,n=e.username,s=e.password;return this.dispatch("request",["../api/Signup.php",{email:i,username:n,password:s}])},like:function(t,e){var i=e.imageid;return this.dispatch("request",["../api/Like.php",{id:t.state.id,imageid:i}])},unlike:function(t,e){var i=e.imageid;return this.dispatch("request",["../api/Unlike.php",{id:t.state.id,imageid:i}])},upload:function(){},delete:function(){},modify:function(){}}});n["default"].use(s["a"]),n["default"].use(r["a"]),n["default"].use(a["a"]);var Ie=new a["a"]({routes:[{path:"",component:d,children:[{path:"",component:z,children:[{name:"home",path:"",component:ht},{name:"browser",path:"browser",component:Mt},{name:"search",path:"search",component:Yt},{name:"upload",path:"upload",component:ne},{name:"detail",path:"detail/:id",component:ce},{name:"favor",path:"favor",component:$e}]},{name:"login",path:"login",component:he},{name:"signup",path:"signup",component:_e}]}]});new n["default"]({render:function(t){return t(d)},store:Se,router:Ie}).$mount("#app")},"25ab":function(t,e,i){},5572:function(t,e,i){"use strict";var n=i("25ab"),s=i.n(n);s.a},"5b92":function(t,e,i){},"5e68":function(t,e,i){},a5b8:function(t,e,i){},b906:function(t,e,i){"use strict";var n=i("5b92"),s=i.n(n);s.a},be3e:function(t,e,i){},d2a0:function(t,e,i){"use strict";var n=i("a5b8"),s=i.n(n);s.a},f0ac:function(t,e,i){"use strict";var n=i("5e68"),s=i.n(n);s.a},f2ae:function(t,e,i){"use strict";var n=i("15b6"),s=i.n(n);s.a}});
//# sourceMappingURL=app.b82f8825.js.map