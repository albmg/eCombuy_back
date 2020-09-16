const MunicipalityModel = require('../models/municipalities.model')

function getMunicipalities (req, res) {
  MunicipalityModel
    .find()
    .populate('islandCode')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

module.exports = {
  getMunicipalities
}
