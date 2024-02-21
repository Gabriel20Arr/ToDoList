import mongoose from "mongoose";
import { config } from 'dotenv';
config();

const { URLMONGODB } = process.env;

export const connectDB = async () => {
    try {
        await mongoose.connect(URLMONGODB);
        console.log(">>> DB is connected");
    } catch (error) {
        console.log(error);
    }
}
