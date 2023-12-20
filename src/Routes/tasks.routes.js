import { Router } from "express";
import { authRequired } from "../Middlewares/validate.token.js";
import { 
    getTasks, 
    getTask, 
    postTask,
    deleteTask,
    putTask
} from "../Controllers/tasks.controller.js"


const router = Router()

router.get("/tasks", authRequired, getTasks) 

router.get("/tasks/:id", authRequired, getTask)

router.post("/tasks", authRequired, postTask)

router.delete("/tasks/:id", authRequired, deleteTask)

router.put("/tasks/:id", authRequired, putTask)


export default router;