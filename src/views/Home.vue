<template lang="html">
    <div class="home column">
        <div v-if="!isAuthenticated">
            <Login/>
        </div>
        <div v-else>
            <Main/>
        </div>
    </div>
</template>

<script>
    import {store} from "../store";
    import Login from "../views/Login.vue";
    import Main from "../views/Main.vue";

    export default {
        name: "Home",
        components: {Login, Main},
        methods: {
            logout() {
                store.dispatch("LOGOUT");
            }
        },
        computed: {
            username() {
                return store.getters.USERNAME;
            },
            isAuthenticated() {
                return store.getters.IS_AUTHENTICATED;
            }
        },
        mounted() {
            () => alert(store.backend);
        }
    };
</script>

<style scoped>
    .home {
        height: 100%;
    }

    /*.content {*/
    /*  display: inline-flex;*/
    /*  align-items: center;*/
    /*  height: 80%;*/
    /*}*/
</style>
