const mongoose = require('mongoose')

const islandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Island is required"]
  },
  codigo: {
    type: String,
  }
})

const islandModel = mongoose.model('islands', islandSchema)
module.exports = islandModel
