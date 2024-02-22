import cors from "cors"
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
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
    origin: [ "http://localhost:5173", "https://backendtodo-q512.onrender.com", URL_CLAUDINARY,  VITE_LOCALHOSTBACKLOCAL, VITE_LOCALHOSTBACK ],
    credentials: true,
}
))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser()) 

app.use("/api", authRoutes)
app.use("/api", tasksRoutes)
app.use("/api", favoritesRoutes)
app.use("/api", calendarRoutes)

export default app;