const express = require('express')

const route = express.Router()

let Event = require('../controller/EventController'),
  EventController = new Event()

route.post('/events/create', (req, res, next) => {
  EventController.store(req, res, next)
})

module.exports = route