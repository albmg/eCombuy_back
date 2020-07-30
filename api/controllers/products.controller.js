const ProductModel = require('../models/products.model')

const mongoose = require('mongoose')

function viewAllProducts (req, res) {
  ProductModel
    .find()
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function addProduct (req, res) {
  const info = req.body
  info.owner = res.locals.user._id
  //console.log(info)
  ProductModel
    .create(info)
    .then(product => {res.json(product)})
    .catch(err = console.error(err))
}


module.exports = {
  viewAllProducts,  
  addProduct    
}