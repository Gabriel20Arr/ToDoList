import { Router } from "express";
import { authRequired } from "../Middlewares/validate.token.js";
import { 
    getTasks, 
    getTask, 
    postTask,
    deleteTask,
    putTask
} from "../Controllers/tasks.controller.js"
import { validateSchema } from "../Middlewares/validate.middlewares.js"
import { taskSchema } from "../Schema/auth.task.js"

const router = Router()

router.get("/tasks", authRequired, getTasks) 

router.get("/tasks/:id", authRequired, getTask)

router.post("/tasks", authRequired, validateSchema(taskSchema), postTask)

router.delete("/tasks/:id", authRequired, deleteTask)

router.put("/tasks/:id", authRequired, putTask)


export default router;