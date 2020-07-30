const ProductModel = require('../models/products.model')

const mongoose = require('mongoose')

function addProduct (req, res) {
  ProductModel
    .create(req.body)
    .then(product => {res.json(product)})
    .catch(err = res.json(err))
}

module.exports = {
    addProduct
}