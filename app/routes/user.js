const express = require('express')
const router = express.Router()
let UserController = require('../controller/UserController')
UserController = new UserController()
const { sign_up_validate, sign_in_validate } = require('../validation/index')

router.get('/', (req, res) => {
  return res.send({ message: 'Bem Vindo', status: 200 })
})

router.post('/signUp', sign_up_validate, (req, res, next) =>
  UserController.store(req, res, next)
)
router.post('/signIn', sign_in_validate, (req, res, next) =>
  UserController.authenticate(req, res, next)
)

router.get('/user/:user_id', (req, res, next) => {
  UserController.getUser(req, res, next)
})

module.exports = router
