const router = require('express').Router
const { authuser } = require('../utils')

const {
  viewChat,
  addMessageToChat
}

router
  .get('/products/me/:productId/chat', viewChat)
  .post('/products/me/:productId/chat', addMessageToChat)
