const jwt = require('jsonwebtoken')

const response = res => {
  return res.status(401).send({ message: 'Não autorizado', status: 401 })
}

const authenticate = (req, res, next) => {
  if (
    req.path === '/api/signUp' ||
    req.path === '/api/signIn' ||
    req.path === '/api'
  )
    return next()

  const authHeader = req.headers.authentication

  if (!authHeader) return response(res)

  const parts = authHeader.split(' ')
  if (!parts.length === 2) return response(res)

  const [scheme, token] = parts

  if (!scheme.match(/^Bearer$/)) return response(res)

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return response(res)
    req.user_id = decoded.id

    return next()
  })
}

module.exports = authenticate
