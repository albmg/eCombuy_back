const ProductModel = require('../models/products.model')

const mongoose = require('mongoose')

function viewAllProducts (req, res) {
  ProductModel
    .find()
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function addProduct (req, res) {
  ProductModel
    .create(req.body)
    .then(product => {res.json(product)})
    .catch(err = res.json(err))
}


module.exports = {
  viewAllProducts,  
  addProduct    
}