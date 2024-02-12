import axios from "./Axios"

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginrequest = (user) => axios.post(`/login`, user);

export const profilerequest = () => axios.get(`/profile/:id`);

export const verifytokenRequet = () => axios.get('/verify')

export const forgetPasswordRequet = (id) => axios.put('/reset-password', id)
