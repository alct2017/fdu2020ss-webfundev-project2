(function(t){function e(e){for(var n,a,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={app:0},r=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("1d50")},"15b6":function(t,e,i){},1972:function(t,e,i){"use strict";var n=i("be3e"),s=i.n(n);s.a},"1d50":function(t,e,i){"use strict";i.r(e);i("789a"),i("d38f"),i("93e1"),i("8188");var n=i("2b0e"),s=i("5f5b"),r=i("b1e0"),a=i("8c4f"),o=(i("f9e3"),i("2dd8"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-view")}),c=[],l={created:function(){sessionStorage.getItem("token")&&sessionStorage.getItem("id")&&this.$store.dispatch("login",{token:sessionStorage.getItem("token"),id:sessionStorage.getItem("id")})}},u=l,p=i("f08f"),d=Object(p["a"])(u,o,c,!1,null,"478d0b50",null),m=d.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p-header"),i("router-view",{staticClass:"main"}),i("p-footer")],1)},h=[],g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[i("b-navbar-brand",{attrs:{to:{name:"home"}}},[t._v("Hello,World!")]),i("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),i("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[i("items"),i("user")],1)],1)],1)},b=[],v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-navbar-nav",t._l(t.items,(function(e,n){return i("b-nav-item",{key:n,attrs:{to:e.href,active:t.isActive(e)}},[t._v(t._s(e.name))])})),1)},y=[],w=(i("9c36"),{data:function(){return{items:[{name:"Home",href:"/"},{name:"Browser",href:"/browser"},{name:"Search",href:"/search"}]}},methods:{isActive:function(t){var e=this.$route.name.toLowerCase(),i=t.name.toLowerCase();return e==i}}}),_=w,k=Object(p["a"])(_,v,y,!1,null,null,null),C=k.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-navbar-nav",{staticClass:"ml-auto"},[this.$store.getters.isLogin?i("b-nav-item-dropdown",{attrs:{text:this.$store.getters.getUsername,right:""}},[i("b-dropdown-item",{attrs:{to:{name:"upload"}}},[t._v("Upload")]),i("b-dropdown-item",{attrs:{to:{name:"image"}}},[t._v("Image")]),i("b-dropdown-item",{attrs:{to:{name:"favor"}}},[t._v("Favor")]),i("b-dropdown-item",{on:{click:t.logout}},[t._v("Log out")])],1):i("b-button",{attrs:{variant:"outline-primary",to:{name:"login"}}},[t._v("Login")])],1)},P=[],I={methods:{logout:function(){this.$store.dispatch("logout")}}},L=I,O=Object(p["a"])(L,x,P,!1,null,null,null),$=O.exports,E={components:{items:C,user:$}},S=E,R=Object(p["a"])(S,g,b,!1,null,null,null),j=R.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"blog-footer"},[i("p",[t._v(" This website is a lesson project by "),i("a",{attrs:{href:"https://github.com/alct2017"}},[t._v("@alct2017")])])])}],q={},V=q,M=(i("f2ae"),Object(p["a"])(V,U,F,!1,null,"b803ccc6",null)),G=M.exports,D={components:{"p-header":j,"p-footer":G}},B=D,A=(i("d2a0"),Object(p["a"])(B,f,h,!1,null,"2089fbe4",null)),H=A.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("carousel"),i("cardgroup",{ref:"cardgroup"}),i("sidebutton",{on:{fresh:t.fresh}})],1)},T=[],N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[i("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/1024/480/?image=52"}}),i("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=54"}},[i("h1",[t._v("Hello world!")])]),i("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=58"}}),i("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[i("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"480",src:"https://picsum.photos/1024/480/?image=55",alt:"image slot"}})]},proxy:!0}])}),i("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}},[i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum. ")])])],1)],1)},W=[],J={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},Y=J,Z=Object(p["a"])(Y,N,W,!1,null,null,null),K=Z.exports,Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"py-5"},[i("div",{staticClass:"container"},[i("b-card-group",{attrs:{columns:""}},t._l(t.imageList,(function(e,n){return i("b-card",{key:n,staticClass:"mb-4 shadow-sm",attrs:{title:e.title,"img-src":e.largePath,"img-top":"",tag:"article","align-self":"stretch"}},[i("b-card-text",{staticClass:"brief"},[t._v(t._s(e.description))]),i("b-button-group",[i("b-button",{attrs:{variant:"outline-primary",to:{name:"detail",params:{id:e.id}}}},[t._v("View")]),i("b-button",{class:{active:t.isFavor(e.id)},attrs:{variant:"outline-success"},on:{click:function(i){t.isFavor(e.id)?t.unlike(e.id):t.like(e.id)}}},[t._v(t._s(e.favorCount)+" Like")])],1)],1)})),1)],1)])},X=[],tt=(i("f0ce"),i("2f5c"),i("b8eb"),i("bc3a")),et=i.n(tt),it={data:function(){return{idList:[],imageList:[]}},created:function(){this.getList().then(this.getImage)["catch"]((function(t){return console.log(t)}))},methods:{fresh:function(){this.getList(!0).then(this.getImage)["catch"]((function(t){return console.log(t)}))},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(i,n){et.a.get("../api/GetHomeList.php",{params:{random:e}}).then((function(e){t.idList=e.data,i()}))["catch"]((function(t){return n(t)}))}))},getImage:function(){var t=this;return new Promise((function(e,i){et.a.get("../api/GetImage.php",{params:{list:t.idList}}).then((function(i){t.imageList=i.data,e()}))["catch"]((function(t){return i(t)}))}))},isFavor:function(t){return this.favorList.includes(t+"")},like:function(t){this.$store.getters.isLogin?this.$store.dispatch("like",{imageid:t}).then(this.getImage)["catch"]((function(t){return console.log(t)})):this.$router.push({name:"login"})},unlike:function(t){this.$store.dispatch("unlike",{imageid:t}).then(this.getImage)["catch"]((function(t){return console.log(t)}))}},computed:{favorList:function(){return this.$store.getters.getFavorList}}},nt=it,st=(i("5572"),Object(p["a"])(nt,Q,X,!1,null,null,null)),rt=st.exports,at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"side-button-group"}},[i("b-button-group",{attrs:{vertical:""}},[i("b-button",{attrs:{variant:"outline-secondary"}},[i("b-icon",{attrs:{icon:"arrow-clockwise","aria-hidden":"true"},on:{click:t.fresh}})],1),i("b-button",{attrs:{variant:"outline-secondary"}},[i("b-icon",{attrs:{icon:"chevron-bar-up","aria-hidden":"true"}})],1)],1)],1)},ot=[],ct={methods:{fresh:function(){this.$emit("fresh")}}},lt=ct,ut=(i("b906"),Object(p["a"])(lt,at,ot,!1,null,null,null)),pt=ut.exports,dt={methods:{fresh:function(){this.$refs.cardgroup.fresh()}},components:{carousel:K,cardgroup:rt,sidebutton:pt}},mt=dt,ft=Object(p["a"])(mt,z,T,!1,null,null,null),ht=ft.exports,gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"py-5"},[i("div",{staticClass:"container"},[i("b-row",[i("b-col",{attrs:{md:"3"}},[i("item-sidebar",{on:{filter:t.getFilterResult}})],1),i("b-col",{attrs:{md:"9"}},[i("b-card",{staticClass:"my-4",attrs:{"no-body":"",header:"Filter"}},[i("b-list-group",{attrs:{flush:""}},[i("item-filter",{on:{filter:t.getFilterResult}}),i("filter-result",{attrs:{result:t.result}})],1)],1)],1)],1)],1)])},bt=[],vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-list-group-item",[i("b-form",{staticClass:"m-0"},[i("b-row",[i("b-col",{attrs:{col:"3","col-md":"6","col-sm":"12"}},[i("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{options:t.contentOptions},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),i("b-col",{attrs:{col:"3","col-md":"6","col-sm":"12"}},[i("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{options:t.countryOptions},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1),i("b-col",{attrs:{col:"3","col-md":"6","col-sm":"12"}},[i("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{options:t.cityOptions},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),i("b-col",{attrs:{col:"3","col-md":"6","col-sm":"12"}},[i("b-button",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{variant:"outline-success"},on:{click:t.filter}},[t._v("Filter")])],1)],1)],1)],1)},yt=[],wt=(i("0f41"),i("006e"),{data:function(){return{contentOptions:[],countryOptions:[],cityOptions:[],city:null,country:null,content:null}},watch:{country:function(){var t=this;this.city=null,this.cityOptions=[{value:null,text:"Filter by City"}],et.a.get("../api/GetCityOptions.php",{params:{country:this.country}}).then((function(e){e.data.forEach((function(e){t.cityOptions.push({value:e,text:e})}))}))["catch"]((function(t){return console.log(t)}))}},created:function(){this.initContentOptions(),this.initCountryOptions(),this.initCityOptions()},methods:{initContentOptions:function(){var t=this;this.contentOptions=[{value:null,text:"Filter by Content"}],et.a.get("../api/GetContentOptions.php").then((function(e){e.data.forEach((function(e){t.contentOptions.push({value:e,text:e})}))}))["catch"]((function(t){console.log(t)}))},initCountryOptions:function(){var t=this;this.countryOptions=[{value:null,text:"Filter by Country"}],et.a.get("../api/GetCountryOptions.php").then((function(e){e.data.forEach((function(e){t.countryOptions.push({value:e,text:e})}))}))["catch"]((function(t){console.log(t)}))},initCityOptions:function(){var t=this;this.cityOptions=[{value:null,text:"Filter by City"}],et.a.get("../api/GetCityOptions.php").then((function(e){e.data.forEach((function(e){t.cityOptions.push({value:e,text:e})}))}))["catch"]((function(t){return console.log(t)}))},filter:function(){var t={city:this.city,country:this.country,content:this.content};this.$emit("filter",t)}}}),_t=wt,kt=Object(p["a"])(_t,vt,yt,!1,null,null,null),Ct=kt.exports,xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-input-group",{staticClass:"my-4"},[i("b-form-input",{staticClass:"rounded-left",attrs:{placeholder:"Search by Title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),i("b-input-group-append",[i("b-button",{staticClass:"rounded-right",attrs:{variant:"outline-success"},on:{click:function(e){return t.filter("title",t.title)}}},[t._v("Search")])],1)],1),t._l(t.hotItems,(function(e,n,s){return i("b-card",{key:s,staticClass:"my-4",attrs:{"no-body":"",header:n}},[i("b-list-group",{attrs:{flush:""}},t._l(e,(function(e,s){return i("b-list-group-item",{key:s,attrs:{button:""},on:{click:function(i){return t.filter(n,e)}}},[t._v(t._s(e))])})),1)],1)}))],2)},Pt=[],It={data:function(){return{title:"",hotItems:{content:[],country:[],city:[]}}},created:function(){this.getHotItems()},methods:{getHotItems:function(){var t=this,e=function(e){et.a.get("../api/GetHotItems.php",{params:{item:e}}).then((function(i){t.hotItems[e]=i.data}))["catch"]((function(t){return console.log(t)}))};for(var i in this.hotItems)e(i)},filter:function(t,e){var i={};i[t]=e,this.$emit("filter",i)}}},Lt=It,Ot=Object(p["a"])(Lt,xt,Pt,!1,null,null,null),$t=Ot.exports,Et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.rows?i("b-list-group-item",[Boolean(t.result)?[i("b-row",[t._l(t.perPage,(function(e){return[t.firstRow+e<=t.rows?i("b-col",{key:e,staticClass:"py-3",attrs:{sm:"12",md:"12",lg:"4"}},[i("b-link",{attrs:{to:"/detail/"+t.result[t.firstRow+e-1].id}},[i("b-img",{attrs:{src:t.result[t.firstRow+e-1].squareMediumPath,"fluid-grow":""}})],1)],1):t._e()]}))],2),t.rows>t.perPage?i("b-pagination",{staticClass:"mt-3",attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-number":"","last-number":"","prev-text":"<","next-text":">","ellipsis-text":"...",align:"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()]:[t._v("No Image Found")]],2):t._e()},St=[],Rt={data:function(){return{perPage:12,currentPage:1}},props:{result:Array},computed:{rows:function(){return this.result?this.result.length:1},firstRow:function(){return(this.currentPage-1)*this.perPage}}},jt=Rt,Ut=Object(p["a"])(jt,Et,St,!1,null,null,null),Ft=Ut.exports,qt={data:function(){return{result:[]}},created:function(){},watch:{},methods:{getFilterResult:function(t){var e=this;et.a.get("../api/SearchImage.php",{params:t}).then((function(t){e.result=t.data}))["catch"]((function(t){return console.log(t)}))}},components:{"item-filter":Ct,"item-sidebar":$t,"filter-result":Ft}},Vt=qt,Mt=Object(p["a"])(Vt,gt,bt,!1,null,null,null),Gt=Mt.exports,Dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"py-5"},[i("div",{staticClass:"container"},[i("b-card",{staticClass:"my-4",attrs:{"no-body":"",header:"Search"}},[i("b-list-group",{attrs:{flush:""}},[i("b-list-group-item",[i("div",{staticClass:"container"},[i("b-input-group",{staticClass:"mb-2",attrs:{prepend:"Title"}},[i("b-form-input",{attrs:{placeholder:"Search by Title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),i("b-input-group-append",[i("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.search("title",t.title)}}},[t._v("Search")])],1)],1),i("b-input-group",{staticClass:"mb-2",attrs:{prepend:"Description"}},[i("b-form-textarea",{attrs:{placeholder:"Search by Description","no-resize":""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),i("b-input-group-append",[i("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.search("description",t.description)}}},[t._v("Search")])],1)],1)],1)])],1)],1),i("search-result",{attrs:{result:t.result}})],1)])},Bt=[],At=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.rows?i("b-card",{staticClass:"my-4",attrs:{"no-body":Boolean(t.result),header:"Result"}},[t.result?i("b-list-group",{attrs:{flush:""}},[t._l(t.perPage,(function(e){return[t.firstRows+e<=t.rows?i("b-row",{key:e,staticClass:"py-2 px-3 border-bottom",attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"4"}},[i("b-link",{attrs:{to:"/detail/"+t.result[t.firstRows+e-1].id}},[i("b-card-img",{staticClass:"rounded-0",attrs:{src:t.result[t.firstRows+e-1].squareMediumPath,alt:"Image"}})],1)],1),i("b-col",{attrs:{md:"8"}},[i("b-card-body",{attrs:{title:t.result[t.firstRows+e-1].title}},[i("b-card-text",[t._v(t._s(t.result[t.firstRows+e-1].description))])],1)],1)],1):t._e()]})),t.rows>t.perPage?i("b-pagination",{staticClass:"mt-3",attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-number":"","last-number":"","prev-text":"<","next-text":">","ellipsis-text":"...",align:"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],2):i("b-card-title",[t._v("No Image Found")])],1):t._e()},Ht=[],zt={data:function(){return{currentPage:1,perPage:3,firstRows:0}},props:{result:Array},computed:{rows:function(){return this.result?this.result.length:1}},watch:{currentPage:function(){this.firstRows=(this.currentPage-1)*this.perPage}}},Tt=zt,Nt=Object(p["a"])(Tt,At,Ht,!1,null,null,null),Wt=Nt.exports,Jt={data:function(){return{title:null,description:null,result:[]}},components:{"search-result":Wt},methods:{search:function(t,e){var i=this,n={};n[t]=e,et.a.get("../api/SearchImage.php",{params:n}).then((function(t){i.result=t.data}))["catch"]((function(t){return console.log(t)}))}}},Yt=Jt,Zt=Object(p["a"])(Yt,Dt,Bt,!1,null,null,null),Kt=Zt.exports,Qt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"py-5"},[i("div",{staticClass:"container"},[i("b-card",{staticClass:"my-4",attrs:{"no-body":"",header:t.modifyImageId?"Modify":"Upload"}},[i("b-list-group",{attrs:{flush:""}},[i("b-list-group-item",[i("div",{staticClass:"container"},[i("b-form",{on:{submit:function(e){t.modifyImageId?t.modify:t.upload}}},[t.fileURL?i("b-img",{staticClass:"preview mb-2",attrs:{fluid:"",src:t.fileURL}}):i("b-img",{staticClass:"preview mb-2",attrs:{fluid:"",src:t.largePath}}),i("b-row",[i("b-col",{staticClass:"mb-2",attrs:{lg:"6",md:"12",sm:"12"}},[i("b-input-group",{attrs:{prepend:"Title"}},[i("b-form-input",{attrs:{required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),i("b-col",{staticClass:"mb-2",attrs:{lg:"6",md:"6",sm:"12"}},[i("b-form-file",{attrs:{id:"fileinput",required:!Boolean(t.modifyImageId),state:Boolean(t.file),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here...",accept:"image/jpeg, image/png, image/gif"},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1),i("b-col",{staticClass:"mb-2",attrs:{lg:"4",md:"6",sm:"12"}},[i("b-input-group",{attrs:{prepend:"Country"}},[i("b-form-input",{attrs:{list:"country-list"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}}),i("b-form-datalist",{attrs:{id:"country-list",options:t.countryOptions}})],1)],1),i("b-col",{staticClass:"mb-2",attrs:{lg:"4",md:"6",sm:"12"}},[i("b-input-group",{attrs:{prepend:"City"}},[i("b-form-input",{attrs:{list:"city-list"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}}),i("b-form-datalist",{attrs:{id:"city-list",options:t.cityOptions}})],1)],1),i("b-col",{staticClass:"mb-2",attrs:{lg:"4",md:"6",sm:"12"}},[i("b-input-group",{attrs:{prepend:"Content"}},[i("b-form-select",{attrs:{options:t.contentOptions,required:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1)],1),i("b-input-group",{staticClass:"mb-2",attrs:{prepend:"Description"}},[i("b-form-textarea",{attrs:{"no-resize":""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),t.modifyImageId?i("b-button",{attrs:{type:"submit",variant:"outline-success"}},[t._v("Modify")]):i("b-button",{attrs:{type:"submit",variant:"outline-success"}},[t._v("Upload")])],1)],1)])],1)],1)],1)])},Xt=[],te=(i("e073"),i("f7a5"),i("1f69"),i("fb7b"),i("e8a6"),{data:function(){return{file:null,title:"",country:"",countryOptions:[],city:"",cityOptions:[],content:"Other",contentOptions:["Scenery","City","People","Animal","Building","Wonder","Other"],description:"",largePath:""}},computed:{fileURL:function(){return this.file?window.URL.createObjectURL(this.file):null},isValid:function(){return!(!this.title||!this.file&&!this.modifyImageId||!this.content)&&!(this.country&&!this.countryOptions.length||this.city&&!this.cityOptions)},modifyImageId:function(){return this.$route.params.imageid?this.$route.params.imageid:null}},watch:{country:function(){var t=this;et.a.get("../api/GetCountryRecommend.php",{params:{country:this.country}}).then((function(e){t.countryOptions=e.data}))["catch"]((function(t){return console.log(t)}))},city:function(){var t=this;et.a.get("../api/GetCityRecommend.php",{params:{country:this.country,city:this.city}}).then((function(e){t.cityOptions=e.data}))["catch"]((function(t){return console.log(t)}))}},created:function(){var t=this;this.$store.getters.isLogin?this.modifyImageId&&et.a.get("../api/GetImage.php",{params:{id:this.modifyImageId}}).then((function(e){for(var i in t)e.data.hasOwnProperty(i)&&(t[i]=e.data[i])}))["catch"]((function(t){console.log(t)})):this.$router.push({name:"login"})},methods:{upload:function(){var t=this;this.isValid?this.$store.dispatch("upload",{title:this.title,description:this.description,city:this.city,country:this.country,content:this.content,file:this.file}).then((function(e){return t.$router.push({name:"detail",params:{id:e}})}))["catch"]((function(t){console.log(t)})):console.log("Form is not complete")},modify:function(){var t=this;this.isValid&&this.$store.dispatch("modify",{imageid:this.modifyImageId,title:this.title,description:this.description,city:this.city,country:this.country,content:this.content,file:this.file}).then((function(e){return t.$router.push({name:"detail",params:{id:e}})}))["catch"]((function(t){console.log(t)}))}}}),ee=te,ie=(i("9eb7"),Object(p["a"])(ee,Qt,Xt,!1,null,"32e92ae4",null)),ne=ie.exports,se=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"py-5"},[i("div",{staticClass:"container"},[i("b-card",{staticClass:"mb-2",attrs:{title:t.image.title,"sub-title":(t.image.city?t.image.city+" ":"")+t.image.country,"img-src":t.image.largePath,"img-top":""}},[i("b-card-text",[t._v(t._s(t.image.description))]),i("b-button",{class:{active:t.isFavor(t.image.id)},attrs:{variant:"outline-success"},on:{click:function(e){t.isFavor(t.image.id)?t.unlike(t.image.id):t.like(t.image.id)}}},[t._v(t._s(t.image.favorCount)+" Like")])],1)],1)])},re=[],ae={data:function(){return{image:{}}},computed:{favorList:function(){return this.$store.getters.getFavorList}},created:function(){this.getImage()},methods:{getImage:function(){var t=this;et.a.get("../api/GetImage.php",{params:{id:this.$route.params.id}}).then((function(e){t.image=e.data}))["catch"]((function(t){console.log(t)}))},isFavor:function(t){return this.favorList.includes(t+"")},like:function(t){this.$store.getters.isLogin?this.$store.dispatch("like",{imageid:t}).then(this.getImage)["catch"]((function(t){return console.log(t)})):this.$router.push({name:"login"})},unlike:function(t){this.$store.dispatch("unlike",{imageid:t}).then(this.getImage)["catch"]((function(t){return console.log(t)}))}}},oe=ae,ce=Object(p["a"])(oe,se,re,!1,null,null,null),le=ce.exports,ue=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body"},[i("div",{staticClass:"login-form"},[i("b-form",{on:{submit:t.login}},[i("b-form-group",{attrs:{label:"Email:","label-for":"input-1"}},[i("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),i("b-form-group",{attrs:{label:"Password:","label-for":"input-2"}},[i("b-form-input",{attrs:{id:"input-2",type:"password",required:"",placeholder:"Enter password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),i("b-form-checkbox",{model:{value:t.form.remember,callback:function(e){t.$set(t.form,"remember",e)},expression:"form.remember"}},[t._v("Remember Me")]),i("b-button",{attrs:{block:"",variant:"outline-success",type:"submit"}},[t._v("Login")])],1),i("b-link",{attrs:{to:{name:"signup"}}},[t._v("Sign up")])],1)])},pe=[],de={data:function(){return{form:{email:"",password:"",remember:!1}}},methods:{login:function(){var t=this;this.$store.dispatch("login",this.form).then((function(){t.$router.push("/")}))["catch"]((function(t){console.log(t)}))}}},me=de,fe=(i("f0ac"),Object(p["a"])(me,ue,pe,!1,null,"1c112432",null)),he=fe.exports,ge=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body"},[i("div",{staticClass:"login-form"},[i("div",{staticClass:"text-center mb-4"},[i("p",[t._v("Sign up for")]),i("b-link",{attrs:{to:{name:"home"}}},[i("h3",[t._v("Hello,World!")])])],1),i("b-form",{on:{submit:t.signup}},[i("b-form-group",{attrs:{label:"Email:","label-for":"input-1"}},[i("b-form-input",{attrs:{id:"input-1",type:"email",required:"",state:t.isValidEmail,placeholder:"Enter email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),i("b-form-group",{attrs:{label:"Username:","label-for":"input-2"}},[i("b-form-input",{attrs:{id:"input-2",type:"text",required:"",state:t.isValidUsername,placeholder:"Enter username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),i("b-form-text",[t._v("Username only consist of numbers, letters, underscores(_) and dashes(-). Make sure it's at least 5 characters.")])],1),i("b-form-group",{attrs:{label:"Password:","label-for":"input-3"}},[i("b-form-input",{attrs:{id:"input-3",type:"password",required:"",state:t.isValidPassword,placeholder:"Enter password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),i("b-form-text",[t._v("Make sure it's at least 15 characters.")])],1),i("b-form-group",{attrs:{label:"Password Again:","label-for":"input-4"}},[i("b-form-input",{attrs:{id:"input-4",type:"password",required:"",state:t.isValidPasswordCheck,placeholder:"Repeat password"},model:{value:t.passwordCheck,callback:function(e){t.passwordCheck=e},expression:"passwordCheck"}})],1),i("b-button",{attrs:{block:"",variant:"outline-success",type:"submit"}},[t._v("Sign up")])],1)],1)])},be=[],ve={data:function(){return{email:"",isValidEmail:null,username:"",isValidUsername:null,password:"",isValidPassword:null,passwordCheck:"",isValidPasswordCheck:null}},watch:{email:function(){this.checkEmail()},username:function(){this.checkUsername()},password:function(){this.checkPassword()},passwordCheck:function(){this.checkPasswordCheck()}},methods:{signup:function(){var t=this;this.isValidEmail&&this.isValidUsername&&this.isValidPassword&&this.isValidPasswordCheck&&this.$store.dispatch("signup",{email:this.email,username:this.username,password:this.password}).then((function(){t.$router.push({name:"home"})}))["catch"]((function(t){console.log(t)}))},checkEmail:function(){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;this.isValidEmail=t.test(this.email)},checkUsername:function(){var t=/^[a-z][a-z0-9-_]{5,17}$/i;this.isValidUsername=t.test(this.username)},checkPassword:function(){var t=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]{8,32}$/i;this.isValidPassword=t.test(this.password)},checkPasswordCheck:function(){this.isValidPasswordCheck=this.password==this.passwordCheck}}},ye=ve,we=(i("1972"),Object(p["a"])(ye,ge,be,!1,null,"5300d8e8",null)),_e=we.exports,ke=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"py-5"},[i("div",{staticClass:"container"},[i("b-card",{staticClass:"my-4",attrs:{"no-body":Boolean(t.imageList),header:"My Favor"}},[t.imageList?i("b-list-group",{attrs:{flush:""}},[t._l(t.perPage,(function(e){return[t.firstRows+e<=t.rows?i("b-row",{key:e,staticClass:"py-2 px-3 border-bottom",attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"4"}},[i("b-link",{attrs:{to:{name:"detail",params:{id:t.imageList[t.firstRows+e-1].id}}}},[i("b-card-img",{staticClass:"rounded-0",attrs:{src:t.imageList[t.firstRows+e-1].squareMediumPath,alt:"Image"}})],1)],1),i("b-col",{attrs:{md:"8"}},[i("b-card-body",{attrs:{title:t.imageList[t.firstRows+e-1].title}},[i("b-card-text",[t._v(t._s(t.imageList[t.firstRows+e-1].description))]),i("b-button",{staticClass:"active",attrs:{variant:"outline-success"},on:{click:function(i){return t.unlike(t.imageList[t.firstRows+e-1].id)}}},[t._v(t._s(t.imageList[t.firstRows+e-1].favorCount)+" Like")])],1)],1)],1):t._e()]})),t.rows>t.perPage?i("b-pagination",{staticClass:"mt-3",attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-number":"","last-number":"","prev-text":"<","next-text":">","ellipsis-text":"...",align:"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],2):i("b-card-title",[t._v("You have no favor image yet. Go find some!")])],1)],1)])},Ce=[],xe={data:function(){return{currentPage:1,perPage:3,imageList:[]}},computed:{idList:function(){return this.$store.getters.getFavorList},firstRows:function(){return(this.currentPage-1)*this.perPage},rows:function(){return this.imageList?this.imageList.length:0}},created:function(){this.$store.getters.isLogin?this.getImage():this.$router.push({name:"login"})},methods:{getImage:function(){var t=this;return new Promise((function(e,i){et.a.get("../api/GetImage.php",{params:{list:t.idList}}).then((function(i){t.imageList=i.data,e()}))["catch"]((function(t){return i(t)}))}))},unlike:function(t){this.$store.dispatch("unlike",{imageid:t}).then(this.getImage)["catch"]((function(t){return console.log(t)}))}}},Pe=xe,Ie=Object(p["a"])(Pe,ke,Ce,!1,null,null,null),Le=Ie.exports,Oe=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"py-5"},[i("div",{staticClass:"container"},[i("b-card",{staticClass:"my-4",attrs:{"no-body":Boolean(t.imageList),header:"My Image"}},[t.imageList?i("b-list-group",{attrs:{flush:""}},[t._l(t.perPage,(function(e){return[t.firstRows+e<=t.rows?i("b-row",{key:e,staticClass:"py-2 px-3 border-bottom",attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"4"}},[i("b-link",{attrs:{to:{name:"detail",params:{id:t.imageList[t.firstRows+e-1].id}}}},[i("b-card-img",{staticClass:"rounded-0",attrs:{src:t.imageList[t.firstRows+e-1].squareMediumPath,alt:"Image"}})],1)],1),i("b-col",{attrs:{md:"8"}},[i("b-card-body",{attrs:{title:t.imageList[t.firstRows+e-1].title}},[i("b-card-text",[t._v(t._s(t.imageList[t.firstRows+e-1].description))]),i("b-button",{staticClass:"mr-2",attrs:{variant:"outline-primary",to:{name:"upload",params:{imageid:t.imageList[t.firstRows+e-1].id}}}},[t._v("Modify")]),i("b-button",{staticClass:"mr-2",attrs:{variant:"outline-danger"},on:{click:function(i){return t.deleteImage(t.imageList[t.firstRows+e-1].id)}}},[t._v("Delete")])],1)],1)],1):t._e()]})),t.rows>t.perPage?i("b-pagination",{staticClass:"mt-3",attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-number":"","last-number":"","prev-text":"<","next-text":">","ellipsis-text":"...",align:"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],2):i("b-card-title",[t._v(" You have no image yet. Go "),i("b-link",{attrs:{to:{name:"upload"}}},[t._v("Upload")]),t._v("! ")],1)],1)],1)])},$e=[],Ee={data:function(){return{currentPage:1,perPage:3,imageList:[]}},computed:{idList:function(){return this.$store.getters.getImageList},firstRows:function(){return(this.currentPage-1)*this.perPage},rows:function(){return this.imageList?this.imageList.length:0}},created:function(){this.$store.getters.isLogin?this.getImage():this.$router.push({name:"login"})},methods:{getImage:function(){var t=this;return new Promise((function(e,i){et.a.get("../api/GetImage.php",{params:{list:t.idList}}).then((function(i){t.imageList=i.data,e()}))["catch"]((function(t){return i(t)}))}))},deleteImage:function(t){this.$store.dispatch("delete",{imageid:t}).then(this.getImage)["catch"]((function(t){return console.log(t)}))}}},Se=Ee,Re=Object(p["a"])(Se,Oe,$e,!1,null,null,null),je=Re.exports,Ue=i("1187"),Fe=i("2f62");n["default"].use(Fe["a"]);var qe=new Fe["a"].Store({state:{login:!1,id:"",email:"",name:"",favor:[],image:[]},getters:{isLogin:function(t){return t.login},getUID:function(t,e){return e.isLogin?t.id:null},getUsername:function(t,e){return e.isLogin?t.name:null},getFavorList:function(t){return t.favor?t.favor:[]},getImageList:function(t){return t.image?t.image:[]}},mutations:{setUserinfo:function(t,e){for(var i in t)e.hasOwnProperty(i)&&(t[i]=e[i]);e["token"]&&(sessionStorage.setItem("token",e["token"]),sessionStorage.setItem("id",e["id"])),t.login=!0},clearUserinfo:function(t){for(var e in t)t[e]=null;sessionStorage.clear(),t.login=!1}},actions:{request:function(t,e){var i=Object(Ue["a"])(e,2),n=i[0],s=i[1];return new Promise((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return console.log(t)};et.a.post(n,s).then((function(n){var s=n.data;s["actionState"]?(t.commit("setUserinfo",s),e()):i(s["error"])}))["catch"]((function(t){return i(t)}))}))},freshUserinfo:function(t){return t.dispatch("login",{token:sessionStorage.getItem("token"),id:sessionStorage.getItem("id")})},login:function(t,e){var i=e.email,n=e.password,s=e.remember,r=e.token,a=e.id;return t.dispatch("request",["./api/Login.php",{email:i,password:n,remember:s,token:r,id:a}])},logout:function(t){t.commit("clearUserinfo")},signup:function(t,e){var i=e.email,n=e.username,s=e.password;return t.dispatch("request",["../api/Signup.php",{email:i,username:n,password:s}])},like:function(t,e){var i=e.imageid;return t.dispatch("request",["../api/Like.php",{id:t.state.id,imageid:i}])},unlike:function(t,e){var i=e.imageid;return t.dispatch("request",["../api/Unlike.php",{id:t.state.id,imageid:i}])},upload:function(t,e){var i=e.title,n=e.description,s=e.city,r=e.country,a=e.content,o=e.file,c=new FormData;return c.append("title",i),c.append("description",n),c.append("city",s),c.append("country",r),c.append("uid",t.getters.getUID),c.append("content",a),c.append("file",o),new Promise((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return console.log(t)};et.a.post("../api/Upload.php",c).then((function(n){n["data"]["actionState"]?(t.dispatch("freshUserinfo"),e(n["data"]["id"])):i(n["data"]["error"])}))["catch"]((function(t){return i(t)}))}))},delete:function(t,e){var i=e.imageid;t.dispatch("request",["../api/DeleteImage.php",{id:t.getters.getUID,imageid:i}])},modify:function(t,e){var i=e.imageid,n=e.title,s=e.description,r=e.city,a=e.country,o=e.content,c=e.file,l=new FormData;return l.append("id",t.getters.getUID),l.append("imageid",i),l.append("title",n),l.append("description",s),l.append("city",r),l.append("country",a),l.append("file",c),l.append("content",o),new Promise((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return console.log(t)};et.a.post("../api/ModifyImage.php",l).then((function(n){n["data"]["actionState"]?(t.dispatch("freshUserinfo"),e(n["data"]["id"])):i(n["data"]["error"])}))["catch"]((function(t){return i(t)}))}))}}});n["default"].use(s["a"]),n["default"].use(r["a"]),n["default"].use(a["a"]);var Ve=new a["a"]({routes:[{path:"",component:m,children:[{path:"",component:H,children:[{name:"home",path:"",component:ht},{name:"browser",path:"browser",component:Gt},{name:"search",path:"search",component:Kt},{name:"upload",path:"upload/:imageid",component:ne},{name:"detail",path:"detail/:id",component:le},{name:"favor",path:"favor",component:Le},{name:"image",path:"image",component:je}]},{name:"login",path:"login",component:he},{name:"signup",path:"signup",component:_e}]}]});new n["default"]({render:function(t){return t(m)},store:qe,router:Ve}).$mount("#app")},"25ab":function(t,e,i){},5572:function(t,e,i){"use strict";var n=i("25ab"),s=i.n(n);s.a},"5b92":function(t,e,i){},"5e68":function(t,e,i){},"78cf":function(t,e,i){},"9eb7":function(t,e,i){"use strict";var n=i("78cf"),s=i.n(n);s.a},a5b8:function(t,e,i){},b906:function(t,e,i){"use strict";var n=i("5b92"),s=i.n(n);s.a},be3e:function(t,e,i){},d2a0:function(t,e,i){"use strict";var n=i("a5b8"),s=i.n(n);s.a},f0ac:function(t,e,i){"use strict";var n=i("5e68"),s=i.n(n);s.a},f2ae:function(t,e,i){"use strict";var n=i("15b6"),s=i.n(n);s.a}});
//# sourceMappingURL=app.d44bd6e5.js.map