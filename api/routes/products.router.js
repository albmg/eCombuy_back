const router = require('express').Router()
const { authUser } = require('../utils')

const {
  viewAllProducts,
  getLastProducts,
  searchProduct,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
}  = require('../controllers/products.controller')

router
  .get('/', viewAllProducts)
  .get('/last', getLastProducts)
  .get('/search', searchProduct)
  .get('/:productId', getProduct)
  .post('/me', authUser, addProduct)
  .put('/me/:productId', authUser, updateProduct)
  .delete('/me/:productId', authUser, deleteProduct)


module.exports = router
