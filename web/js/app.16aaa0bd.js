(function(t){function e(e){for(var r,o,s=e[0],l=e[1],c=e[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("1d50")},"15b6":function(t,e,n){},"1d50":function(t,e,n){"use strict";n.r(e);n("9c36"),n("789a"),n("d38f"),n("93e1"),n("8188");var r=n("2b0e"),i=n("5f5b"),a=n("b1e0"),o=n("8c4f"),s=(n("f9e3"),n("2dd8"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")}),l=[],c={},u=c,p=n("f08f"),f=Object(p["a"])(u,s,l,!1,null,null,null),d=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p-header"),n("router-view"),n("p-footer")],1)},h=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[n("b-navbar-brand",{attrs:{href:"#"}},[t._v("Hello,World!")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("items"),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{text:"My Account"}},[n("b-dropdown-item",{attrs:{to:"upload"}},[t._v("Upload")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("My Photo")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Favor")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign in")])],1)],1)],1)],1)],1)},g=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar-nav",t._l(t.items,(function(e,r){return n("b-nav-item",{key:r,attrs:{to:e.href}},[t._v(t._s(e.name))])})),1)},y=[],_=(n("0f41"),n("006e"),void 0),w={data:function(){return{items:[{name:"Home",href:"/"},{name:"Browse",href:"/browser"},{name:"Search",href:"/search"}],activeItem:"Home"}},computed:{isActive:function(){var t=new Array;return _.items.forEach((function(e){t.push(e.name==_.activeItem)})),t}},watch:{activeItem:function(){_.isActive=new Array,_.items.forEach((function(t){_.isActive.push(t.name==_.activeItem)}))}},methods:{changeActive:function(t){_.activeItem=t}}},x=w,C=Object(p["a"])(x,v,y,!1,null,null,null),O=C.exports,I={data:function(){return{current:"Home"}},mounted:function(){console.log(this.$store)},components:{items:O}},k=I,P=Object(p["a"])(k,b,g,!1,null,null,null),S=P.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"blog-footer"},[n("p",[t._v(" This website is a lesson project by "),n("a",{attrs:{href:"https://github.com/alct2017"}},[t._v("@alct2017")])])])}],$={},R=$,F=(n("f2ae"),Object(p["a"])(R,j,E,!1,null,"b803ccc6",null)),A=F.exports,B={components:{"p-header":S,"p-footer":A}},G=B,H=Object(p["a"])(G,m,h,!1,null,null,null),T=H.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("carousel"),n("cardgroup"),n("sidebutton")],1)},L=[],D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[n("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/1024/480/?image=52"}}),n("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=54"}},[n("h1",[t._v("Hello world!")])]),n("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=58"}}),n("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[n("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"480",src:"https://picsum.photos/1024/480/?image=55",alt:"image slot"}})]},proxy:!0}])}),n("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}},[n("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum. ")])])],1)],1)},N=[],U={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},J=U,q=Object(p["a"])(J,D,N,!1,null,null,null),z=q.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-5"},[n("div",{staticClass:"container"},[n("b-card-group",{attrs:{columns:""}},t._l(t.popularImages,(function(e,r){return n("b-card",{key:r,staticClass:"mb-4 shadow-sm",attrs:{title:e.title,"img-src":e.path,"img-top":"",tag:"article","align-self":"stretch"}},[n("b-card-text",{staticClass:"brief"},[t._v(t._s(e.description))]),n("b-button-group",[n("b-button",{attrs:{variant:"outline-primary",to:"/detail/"+e.id}},[t._v("View")]),n("b-button",{attrs:{variant:"outline-success"}},[t._v("Like")])],1)],1)})),1)],1)])},V=[],W=n("bc3a"),Q=n.n(W),X={data:function(){return{popularImages:{}}},created:function(){this.getPopularImage()},methods:{getPopularImage:function(){var t=this;Q.a.get("../api/GetPopularImage.php").then((function(e){t.popularImages=e.data}))["catch"]((function(t){console.log(t)}))}}},Y=X,Z=(n("5572"),Object(p["a"])(Y,K,V,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"side-button-group"}},[n("b-button-group",{attrs:{vertical:""}},[n("b-button",{attrs:{variant:"outline-secondary"}},[n("b-icon",{attrs:{icon:"arrow-clockwise","aria-hidden":"true"}})],1),n("b-button",{attrs:{variant:"outline-secondary"}},[n("b-icon",{attrs:{icon:"chevron-bar-up","aria-hidden":"true"}})],1)],1)],1)},nt=[],rt={},it=rt,at=(n("b906"),Object(p["a"])(it,et,nt,!1,null,null,null)),ot=at.exports,st={components:{carousel:z,cardgroup:tt,sidebutton:ot}},lt=st,ct=Object(p["a"])(lt,M,L,!1,null,null,null),ut=ct.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-5"},[n("div",{staticClass:"container"},[n("b-row",[n("b-col",{attrs:{md:"3"}},[n("item-sidebar",{on:{filter:t.getFilterResult}})],1),n("b-col",{attrs:{md:"9"}},[n("b-card",{staticClass:"my-4",attrs:{"no-body":"",header:"Filter"}},[n("b-list-group",{attrs:{flush:""}},[n("item-filter",{on:{filter:t.getFilterResult}}),n("filter-result",{attrs:{result:t.result}})],1)],1)],1)],1)],1)])},ft=[],dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-list-group-item",[n("b-form",{staticClass:"m-0"},[n("b-row",[n("b-col",{attrs:{col:"3","col-md":"6","col-sm":"12"}},[n("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{options:t.contentOptions},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),n("b-col",{attrs:{col:"3","col-md":"6","col-sm":"12"}},[n("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{options:t.countryOptions},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1),n("b-col",{attrs:{col:"3","col-md":"6","col-sm":"12"}},[n("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{options:t.cityOptions},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),n("b-col",{attrs:{col:"3","col-md":"6","col-sm":"12"}},[n("b-button",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{variant:"outline-success"},on:{click:t.filter}},[t._v("Filter")])],1)],1)],1)],1)},mt=[],ht={data:function(){return{contentOptions:[],countryOptions:[],cityOptions:[],city:null,country:null,content:null}},watch:{country:function(){var t=this;this.city=null,this.cityOptions=[{value:null,text:"Filter by City"}],Q.a.get("../api/GetCityOptions.php",{params:{country:this.country}}).then((function(e){e.data.forEach((function(e){t.cityOptions.push({value:e,text:e})}))}))["catch"]((function(t){return console.log(t)}))}},created:function(){this.initContentOptions(),this.initCountryOptions(),this.initCityOptions()},methods:{initContentOptions:function(){var t=this;this.contentOptions=[{value:null,text:"Filter by Content"}],Q.a.get("../api/GetContentOptions.php").then((function(e){e.data.forEach((function(e){t.contentOptions.push({value:e,text:e})}))}))["catch"]((function(t){console.log(t)}))},initCountryOptions:function(){var t=this;this.countryOptions=[{value:null,text:"Filter by Country"}],Q.a.get("../api/GetCountryOptions.php").then((function(e){e.data.forEach((function(e){t.countryOptions.push({value:e,text:e})}))}))["catch"]((function(t){console.log(t)}))},initCityOptions:function(){var t=this;this.cityOptions=[{value:null,text:"Filter by City"}],Q.a.get("../api/GetCityOptions.php").then((function(e){e.data.forEach((function(e){t.cityOptions.push({value:e,text:e})}))}))["catch"]((function(t){return console.log(t)}))},filter:function(){var t={city:this.city,country:this.country,content:this.content};this.$emit("filter",t)}}},bt=ht,gt=Object(p["a"])(bt,dt,mt,!1,null,null,null),vt=gt.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-input-group",{staticClass:"my-4"},[n("b-form-input",{staticClass:"rounded-left",attrs:{placeholder:"Search by Title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("b-input-group-append",[n("b-button",{staticClass:"rounded-right",attrs:{variant:"outline-success"},on:{click:function(e){return t.filter("title",t.title)}}},[t._v("Search")])],1)],1),t._l(t.hotItems,(function(e,r,i){return n("b-card",{key:i,staticClass:"my-4",attrs:{"no-body":"",header:r}},[n("b-list-group",{attrs:{flush:""}},t._l(e,(function(e,i){return n("b-list-group-item",{key:i,attrs:{button:""},on:{click:function(n){return t.filter(r,e)}}},[t._v(t._s(e))])})),1)],1)}))],2)},_t=[],wt={data:function(){return{title:"",hotItems:{content:[],country:[],city:[]}}},created:function(){this.getHotItems()},methods:{getHotItems:function(){var t=this,e=function(e){Q.a.get("../api/GetHotItems.php",{params:{item:e}}).then((function(n){t.hotItems[e]=n.data}))["catch"]((function(t){return console.log(t)}))};for(var n in this.hotItems)e(n)},filter:function(t,e){var n={};n[t]=e,this.$emit("filter",n)}}},xt=wt,Ct=Object(p["a"])(xt,yt,_t,!1,null,null,null),Ot=Ct.exports,It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.rows?n("b-list-group-item",[Boolean(t.result)?[n("b-row",[t._l(t.perPage,(function(e){return[t.firstRow+e<=t.rows?n("b-col",{key:e,staticClass:"py-3",attrs:{sm:"12",md:"12",lg:"4"}},[n("b-link",{attrs:{to:"/detail/"+t.result[t.firstRow+e-1].id}},[n("b-img",{attrs:{src:t.result[t.firstRow+e-1].path,"fluid-grow":""}})],1)],1):t._e()]}))],2),t.rows>t.perPage?n("b-pagination",{staticClass:"mt-3",attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-number":"","last-number":"","prev-text":"<","next-text":">","ellipsis-text":"...",align:"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()]:[t._v("No Image Found")]],2):t._e()},kt=[],Pt={data:function(){return{perPage:12,currentPage:1}},props:{result:Array},computed:{rows:function(){return this.result?this.result.length:1},firstRow:function(){return(this.currentPage-1)*this.perPage}}},St=Pt,jt=Object(p["a"])(St,It,kt,!1,null,null,null),Et=jt.exports,$t={data:function(){return{result:[]}},created:function(){},watch:{},methods:{getFilterResult:function(t){var e=this;Q.a.get("../api/SearchImage.php",{params:t}).then((function(t){e.result=t.data}))["catch"]((function(t){return console.log(t)}))}},components:{"item-filter":vt,"item-sidebar":Ot,"filter-result":Et}},Rt=$t,Ft=Object(p["a"])(Rt,pt,ft,!1,null,null,null),At=Ft.exports,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-5"},[n("div",{staticClass:"container"},[n("b-card",{staticClass:"my-4",attrs:{"no-body":"",header:"Search"}},[n("b-list-group",{attrs:{flush:""}},[n("b-list-group-item",[n("div",{staticClass:"container"},[n("b-input-group",{staticClass:"mb-2",attrs:{prepend:"Title"}},[n("b-form-input",{attrs:{placeholder:"Search by Title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.search("title",t.title)}}},[t._v("Search")])],1)],1),n("b-input-group",{staticClass:"mb-2",attrs:{prepend:"Description"}},[n("b-form-textarea",{attrs:{placeholder:"Search by Description","no-resize":""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.search("description",t.description)}}},[t._v("Search")])],1)],1)],1)])],1)],1),n("search-result",{attrs:{result:t.result}})],1)])},Gt=[],Ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.rows?n("b-card",{staticClass:"my-4",attrs:{"no-body":Boolean(t.result),header:"Result"}},[t.result?n("b-list-group",{attrs:{flush:""}},[t._l(t.perPage,(function(e){return[t.firstRows+e<=t.rows?n("b-list-group-item",{key:e},[n("b-link",{attrs:{to:"/detail/"+t.result[t.firstRows+e-1].id}},[n("b-card-img",{staticClass:"mb-3",attrs:{src:t.result[t.firstRows+e-1].path,title:t.result[t.firstRows+e-1].title}})],1),n("b-card-text",[t._v(t._s(t.result[t.firstRows+e-1].description))])],1):t._e()]})),t.rows>t.perPage?n("b-pagination",{staticClass:"mt-3",attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-number":"","last-number":"","prev-text":"<","next-text":">","ellipsis-text":"...",align:"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],2):n("b-card-title",[t._v("No Image Found")])],1):t._e()},Tt=[],Mt={data:function(){return{currentPage:1,perPage:3,firstRows:0}},props:{result:Array},computed:{rows:function(){return this.result?this.result.length:1}},watch:{currentPage:function(){this.firstRows=(this.currentPage-1)*this.perPage}}},Lt=Mt,Dt=Object(p["a"])(Lt,Ht,Tt,!1,null,null,null),Nt=Dt.exports,Ut={data:function(){return{title:null,description:null,result:[]}},components:{"search-result":Nt},methods:{search:function(t,e){var n=this,r={};r[t]=e,Q.a.get("../api/SearchImage.php",{params:r}).then((function(t){n.result=t.data}))["catch"]((function(t){return console.log(t)}))}}},Jt=Ut,qt=Object(p["a"])(Jt,Bt,Gt,!1,null,null,null),zt=qt.exports,Kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-5"},[n("div",{staticClass:"container"},[n("b-card",{staticClass:"my-4",attrs:{"no-body":"",header:"Upload"}},[n("b-list-group",{attrs:{flush:""}},[n("b-list-group-item",[n("div",{staticClass:"container"},[n("b-form-file",{attrs:{state:Boolean(t.file),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),n("b-form",{attrs:{inline:""}},[n("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"Title"}},[n("b-input",{attrs:{placeholder:""}})],1),n("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"Country"}},[n("b-form-input",{attrs:{list:"input-list"}}),n("b-form-datalist",{attrs:{id:"input-list",options:t.options}})],1),n("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"City"}},[n("b-form-input",{attrs:{list:"input-list"}}),n("b-form-datalist",{attrs:{id:"input-list",options:t.options}})],1)],1)],1)])],1)],1)],1)])},Vt=[],Wt={data:function(){return{file:null,options:["Apple","Banana","Grape","Kiwi","Orange"]}}},Qt=Wt,Xt=Object(p["a"])(Qt,Kt,Vt,!1,null,null,null),Yt=Xt.exports,Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-5"},[n("div",{staticClass:"container"},[n("b-card",{staticClass:"mb-2",attrs:{title:t.imageInfo.title,"sub-title":t.imageInfo.city+" "+t.imageInfo.country,"img-src":t.imageInfo.path,"img-top":""}},[n("b-card-text",[t._v(t._s(t.imageInfo.description))]),n("b-button",{attrs:{variant:"outline-success"}},[t._v("Like")])],1)],1)])},te=[],ee={data:function(){return{id:this.$route.params.id,imageInfo:{}}},created:function(){this.getImageById()},methods:{getImageById:function(){var t=this;Q.a.get("../api/GetImageById.php",{params:{id:this.id}}).then((function(e){console.log(t.id),console.log(e),t.imageInfo=e.data}))["catch"]((function(t){console.log(t)}))}}},ne=ee,re=Object(p["a"])(ne,Zt,te,!1,null,null,null),ie=re.exports,ae=n("2f62");r["default"].use(i["a"]),r["default"].use(a["a"]),r["default"].use(o["a"]);var oe=new o["a"]({routes:[{path:"",component:d,children:[{path:"",component:T,children:[{path:"",component:ut},{path:"browser",component:At},{path:"search",component:zt},{path:"upload",component:Yt},{path:"detail/:id",component:ie}]}]}]}),se=new ae["a"].Store({state:{login:!1,id:"",email:"",name:"",favor:[],image:[]},getters:{isLogin:function(t){return t.login}},mutations:{login:function(t,e){var n=this;Q.a.post("./api/Login.php",{email:e.email,password:e.password}).then((function(e){var r=e.data;if(r.actionState)console.log(r.error);else{for(var i in t)r.hasOwnProperty(i)&&(n.state[i]=r[i]);t.login=!0}}))["catch"]((function(t){return console.log(t)}))},logout:function(t){var e=this;Q.a.get("").then((function(n){var r=n.data;if(r.actionState){for(var i in t)e.state[i]=null;t.login=!1}}))["catch"]((function(t){return console.log(t)}))},signup:function(t,e){var n=this;Q.a.post("",{email:e.email,name:e.name,password:e.password}).then((function(t){var r=t.data;r.actionState?n.commit("login",{email:e.email,password:e.password}):console.log(r.error)}))["catch"]((function(t){console.log(t)}))}}});new r["default"]({render:function(t){return t(d)},store:se,router:oe}).$mount("#app")},"25ab":function(t,e,n){},5572:function(t,e,n){"use strict";var r=n("25ab"),i=n.n(r);i.a},"5b92":function(t,e,n){},b906:function(t,e,n){"use strict";var r=n("5b92"),i=n.n(r);i.a},f2ae:function(t,e,n){"use strict";var r=n("15b6"),i=n.n(r);i.a}});
//# sourceMappingURL=app.16aaa0bd.js.map