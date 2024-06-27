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

console.log(user)

    const _user = new user_model(user)
    await _user.save()

    return res.status(200).json({user});

  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "something went wrong" });
  }
};
