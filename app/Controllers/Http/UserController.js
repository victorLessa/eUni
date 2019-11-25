"use strict";
const User = use("App/Models/User");
const Database = use("Database");
class UserController {
  async store({ auth, request, response }) {
    const { username, email, password, age, university, course } = request.body;

    let user = await Database.table("users")
      .where("email", "=", email)
      .orWhere("username", "=", username);

    if (user.length < 1) {
      user = await User.create({
        username,
        email,
        password,
        age,
        university,
        course
      });
    } else {
      return response
        .status(401)
        .send({ message: "Email e/ou usuario já existe", status: 401 });
    }
    user.token = await auth.generate(user);
    return user;
  }
}

module.exports = UserController;
