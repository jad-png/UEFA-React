import axios from "axios";

const api = axios.create({
    baseURL: "https://api.sofascore.com/api/v1/sport/football/scheduled-events/2025-04-16",
    "Content-type": "application/json"
});

export default api;