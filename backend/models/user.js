const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const new_mongoose = new mongoose.Schema({
  imageURL: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Generating tokens
new_mongoose.methods.generateAuthToken = async function () {
  try {
    const data = await user.findById(this._id).select({ password: 0 });
    const token = jwt.sign({ data }, "sectratekey");
    return token;
  } catch (error) {
    res.send("the error part" + error);
  }
};

//Converting password into Hash
new_mongoose.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 5);
  }
  next();
});

const user = new mongoose.model("user", new_mongoose);
module.exports = user;
