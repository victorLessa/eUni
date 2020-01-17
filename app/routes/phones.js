const express = require('express')
const router = express.Router()
let PhoneController = require('../controller/PhoneController')
PhoneController = new PhoneController()

router.get('/phones/:user_id', (req, res, next) => {
  PhoneController.index(req, res, next)
})

router.patch('/phones/:user_id', (req, res, next) => {
  PhoneController.update(req, res, next)
})

module.exports = router