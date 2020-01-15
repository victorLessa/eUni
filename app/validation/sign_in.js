const Joi = require('@hapi/joi')

const joi = (req, res, next) => {
  let { email, password } = req.body

  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  })

  const valid = schema.validate({
    email,
    password,
  })

  if (valid.hasOwnProperty('error'))
    return res
      .status(401)
      .send({ message: valid.error.details, status: 401 })
  next()
}

module.exports = joi
