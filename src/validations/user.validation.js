const Joi = require('joi');

const createUserSchema = Joi.object({
  userName: Joi.string().required().trim(),
  email: Joi.string().email().required().trim(),
  phone: Joi.string().required().trim(),
  password: Joi.string().required().min(6),
});

function validateCreateUserMiddleware(req, res, next) {
    const {email, password, phone, userName} = req.body;
  const { error } = createUserSchema.validate();

  if (error) {
    const errors = [];
    for (let i = 0; i < error.details.length; i++) {
      errors.push(error.details[i].message);
    }

    return res.status(400).json({ errors });
  }

  next();
}

module.exports = {validateCreateUserMiddleware};