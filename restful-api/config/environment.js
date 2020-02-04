const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/greek-mythology-api'
// 'mongodb://localhost/greek-mythology-api',location of our db on local machine
const secret = 'open sesame'


module.exports = { port, dbURI, secret }