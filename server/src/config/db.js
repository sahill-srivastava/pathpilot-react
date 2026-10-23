import mongoose from "mongoose";

export const connectDb = async () => {
    console.log("db connected")
    // console.log(process.env.MONGO_URI)
    return await mongoose.connect(process.env.MONGO_URI);
}