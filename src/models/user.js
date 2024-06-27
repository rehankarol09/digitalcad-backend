import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";


const opts = { toJSON: { virtuals: true } };

const addressSchema = new Schema({
    country: {type: String, required: true},
    state: {type: String, required: true},
    city: {type: String, required: true}
})

const users_schema = new Schema({
    firstname:{type: String, required: true},
    lastname: {type: String, required: true},
    secure_password: {type: String, required: true},
    contactnumber:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    
    address:{type: addressSchema},
    proffesion:{type: String},
    languages_speak:{type: [String]},
    softwares_known:{type: [String], enum: ["CATIA", "UGNX", "CREAO", "AUTOCAD", "OTHER"]},
    work_experience:{type: String},
    role:{type: String, enum: ["student","tutor","admin","guest"], default: "guest"},
},

{
    ...opts,
    timestamps:true
})

// users_schema.virtual('hash_password')
// .set(function(password){
// this.password = bcrypt.hashSync(password, 10);
// });

// users_schema.methods = {
//     authenticate: async function (password) {
//       return await bcrypt.compare(password, this.password);
//     },
//   };

const user_model = mongoose.model("user",users_schema);

export default user_model