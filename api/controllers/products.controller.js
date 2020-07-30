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


function getLatestProducts (req, res) {
  ProductModel
    .find()
    .sort({createdDate: 'desc'})
    .populate('owner')
    .then(response => res.json(response))
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
    .remove({ $and: [{ _id: req.params.productId }, { owner: res.locals.user._id }] })
    .then(response => res.json(response))
    .catch(err => console.error(err))
}


module.exports = {
  viewAllProducts,
  getLatestProducts,
  getProduct,  
  addProduct,
  deleteProduct    
}