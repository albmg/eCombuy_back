const router = require('express').Router()
const { authUser } = require('../utils')

const {
  getProfile,
  addPhotoProfile
} = require('../controllers/users.controller')

router
  .get('/me', authUser, getProfile)
  .put('/me/', authUser, addPhotoProfile)


  module.exports = router
