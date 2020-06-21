import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)

import App from "./App";
import Public from "../components/Public";
import Home from "../components/Home";
import Browser from "../components/Browser";
import Search from "../components/Search";
import Upload from "../components/Upload";
import Detail from "../components/Detail";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Favor from "../components/Favor";
import Image from "../components/MyImage";
const router = new VueRouter({
    routes: [
        {
            path: '', component: App,
            children: [
                {
                    path: '', component: Public,
                    children: [
                        { name: 'home', path: '', component: Home },
                        { name: 'browser', path: 'browser', component: Browser },
                        { name: 'search', path: 'search', component: Search },
                        { name: 'upload', path: 'upload', component: Upload },
                        { name: 'detail', path: 'detail/:id', component: Detail },
                        { name: 'favor', path: 'favor', component: Favor },
                        { name: 'image', path: 'image', component: Image }
                    ]
                },
                {
                    name: 'login', path: 'login', component: Login
                },
                {
                    name: 'signup', path: 'signup', component: Signup
                }
            ]
        }
    ]
})
import userinfo from "./userinfo";
new Vue({
    render: h => h(App),
    store: userinfo,
    router: router
}).$mount("#app")