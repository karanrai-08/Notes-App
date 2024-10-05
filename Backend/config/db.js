import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config();

const DbCon = async () => {
  try {
    // Use the MONGODB_URI from the .env file
    const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/Notes_App";
    
    // Connect to the MongoDB database
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,   // Ensure MongoDB URI parsing is handled correctly
      useUnifiedTopology: true, // Enables new connection management
    });

    console.log('Mongodb is connected');
  } catch (error) {
    console.error("Error in mongodb connection", error);
    process.exit(1); // Exit the process with failure
  }
};

export default DbCon;
