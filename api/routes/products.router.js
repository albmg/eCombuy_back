const router = require('express').Router()
const { authUser } = require('../utils')

const {
  addProduct
}  = require('../controllers/products.controller')

router  

  .post('/me', authUser, addProduct)


module.exports = router