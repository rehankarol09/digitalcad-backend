import jwt from "jsonwebtoken";
import { JWTSECRET } from "../config.js";

export const generatetoken = (id, role) => {
  return jwt.sign(
    {
      id,
      role,
    },
    JWTSECRET,
    {
      expiresIn: "1d",
    }
  );
};
