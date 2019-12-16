import api from "@/service/api.js";
import toast from "@/lib/toast.js";

const state = {
    entries: [],
    r: 1
};
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
    },
    CHANGE_R: (state, payload) => {
        state.r = payload
    }
};
const actions = {
    GET_ENTRIES: async context => {
        api()
            .get("/api/history")
            .then(res => {
                context.commit("SET_ENTRIES", res.data);
            })
            .catch(err => {
                toast.error("Could not load history: " + err.message);
            });
    },
    POST_ENTRY: async (context, payload) => {
        api()
            .post("/api/point", payload)
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
