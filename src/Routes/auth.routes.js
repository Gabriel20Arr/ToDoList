import { Router } from "express"
import { registers, login, logout, profile, putPassword } from "../Controllers/auth.controllers.js"
import { authRequired } from "../Middlewares/validate.token.js"

const router = Router()

router.post('/register', registers)

router.post("/login", login)

router.post("/loguot", logout) 

router.get("/profile", authRequired, profile)

router.put("/reset-password/:id", authRequired, putPassword)

export default router;