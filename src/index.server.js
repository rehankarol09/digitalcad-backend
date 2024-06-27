import express from "express";
import userRoutes from "./routes/user.route.js"
import mongoose from "mongoose"
import cors from "cors"
const app = express()
const PORT = 8000;

app.use(express.json())
app.use(cors())
app.use(userRoutes)

mongoose.connect("mongodb://localhost:27017/dct").then(()=>console.log("database connected"))
app.listen(PORT,()=>{
    console.log("Server connected")
})