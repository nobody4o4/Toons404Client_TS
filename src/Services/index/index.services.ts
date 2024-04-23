import { getUserData } from "@/utils/authStorage";
import axios from "axios";


const userData = getUserData()


export const url = axios.create({ 
    baseURL: "http://localhost:3000/api/" ,
    headers: {
        "Authorization": `Bearer ${userData?.token?.replace(/"/g, "")}`,
    }
});
