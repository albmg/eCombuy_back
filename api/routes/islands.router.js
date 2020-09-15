const router = require('express').Router()

const {
  getIslands
} = require('../controllers/islands.controller')

router
  .get('/', getIslands)

module.exports = router
