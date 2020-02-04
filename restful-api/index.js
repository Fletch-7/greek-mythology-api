const express = require('express') //*EXPRESS
const mongoose = require('mongoose') //* MONGOOSE
const app = express() //APP
const bodyParser = require('body-parser') //* PARSER
const { port, dbURI } = require('./config/environment')//* ENVIRONMENT
const logger = require('./lib/logger')
const router = require('./config/router')



//Use Mongo to make the connection
mongoose.connect(dbURI, { useNewUrlParser: true , useUnifiedTopology: true }, (err) => {
  if (err) return console.log(err)
  console.log('Mongo is connected')
})

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

app.use(logger)

app.use('/api', router)

app.use('/*', (req, res)=> res.sendFile(`${__dirname}/dist/index.html`))





app.listen(port, () => console.log(`Express is listening on port ${port}`))