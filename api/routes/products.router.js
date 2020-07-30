const router = require('express').Router()
const { authUser } = require('../utils')

const {
  viewAllProducts,
  addProduct
}  = require('../controllers/products.controller')

router  
  .get('/', viewAllProducts)
  .post('/me', authUser, addProduct)


module.exports = router