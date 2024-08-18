import mongoose from "mongoose";



const connectDb =async ()=>{
    try {
            const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Database Connected: ${conn.connection.host}`.bgGreen)
    } catch (error) {
        console.log(`Something went wrong in Database: ${error}`.bgRed)
    }
}


export default connectDb;



PORT = 8080
