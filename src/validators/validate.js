import { validationResult } from "express-validator";

export const isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);

  if (errors.array().length > 0)
    return res.status(400).json({
      errors: errors.array()[0].msg,
    });
  next();
};
