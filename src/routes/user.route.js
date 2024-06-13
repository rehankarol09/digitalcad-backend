import express from "express";
import { getUser } from "../handlers/user.handler.js";
const router = express.Router();
const users = [];


router.post("/users",getUser)

export default router;
