const mongoose = require('mongoose')

const godSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  olympian: { type: Boolean, required: true },
  gender: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true, maxlength: 500 }
})

module.exports = mongoose.model('God', godSchema)