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
    },
    {
        path: '*', redirect: '/'
    }
];

const router = new VueRouter({
    routes
});

//
// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/account/login', '/account/register', 'main'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');
//
//   if (authRequired && !loggedIn) {
//     return next('/account/login');
//   }
//   next();
// })

export default router;
