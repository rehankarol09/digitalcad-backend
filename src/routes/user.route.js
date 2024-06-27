import express from "express";
import { createUser } from "../handlers/user.handler.js";
import { signuprequest } from "../validators/auth.js";
const router = express.Router();
const users = [];


router.post("/users",signuprequest,isRequestValidated,createUser)


export default router;
