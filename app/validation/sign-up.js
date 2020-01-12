const Joi = require('@hapi/joi')

const joi = (req, res, next) => {
  let { nome, email, password, telefones } = req.body

  const schema = Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    telefones: Joi.array().required(),
  })

  const value = schema.validate({
    nome,
    email,
    password,
    telefones,
  })

  if (value.hasOwnProperty('error'))
    return res
      .status(401)
      .send({ message: value.error.details[0].message, status: 401 })
  next()
}

module.exports = joi
