import api from "@/service/api.js";
import toast from "@/lib/toast.js";

const state = {entries: []};
const getters = {
    ENTRIES: state => {
        return state.entries;
    }
};
const mutations = {
    ADD_ENTRY: (state, entry) => {
        state.entries.push(entry);
        toast.success("Entry added!");
    },
    SET_ENTRIES: (state, payload) => {
        state.entries = payload;
        toast.info("History loaded!");
    }
};
const actions = {
    GET_ENTRIES: async context => {
        api()
            .get("/getEntries")
            .then(res => {
                context.commit("SET_ENTRIES", res.data);
            })
            .catch(err => {
                toast.error("Could not load history because: " + err.message);
            });
    },
    POST_ENTRY: async (context, payload) => {
        api()
            .post("/addEntry", payload)
            .then(res => {
                context.commit("ADD_ENTRY", res.data);
            })
            .catch(err => {
                toast.error(err.message);
            });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
