import { Router } from "express";
import { authRequired } from "../Middlewares/validate.token.js";
import { 
    getFav, 
    postFav,
    deleteFav,
    getFavs
} from "../Controllers/Favorite.controllers.js"
import { validateSchema } from "../Middlewares/validate.middlewares.js"
import { taskSchema } from "../Schema/auth.task.js"


const router = Router()


router.get("/favorite", authRequired, getFavs) 

router.get("/favorite/:id", authRequired, getFav)

router.post("/favorite", authRequired, validateSchema(taskSchema), postFav)

router.delete("/favorite/:id", authRequired, deleteFav)

export default router;