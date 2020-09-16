const mongoose = require('mongoose')

const municipalitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Municipality is required"]
  },
  islandCode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "islands"
  }
})

const municipalityModel = mongoose.model('municipalities', municipalitySchema)
module.exports = municipalityModel
