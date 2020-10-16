const ProcedureModel = require('../models/procedures.model')

function getProcedures (req, res) {
  ProcedureModel
    .find()
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

module.exports = {
  getProcedures
}
