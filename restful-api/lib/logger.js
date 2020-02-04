function logger( req, res, next) {
  console.log(`Incoming ${ req.method } to ${req.url}`) //Logger
  next()
}

module.exports = logger