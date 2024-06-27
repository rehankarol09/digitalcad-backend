import mongoose, { Schema } from "mongoose";

const addressSchema = new Schema({
    country: {type: String, required: true},
    state: {type: String, required: true},
    city: {type: String, required: true}
})

const users_schema = new Schema({
    firstname:{type: String, required: true},
    lastname: {type: String, required: true},
    password: {type: String, required: true},
    contactnumber:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    address:{type: addressSchema, required: true},
    proffesion:{type: String, required: true},
    languages_speak:{type: [String], required: true},
    softwares_known:{type: [String], enum: ["CATIA", "UGNX", "CREAO", "AUTOCAD", "OTHER"], required: true},
    work_experience:{type: String, required: true},
    role:{type: String, enum: ["student","tutor","admin","guest"], default: "guest"},
},
{
    timestamps:true
})

const user_model = mongoose.model("user",users_schema);

export default user_model