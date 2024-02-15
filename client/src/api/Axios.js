import axios from "axios";
 
const instance = axios.create({
    baseURL: 'http://localhost:4000/api',
    // baseURL: 'https://to-do-list-3z3d.vercel.app/api',
    withCredentials: true
})

export default instance;