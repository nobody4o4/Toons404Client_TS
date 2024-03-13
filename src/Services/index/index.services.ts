import axios from "axios";

export const url = axios.create({ 
    baseURL: "http://localhost:3000/api/" ,
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")?.replace(/"/g, "")}`,
    }
});
