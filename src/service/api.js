import axios from "axios";

export default () => {
    let currentUser;
    try {
        currentUser = JSON.parse(window.localStorage.currentUser);
    } catch (err) {
        currentUser = null;
    }
    return axios.create({
        baseURL: "http://localhost:8088",
        withCredentials: false,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorisation: currentUser.token || "",
            "Access-Control-Allow-Origin": "http://localhost:8080"
        }
    });
};
