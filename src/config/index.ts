import mongoose from "mongoose"

export const connectDB = async () => {
  const mongoUri =
    process.env.MONGO_URI || "mongodb://localhost:27017/mySocialAi"
  try {
    await mongoose.connect(mongoUri)
    console.log("MongoDB connected")
  } catch (error) {
    console.error("MongoDB connection error:", error)
    process.exit(1)
  }
}
