"use strict";
const User = use('App/models/User')
const Hash = use('Hash')

class LoginController {
  async singIn({ auth, request, response }) {
    try {
      let { email, password } = request.body
      let { token } = await auth.attempt(email, password, { email, password })

      return response.send({ token })
    } catch (err) {
      if (err.message == "E_PASSWORD_MISMATCH: Cannot verify user password")
        return response.status(404).send({ message: "Usuario não encontrado" })
      response.status(500).send({ message: err.message, stack: err.stack })
    }
  }
}

module.exports = LoginController;
