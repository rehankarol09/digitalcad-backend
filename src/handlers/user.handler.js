import { generatetoken } from "../helper/index.js";
import user_model from "../models/user.js";
import bcrypt from "bcrypt";


export const createUser = async(req, res) => {
  try {
    const { firstname, lastname, role, contactnumber, email, address, proffesion, work_experience, languages_speak, softwares_known, enrolled_courses, password} = req.body;

    const secure_password = await bcrypt.hash(password, 10)
    const user = {
      firstname,
      lastname,
      secure_password,
      role,
      contactnumber,
      email,
      address,
      proffesion,
      work_experience,
      languages_speak,
      softwares_known,
      enrolled_courses
    }

    const _user = new user_model(user)
    const response = await _user.save()
    console.log(response)

    const token = generatetoken(response._id, role)

    return res.status(200).json({user, token});

  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "something went wrong" });
  }
};
