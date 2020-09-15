const router = require('express').Router()

const {
  getLocations
} = require('../controllers/locations.controller')

router
  .get('/', getLocations)

module.exports = router
