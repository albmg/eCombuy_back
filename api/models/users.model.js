const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, 'username already exists']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    unique: [true, 'Email already exists in our database'],
    // validate: emailValidator
    match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 'email not valid']
  },
  password: {
    type: String,
    select: false,
    required: [true, 'Password is required']
  },
  signUpDate: {
    type: Date,
    default: Date.now()
  },
  photo: {
    type: String
  },
  productsCreated: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product'
  }],
  favouriteProducts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product'
  }]
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel
