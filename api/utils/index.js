const jwt = require('jsonwebtoken')
const UserModel = require('../models/users.model')

// Authenticate Middleware
function authUser (req, res, next) {
  console.log(req.headers)
  if (!req.headers.authorization) {
    res.status(403).json({ error: 'No Token found' })
  } else {
    try {
      const decodedToken = jwt.verify(req.headers.authorization, process.env.SECRET)

      UserModel
        .findOne({ email: decodedToken.email })
        .then(user => {
          res.locals.user = user
          next()
        })
    } catch (error) {
      res.status(403).json({ error: `Token not valid + ${error}` })
    }
  }
}

module.exports = {
  authUser
}
