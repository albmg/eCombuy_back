const UserModel = require('../models/users.model')

function getProfile (req, res) {
  UserModel
    .findById(res.locals.user._id)
    .populate('videos')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

module.exports = {
  getProfile
}
