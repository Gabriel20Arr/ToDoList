import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import { PORT } from "./config.js"

dotenv.config();

connectDB()

app.listen(PORT)
console.log("Server on port", PORT);