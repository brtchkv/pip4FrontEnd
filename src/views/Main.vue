<template>
    <div class="main">
        <div class="row around max">
            <router-link id="link-home" to="/">
                <ion-icon name="arrow-round-back" alt="back"/>
            </router-link>
            <TimeAndDate/>
            <button
                    id="history-button"
                    :class="['icon-button', { active: showHistory }]"
                    @click="showHistory = !showHistory"
            >
                <ion-icon name="time"></ion-icon>
            </button>
        </div>
        <div class="row around">
            <CoordPlane id="coords" :entries="entries" @addentry="addEntry"/>
            <keep-alive>
                <component :is="currentTab" :entries="entries" @addentry="addEntry"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import CoordPlane from "../components/CoordPlane.vue";
    import Form from "../components/Form.vue";
    import TimeAndDate from "../components/TimeAndDate.vue";
    import Table from "../components/Table.vue";
    import toast from "@/lib/toast.js";

    export default {
        name: "Main",
        components: {CoordPlane, Form, Table, TimeAndDate},
        data() {
            return {
                showHistory: false
            };
        },
        computed: {
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
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vue => {
                if (vue.$store.isAuthenticated) {
                    next();
                    vue.$store.dispatch("GET_ENTRIES");
                } else {
                    next("/login");
                    toast.info("You must login");
                }
            });
        }
    };
</script>

<style lang="css">
    #history-button {
        position: relative;
        top: -2px;
    }

    .max {
        width: 100%;
    }
</style>
