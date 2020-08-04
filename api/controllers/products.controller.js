const ProductModel = require('../models/products.model')
const UserModel = require('../models/users.model')
const mongoose = require('mongoose')

//const { response } = require('express')
//const { find } = require('../models/users.model')

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
    .limit(5)
    .populate('owner')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function searchProduct (req, res) {
  ProductModel
    .find(req.query)
    .populate('owner')
    .then(products => res.json(products))
    .catch(err => console.error(err))
}

function addProduct (req, res) {
  const info = req.body
  info.owner = res.locals.user._id
  ProductModel
    .create(info)
    .then(product => {
      UserModel
        .findById(info.owner)
        .then(response => {
          response.productsCreated.push(product._id)
          response.save()
        })
        .catch(err => console.error(err))
      res.json(product)
    })
    .catch(err = console.error(err))
}

function deleteProduct (req, res) {
  ProductModel
    .remove({ $and: [{ _id: req.params.productId }, { owner: res.locals.user._id }] })
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
