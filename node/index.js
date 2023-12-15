const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();
const jwt = require("jsonwebtoken");
app.use(cors());
app.use(express.json());

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
const mongoUrl = "mongodb://0.0.0.0:27017/agri";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

// Define the User schema and model using Mongoose
const userSchema = new mongoose.Schema({
  name:String,
  fatherName:String,
  email:String,
  dept:String,
  address:String,
  phoneNumber:String,
  password:String,
  aadharnumber:String,
  designation:String,
  organization:String,
  type:String,
  state:String,
  role:String, 
}, { collection: 'users' });

const User = mongoose.model('agri', userSchema);

app.post("/register", async (req, res) => {
  const { name,
    fatherName,
    email,
    dept,
    address,
    phoneNumber,
    password,
    aadharnumber,
    designation,
    organization,
    type,
    state,
    role,  } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  const encryptedAAdhar =await bcrypt.hash(aadharnumber,10)
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ status: "error", message: "User already exists" });
    }

    const newUser = new User({
      name,
        fatherName,
        email,
        dept,
        address,
        phoneNumber,
        password:encryptedPassword,
        aadharnumber:encryptedAAdhar,
        designation,
        organization,
        type,
        state,
        role, 
    });

    await newUser.save();
    res.json({ status: "ok", message: "Registration Successful" });
  } catch (error) {
    res.json({ status: "error", message: "Something went wrong" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "15m",
    });

    if (res.status(201)) {
      console.log("successs")
      return res.json({ status: "ok", data: token });

    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
});

app.post("/dash", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return "token expired";
      }
      return res;
    });
    console.log(user);
    if (user == "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) { }
});




app.listen(5000, () => {
  console.log("Server Started");
});
