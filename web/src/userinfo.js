import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        login: false,
        id: "",
        email: "",
        name: "",
        favor: [],
        image: []
    },
    getters: {
        isLogin(state) { return state.login; },
        getUID(state, getters) { return getters.isLogin ? state.id : null; },
        getUsername(state, getters) { return getters.isLogin ? state.name : null; },
        getFavorList(state) {
            return state.favor ? state.favor : [];
        }
    },
    mutations: {
        setUserinfo(state, userinfo) {
            for (const prop in state) {
                if (userinfo.hasOwnProperty(prop)) {
                    state[prop] = userinfo[prop];
                }
            }
            if (userinfo["token"]) {
                sessionStorage.setItem("token", userinfo["token"]);
                sessionStorage.setItem("id", userinfo["id"]);
            }
            state.login = true;
        },
        clearUserinfo(state) {
            for (const prop in state) {
                state[prop] = null;
            }
            sessionStorage.clear();
            state.login = false;
        }
    },

    actions: {
        request(state, [api, form]) {
            return new Promise((resolve, reject) => {
                axios
                    .post(api, form)
                    .then(response => {
                        let $receive = response.data;
                        if ($receive["actionState"]) {
                            this.commit("setUserinfo", $receive);
                            resolve();
                        } else {
                            reject($receive["error"]);
                        }
                    })
                    .catch(error => reject(error));
            });
        },
        login(context, { email, password, remember, token, id }) {
            return this.dispatch("request", ["./api/Login.php", { email: email, password: password, remember: remember, token: token, id: id }]);
        },
        logout(context) {
            context.commit("clearUserinfo");
        },
        signup(context, { email, username, password }) {
            return this.dispatch("request", ["../api/Signup.php", { email: email, username: username, password: password }]);
        },
        like(context, { imageid }) {
            return this.dispatch("request", ["../api/Like.php", { id: context.state.id, imageid: imageid }]);
        },
        unlike(context, { imageid }) {
            return this.dispatch("request", ["../api/Unlike.php", { id: context.state.id, imageid: imageid }]);
        },
        upload() { },
        delete() { },
        modify() { }
    },
});