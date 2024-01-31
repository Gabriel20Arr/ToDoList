import axios from "./Axios"

export const getTasksrequest = () => axios.get('/tasks');

export const getTaskrequest = (id) => axios.get(`/tasks/${id}`);

export const createTaskRequest = (task) => axios.post('/tasks', task);

export const updateTaskRequest = (id, task) => axios.put(`/tasks/${id}`, task);

export const deleteTasksrequest = (id) => axios.delete(`/tasks/${id}`);

// CALENDAR..
export const geCalendarrequest = (id) => axios.get(`/calendar/${id}`);

export const creatCalendarRequest = (calendar) => axios.post('/calendar', calendar);

export const updatCalendarRequest = (id, calendar) => axios.put(`/calendar/${id}`, calendar);

export const deleteCalendarrequest = (id) => axios.delete(`/calendar/${id}`);