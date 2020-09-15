const LocationModel = require('../models/locations.model')

function getLocations (req, res) {
  LocationModel
    .find()
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

module.exports = {
  getLocations
}
