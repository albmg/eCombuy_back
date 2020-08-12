const router = require('express').Router()
const { authUser } = require('../utils')

const {
  getProfile,
  addPhotoProfile,
  addFavouriteProduct
} = require('../controllers/users.controller')

router
  .get('/me', authUser, getProfile)
  .put('/me', authUser, addPhotoProfile)
  .post('/me/products', authUser, addFavouriteProduct)


  module.exports = router
