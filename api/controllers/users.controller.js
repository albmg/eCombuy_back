const UserModel = require('../models/users.model')

const mongoose = require('mongoose')
const { response } = require('express')


function getProfile (req, res) {
  UserModel
    .findById(res.locals.user._id)
    .populate('productsCreated')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function addPhotoProfile(req, res) {
  UserModel
    .findByIdAndUpdate(res.locals.user._id, req.body, { new: true })
    .then(response => {
      res.json(response)
      console.log(response)
     })
    .catch(err => res.json(err))
}

function addFavouriteProduct(req, res) {
  UserModel
    .findById(res.locals.user._id)
    .then(user => {
      if (user.favouriteProducts.includes(req.body.productId)){
        user.favouriteProducts.remove(req.body.productId)
      } else {
        user.favouriteProducts.push(req.body.productId)
      }
      user
        .save()
        .then(response => {
          res.json(response)
        })
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
}

module.exports = {
  getProfile,
  addPhotoProfile,
  addFavouriteProduct
}
