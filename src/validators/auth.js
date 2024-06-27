import { check } from "express-validator";

export const signuprequest = [
  check("firstname")
  .notEmpty()
  .withMessage("First name is required"),

  check("lastname")
  .notEmpty()
  .withMessage("Last name is required"),

  check("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long")
        .matches(/[A-Z]/)
        .withMessage("Password must contain at least one uppercase letter")
        .matches(/[a-z]/)
        .withMessage("Password must contain at least one lowercase letter")
        .matches(/[0-9]/)
        .withMessage("Password must contain at least one number")
        .matches(/[\W_]/)
        .withMessage("Password must contain at least one special character"),

  check("contactnumber")
    .notEmpty()
    .withMessage("Contact number is required")
    .isMobilePhone()
    .withMessage("Invalid contact number"),

  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),

  check("address.country")
  .notEmpty()
  .withMessage("Country is required"),

  check("address.state")
  .notEmpty()
  .withMessage("State is required"),

  check("address.city")
  .notEmpty()
  .withMessage("City is required"),

  check("proffesion")
  .notEmpty()
  .withMessage("Profession is required"),

  check("languages_speak")
    .isArray()
    .withMessage("Languages speak should be an array")
    .notEmpty()
    .withMessage("Languages speak is required"),

  check("softwares_known")
    .isArray()
    .withMessage("Softwares known should be an array")
    .notEmpty()
    .withMessage("Softwares known is required")
    .custom((value) => {
      const allowedValues = ["CATIA", "UGNX", "CREAO", "AUTOCAD", "OTHER"];
      return value.every((val) => allowedValues.includes(val));
    })
    .withMessage("Invalid software known"),

  check("work_experience")
    .notEmpty()
    .withMessage("Work experience is required"),

  check("role")
    .optional()
    .isIn(["student", "tutor", "admin", "guest"])
    .withMessage("Invalid role"),
];
