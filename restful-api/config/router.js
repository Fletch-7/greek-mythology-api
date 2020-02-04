const router = require('express').Router() 
const gods = require('../controllers/gods') 
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')


router.route('/gods') // our example would match this route /dinosaurs
  .get(gods.index) // and the http verb GET would match this, so the request is passed to dinosaurs contrller, index function
  .post(secureRoute, gods.create)

router.route('/gods/:id')
  .get(gods.show)
  .put(secureRoute, gods.update)
  .delete(secureRoute, gods.destroy)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)


module.exports = router