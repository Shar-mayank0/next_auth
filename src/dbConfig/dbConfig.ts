import mongoose from "mongoose";

export async function dbConnect() {
    try {
        mongoose.connect(process.env.MONGODB_URI!);
        const db = mongoose.connection;
        db.on('connercted', () => {
            console.log("Connected to database");
        });

        db.on('error', (error) => {
            console.error("Error connecting to database: ", error);
            process.exit(1);
        });
    } catch (error) {
        console.error("Error connecting to database: ", error);
        console.error(error);
    }
}
