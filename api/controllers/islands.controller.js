const IslandModel = require('../models/islands.model')

function getIslands (req, res) {
  IslandModel
    .find()
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

module.exports = {
  getIslands
}
