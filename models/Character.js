const { model, Schema } = require('mongoose')

const Character = new Schema({
  name: String,
  class: String, // class & level
  background: String,
  race: String,
  faction: String,
  alignment: String,
  exp: String,
  dci: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = model('Character', Character)
