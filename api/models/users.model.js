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
    required: [true, 'Password is required']
  }
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel
