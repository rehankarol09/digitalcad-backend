import express from "express";
import userRoutes from "./routes/user.route.js"
const app = express()
const PORT = 8000;

app.use(express.json())
app.use(userRoutes)




app.listen(PORT,()=>{
    console.log("Server connected")
})