import express from "express";
import userRoutes from "./routes/user.route.js"
import mongoose from "mongoose"
import cors from "cors"
import { PORT } from "./config.js";

const app = express()
app.use(express.json())
app.use(cors())
app.use(userRoutes)

mongoose.connect("mongodb://localhost:27017/dct").then(()=>console.log("database connected"))
app.listen(PORT,()=>{
    console.log("Server connected",PORT)
})