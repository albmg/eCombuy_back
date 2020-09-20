const ProductModel = require('../models/products.model')
const UserModel = require('../models/users.model')

const mongoose = require('mongoose')
const { findById } = require('../models/products.model')
const { response } = require('express')

function viewAllProducts (req, res) {
  ProductModel
    .find()
    //.populate('owner')
    .populate('islands.name')
    .populate('municipalities.name')
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
  const q = req.params.term
  ProductModel
    .find({location: {$regex: new RegExp(q)}})
    .populate('owner')
    .then(products => res.json(products))
    .catch(err => console.error(err))
}


function listProductByIsland (req, res) {
  ProductModel
    .find({ productIsland: req.params.islandId })
    .populate('owner')
    .populate('productIsland')
    .populate('location')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}


function listProductByMunicipality (req, res) {
  console.log(req.params.municipalityId)
  ProductModel
    .find({ location: req.params.municipalityId })
    .populate('owner')
    .populate('productIsland')
    .populate('location')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function getProduct (req, res) {
  ProductModel
    .findById(req.params.productId)
    .populate('owner')
    .populate('productIsland')
    .populate('location')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function viewChatMessagees (req, res) {
  ProductModel
    .findById(req.params.productId)
    .populate('messages.userId')
    .populate('messages.toUserId')
    .then(response => {
      console.log(response)
      res.json(response.messages.filter(item =>
        [item.userId === res.locals.userId ||
          item.toUserId === res.locals.userId]))
    })
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
    toUserId: req.body.toUserId,
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

function editChatMessage (req, res) {
  ProductModel
    .findById(req.params.productId)
    .then(product => {
      product.messages.forEach(message => {
        if (message._id.toString() === req.params.messageId && message.userId.toString() === res.locals.user._id.toString()) {
          message.text = req.body.text
        }
      })
      product.save()
        .then(response => res.json(response))
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
}

function deleteProduct (req, res) {
  ProductModel
    .remove({ $and: [{ _id: req.params.productId }, { owner: res.locals.user._id }] })
    .then(response => res.json(response))
    .catch(err => console.error(err))
}


function deleteChatMessage (req, res) {
  ProductModel
    .findByIdAndUpdate(req.params.productId, {
      $pull: {
        messages: { $and: [{ _id: req.params.messageId },
          { userId: res.locals.user._id }]}
      }
    }, {new: true})
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

module.exports = {
  viewAllProducts,
  getLastProducts,
  searchProduct,
  listProductByIsland,
  listProductByMunicipality,
  getProduct,
  viewChatMessagees,
  addProduct,
  addMessageToChat,
  updateProduct,
  editChatMessage,
  deleteProduct,
  deleteChatMessage
}
