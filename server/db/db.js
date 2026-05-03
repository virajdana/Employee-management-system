import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);

        console.log(`MongoDB Connected: ${conn.connection.host} ✅`);
    } catch (error) {
        console.error("Database connection failed ❌");
        console.error(error.message);
        process.exit(1); // app eka stop karanawa
    }
};

export default connectToDatabase;
