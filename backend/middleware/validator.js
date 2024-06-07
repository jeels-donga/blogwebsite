const joi = require("joi");

const registerSchema = async (req, res, next) => {
  const schema = joi.object({
    name: joi.string().min(3).required().label("name"),
    email: joi
      .string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    password: joi.string().min(6).max(20).required().label("password"),
    isAdmin: joi.any().optional().label("isAdmin"),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.json({ message: error.message, isSuccess: false });
  } else {
    next();
  }
};

const loginSchema = async (req, res, next) => {
  const schema = joi.object({
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    password: joi.string().min(3).required().label("password"),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.json({ message: error.message, isSuccess: false });
  } else {
    next();
  }
};

const updateSchema = async (req, res, next) => {
  const schema = joi.object({
    name: joi.string().min(3).optional().label("name"),
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.json({ message: error.message, isSuccess: false });
  } else {
    next();
  }
};

const blogSchema = async (req, res, next) => {
  const schema = joi.object({
    title: joi.string().required().label("title"),
    content: joi.string().required().label("content"),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.json({ message: error.message, isSuccess: false });
  } else {
    next();
  }
};

module.exports = {
  registerSchema,
  updateSchema,
  loginSchema,
  blogSchema,
};
