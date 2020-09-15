const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
  island: {
    type: String,
    required: [true, "Island is required"]
  },
  municipalities: {
    type: Array,
    required: [true, "Municipality is required"]
  }
})

const locationModel = mongoose.model('locations', locationSchema)
module.exports = locationModel
