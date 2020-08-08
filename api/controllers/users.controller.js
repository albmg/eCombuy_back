const UserModel = require('../models/users.model')

const mongoose = require('mongoose')


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

module.exports = {
  getProfile,
  addPhotoProfile
}
