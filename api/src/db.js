import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://gabriel2021arr:rF8XeP3L8JrouSFE@cluster0.posksnj.mongodb.net/");
        // await mongoose.connect(env.process.URLMONGODB);
        console.log(">>> DB is connected");
    } catch (error) {
        console.log(error);
    }
}
