<template>
    <div class="main">
        <b-row class="row justify-content-center">
            <div>
                <b-nav small>
                    <b-nav-item @click="showHistory = !showHistory"
                                :class="[{ active: showHistory}]"
                    >History
                    </b-nav-item>
                    <b-nav-item @click="logout">Log Out</b-nav-item>
                </b-nav>
            </div>
        </b-row>
        <div class="row">
            <!--            <CoordPlane id="coords" :entries="entries" @addentry="addEntry" class="justify-content-center"-->
            <!--                        style="padding-bottom: 15px; padding-top: 10px; margin: 0 auto;"/>-->
            <keep-alive>
                <component :is="currentTabPlane" :entries="entries" @addentry="addEntry" class="justify-content-center"
                           style="padding-bottom: 15px; padding-top: 10px; margin: 0 auto;"></component>
            </keep-alive>
            <keep-alive>
                <component :is="currentTab" :entries="entries" @addentry="addEntry"
                           class="text-center justify-content-center"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import {store} from "../store";

    import CoordPlane from "../components/CoordPlane.vue";
    import Form from "../components/Form.vue";
    import Table from "../components/Table.vue";
    import toast from "@/lib/toast.js";
    export default {
        name: "Main",
        components: {CoordPlane, Form, Table},
        data() {
            return {
                showHistory: false
            };
        },
        computed: {
            currentTabPlane() {
                return this.showHistory ? "" : "CoordPlane";
            },
            currentTab() {
                return this.showHistory ? "Table" : "Form";
            },
            entries() {
                return this.$store.getters.ENTRIES;
            }
        },
        methods: {
            addEntry(entry) {
                this.$store.dispatch("POST_ENTRY", entry);
            },
            getEntries() {
                this.$store.dispatch("GET_ENTRIES");
            },
            logout() {
                store.dispatch("LOGOUT");
            }

        },
        beforeRouteEnter(to, from, next) {
            next(vue => {
                if (vue.$store.getters.IS_AUTHENTICATED) {
                    vue.getEntries();
                    next();
                } else {
                    next("/login");
                    toast.info("You must login");
                }
            });
        }
    };
</script>

<style lang="css">

</style>
