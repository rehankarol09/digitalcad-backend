import {check} from "express-validator";


export const signuprequest = [check("firstname").notEmpty().withMessage("First name is required")]
