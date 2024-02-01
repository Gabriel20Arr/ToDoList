import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors"

import authRoutes from "./Routes/auth.routes.js";
import tasksRoutes from "./Routes/tasks.routes.js";
import favoritesRoutes from "./Routes/favorites.routes.js";
import calendarRoutes from "./Routes/calendar.routes.js";

const app = express()

app.use(cors({
    origin: [  
               'http://localhost:5173', 'https://api.cloudinary.com/v1_1/dmtzjtgy8/todolist/upload'
            ],
    credentials: true
}
))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use("/api", authRoutes)
app.use("/api", tasksRoutes)
app.use("/api", favoritesRoutes)
app.use("/api", calendarRoutes)

export default app;