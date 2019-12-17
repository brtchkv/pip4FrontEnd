import axios from "axios";

export default (includeAuth = true) => {

    let request = {
        baseURL: "http://localhost:25980/backend-0.1",
        withCredentials: false,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    };
    if (includeAuth) {
        let currentUserString = window.localStorage.currentUser;
        if (localStorage.getItem("currentUser") !== null) {
            let currentUser = currentUserString ? JSON.parse(currentUserString) : "";
            if (currentUser !== null) {
                request.headers.Authorization = "Basic " + window.btoa(currentUser.username + ':' + currentUser.password);
            }
        }
    }
    return axios.create(request);
};
