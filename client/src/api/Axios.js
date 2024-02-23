import axios from "axios";

const URLBACK = "http://localhost:4000" || import.meta.env.VITE_LOCALHOSTBACK 
 
const instance = axios.create({
    baseURL: "https://backendtodo-q512.onrender.com/api",
    // baseURL: `${URLBACK}/api`,
    withCredentials: true
})

export default instance;