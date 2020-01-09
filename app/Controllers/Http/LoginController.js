"use strict";
const User = use('App/models/User')
const Hash = use('Hash')

class CustomError extends Error {
  constructor(error) {
    super(error)
    this.message = error.message
    this.error = error.error
  }
}

class LoginController {
  async singIn({ auth, request, response }) {
    try {
      let { email, password } = request.body

      let user = await User.findBy('email', email)

      try {
        let { token } = await auth.attempt(email, password, { user })
        return response.send({ token })
      } catch (err) {
        throw new CustomError({ error: "NOT_FOUND", message: "Usuário não encontrado" })
      }

    } catch (err) {
      if (err.error == 'NOT_FOUND')
        return response.status(404).send({ message: err.message })
      return response.status(500).send({ message: err.message, stack: err.stack })
    }
  }
}

module.exports = LoginController;
