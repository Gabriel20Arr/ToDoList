import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors"
import { URL_LOCALHOST2 } from "./config.js"

import { config } from "dotenv";
config()
const { URL_CLAUDINARY, URL_LOCALHOST, VITE_LOCALHOSTBACKLOCAL, VITE_LOCALHOSTBACK } =  process.env;

import authRoutes from "./Routes/auth.routes.js";
import tasksRoutes from "./Routes/tasks.routes.js";
import favoritesRoutes from "./Routes/favorites.routes.js";
import calendarRoutes from "./Routes/calendar.routes.js";

const app = express()

app.use(cors({
    origin: [ "http://localhost:5173", "https://backendtodo-q512.onrender.com/api", URL_CLAUDINARY,  VITE_LOCALHOSTBACKLOCAL, VITE_LOCALHOSTBACK ],
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