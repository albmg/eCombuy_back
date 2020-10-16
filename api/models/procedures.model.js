const mongoose = require('mongoose')

const procedureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Procedure is required"]
  }
})

const procedureModel = mongoose.model('procedures', procedureSchema)
module.exports = procedureModel
