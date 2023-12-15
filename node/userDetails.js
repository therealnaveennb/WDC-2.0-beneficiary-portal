const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    
    name: String,
    fatherName: String,
    email:  {type: String, unique: true }, 
    dept: String, address: String,
    phoneNumber: String,
    password: String,
    aadharnumber: String,
    designation: String,
    organization: String,
    type: String,
    state: String,
    role: String, 
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);