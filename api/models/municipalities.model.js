const mongoose = require('mongoose')

const municipalitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Muni is required"]
  },
  isla: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "isla"
  }
})

const municipalityModel = mongoose.model('municipalities', municipalitySchema)
module.exports = municipalityModel
