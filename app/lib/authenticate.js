const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const generateToken = async user_id => {
  const token = await jwt.sign({ id: user_id }, process.env.SECRET, {
    expiresIn: process.env.EXPIRES_IN,
  })
  return token
}

const hashCompare = async (currentPassword, password) => {
  return await bcrypt.compare(currentPassword, password)
}
const hashPassword = async password => {
  return await bcrypt.hash(password, 10)
}

module.exports = {
  generateToken,
  hashCompare,
  hashPassword,
}
//
