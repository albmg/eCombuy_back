const router = require('express').Router()

const {
  getMunicipalities
} = require('../controllers/municipalities.controller')

router
  .get('/', getMunicipalities)

module.exports = router
