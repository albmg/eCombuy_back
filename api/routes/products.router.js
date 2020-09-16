const router = require('express').Router()
const { authUser } = require('../utils')

const {
  viewAllProducts,
  getLastProducts,
  searchProduct,
  listProductByIsland,
  listProductByMunicipality,
  getProduct,
  viewChatMessagees,
  addProduct,
  addMessageToChat,
  updateProduct,
  editChatMessage,
  deleteProduct,
  deleteChatMessage
}  = require('../controllers/products.controller')

router
  .get('/', viewAllProducts)
  .get('/last', getLastProducts)
  .get('/island/:island', searchProduct)
  .get('/islands/:islandId', listProductByIsland)
  .get('/municipalities/:municipalityId', listProductByMunicipality)
  .get('/:productId', getProduct)
  .get('/:productId/messages', viewChatMessagees)
  .post('/me', authUser, addProduct)
  .post('/me/:productId/messages', authUser, addMessageToChat)
  .put('/me/:productId', authUser, updateProduct)
  .put('/me/:productId/messages/:messageId', authUser, editChatMessage)
  .delete('/me/:productId', authUser, deleteProduct)
  .delete('/me/:productId/messages/:messageId', authUser, deleteChatMessage)


module.exports = router
