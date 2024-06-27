import express from "express";
import userRoutes from "./routes/user.route.js"
import mongoose from "mongoose"
const app = express()
const PORT = 8000;

app.use(express.json())
app.use(userRoutes)

mongoose.connect("mongodb://localhost:27017/dct").then(()=>console.log("database connected"))
app.listen(PORT,()=>{
    console.log("Server connected")
})