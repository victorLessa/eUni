const { Event } = require('../Models/index')

class EventController {
  async store(req, res, next) {
    try {
      req.body.user_id = req.user_id
      const event = await Event.create(req.body)

      return res.send(event)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = EventController