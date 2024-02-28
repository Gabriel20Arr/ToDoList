import axios from "axios";

// const URLBACK = import.meta.env.VITE_LOCALHOSTBACK 
const URLBACK = "http://localhost:4000"
 
const instance = axios.create({
    baseURL: `${URLBACK}/api`,
    withCredentials: true
})

export default instance;