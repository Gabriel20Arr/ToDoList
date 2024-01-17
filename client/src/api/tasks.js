import axios from "./Axios"

export const getTasksrequest = () => axios.get('/tasks');

export const getTaskrequest = (id) => axios.get(`/tasks/${id}`);

export const createTaskRequest = (task) => axios.post('/tasks', task);

export const updateTaskRequest = (id) => axios.put(`/tasks/${id}`);

export const deleteTasksrequest = (id) => axios.delete(`/tasks/${id}`);