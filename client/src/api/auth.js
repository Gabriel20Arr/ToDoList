import axios from "./Axios"

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginrequest = (user ) => axios.post(`/login`, user);

export const verifytokenRequet = () => axios.get('/verify')