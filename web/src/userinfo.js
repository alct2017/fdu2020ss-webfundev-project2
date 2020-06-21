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
        isLogin(state) {
            return state.login
        },
        getUID(state, getters) { return getters.isLogin ? state.id : null; },
        getUsername(state, getters) { return getters.isLogin ? state.name : null; },
        getFavorList(state) {
            return state.favor ? state.favor : [];
        },
        getImageList(state) {
            return state.image ? state.image : [];
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
        request(context, [api, form]) {
            return new Promise((resolve = () => { }, reject = error => console.log(error)) => {
                axios
                    .post(api, form)
                    .then(response => {
                        let $receive = response.data;
                        if ($receive["actionState"]) {
                            context.commit("setUserinfo", $receive);
                            resolve();
                        } else {
                            reject($receive["error"]);
                        }
                    })
                    .catch(error => reject(error));
            });
        },
        freshUserinfo(context) {
            return context.dispatch("login", { token: sessionStorage.getItem("token"), id: sessionStorage.getItem("id") });
        },
        login(context, { email, password, remember, token, id }) {
            return context.dispatch("request", ["./api/Login.php", { email: email, password: password, remember: remember, token: token, id: id }]);
        },
        logout(context) {
            context.commit("clearUserinfo");
        },
        signup(context, { email, username, password }) {
            return context.dispatch("request", ["../api/Signup.php", { email: email, username: username, password: password }]);
        },
        like(context, { imageid }) {
            return context.dispatch("request", ["../api/Like.php", { id: context.state.id, imageid: imageid }]);
        },
        unlike(context, { imageid }) {
            return context.dispatch("request", ["../api/Unlike.php", { id: context.state.id, imageid: imageid }]);
        },
        upload(context, {
            title,
            description,
            city,
            country,
            content,
            file
        }) {
            let formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("city", city);
            formData.append("country", country);
            formData.append("uid", context.getters.getUID);
            formData.append("content", content);
            formData.append("file", file);
            return new Promise((resolve = () => { }, reject = error => console.log(error)) => {
                axios
                    .post("../api/Upload.php", formData)
                    .then(responce => {
                        if (responce["data"]["actionState"]) {
                            context.dispatch("freshUserinfo");
                            resolve(responce["data"]["id"]);
                        } else {
                            reject(responce["data"]["error"]);
                        }
                    })
                    .catch(error => reject(error));
            });
        },

        delete(context, { imageid }) {
            context.dispatch("request", ["../api/DeleteImage.php", { id: context.getters.getUID, imageid: imageid }])
        },
        modify() { }
    },
});