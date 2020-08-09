const router = require('express').Router()
const { authUser } = require('../utils')

const {
  viewAllProducts,
  getLastProducts,
  searchProduct,
  getProduct,
  viewChatMessagees,
  addProduct,
  addMessageToChat,
  updateProduct,
  deleteProduct
}  = require('../controllers/products.controller')

router
  .get('/', viewAllProducts)
  .get('/last', getLastProducts)
  .get('/search', searchProduct)
  .get('/:productId', getProduct)
  .get('/me/:productId/messages', authUser, viewChatMessagees)
  .post('/me', authUser, addProduct)
  .post('/me/:productId/messages', authUser, addMessageToChat)
  .put('/me/:productId', authUser, updateProduct)
  .delete('/me/:productId', authUser, deleteProduct)

module.exports = router
