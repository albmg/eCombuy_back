const router = require('express').Router()

const authRouter = require('./auth.router')
const productsRouter = require('./products.router')
const usersRouter = require('./users.router')
const islandsRouter = require('./islands.router')
const municipalitiesRouter = require('./municipalities.router')
const proceduresRouter = require('./procedures.router')




router
  .use('/auth', authRouter)
  .use('/products', productsRouter)
  .use('/users', usersRouter)
  .use('/islands', islandsRouter)
  .use('/municipalities', municipalitiesRouter)
  .use('/procedures', proceduresRouter)




module.exports = router
