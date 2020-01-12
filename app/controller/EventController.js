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

  async edit(req, res, next) {
    try {

      const { id, ...body } = req.body

      const { user_id } = req
      const event = await Event.update(body, { where: { id, user_id } })

      if (!event[0]) return res.status(401).send({ message: "Usuário não tem permissão para atualizar esse evento!" })
      return res.send({ message: "Evento atualizado com sucesso!" })

    } catch (err) {
      next(err)
    }
  }
}

module.exports = EventController