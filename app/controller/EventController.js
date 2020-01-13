const { Event } = require('../Models/index')

class EventController {
  async index(req, res, next) {
    try {
      const { user_id } = req

      const events = await Event.find({where: { user_id }})

      return res.send(events)
    } catch (err) {
      next(err)
    }
  }
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

  async delete(req, res, next) {
    try {

      const { user_id, params: { id } } = req

      const event = await Event.destroy({ where: { id, user_id } })

      if (event) return res.send({ message: "Evento apagado com sucesso!" })
      return res.send({ message: "Evento não encontrado em seu registro!" })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = EventController