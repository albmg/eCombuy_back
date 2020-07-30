const router = require('express').Router()
const { authUser } = require('../utils')

const {
  viewAllProducts,
  getProduct,
  addProduct,
  deleteProduct
}  = require('../controllers/products.controller')

router  
  .get('/', viewAllProducts)
  .get('/:productId', getProduct)
  .post('/me', authUser, addProduct)
  .delete('/me/:productId', authUser, deleteProduct)


module.exports = router