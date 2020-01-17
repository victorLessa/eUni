const Joi = require('@hapi/joi')

const joi = (req, res, next) => {
  let { name, email, password, phones } = req.body

  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    phones: Joi.array().required(),
  })

  const valid = schema.validate({
    name,
    email,
    password,
    phones,
  })

  if (valid.hasOwnProperty('error'))
    return res
      .status(401)
      .send({ message: valid.error.details, status: 401 })
  next()
}

module.exports = joi
