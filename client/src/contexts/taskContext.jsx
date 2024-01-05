import { createContext, useContext, useState } from "react"
import { createTaskRequest, getTasksrequest } from "../api/tasks"

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

    const createTasks =  async ( task ) => {
        const res = await createTaskRequest(task);
        console.log(res);    
    }
    
    return(
        <TaskContext.Provider 
            value={{task, createTasks, AllTask}}
        >
            {children}
        </TaskContext.Provider>
    )
}