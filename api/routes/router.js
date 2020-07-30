const router = require('express').Router()

const authRouter = require('./auth.router')
const productsRouter = require('./products.router')


router
  .use('/auth', authRouter)
  .use('/products', productsRouter)


module.exports = router
