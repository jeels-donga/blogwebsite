const jwt = require("jsonwebtoken");
const register = require("../models/user");

const verifytoken = async function checkUserOrAdmin(req, res, next) {
  try {
    const token = req.header("Authorization").split(" ")[1];
    const verifyUser = await jwt.verify(token, "sectratekey");
    const user = await register.findOne({ _id: verifyUser.data._id });
    req.user = user;
    next();
  } catch (error) {
    res.send({ message: "Invalid Token", isSuccess: false });
  }
};

module.exports = verifytoken;
