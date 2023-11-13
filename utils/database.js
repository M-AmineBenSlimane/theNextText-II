import mongoose from "mongoose";

let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log('CONNECTED MONGO');
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
           dbName: "chare_prompt",
           useNewUrlParser: true,
           useUnifiedTopology: true,
        })
        isConnected = true;

        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
    }
}