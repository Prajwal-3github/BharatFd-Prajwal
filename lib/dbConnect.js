import mongoose from "mongoose";

let isConnected = false;
let url = process.env.DBURL;
export const connectToDB = async () => {

    mongoose.set('strictQuery', true)
    if (isConnected) {
        console.log("mongoDb is connected")
        return
    }
    else {

        try {
            mongoose.connect(url, {
                dbName: "Bharat",
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 5000, 
            })
                .then(() => {
                    console.log("connected")
                })

        } catch (error) {

        }
    }
}