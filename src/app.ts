// src/app.ts
import express, { Application } from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config"
import routes from "./routes"

dotenv.config()

const app: Application = express()

// Middleware
app.use(cors())
app.use(express.json())

// Connect to DB
connectDB()

// Routes
app.use("/api", routes)

export default app
