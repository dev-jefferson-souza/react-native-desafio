import axios from "axios";

export const api = axios.create({
    baseURL: 'http://107.178.219.190:8080/api',
    headers: {
        "Content-Type": "application/json",
    },
});