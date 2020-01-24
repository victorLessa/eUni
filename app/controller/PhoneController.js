const { Phone } = require('../Models/index')

class PhoneController {
  async index(req, res, next) {
    try {
      const { user_id } = req.params

      let phone = await Phone.findByPk(user_id)
      
      return res.send(phone)
    } catch (err) {
      next(err)
    }
  }
  async update(req, res, next) {
    try {
      const { user_id } = req.params

      const { body } = req

      const phone = await Phone.update(body, { where: { user_id } })

      return res.send(phone)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = PhoneController