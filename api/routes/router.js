const router = require('express').Router()

const authRouter = require('./auth.router')
const productsRouter = require('./products.router')
const usersRouter = require('./users.router')


router
  .use('/auth', authRouter)
  .use('/products', productsRouter)
  .use('/users', usersRouter)

module.exports = router
