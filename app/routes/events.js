const express = require('express')

const route = express.Router()

let Event = require('../controller/EventController'),
  EventController = new Event()

route.get('/events', (req, res, next) => {
  EventController.index(req, res, next)
})

route.post('/events/create', (req, res, next) => {
  EventController.store(req, res, next)
})

route.patch('/event/update', (req, res, next) => {
  EventController.edit(req, res, next)
})

route.delete('/event/delete/:id', (req, res, next) => {
  EventController.delete(req, res, next)
})
module.exports = route