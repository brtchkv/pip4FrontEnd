import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/main",
        name: "main",
        component: () => import("../views/Main.vue")
    },
    {
        path: "/account/login",
        name: "login",
        component: () => import("../views/Login.vue")
    },
    {
        path: "/account/register",
        name: "register",
        component: () => import("../views/Register.vue")
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/About.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;
