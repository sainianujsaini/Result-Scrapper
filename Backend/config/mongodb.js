import mongoose from 'mongoose';
const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/batch-result");
        console.log("MongoDB connected successfully");
    }
    catch(err){
        console.log("Error connecting to MongoDB: ", err);
    }
};
export default connectDB;
