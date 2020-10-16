const router = require('express').Router()

const {
  getProcedures
} = require('../controllers/procedures.controller')

router
  .get('/', getProcedures)

module.exports = router
