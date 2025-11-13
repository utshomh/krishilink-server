import mongoose from "mongoose";

import { MONGODB_URI } from "./environment.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      serverApi: { version: "1", strict: true, deprecationErrors: true },
    });
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};
