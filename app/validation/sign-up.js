const Joi = require('@hapi/joi')

const joi = (req, res, next) => {
  let { nome, email, senha, telefones } = req.body

  const schema = Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().required(),
    senha: Joi.string().required(),
    telefones: Joi.array().required(),
  })

  const value = schema.validate({
    nome,
    email,
    senha,
    telefones,
  })

  if (value.hasOwnProperty('error'))
    return res
      .status(401)
      .send({ message: value.error.details[0].message, status: 401 })
  next()
}

module.exports = joi
