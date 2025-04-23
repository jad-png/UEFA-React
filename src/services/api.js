import axios from "axios";

const api = axios.create({
    baseURL: "https://api.sofascore.com/api/v1",
    "Content-type": "application/json"
});

export default api;