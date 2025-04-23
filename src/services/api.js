import axios from "axios";

const api = axios.create({
    baseURL: "",
    "Content-type": "application/json"
});

export default api;