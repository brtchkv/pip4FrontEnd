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
    },
    SET_ENTRIES: (state, payload) => {
        state.entries = payload;
    }
};
const actions = {
    GET_ENTRIES: async context => {
        api()
            .get("/api/history")
            .then(res => {
                // alert(JSON.stringify(res.data));
                context.commit("SET_ENTRIES", res.data);
            })
            .catch(err => {
                toast.error("Could not load history: " + err.message);
            });
    },
    POST_ENTRY: async (context, payload) => {
        // alert(JSON.stringify(payload));
        api()
            .post("/api/point", JSON.stringify(payload))
            .then(res => {
                // alert(JSON.stringify(res.data));
                let entry = {
                    x: res.data.x,
                    y: res.data.y,
                    r: res.data.r,
                    result: res.data.result
                };
                if (entry.result) {
                    toast.success("Correct!");
                } else {
                    toast.error("Wrong!");
                }

                context.commit("ADD_ENTRY", entry);
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
