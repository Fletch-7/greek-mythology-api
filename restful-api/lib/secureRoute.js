const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const User = require('../models/user')

function secureRoute(req, res, next) {
  if (!req.headers.authorization) return res.status(401).json({ message: 'Unauthorized' })
  const token = req.headers.authorization.replace('Bearer ', '')
  new Promise((resolve, reject) => {
    console.log(token)
    jwt.verify(token, secret, (err, payload) => {
      console.log(err)
      if (err) return reject(err)
      resolve(payload)
    })
  })
    .then(payload => {
      console.log(payload.sub)
      return User.findById(payload.sub)
    })
    .then(user => {
      if (!user) return res.status(401).json({ message: 'Unauthorized' })
      req.currentUser = user
      next()
    })
    .catch(() => res.status(401).json({ message: 'Unauthorized' }))
}
module.exports = secureRoute

