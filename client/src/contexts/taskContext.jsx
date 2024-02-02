import { createContext, useContext, useState, useEffect } from "react"
import { 
    createTaskRequest, 
    getTasksrequest, 
    deleteTasksrequest, 
    getTaskrequest, 
    updateTaskRequest,
    geCalendarrequest,
    creatCalendarRequest,
    updatCalendarRequest,
    deleteCalendarrequest 
} from "../api/tasks"

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
    const [errores, setErrores] = useState([])
    
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
        try {
            const res = await createTaskRequest(task);
        } catch (error) {
            // console.log(error);    
            setErrores(error.response.data)
        }
    }

    const UpdateTask = async (id, task) => {
        try {
            const res = await updateTaskRequest(id, task)
        } catch (error) {
            setErrores(error.response.data)
            // console.log(error.response.data);
        }
    }

    const deleteTask = async (id) => {
        try {
            const res = await deleteTasksrequest(id)
            if(res.status === 200) setTask(task.filter(task => task._id !== id))

        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        if(errores.length > 0 ) {
            const timer = setTimeout(() => {
                setErrores([])
            }, 7000)
            // una vez que no se utiliza limpiamos el setTimeout
            return () => clearTimeout(timer)
        }
    }, [errores] )


    // CALENDAR
    const calendarById = async (id) => {
        const res = await geCalendarrequest(id)
        console.log(res.data);
        return res.data
    } 

    const createCalendar =  async ( calendar ) => {
        const res = await creatCalendarRequest(calendar);
        // console.log(res);    
    }

    const UpdatCalendar = async (id, calendar) => {
        const res = await updatCalendarRequest(id, calendar)
        // console.log(res);
    }

    const deletCalendar = async (id) => {
        try {
            const res = await deleteCalendarrequest(id)
            if(res.status === 200) setTask(task.filter(calendar => calendar._id !== id))

        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <TaskContext.Provider 
            value={{ 
                task,
                createTasks, 
                AllTask, 
                deleteTask, 
                taskById, 
                UpdateTask,
                errores
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}