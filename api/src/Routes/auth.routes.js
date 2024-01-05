import { Router } from "express"
import { registers, login, logout, profile, verifyToken, putPassword } from "../Controllers/auth.controllers.js"
import { authRequired } from "../Middlewares/validate.token.js"
import { validateSchema } from "../Middlewares/validate.middlewares.js"
import { registerSchema, loginSchema } from "../Schema/auth.user.js"

const router = Router()

router.post('/register', validateSchema(registerSchema), registers)

router.post("/login", validateSchema(loginSchema), login)

router.post("/loguot", logout) 

router.get('/verify', verifyToken)

router.get("/profile", authRequired, profile)

router.put("/reset-password/:id", authRequired, putPassword)

export default router;