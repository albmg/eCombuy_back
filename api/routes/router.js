const router = require('express').Router()

const authRouter = require('./auth.router')
const productsRouter = require('./products.router')
const usersRouter = require('./users.router')
const locationsRouter = require('./locations.router')
const islandsRouter = require('./islands.router')
const municipalitiesRouter = require('./municipalities.router')



router
  .use('/auth', authRouter)
  .use('/products', productsRouter)
  .use('/users', usersRouter)
  .use('/locations', locationsRouter)
  .use('/islands', islandsRouter)
  .use('/municipalities', municipalitiesRouter)



module.exports = router
