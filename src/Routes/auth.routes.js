import { Router } from "express"
import { registers, login, logout, profile } from "../Controllers/auth.controllers.js"
import { authRequired } from "../Middlewares/validate.token.js"

const router = Router()

router.post('/register', registers)

router.post("/login", login)

router.post("/loguot", logout)

router.get("/profile", authRequired, profile)

export default router;