import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./db.js";

dotenv.config();

connectDB()
const PORT= 4000

app.listen(PORT)
console.log("Server on port", PORT);