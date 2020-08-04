const router = require('express').Router()
const { authUser } = require('../utils')

const {
  signup,
  login,
  whoami
} = require('../controllers/auth.controller')

router
  .get('/me', authUser, whoami)
  .post('/signup', signup)
  .post('/login', login)

module.exports = router
