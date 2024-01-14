import { createContext, useContext, useState } from "react"
import { createTaskRequest, getTasksrequest, deleteTasksrequest, getTaskrequest, updateTaskRequest } from "../api/tasks"

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
        // console.log(res.data);
        return res.data
    } 
    

    const createTasks =  async ( task ) => {
        const res = await createTaskRequest(task);
        // console.log(res);    
    }

    const UpdateTask = async (id, task) => {
        const res = await updateTaskRequest(id, task)
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
            value={{ task, createTasks, AllTask, deleteTask, taskById, UpdateTask }}
        >
            {children}
        </TaskContext.Provider>
    )
}