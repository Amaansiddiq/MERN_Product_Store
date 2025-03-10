import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
//console.log('MongoDB URI:', process.env.MONGO_URI);
export const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(error){
       console.log(`Error:${error.message}`);
       process.exit(1);
    }
}