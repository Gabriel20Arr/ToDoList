import axios from "axios";

const URLBACK = import.meta.env.VITE_LOCALHOSTBACK || "http://localhost:4000";
 
const instance = axios.create({
    baseURL: `${URLBACK}/api`,
    // baseURL: 'https://to-do-list-3z3d.vercel.app/api',
    withCredentials: true
})

export default instance;