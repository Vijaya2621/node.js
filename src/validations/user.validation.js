const Joi = require('joi');

const createUserSchema = Joi.object({
  userName: Joi.string().required().trim(),
  email: Joi.string().email().required().trim(),
  phone: Joi.string().required().trim(),
  password: Joi.string().required().min(6),
});
module.exports = {createUserSchema};   