const ProductModel = require('../models/products.model')
const UserModel = require('../models/users.model')

const mongoose = require('mongoose')
const { response } = require('express')

function viewAllProducts (req, res) {
  ProductModel
    .find()
    .populate('owner')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function getProduct (req, res) {
  ProductModel
    .findById(req.params.productId)
    .populate('owner')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}


function getLastProducts (req, res) {
  ProductModel
    .find()
    .sort({createdDate: 'desc'})
    .populate('owner')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function searchProduct (req, res) {
  ProductModel
    .find(req.query)
    .then(products => res.json(products))
    .catch(err => console.error(err))
}

function addProduct (req, res) {
  const info = req.body
  info.owner = res.locals.user._id
  //console.log(info)
  ProductModel
    .create(info)
    .then(product => res.json(product))
    .catch(err = console.error(err))
}

function deleteProduct (req, res) {
  console.log(req.params)
  ProductModel
    .findByIdAndDelete(req.params.productId)
    .then(response => res.json(response))
    .catch(err => console.error(err))
}


module.exports = {
  viewAllProducts,
  getLastProducts,
  searchProduct,
  getProduct,  
  addProduct,
  deleteProduct    
}