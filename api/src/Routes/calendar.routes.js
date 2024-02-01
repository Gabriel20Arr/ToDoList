import { Router } from "express";
import { 
    calendarPost, 
    getCalendar,
    getDelete,
    putCalendar
} from "../Controllers/calendar.controllers.js"

const router = Router()

router.get("/calendar/:id", getCalendar)

router.post("/calendar", calendarPost)

router.delete("/calendar/:id", getDelete)

router.put("/calendar/:id", putCalendar)

export default router;