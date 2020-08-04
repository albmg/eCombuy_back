const router = require('express').Router()
const { authUser } = require('../utils')

const {
  getProfile
} = require('../controllers/users.controller')

router
  .get('/me', authUser, getProfile)


  module.exports = router
