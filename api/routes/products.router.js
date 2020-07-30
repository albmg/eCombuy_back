const router = require('express').Router()
const { authUser } = require('../utils')

const {
  viewAllProducts,
  addProduct,
  deleteProduct
}  = require('../controllers/products.controller')

router  
  .get('/', viewAllProducts)
  .post('/me', authUser, addProduct)
  .delete('/me/:productId', authUser, deleteProduct)


module.exports = router