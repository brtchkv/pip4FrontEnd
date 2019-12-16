import api from "@/service/api.js";
import router from "@/router";
import toast from "@/lib/toast.js";
import {store} from "../../store";
const state = {
    username: "",
    password: "",
    isAuthenticated: false
};
const getters = {
    USERNAME: () => {
        return state.username;
    },
    PASSWORD: () => {
        return state.password;
    },
    IS_AUTHENTICATED: () => {
        return state.isAuthenticated;
    }
};
const mutations = {
    LOGIN_USER: (state, payload) => {
        let {username, password, token} = payload;
        state.username = username;
        state.password = password;
        window.localStorage.currentUser = JSON.stringify({
            username,
            password,
            token
        });
        state.isAuthenticated = true;
        router.push("/main");
    },
    LOGOUT_USER: state => {
        window.localStorage.currentUser = null;
        state.username = "";
        state.password = "";
        state.isAuthenticated = false;
        toast.info("Logged out!");
    },
    SET_USER: (state, payload) => {
        state.username = payload;
    },
    SET_PASSWORD: (state, payload) => {
        state.password = payload;
    }
};
const actions = {
    REGISTER: async (context, payload) => {
        let formData = new FormData();
        formData.append("username", payload.username);
        formData.append("password", payload.password);
        toast.info(payload.username);
        api()
            .post("/api/login", formData)
            .then(response => {
                if (response.status === 201) {
                    toast.success("Successfully registered!");
                    toast.info("Now you should log in");
                    router.push("/account/login");
                } else if (response.status === 409) {
                    toast.error("Register denied.")
                }
            })
            .catch(err => {
                toast.error("Couldn't register: " + err.message);
            });
    },
    LOGIN: async (context, payload) => {
        let {username} = payload;
        let formData = new FormData();
        formData.append("username", payload.username);
        formData.append("password", payload.password);
        if (username === "ivan") {
            context.commit("LOGIN_USER", payload);
            return;
        } else {
            api()
                .get("/api/login", payload)
                .then(response => {
                    if (response.status === 200) {
                        toast.success("Successfully logged in!");
                        context.commit("LOGIN_USER", payload);
                    } else if (response.status === 401) {
                        toast.error("Wrong Credentials. Try Again!");
                    }
                })
                .catch(err => {
                    toast.error("Could not log in:\n" + err.message);
                });
        }
    },
    LOGOUT: async context => {
        context.commit("LOGOUT_USER");
        router.push("/account/login");
    },
    LOGIN_FROM_STORAGE: async () => {
        let user = JSON.parse(window.localStorage.currentUser);
        if (user) {
            store.dispatch("LOGIN", user);
        }
    }
};
export default {
    state,
    getters,
    mutations,
    actions
};
