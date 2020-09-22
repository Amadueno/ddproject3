const { model, Schema } = require('mongoose')

const Character = new Schema({
  id: Schema.ObjectId,
  name: String,
  class: String, // class & level
  background: String,
  race: String,
  faction: String,
  userId: String,
  alignment: String,
  exp: String,
  dci: String,
  users: [{ type: Schema.ObjectId, ref: 'User' }]
})

module.exports = model('Character', Character)
