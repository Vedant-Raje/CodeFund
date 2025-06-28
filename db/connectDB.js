import mongoose from "mongoose";

const connectDb = async () => {
    if (mongoose.connection.readyState >= 1) {
        // Already connected or connecting
        return mongoose.connection;
    }
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDb;