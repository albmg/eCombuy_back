const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  image: {
    type: String,
    required: [true, "Image is required"]
  },
  description: {
    type: String,
    maxlength: [325, "max character length allowed is 325"],
    minlength: [1, "min character length allowed is 1"],
    required: [true, "Description is required"]
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  createdDate: {
    type: Date,
    default: new Date()
  },
  price: {
    type: Number,
    default: 0
  },
  location: {
    type: String,
    required: [true, "Location is required"]
  }
})

const productModel = mongoose.model('product', productSchema)
module.exports = productModel
