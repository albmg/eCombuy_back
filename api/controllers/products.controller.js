const ProductModel = require('../models/products.model')
const UserModel = require('../models/users.model')
const mongoose = require('mongoose')
const { findById } = require('../models/products.model')
const { response } = require('express')

//const { response } = require('express')
//const { find } = require('../models/users.model')

function viewAllProducts (req, res) {
  ProductModel
    .find()
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

function getProduct (req, res) {
  ProductModel
    .findById(req.params.productId)
    .populate('owner')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function viewChatMessagees (req, res) {
  ProductModel
    .findById(req.params.productId)
    .populate('messages.userId')
    .then(response => res.json(response.messages))
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
    .catch(err => console.error(err))
}


function addMessageToChat (req, res) {
  const info = {
    userId: res.locals.user._id,
    text: req.body.text
  }
  console.log(info)
  ProductModel
    .findById(req.params.productId)
    .then(response => {
      response.messages.push(info)
      response.save()
        .then(message => { res.json(message)})
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
}

function updateProduct (req, res) {
  ProductModel
    .update({ $and: [{ _id: req.params.productId }, { owner: res.locals.user._id }] }, req.body, { new: true })
    .then(product => res.json(product))
    .catch(err => console.error(err))
}

function deleteProduct (req, res) {
  ProductModel
    .remove({ $and: [{ _id: req.params.productId }, { owner: res.locals.user._id }] })
    .then(response => res.json(response))
    .catch(err => console.error(err))
}


function deleteMessageChat (req, res) {
  ProductModel
    .findByIdAndUpdate(req.params.productId, {
      $pull: {
        messages: { $and: [{ _id: req.params.messageId }, { userId: res.locals.user._id }]}
      }
    }, {new: true})
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

module.exports = {
  viewAllProducts,
  getLastProducts,
  searchProduct,
  getProduct,
  viewChatMessagees,
  addProduct,
  addMessageToChat,
  updateProduct,
  deleteProduct,
  deleteMessageChat
}
