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
  deleteProduct,
  deleteMessageChat
}  = require('../controllers/products.controller')

router
  .get('/', viewAllProducts)
  .get('/last', getLastProducts)
  .get('/search', searchProduct)
  .get('/:productId', getProduct)
  .get('/:productId/messages', viewChatMessagees)
  .post('/me', authUser, addProduct)
  .post('/me/:productId/messages', authUser, addMessageToChat)
  .put('/me/:productId', authUser, updateProduct)
  .delete('/me/:productId', authUser, deleteProduct)
  .delete('/me/:productId/messages/:messageId', authUser, deleteMessageChat)


module.exports = router
