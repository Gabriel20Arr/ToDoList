import { createContext, useContext, useState } from "react"
import { createTaskRequest, getTasksrequest, deleteTasksrequest, getTaskrequest } from "../api/tasks"

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext)

    if(!context) {
        throw new Error('useTasks must be within a Taskprovider')
    }

    return context;
}

export function TaskProvider({ children }) {
    const [ task, setTask ] = useState([])

    const AllTask = async () => {
        try {
            const res = await getTasksrequest()
            setTask(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const taskById = async (id) => {
        const res = await getTaskrequest(id)
        return res.data
    } 
    

    const createTasks =  async ( task ) => {
        const res = await createTaskRequest(task);
        console.log(res);    
    }

    const deleteTask = async (id) => {
        try {
            const res = await deleteTasksrequest(id)
            if(res.status === 200) setTask(task.filter(task => task._id !== id))

        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <TaskContext.Provider 
            value={{task, createTasks, AllTask, deleteTask, taskById}}
        >
            {children}
        </TaskContext.Provider>
    )
}