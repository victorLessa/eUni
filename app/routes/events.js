const express = require('express')

const route = express.Router()

let Event = require('../controller/EventController'),
  EventController = new Event()

route.post('/events/create', (req, res, next) => {
  EventController.store(req, res, next)
})

route.patch('/event/update', (req, res, next) => {
  EventController.edit(req, res, next)
})
module.exports = route