const Joi = require('@hapi/joi')

const joi = (req, res, next) => {
  let { email, senha } = req.body

  const schema = Joi.object({
    email: Joi.string().required(),
    senha: Joi.string().required(),
  })

  const value = schema.validate({
    email,
    senha,
  })

  if (value.hasOwnProperty('error'))
    return res
      .status(401)
      .send({ message: value.error.details[0].message, status: 401 })
  next()
}

module.exports = joi
