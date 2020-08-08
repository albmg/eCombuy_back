const mongoose = require('mongoose')

const conversationsSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  message: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now()
  },

})

const conversationModel = mongoose.model('user', conversationsSchema)
module.exports = conversationModel
